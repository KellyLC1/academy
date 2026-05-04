<template>
  <section class="hero">
    <div class="hero-inner container">

      <div class="hero-content">
        <div class="badge">✦ Centre de formation agréé</div>

        <h1>
          VAL<em>ACADEMY</em><br />
          INTERNATIONAL<br />
          Formations<br />
          <!-- <span>HACCP</span> -->
        </h1>

        <p class="subtitle">
          Formations professionnelles, finançables par votre OPCO ou en investissement direct,
          dispensées par des experts certifiés partout en France.
        </p>

        <div class="highlights">
          <div class="chip"><span class="ok">✓</span> Certification Qualiopi</div>
          <div class="chip"><span class="ok">✓</span> Ministère de l'Agriculture</div>
          <div class="chip"><span class="ok">✓</span> Présence nationale</div>
          <div class="chip"><span class="ok">✓</span> Centres proches de vous</div>
        </div>

        <div class="actions">
          <a href="#formations" class="btn-primary">Découvrez nos formations</a>
          <a href="#contact" class="btn-secondary">Être rappelé</a>
        </div>
      </div>

      <div class="hero-visual">
        <div class="visual-card main-card">
          <div class="card-title">Centre spécialisé HACCP</div>
          <div class="card-desc">
            Mise en conformité selon les règles d'hygiène alimentaire pour les
            professionnels de la restauration et de l'agroalimentaire.
          </div>
        </div>
        <div class="stats-row">
          <div class="visual-card stat-card">
            <div class="stat-num">150+</div>
            <div class="stat-label">Entreprises accompagnées</div>
          </div>
          <div class="visual-card stat-card">
            <div class="stat-num">95%</div>
            <div class="stat-label">Taux de satisfaction</div>
          </div>
          <div class="visual-card stat-card">
            <div class="stat-num">100%</div>
            <div class="stat-label">Financement adapté</div>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<style scoped>
.hero {
  padding-top: 140px;
  padding-bottom: 80px;
  padding-left: 5%;
  padding-right: 5%;
  background: linear-gradient(90deg, var(--primary) 0%, var(--accent) 100%);
  position: relative;
  overflow: hidden;
  width: 100%;
  max-width: 100%;
}

.hero::before {
  content: '';
  position: absolute;
  top: -80px;
  right: -120px;
  width: 500px;
  height: 500px;
  background: radial-gradient(circle, rgba(245, 223, 77, 0.25) 0%, transparent 70%);
  border-radius: 50%;
  pointer-events: none;
}

.hero::after {
  content: '';
  position: absolute;
  bottom: -60px;
  left: -80px;
  width: 350px;
  height: 350px;
  background: radial-gradient(circle, rgba(245, 223, 77, 0.15) 0%, transparent 70%);
  border-radius: 50%;
  pointer-events: none;
}

.hero-inner {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;
  width: 100%;
  max-width: 100%;
}

/* Badge */
.badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: var(--accent);
  color: #2A2A2A;
  padding: 8px 16px;
  border-radius: 999px;
  font-size: 13px;
  font-weight: 600;
  margin-bottom: 24px;
}

/* Titre */
h1 {
  font-size: 52px;
  font-weight: 600;
  line-height: 1.1;
  color: white;
  margin-bottom: 20px;
}

h1 em {
  color: var(--accent);
  font-style: normal;
}

/* Sous-titre */
.subtitle {
  font-size: 17px;
  color: rgba(255, 255, 255, 0.9);
  line-height: 1.7;
  margin-bottom: 32px;
  max-width: 480px;
}

/* Chips */
.highlights {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 36px;
}

.chip {
  background: white;
  border: 1px solid var(--border);
  color: var(--text-mid);
  padding: 7px 14px;
  border-radius: 999px;
  font-size: 13px;
  display: flex;
  align-items: center;
  gap: 6px;
}

.ok {
  color: var(--green);
  font-weight: 600;
  font-size: 12px;
}

/* Boutons */
.actions {
  display: flex;
  gap: 14px;
  flex-wrap: wrap;
}

.btn-primary {
  background: var(--accent);
  color: #2A2A2A;
  padding: 14px 28px;
  border-radius: 999px;
  font-size: 15px;
  font-weight: 600;
  text-decoration: none;
  transition: 0.2s;
}

