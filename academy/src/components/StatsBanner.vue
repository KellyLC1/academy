<template>
  <section class="stats-banner">
    <div class="container">
      <div class="stats-grid">
        <div class="stat-item">
          <div class="stat-value">126</div>
          <div class="stat-label">Professionnels formés<br>chaque année</div>
        </div>
        <div class="stat-item">
          <div class="stat-value">96%</div>
          <div class="stat-label">de taux de maintien,<br>une garantie de qualité</div>
        </div>
        
        <!-- Circle central highlight -->
        <div class="stat-item circle-highlight">
          <div class="circle-content">
            <div class="circle-desc">Taux de réussite aux formations, parmi les meilleurs</div>
            <div class="stat-value-circle">4,8<span class="rating">/5</span></div>
            <div class="circle-label" style="background: var(--accent); color: #2A2A2A; padding: 4px 12px; border-radius: 4px; display: inline-block; font-size: 13px; font-weight: 700;">28 567 Avis Clients</div>
          </div>
        </div>
        
        <div class="stat-item">
          <div class="stat-value">9,5<span class="rating">/10</span></div>
          <div class="stat-label">Évaluation pédagogique</div>
        </div>
        <div class="stat-item">
          <div class="stat-value">38</div>
          <div class="stat-label">entreprises et clients<br>de confiance</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// Stats banner component
</script>

<style scoped>
.stats-banner {
  background: linear-gradient(135deg, var(--accent) 0%, #F0D630 100%);
  padding: 60px 5%;
  position: relative;
  overflow: hidden;
}

.stats-banner::before {
  content: '';
  position: absolute;
  top: -50%;
  right: -10%;
  width: 600px;
  height: 600px;
  background: radial-gradient(circle, rgba(255, 255, 255, 0.15) 0%, transparent 70%);
  border-radius: 50%;
  pointer-events: none;
}

.stats-banner::after {
  content: '';
  position: absolute;
  bottom: -30%;
  left: -5%;
  width: 400px;
  height: 400px;
  background: radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, transparent 70%);
  border-radius: 50%;
  pointer-events: none;
}

.container {
  position: relative;
  z-index: 1;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 64px;
  max-width: 1400px;
  margin: 0 auto;
}

.stat-item {
  text-align: center;
  color: #2A2A2A;
  padding: 0;
  border-radius: 0;
  background: none;
  backdrop-filter: none;
  border: none;
  transition: all 0.3s ease;
}

.stat-item:hover {
  background: none;
  transform: none;
  box-shadow: none;
}

.stat-value {
  font-family: 'Playfair Display', serif;
  font-size: 56px;
  font-weight: 700;
  color: #2A2A2A;
  margin-bottom: 16px;
  display: flex;
  align-items: baseline;
  justify-content: center;
  gap: 4px;
}

.rating {
  font-size: 28px;
  font-weight: 600;
}

.stat-label {
  font-size: 15px;
  font-weight: 700;
  color: #2A2A2A;
  line-height: 1.6;
  margin-bottom: 8px;
  letter-spacing: -0.3px;
}

.stat-desc {
  font-size: 12px;
  color: rgba(42, 42, 42, 0.85);
  font-weight: 500;
  line-height: 1.5;
  font-style: italic;
}

/* Circle Highlight */
.circle-highlight {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 !important;
}

.circle-content {
  width: 240px;
  height: 240px;
  background: white;
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
  padding: 24px;
}

.circle-desc {
  font-size: 13px;
  font-weight: 600;
  color: #2A2A2A;
  line-height: 1.4;
  text-align: center;
}

.stat-value-circle {
  font-family: 'Playfair Display', serif;
  font-size: 52px;
  font-weight: 700;
  color: #2A2A2A;
  margin: 0;
  display: flex;
  align-items: baseline;
  justify-content: center;
  gap: 2px;
}

.stat-value-circle .rating {
  font-size: 24px;
}

.circle-label {
  margin-top: 4px;
}

/* Responsive */
@media (max-width: 1024px) {
  .stats-grid {
    grid-template-columns: repeat(3, 1fr);
    gap: 48px;
  }

  .stat-value {
    font-size: 48px;
  }

  .circle-content {
    width: 200px;
    height: 200px;
  }

  .stat-value-circle {
    font-size: 44px;
  }

  .circle-desc {
    font-size: 12px;
  }
}

@media (max-width: 768px) {
  .stats-banner {
    padding: 60px 5%;
  }

  .stats-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 40px;
  }

  .stat-value {
    font-size: 40px;
    margin-bottom: 12px;
  }

  .stat-label {
    font-size: 13px;
  }

  .stat-desc {
    font-size: 11px;
  }

  .circle-content {
    width: 180px;
    height: 180px;
    gap: 8px;
    padding: 16px;
  }

  .stat-value-circle {
    font-size: 36px;
  }

  .circle-desc {
    font-size: 11px;
  }

  .circle-label {
    font-size: 11px;
    padding: 3px 10px !important;
  }
}

@media (max-width: 480px) {
  .stats-banner {
    padding: 50px 5%;
  }

  .stats-grid {
    grid-template-columns: 1fr;
    gap: 32px;
  }

  .stat-value {
    font-size: 36px;
  }

  .stat-label {
    font-size: 12px;
  }

  .circle-content {
    width: 160px;
    height: 160px;
    gap: 8px;
    padding: 14px;
  }

  .stat-value-circle {
    font-size: 32px;
  }

  .circle-desc {
    font-size: 10px;
  }

  .circle-label {
    font-size: 10px;
    padding: 2px 8px !important;
  }
}
</style>
