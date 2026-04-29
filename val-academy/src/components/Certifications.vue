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

</style>