.btn-primary:hover {
  background: var(--accent-hover);
  transform: scale(1.03);
}

.btn-secondary {
  background: white;
  color: var(--text);
  padding: 14px 28px;
  border-radius: 999px;
  font-size: 15px;
  font-weight: 400;
  text-decoration: none;
  border: 2px solid var(--accent);
  transition: 0.2s;
}

.btn-secondary:hover {
  border-color: var(--accent-hover);
  background: rgba(245, 223, 77, 0.1);
  transform: scale(1.02);
}

/* Visuel droite */
.hero-visual {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.visual-card {
  background: white;
  border-radius: var(--radius-lg);
  padding: 22px 26px;
  border: 1px solid var(--border);
  box-shadow: 0 4px 24px rgba(245, 166, 35, 0.08);
}

.card-title {
  font-size: 18px;
  font-weight: 500;
  color: var(--text);
  margin-bottom: 5px;
}

.card-desc {
  font-size: 13px;
  color: var(--text-soft);
  line-height: 1.5;
}

.stats-row {
  display: flex;
  gap: 16px;
}

.stat-card {
  flex: 1;
  text-align: center;
}

.stat-num {
  font-family: 'Playfair Display', serif;
  font-size: 32px;
  color: var(--text-mid);
  font-weight: 600;
}

.stat-label {
  font-size: 12px;
  color: var(--text-soft);
  margin-top: 2px;
}

/* Responsive */
@media (max-width: 1024px) {
  .hero-inner {
    grid-template-columns: 1fr;
    gap: 40px;
  }

  h1 {
    font-size: 44px;
  }

  .subtitle {
    font-size: 16px;
  }

  .visual-card {
    padding: 18px 22px;
  }

  .card-title {
    font-size: 16px;
  }

  .card-desc {
    font-size: 12px;
  }

  .stat-num {
    font-size: 28px;
  }

  .stat-label {
    font-size: 11px;
  }
}

@media (max-width: 768px) {
  .hero {
    padding-top: 100px;
    padding-bottom: 60px;
  }

  h1 {
    font-size: 36px;
  }

  .subtitle {
    font-size: 15px;
    margin-bottom: 24px;
  }

  .highlights {
    gap: 8px;
    margin-bottom: 28px;
  }

  .chip {
    padding: 6px 12px;
    font-size: 12px;
  }

  .actions {
    gap: 12px;
  }

  .btn-primary,
  .btn-secondary {
    padding: 12px 24px;
    font-size: 14px;
  }

  .stats-row {
    gap: 12px;
  }

  .visual-card {
    padding: 16px 18px;
  }

  .stat-num {
    font-size: 24px;
  }
}

@media (max-width: 600px) {
  .hero {
    padding-top: 80px;
    padding-bottom: 50px;
    padding-left: 4%;
    padding-right: 4%;
  }

  .hero::before {
    width: 200px;
    height: 200px;
    top: 0;
    right: -100px;
    background: radial-gradient(circle, rgba(245, 223, 77, 0.15) 0%, transparent 70%);
  }

  .hero::after {
    width: 150px;
    height: 150px;
    bottom: -50px;
    left: -100px;
    background: radial-gradient(circle, rgba(245, 223, 77, 0.08) 0%, transparent 70%);
  }

  h1 {
    font-size: 32px;
    margin-bottom: 16px;
  }

  .badge {
    font-size: 12px;
    padding: 6px 12px;
    margin-bottom: 16px;
  }

  .subtitle {
    font-size: 14px;
    margin-bottom: 20px;
  }

  .highlights {
    gap: 8px;
    margin-bottom: 24px;
    flex-direction: column;
  }

  .chip {
    padding: 5px 10px;
    font-size: 11px;
    width: 100%;
    justify-content: center;
  }

  .actions {
    flex-direction: column;
    gap: 10px;
  }

  .btn-primary,
  .btn-secondary {
    padding: 12px 20px;
    font-size: 13px;
    width: 100%;
    text-align: center;
  }

  .main-card {
    order: -1;
  }

  .visual-card {
    padding: 14px 16px;
  }

  .card-title {
    font-size: 15px;
  }

  .card-desc {
    font-size: 11px;
  }

  .stat-num {
    font-size: 22px;
  }

  .stat-label {
    font-size: 10px;
  }
}
</style>