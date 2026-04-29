<template>
  <section class="certifications" id="certifications">
    <div class="container">
      <h2>Qualité et Certification</h2>
      <p class="section-sub">Val'Academy est certifiée et reconnue par les organismes les plus prestigieux. Nous garantissons une formation de qualité supérieure.</p>

      <div class="certs-grid">
        <div class="cert-item">
          <div class="cert-icon">✓</div>
          <h3>Certification Professionnelle Reconnue</h3>
          <p>Nos formations sont certifiées et reconnues par l'État et les organismes professionnels.</p>
        </div>

        <div class="cert-item">
          <div class="cert-icon">✓</div>
          <h3>Organisme de Formation Continue</h3>
          <p>Enregistré au répertoire national des organismes de formation pour les adultes.</p>
        </div>

        <div class="cert-item">
          <div class="cert-icon">✓</div>
          <h3>Certification Qualiopi</h3>
          <p>Nous avons obtenu la certification Qualiopi, gage de qualité auprès de tous les financeurs.</p>
        </div>

        <div class="cert-item">
          <div class="cert-icon">✓</div>
          <h3>Agréation Ministère Agriculture</h3>
          <p>Agréée par le Ministère de l'Agriculture pour les formations HACCP et hygiène alimentaire.</p>
        </div>

        <div class="cert-item">
          <div class="cert-icon">✓</div>
          <h3>Partenaire OPCO</h3>
          <p>Partenaire officiel de tous les OPCO majeurs pour le financement des formations.</p>
        </div>

        <div class="cert-item">
          <div class="cert-icon">✓</div>
          <h3>Formation Sur-Mesure</h3>
          <p>Accompagnement personnalisé et formations adaptées à vos besoins spécifiques.</p>
        </div>
      </div>

      <div class="offers-section">
        <h3>Nos Offres de Formation</h3>
        <div class="offers-grid">
          <div class="offer-card">
            <h4>Inter-Entreprise</h4>
            <p>Formations collectives regroupant des participants de différentes entreprises.</p>
            <span class="badge">Populaire</span>
          </div>

          <div class="offer-card">
            <h4>Intra-Entreprise</h4>
            <p>Formations personnalisées dispensées au sein de votre entreprise.</p>
            <span class="badge">Sur-Mesure</span>
          </div>

          <div class="offer-card">
            <h4>Formation Sur-Mesure</h4>
            <p>Programmes élaborés spécifiquement selon vos besoins et contraintes.</p>
            <span class="badge">Flexible</span>
          </div>

          <div class="offer-card">
            <h4>Formation Diplômante</h4>
            <p>Accès aux diplômes reconnus et certifications professionnelles.</p>
            <span class="badge">Certifié</span>
          </div>

          <div class="offer-card">
            <h4>Digital Learning</h4>
            <p>Formations e-learning pour apprendre à votre rythme, en ligne.</p>
            <span class="badge">Flexible</span>
          </div>

          <div class="offer-card">
            <h4>VAE (Validation des Acquis)</h4>
            <p>Valorisez votre expérience par un diplôme officiel.</p>
            <span class="badge">Reconnaissance</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
</script>

<style scoped>
.certifications {
  background: var(--cream);
  padding: 80px 5%;
}

.certifications h2 {
  font-size: 36px;
  color: var(--text);
  margin-bottom: 12px;
}

.section-sub {
  font-size: 16px;
  color: var(--text-soft);
  max-width: 600px;
  line-height: 1.7;
  margin-bottom: 48px;
}

.certs-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
  margin-bottom: 80px;
}

.cert-item {
  background: white;
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  padding: 32px 28px;
  text-align: center;
  transition: transform 0.2s, box-shadow 0.2s;
}

.cert-item:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 32px rgba(175, 164, 206, 0.15);
}

.cert-icon {
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, var(--primary), var(--accent));
  color: white;
  font-size: 32px;
  font-weight: 700;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 20px;
}

.cert-item h3 {
  font-size: 18px;
  color: var(--text);
  margin-bottom: 12px;
}

.cert-item p {
  font-size: 14px;
  color: var(--text-mid);
  line-height: 1.7;
}

.offers-section {
  margin-top: 80px;
  padding-top: 80px;
  border-top: 2px solid var(--border);
}

.offers-section h3 {
  font-size: 28px;
  color: var(--text);
  margin-bottom: 40px;
}

.offers-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

.offer-card {
  background: white;
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  padding: 28px 24px;
  position: relative;
  transition: transform 0.2s, box-shadow 0.2s;
}

.offer-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(175, 164, 206, 0.1);
  border-color: var(--accent);
}

.offer-card h4 {
  font-size: 16px;
  color: var(--primary);
  margin-bottom: 12px;
  font-weight: 700;
}

.offer-card p {
  font-size: 14px;
  color: var(--text-mid);
  line-height: 1.6;
  margin-bottom: 16px;
}

.badge {
  display: inline-block;
  background: var(--accent);
  color: #2A2A2A;
  font-size: 11px;
  font-weight: 700;
  padding: 4px 12px;
  border-radius: 999px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

/* Responsive */
@media (max-width: 1024px) {
  .certs-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
  }

  .offers-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .certifications {
    padding: 60px 5%;
  }

  .certifications h2 {
    font-size: 28px;
  }

  .certs-grid {
    grid-template-columns: 1fr;
    margin-bottom: 60px;
  }

  .cert-item {
    padding: 24px 20px;
  }

  .cert-item h3 {
    font-size: 16px;
  }

  .cert-icon {
    width: 50px;
    height: 50px;
    font-size: 28px;
    margin-bottom: 16px;
  }

  .offers-section {
    margin-top: 60px;
    padding-top: 60px;
  }

  .offers-section h3 {
    font-size: 24px;
    margin-bottom: 32px;
  }

  .offers-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  .offer-card {
    padding: 24px 20px;
  }
}

@media (max-width: 480px) {
  .certifications {
    padding: 50px 4%;
  }

  .certifications h2 {
    font-size: 24px;
  }

  .section-sub {
    font-size: 14px;
    margin-bottom: 32px;
  }

  .cert-item {
    padding: 20px 16px;
  }

  .cert-item h3 {
    font-size: 15px;
  }

  .cert-item p {
    font-size: 13px;
  }

  .cert-icon {
    width: 45px;
    height: 45px;
    font-size: 24px;
  }

  .offers-section {
    margin-top: 50px;
    padding-top: 50px;
  }

  .offers-section h3 {
    font-size: 20px;
    margin-bottom: 24px;
  }

  .offer-card {
    padding: 20px 16px;
  }

  .offer-card h4 {
    font-size: 15px;
  }

  .offer-card p {
    font-size: 13px;
  }

  .badge {
    font-size: 10px;
    padding: 3px 10px;
  }
}
</style>
