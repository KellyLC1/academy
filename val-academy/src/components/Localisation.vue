<template>
  <section class="localisation" id="localisation">
    <div class="container">
      <h2>Notre Localisation</h2>
      <p class="section-sub">Retrouvez-nous dans nos locaux à Romainville, en région Île-de-France. Nous sommes accessibles pour vous accueillir et répondre à vos questions.</p>

      <div class="localisation-content">
        <div class="map-container">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2618.8739842639563!2d2.4364!3d48.8747!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e612c87f6b6b6b%3A0x1234567890!2s2%20Avenue%20L%C3%A9nine%2C%2093230%20Romainville!5e0!3m2!1sfr!2sfr!4v1234567890"
            width="100%"
            height="500"
            style="border:0;"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <div class="info-container">
          <div class="info-card">
            <h3>Adresse</h3>
            <p>2 Avenue Lénine<br />93230 Romainville<br />Île-de-France, France</p>
          </div>

          <div class="info-card">
            <h3>Téléphone</h3>
            <p>
              <a href="tel:+33162370262">01 62 37 02 62</a><br />
              <a href="tel:+33658684043">06 58 68 40 43</a>
            </p>
          </div>

          <div class="info-card">
            <h3>Horaires</h3>
            <p>
              Lundi - Vendredi<br />
              08h30 - 17h30<br />
              <br />
              Samedi - Dimanche<br />
              Fermé
            </p>
          </div>

          <div class="info-card">
            <h3>Transports</h3>
            <p>
              <strong>RER :</strong> Ligne E - Romainville<br />
              <strong>Métro :</strong> Ligne 2 - Belleville<br />
              <strong>Bus :</strong> 102, 115, 128
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
</script>

<style scoped>
.localisation {
  background: white;
  padding: 80px 5%;
}

.localisation h2 {
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

.localisation-content {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 40px;
  align-items: start;
}

.map-container {
  border-radius: var(--radius-lg);
  overflow: hidden;
  box-shadow: 0 8px 32px rgba(175, 164, 206, 0.15);
  border: 1px solid var(--border);
}

.map-container iframe {
  display: block;
}

.info-container {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.info-card {
  background: var(--cream);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  padding: 24px;
  transition: transform 0.2s, box-shadow 0.2s;
}

.info-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(175, 164, 206, 0.1);
}

.info-card h3 {
  font-size: 16px;
  color: var(--primary);
  margin-bottom: 12px;
  font-weight: 700;
}

.info-card p {
  font-size: 14px;
  color: var(--text-mid);
  line-height: 1.8;
}

.info-card a {
  color: var(--accent);
  text-decoration: none;
  font-weight: 600;
  transition: color 0.2s;
}

.info-card a:hover {
  color: var(--accent-hover);
}

.info-card strong {
  color: var(--text);
  font-weight: 600;
}

/* Responsive */
@media (max-width: 1024px) {
  .localisation-content {
    grid-template-columns: 1fr;
    gap: 32px;
  }

  .map-container iframe {
    height: 400px;
  }

  .info-container {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }
}

@media (max-width: 768px) {
  .localisation {
    padding: 60px 5%;
  }

  .localisation h2 {
    font-size: 28px;
  }

  .map-container iframe {
    height: 350px;
  }

  .info-container {
    grid-template-columns: 1fr;
  }

  .info-card {
    padding: 20px;
  }

  .info-card h3 {
    font-size: 15px;
  }

  .info-card p {
    font-size: 13px;
  }
}

@media (max-width: 480px) {
  .localisation {
    padding: 50px 4%;
  }

  .localisation h2 {
    font-size: 24px;
  }

  .section-sub {
    font-size: 14px;
    margin-bottom: 32px;
  }

  .map-container iframe {
    height: 300px;
  }

  .info-card {
    padding: 16px;
  }

  .info-card h3 {
    font-size: 14px;
    margin-bottom: 10px;
  }

  .info-card p {
    font-size: 12px;
    line-height: 1.6;
  }
}
</style>
