const express = require('express');
const router = express.Router();
const Testimonial = require('../models/Testimonial');
const auth = require('../middleware/auth');
const { body, validationResult } = require('express-validator');
const crypto = require('crypto');
const nodemailer = require('nodemailer');

// GET tous les avis validés (public)
router.get('/', async (req, res) => {
  try {
    const testimonials = await Testimonial.find({ validated: true }).sort({ createdAt: -1 });
    res.json(testimonials);
  } catch (err) {
    res.status(500).json({ message: 'Erreur serveur' });
  }
});

// POST ajouter un avis via token d'invitation
router.post('/add',
  body('name').isString().trim().notEmpty(),
  body('text').isString().trim().notEmpty().isLength({ max: 2000 }),
  body('token').isString().notEmpty(),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ message: 'Erreur de validation', errors: errors.array() });
    }
    const { name, text, token } = req.body;
    try {
      const testimonial = await Testimonial.findOne({ inviteToken: token, validated: false });
      if (!testimonial) return res.status(400).json({ message: 'Lien invalide ou déjà utilisé' });
      testimonial.name = name;
      testimonial.text = text;
      testimonial.validated = true;
      testimonial.inviteToken = undefined;
      await testimonial.save();
      res.json({ message: 'Avis ajouté, merci !' });
    } catch (err) {
      res.status(500).json({ message: 'Erreur serveur' });
    }
  }
);

// Fonction pour envoyer un email d'invitation
envoyerInvitation = async (email, token) => {
  const lien = `http://localhost:5173/avis?token=${token}`;
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: process.env.SMTP_SECURE === 'true',
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });
  await transporter.sendMail({
    from: process.env.SMTP_FROM || 'no-reply@valacademy.com',
    to: email,
    subject: "Votre invitation à donner un avis sur Val'Academy",
    html: `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <style>
            body { font-family: 'Poppins', Arial, sans-serif; margin: 0; padding: 0; background: #f5f5f5; }
            .container { max-width: 600px; margin: 20px auto; background: white; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.1); overflow: hidden; }
            .header { background: linear-gradient(135deg, #AFA4CE 0%, #F5DF4D 100%); padding: 40px 20px; text-align: center; color: white; }
            .header h1 { margin: 0; font-size: 28px; font-weight: 700; }
            .content { padding: 40px 30px; color: #2A2A2A; }
            .content p { margin: 16px 0; line-height: 1.6; font-size: 16px; }
            .cta-button { display: inline-block; background: #F5DF4D; color: #2A2A2A; padding: 14px 32px; border-radius: 8px; text-decoration: none; font-weight: 700; margin: 24px 0; border: none; cursor: pointer; text-align: center; font-size: 16px; transition: background 0.3s; }
            .cta-button:hover { background: #F0D630; }
            .cta-link { text-align: center; margin: 24px 0; }
            .small-text { font-size: 13px; color: #666; margin-top: 20px; padding-top: 20px; border-top: 1px solid #eee; }
            .footer { background: #f9f9f9; padding: 20px 30px; text-align: center; color: #666; font-size: 13px; }
            .badge { display: inline-block; background: #E8F0F8; color: #8CACD3; padding: 8px 16px; border-radius: 20px; font-size: 12px; font-weight: 600; margin-bottom: 20px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>✨ Val'Academy</h1>
            </div>
            <div class="content">
              <span class="badge">Invitation à donner votre avis</span>
              <p>Bonjour,</p>
              <p>Nous serions ravi d'avoir votre avis sur votre expérience avec <strong>Val'Academy</strong>. Votre témoignage nous aide à continuer à améliorer nos formations et nos services.</p>
              <p>👇 Cliquez sur le bouton ci-dessous pour accéder au formulaire sécurisé :</p>
              <div class="cta-link">
                <a href="${lien}" class="cta-button">Donner mon avis</a>
              </div>
              <p style="text-align: center; margin-top: 20px;">
                <small>Ou copiez ce lien dans votre navigateur :<br>
                <code style="background: #f5f5f5; padding: 8px 12px; border-radius: 4px; word-break: break-all;">${lien}</code>
                </small>
              </p>
              <div class="small-text">
                <p>⏰ Ce lien expire après utilisation pour des raisons de sécurité.</p>
                <p>❓ Des questions ? Contactez-nous à support@valacademy.com</p>
              </div>
            </div>
            <div class="footer">
              <p>© 2026 Val'Academy. Tous droits réservés.</p>
            </div>
          </div>
        </body>
      </html>
    `
  });
}; 

// POST générer une invitation (admin)
router.post('/invite', auth, body('email').isEmail(), async (req, res) => {
  const { email } = req.body;
  try {
    // Supprimer les invitations non validées existantes pour cet email
    await Testimonial.deleteMany({ email, validated: false });
    const token = crypto.randomBytes(24).toString('hex');
    await Testimonial.create({ email, inviteToken: token });
    // Envoi automatique de l'email d'invitation
    await envoyerInvitation(email, token);
    res.json({ message: 'Invitation générée et email envoyé', token });
  } catch (err) {
    console.error('Erreur invite testimonial:', err);
    res.status(500).json({ message: 'Erreur serveur', error: err.message });
  }
});

// GET récupérer un avis en attente via token (pour préremplir le formulaire)
router.get('/pending/:token', async (req, res) => {
  try {
    const testimonial = await Testimonial.findOne({ inviteToken: req.params.token, validated: false });
    if (!testimonial) return res.status(404).json({ message: 'Lien invalide ou expiré' });
    res.json({ email: testimonial.email });
  } catch (err) {
    res.status(500).json({ message: 'Erreur serveur' });
  }
});

// DELETE un avis (admin)
router.delete('/:id', auth, async (req, res) => {
  try {
    await Testimonial.findByIdAndDelete(req.params.id);
    res.json({ message: 'Avis supprimé' });
  } catch (err) {
    res.status(500).json({ message: 'Erreur suppression avis' });
  }
});

module.exports = router;
