const mongoose = require('mongoose');

const formationSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  duration: String,
  price: String,
  image: String, // URL de l'image de fond
  accessibility: String, // Accessibilité
  prerequisites: String, // Prérequis
  objectives: [String], // Objectifs (tableau)
  coursContent: [String], // Contenu du cours (tableau)
  pedagogicalMethods: [String], // Méthodes pédagogiques (tableau)
  evaluation: String, // Modalités d'évaluation
  requiredMaterials: String, // Matériel requis
  trainer: String, // Formateur/Formatrice
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Formation', formationSchema);
