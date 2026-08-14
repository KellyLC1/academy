<template>
  <section class="certifications" id="certifications">
    <div class="container">

      <h2>Qualité et Certification</h2>

      <p class="section-sub">
        Academy est certifiée et reconnue par les organismes les plus prestigieux.
        Nous garantissons une formation de qualité supérieure.
      </p>

      <div class="certs-grid">

        <div
          v-for="(cert, index) in certifications"
          :key="cert.title"
          class="cert-item"
          :class="{ active: index === currentCert }"
        >
          <div class="cert-icon">✓</div>

          <h3>{{ cert.title }}</h3>

          <p>{{ cert.description }}</p>
        </div>

      </div>

      <!-- Contrôles uniquement visibles sur mobile -->
      <div class="cert-controls">

        <button
          type="button"
          class="cert-arrow"
          @click="previousCert"
          aria-label="Certification précédente"
        >
          ←
        </button>

        <div class="cert-dots">
          <span
            v-for="(_, index) in certifications"
            :key="index"
            :class="{ active: index === currentCert }"
          ></span>
        </div>

        <button
          type="button"
          class="cert-arrow"
          @click="nextCert"
          aria-label="Certification suivante"
        >
          →
        </button>

      </div>

    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const currentCert = ref(0)

const certifications = [
  {
    title: 'Certification Professionnelle Reconnue',
    description:
      'Nos formations sont certifiées et reconnues par l’État et les organismes professionnels.'
  },
  {
    title: 'Organisme de Formation Continue',
    description:
      'Enregistré au répertoire national des organismes de formation pour les adultes.'
  },
  {
    title: 'Certification Qualiopi',
    description:
      'Nous avons obtenu la certification Qualiopi, gage de qualité auprès de tous les financeurs.'
  },
  {
    title: 'Agréation Ministère Agriculture',
    description:
      'Agréée par le Ministère de l’Agriculture pour les formations HACCP et hygiène alimentaire.'
  },
  {
    title: 'Partenaire OPCO',
    description:
      'Partenaire officiel de tous les OPCO majeurs pour le financement des formations.'
  },
  {
    title: 'Formation Sur-Mesure',
    description:
      'Accompagnement personnalisé et formations adaptées à vos besoins spécifiques.'
  }
]

function nextCert() {
  currentCert.value =
    (currentCert.value + 1) % certifications.length
}

function previousCert() {
  currentCert.value =
    (currentCert.value - 1 + certifications.length) %
    certifications.length
}
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

/* =========================
   CARTES
========================= */

.certs-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 32px;
  margin-bottom: 40px;
}

.cert-item {
  min-width: 0;

  background: white;
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);

  padding: 32px 28px;

  text-align: center;

  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;
}

.cert-item:hover {
  transform: translateY(-8px);

  box-shadow:
    0 12px 32px rgba(175, 164, 206, 0.15);
}

.cert-icon {
  width: 60px;
  height: 60px;

  background: linear-gradient(
    135deg,
    var(--primary),
    var(--accent)
  );

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

  overflow-wrap: break-word;
}

/* =========================
   CONTROLES
   Cachés sur desktop
========================= */

.cert-controls {
  display: none;
}

/* =========================
   OFFERS
========================= */

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
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 24px;
}

.offer-card {
  min-width: 0;

  background: white;
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);

  padding: 28px 24px;

  position: relative;

  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;
}

.offer-card:hover {
  transform: translateY(-4px);

  box-shadow:
    0 8px 24px rgba(175, 164, 206, 0.1);

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

/* =========================
   TABLET
========================= */

@media (max-width: 900px) {

  .certs-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 20px;
  }

  .offers-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

/* =========================
   MOBILE
========================= */

@media (max-width: 768px) {

  .certifications {
    overflow: hidden;
    padding: 64px 4%;
  }

  .certifications h2 {
    font-size: 28px;
  }

  .section-sub {
    font-size: 14px;
    line-height: 1.6;
    margin-bottom: 28px;
    max-width: 100%;
  }

  /* Une seule carte visible */

  .certs-grid {
    display: block;
    width: 100%;
    margin-bottom: 20px;
  }

  .cert-item {
    display: none;

    width: 100%;
    max-width: 100%;

    padding: 28px 20px;
  }

  .cert-item.active {
    display: block;
  }

  .cert-item h3 {
    font-size: 17px;
  }

  .cert-item p {
    font-size: 14px;
  }

  /* =========================
     CONTROLES SLIDER
  ========================= */

  .cert-controls {
    display: flex;

    align-items: center;
    justify-content: center;

    gap: 20px;

    width: 100%;
  }

  .cert-arrow {
    width: 42px;
    height: 42px;

    padding: 0;

    display: flex;
    align-items: center;
    justify-content: center;

    border: none;
    border-radius: 50%;

    background: var(--primary);
    color: white;

    font-size: 20px;
    cursor: pointer;

    transition:
      background 0.2s ease,
      transform 0.2s ease;
  }

  .cert-arrow:hover {
    background: var(--primary-hover);
    transform: scale(1.05);
  }

  .cert-dots {
    display: flex;
    align-items: center;
    gap: 7px;
  }

  .cert-dots span {
    width: 7px;
    height: 7px;

    border-radius: 50%;

    background: rgba(175, 164, 206, 0.35);

    transition:
      background 0.2s ease,
      transform 0.2s ease;
  }

  .cert-dots span.active {
    background: var(--primary);
    transform: scale(1.3);
  }

  /* =========================
     OFFRES MOBILE
  ========================= */

  .offers-section {
    margin-top: 50px;
    padding-top: 50px;
  }

  .offers-grid {
    grid-template-columns: 1fr;
    gap: 16px;
  }

  .offer-card {
    width: 100%;
    padding: 24px 20px;
  }
}
</style>