<template>
  <section class="formations" id="formations">
    <div class="container">
      <h2>Nos formations les plus demandées</h2>
      <p class="section-sub">
        Découvrez notre large gamme de formations professionnelles subventionnées par les OPCO 
        pour booster votre carrière et celle de vos collaborateurs.
      </p>
      <div class="formations-slider-wrap">
        <button class="arrow left" @click="prevSlide" :disabled="currentIndex === 0">&#8592;</button>
        <div class="formations-cards">
          <div
            v-for="(formation, i) in visibleFormations"
            :key="formation._id"
            class="formation-card"
            :style="{ backgroundImage: `url('${formation.image || '/src/assets/hero.png'}')` }"
            @mouseenter="hovered = formation._id"
            @mouseleave="hovered = null"
            :class="{ expanded: hovered === formation._id || isMobile }"
          >
            <transition name="fade-slide">
              <div class="overlay" :class="{ forced: isMobile }">
                <div class="formation-title">{{ formation.title }}</div>
                <button class="cta" @click="openModal(formation)">En savoir plus</button>
              </div>
            </transition>
          </div>
        </div>
        <button class="arrow right" @click="nextSlide" :disabled="currentIndex + maxVisible >= formations.length">&#8594;</button>
      </div>
      <div v-if="modalFormation" class="modal-bg" @click.self="closeModal">
        <div class="modal-content">
          <button class="modal-close-icon" @click="closeModal">✕</button>
          
          <div class="modal-header">
            <div class="modal-image-col" v-if="modalFormation.image">
              <img :src="modalFormation.image" :alt="modalFormation.title" class="modal-img" />
            </div>
            
            <div class="modal-header-info">
              <h2>{{ modalFormation.title }}</h2>
              
              <div class="modal-key-details">
                <div class="key-detail" v-if="modalFormation.duration">
                  <span class="key-label">Durée</span>
                  <span class="key-value">{{ modalFormation.duration }}</span>
                </div>
                <div class="key-detail" v-if="modalFormation.accessibility">
                  <span class="key-label">Accessibilité</span>
                  <span class="key-value">{{ modalFormation.accessibility }}</span>
                </div>
                <div class="key-detail" v-if="modalFormation.prerequisites">
                  <span class="key-label">Prérequis</span>
                  <span class="key-value">{{ modalFormation.prerequisites }}</span>
                </div>
                <div class="key-detail" v-if="modalFormation.price">
                  <span class="key-label">Tarif</span>
                  <span class="key-value">{{ modalFormation.price }}</span>
                </div>
              </div>
            </div>
          </div>

          <div class="modal-body">
            <div class="modal-section" v-if="modalFormation.objectives && modalFormation.objectives.length">
              <h3>Objectifs</h3>
              <ul class="modal-list">
                <li v-for="(obj, i) in modalFormation.objectives" :key="i">{{ obj }}</li>
              </ul>
            </div>

            <div class="modal-section" v-if="modalFormation.coursContent && modalFormation.coursContent.length">
              <h3>Contenu du cours</h3>
              <ul class="modal-list">
                <li v-for="(content, i) in modalFormation.coursContent" :key="i">{{ content }}</li>
              </ul>
            </div>

            <div class="modal-section" v-if="modalFormation.pedagogicalMethods && modalFormation.pedagogicalMethods.length">
              <h3>Méthodes pédagogiques</h3>
              <div class="modal-tags">
                <span v-for="(method, i) in modalFormation.pedagogicalMethods" :key="i" class="modal-tag">{{ method }}</span>
              </div>
            </div>

            <div class="modal-section" v-if="modalFormation.evaluation">
              <h3>Évaluation</h3>
              <p>{{ modalFormation.evaluation }}</p>
            </div>

            <div class="modal-section" v-if="modalFormation.requiredMaterials">
              <h3>Matériel requis</h3>
              <p>{{ modalFormation.requiredMaterials }}</p>
            </div>

            <div class="modal-section" v-if="modalFormation.trainer">
              <h3>Formateur</h3>
              <p>{{ modalFormation.trainer }}</p>
            </div>

            <button class="modal-cta" @click="goToContact">S'inscrire à la formation</button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import axios from 'axios';

const formations = ref([]);
const hovered = ref(null);
const modalFormation = ref(null);
const maxVisible = ref(5);
const currentIndex = ref(0);
const isMobile = ref(false);

function updateMaxVisible() {
  isMobile.value = window.innerWidth <= 640;

  if (window.innerWidth <= 640) {
    maxVisible.value = 1;
  } else if (window.innerWidth <= 900) {
    maxVisible.value = 2;
  } else {
    maxVisible.value = 5;
  }

  if (currentIndex.value + maxVisible.value > formations.value.length) {
    currentIndex.value = Math.max(0, formations.value.length - maxVisible.value);
  }
}

async function fetchFormations() {
  try {
    const res = await axios.get('https://academy-m9eq.onrender.com/api/formation');
    formations.value = res.data || [];
    updateMaxVisible();
  } catch (err) {
    console.error('Erreur lors du chargement des formations:', err);
    formations.value = [];
  }
}

const visibleFormations = computed(() =>
  formations.value.slice(currentIndex.value, currentIndex.value + maxVisible.value)
);

function nextSlide() {
  if (currentIndex.value + maxVisible.value < formations.value.length) {
    currentIndex.value++;
  }
}

function prevSlide() {
  if (currentIndex.value > 0) {
    currentIndex.value--;
  }
}

function openModal(formation) {
  modalFormation.value = formation;
}

function closeModal() {
  modalFormation.value = null;
}

function goToContact() {
  closeModal();
  const contactSection = document.getElementById('contact');
  if (contactSection) {
    contactSection.scrollIntoView({ behavior: 'smooth' });
  }
}

onMounted(() => {
  fetchFormations();
  updateMaxVisible();
  window.addEventListener('resize', updateMaxVisible);
});
</script>

<style scoped>
.formations {
  background: var(--cream);
  padding: 80px 5%;
}

.formations h2 {
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

.formations-slider-wrap {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
}

.arrow {
  background: var(--primary);
  color: white;
  border: none;
  border-radius: 50%;
  width: 44px;
  height: 44px;
  font-size: 1.7rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background 0.2s;
}

.arrow:hover:not(:disabled) {
  background: var(--primary-hover);
}

.arrow:disabled {
  background: #e0e0e0;
  color: #aaa;
  cursor: default;
}
.formations-cards {
  display: flex;
  gap: 28px;
  justify-content: center;
  flex-wrap: nowrap;
  overflow: hidden;
  min-width: 0;
}
.formation-card {
  width: 200px;
  height: 320px;
  border-radius: 18px;
  background-size: cover;
  background-position: center;
  box-shadow: 0 2px 12px rgba(31,41,55,0.09);
  position: relative;
  overflow: hidden;
  transition: width 0.35s cubic-bezier(.4,2,.6,1), box-shadow 0.2s;
  cursor: pointer;
  display: flex;
  align-items: flex-end;
  justify-content: center;
}
.formation-card.expanded {
  width: 350px;
  box-shadow: 0 8px 32px rgba(31,41,55,0.18);
}
.overlay {
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  background: linear-gradient(180deg,rgba(0,0,0,0.18) 40%,rgba(0,0,0,0.55) 100%);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  padding: 32px 24px 24px 24px;
  opacity: 1;
  transition: opacity 0.2s;
}

.overlay.forced {
  opacity: 1;
  display: flex;
}
.formation-title {
  color: #fff;
  font-size: 1.3rem;
  font-weight: 700;
  margin-bottom: 18px;
  text-shadow: 0 2px 8px rgba(0,0,0,0.18);
}
.cta {
  background: var(--accent);
  color: #2A2A2A;
  border: none;
  border-radius: 8px;
  padding: 12px 22px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s;
}

.cta:hover {
  background: var(--accent-hover);
}
.fade-slide-enter-active, .fade-slide-leave-active {
  transition: opacity 0.3s, transform 0.3s;
}
.fade-slide-enter-from, .fade-slide-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
.modal-bg {
  position: fixed;
  top: 0; left: 0; right: 0; bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 20px;
  animation: fadeIn 0.3s ease-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.modal-content {
  background: white;
  border-radius: 20px;
  width: 90vw;
  max-width: 1200px;
  max-height: 85vh;
  overflow-y: auto;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  position: relative;
  display: flex;
  flex-direction: column;
  animation: slideUp 0.3s ease-out;
}

@keyframes slideUp {
  from {
    transform: translateY(50px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

.modal-close-icon {
  position: absolute;
  top: 20px;
  right: 20px;
  background: transparent;
  border: none;
  font-size: 32px;
  color: var(--text);
  cursor: pointer;
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: all 0.2s;
  z-index: 10;
}

.modal-close-icon:hover {
  background: rgba(175, 164, 206, 0.1);
  color: var(--primary);
  transform: rotate(90deg);
}

.modal-header {
  display: grid;
  grid-template-columns: 180px 1fr;
  gap: 32px;
  padding: 32px 48px;
  border-bottom: 1px solid #E8E6DF;
  align-items: flex-start;
}

.modal-image-col {
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
}

.modal-img {
  width: 100%;
  max-width: 180px;
  height: auto;
  border-radius: 12px;
  object-fit: cover;
  box-shadow: 0 8px 24px rgba(175, 164, 206, 0.15);
}

.modal-header-info {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.modal-header-info h2 {
  font-size: 28px;
  color: var(--text);
  font-weight: 700;
  margin: 0;
}

.modal-key-details {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
}

.key-detail {
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding: 12px;
  background: rgba(245, 223, 77, 0.08);
  border-radius: 8px;
  border-left: 3px solid var(--accent);
}

.key-label {
  font-size: 12px;
  color: var(--text-soft);
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.key-value {
  font-size: 14px;
  color: var(--text);
  font-weight: 600;
}

.modal-body {
  padding: 32px 48px;
  overflow-y: auto;
  max-height: calc(85vh - 300px);
}

.modal-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 48px;
  padding: 48px;
  overflow-y: auto;
  max-height: calc(85vh - 100px);
}



.modal-description {
  margin-bottom: 32px;
}

.modal-description h3 {
  font-size: 18px;
  color: var(--text);
  margin-bottom: 12px;
  font-weight: 700;
}

.modal-description p {
  color: var(--text-mid);
  line-height: 1.8;
  font-size: 15px;
}

.modal-section {
  margin-bottom: 28px;
  padding-bottom: 24px;
  border-bottom: 1px solid #E8E6DF;
}

.modal-section:last-of-type {
  border-bottom: none;
  margin-bottom: 32px;
}

.modal-section h3 {
  font-size: 16px;
  color: var(--primary);
  margin-bottom: 12px;
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: 8px;
}

.modal-section p {
  color: var(--text-mid);
  line-height: 1.8;
  font-size: 14px;
}

.modal-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.modal-list li {
  color: var(--text-mid);
  line-height: 1.8;
  font-size: 14px;
  padding: 8px 0;
  padding-left: 24px;
  position: relative;
}

.modal-list li::before {
  content: "✓";
  position: absolute;
  left: 0;
  color: var(--accent);
  font-weight: 700;
}

.modal-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.modal-tag {
  background: rgba(175, 164, 206, 0.12);
  color: var(--primary);
  padding: 8px 14px;
  border-radius: 20px;
  font-size: 13px;
  font-weight: 600;
  border: 1px solid rgba(175, 164, 206, 0.2);
}

.modal-cta {
  background: linear-gradient(135deg, var(--accent) 0%, #F0D630 100%);
  color: #2A2A2A;
  border: none;
  border-radius: 12px;
  padding: 16px 32px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
  align-self: flex-start;
  box-shadow: 0 4px 16px rgba(245, 223, 77, 0.3);
}

.modal-cta:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 24px rgba(245, 223, 77, 0.4);
}

.modal-cta:active {
  transform: translateY(0);
}

@media (max-width: 900px) {
  .modal-header {
    grid-template-columns: 1fr;
    gap: 20px;
    padding: 24px 36px;
  }

  .modal-key-details {
    grid-template-columns: 1fr;
  }

  .modal-body {
    max-height: calc(85vh - 280px);
  }

  .modal-grid {
    grid-template-columns: 1fr;
    gap: 32px;
    padding: 36px;
  }

  .modal-content {
    width: 95vw;
  }

  .modal-info-col h2 {
    font-size: 26px;
  }

  .modal-details {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 600px) {
  .modal-header {
    grid-template-columns: 1fr;
    gap: 16px;
    padding: 16px 20px;
  }

  .modal-img {
    max-width: 100%;
    max-height: 200px;
  }

  .modal-key-details {
    grid-template-columns: 1fr;
    gap: 12px;
  }

  .key-detail {
    padding: 10px;
  }

  .key-label {
    font-size: 11px;
  }

  .key-value {
    font-size: 13px;
  }

  .modal-header-info h2 {
    font-size: 22px;
  }

  .modal-body {
    padding: 20px;
    max-height: calc(85vh - 300px);
  }

  .modal-grid {
    gap: 20px;
    padding: 20px;
  }

  .modal-close-icon {
    top: 12px;
    right: 12px;
    font-size: 24px;
    width: 40px;
    height: 40px;
  }

  .modal-info-col h2 {
    font-size: 22px;
    margin-bottom: 16px;
  }

  .detail-value {
    font-size: 16px;
  }

  .modal-description h3 {
    font-size: 16px;
  }

  .modal-description p {
    font-size: 14px;
  }

  .modal-cta {
    width: 100%;
    text-align: center;
  }
}
@media (max-width: 900px) {
  .formations {
    padding: 60px 5%;
  }

  .formations h2 {
    font-size: 28px;
  }

  .formations-slider-wrap {
    flex-direction: column;
    gap: 0;
  }

  .formations-cards {
    width: 100%;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 18px;
    overflow: hidden;
  }

  .formation-card, .formation-card.expanded {
    width: min(100%, 320px);
    max-width: 320px;
  }

  .arrow {
    display: none;
  }
}

@media (max-width: 640px) {
  .formations {
    padding: 50px 4%;
  }

  .formations h2 {
    font-size: 24px;
  }

  .section-sub {
    font-size: 14px;
    margin-bottom: 32px;
  }

  .formations-slider-wrap {
    display: flex;
    flex-direction: column;
    gap: 16px;
    width: 100%;
  }

  .formations-cards {
    flex-direction: column;
    gap: 16px;
    width: 100%;
    overflow: visible;
  }

  .formation-card,
  .formation-card.expanded {
    width: 100% !important;
    max-width: 100% !important;
    height: 220px;
    min-width: 0;
  }

  .overlay {
    padding: 18px 18px 16px;
  }

  .formation-title {
    font-size: 1.05rem;
    line-height: 1.3;
    margin-bottom: 10px;
  }

  .cta {
    padding: 10px 18px;
    font-size: 0.9rem;
  }

  .modal-content {
    padding: 28px 20px;
    margin: 20px;
  }

  .modal-content h3 {
    font-size: 20px;
  }

  .close-btn {
    padding: 10px 20px;
    font-size: 14px;
  }
}
</style>
