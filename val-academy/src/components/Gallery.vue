<template>
  <section class="gallery-section" id="gallery">
    <div class="container">
      <h2>Galerie</h2>
      <p class="section-sub">Découvrez nos formations et nos centres en images</p>
      
      <!-- Galerie desktop (grille) - 8 images (4x2) -->
      <div class="gallery-grid">
        <div class="gallery-item" v-for="(img, idx) in images.slice(0, 8)" :key="img._id" @click="openModal(img)">
          <img :src="img.url" :alt="img.title" />
          <div class="overlay">
            <span class="view-btn">👁️ Voir</span>
          </div>
          <div class="caption">{{ img.title }}</div>
        </div>
      </div>

      <!-- Bouton Afficher tout -->
      <div class="load-more-wrapper" v-if="images.length > 8">
        <button @click="showAllModal = true" class="load-more-btn">
          Afficher tout
        </button>
      </div>

      <!-- Carousel mobile -->
      <div class="carousel-mobile" v-if="isMobile">
        <div class="carousel-container">
          <div class="carousel-inner" :style="{ transform: `translateX(-${currentSlide * 100}%)` }">
            <div class="carousel-item" v-for="img in images" :key="img._id">
              <img :src="img.url" :alt="img.title" />
              <div class="caption">{{ img.title }}</div>
            </div>
          </div>
        </div>
        <button class="carousel-btn prev" @click="prevSlide">‹</button>
        <button class="carousel-btn next" @click="nextSlide">›</button>
        <div class="carousel-dots">
          <span v-for="(_, idx) in images" :key="idx" :class="{ active: idx === currentSlide }" @click="currentSlide = idx"></span>
        </div>
      </div>
    </div>

    <!-- Modal image unique -->
    <div v-if="selectedImage" class="modal" @click="selectedImage = null">
      <div class="modal-content" @click.stop>
        <button class="modal-close" @click="selectedImage = null">✕</button>
        <button v-if="selectedImageIndex > 0" class="modal-nav-btn prev" @click="prevImage">‹</button>
        <button v-if="selectedImageIndex < images.length - 1" class="modal-nav-btn next" @click="nextImage">›</button>
        <img :src="selectedImage.url" :alt="selectedImage.title" />
        <h3>{{ selectedImage.title }} <span class="image-counter">({{ selectedImageIndex + 1 }}/{{ images.length }})</span></h3>
      </div>
    </div>

    <!-- Modal Afficher tout (galerie complète) -->
    <div v-if="showAllModal" class="modal full-gallery-modal" @click="showAllModal = false">
      <div class="modal-content full-gallery-content" @click.stop>
        <button class="modal-close" @click="showAllModal = false">✕</button>
        <h3>Toutes nos photos</h3>
        <div class="full-gallery-grid">
          <div class="gallery-item-full" v-for="img in images" :key="img._id" @click="openModal(img)">
            <img :src="img.url" :alt="img.title" />
            <div class="overlay">
              <span class="view-btn">👁️ Voir</span>
            </div>
            <div class="caption">{{ img.title }}</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

const images = ref([]);
const showAllModal = ref(false);
const selectedImage = ref(null);
const selectedImageIndex = ref(0);
const isMobile = ref(false);
const currentSlide = ref(0);

async function fetchGallery() {
  try {
    const res = await axios.get('http://localhost:5000/api/gallery');
    images.value = res.data;
  } catch (err) {
    images.value = [];
  }
}

function openModal(img) {
  if (!isMobile.value) {
    selectedImage.value = img;
    selectedImageIndex.value = images.value.findIndex(i => i._id === img._id);
  }
}

function nextImage() {
  if (selectedImageIndex.value < images.value.length - 1) {
    selectedImageIndex.value++;
    selectedImage.value = images.value[selectedImageIndex.value];
  }
}

function prevImage() {
  if (selectedImageIndex.value > 0) {
    selectedImageIndex.value--;
    selectedImage.value = images.value[selectedImageIndex.value];
  }
}

function handleResize() {
  isMobile.value = window.innerWidth <= 768;
}

function nextSlide() {
  currentSlide.value = (currentSlide.value + 1) % images.value.length;
}

function prevSlide() {
  currentSlide.value = (currentSlide.value - 1 + images.value.length) % images.value.length;
}

onMounted(() => {
  fetchGallery();
  handleResize();
  window.addEventListener('resize', handleResize);
});
</script>

<style scoped>
.gallery-section {
  background: var(--cream);
  padding: 80px 5%;
}

.gallery-section h2 {
  text-align: center;
  font-size: 36px;
  color: var(--text);
  margin-bottom: 16px;
}

.section-sub {
  text-align: center;
  color: var(--text-soft);
  margin-bottom: 48px;
  font-size: 16px;
}

/* Grille desktop */
.gallery-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  max-width: 1200px;
  margin: 0 auto 40px;
}

.gallery-item {
  position: relative;
  background: white;
  border-radius: var(--radius-lg);
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s, box-shadow 0.3s;
  cursor: pointer;
  aspect-ratio: 1;
}

.gallery-item:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 28px rgba(245, 223, 77, 0.2);
}

.gallery-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s;
}

.gallery-item:hover img {
  transform: scale(1.08);
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s;
}

.gallery-item:hover .overlay {
  opacity: 1;
}

.view-btn {
  background: var(--accent);
  color: #2A2A2A;
  padding: 10px 20px;
  border-radius: 999px;
  font-weight: 600;
  font-size: 14px;
}

.caption {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(180deg, transparent 0%, rgba(0, 0, 0, 0.7) 100%);
  color: white;
  padding: 16px 12px 12px;
  font-size: 14px;
  font-weight: 500;
  text-align: center;
}

/* Bouton Afficher tout */
.load-more-wrapper {
  display: flex;
  justify-content: center;
  margin: 40px 0;
}

.load-more-btn {
  background: var(--accent);
  color: #2A2A2A;
  border: none;
  padding: 14px 40px;
  border-radius: 999px;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
}

.load-more-btn:hover {
  background: var(--accent-hover);
  transform: scale(1.05);
  box-shadow: 0 8px 20px rgba(245, 223, 77, 0.3);
}

/* Carousel mobile */
.carousel-mobile {
  display: none;
  position: relative;
  margin-top: 40px;
}

.carousel-container {
  overflow: hidden;
  border-radius: var(--radius-lg);
  background: white;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
}

.carousel-inner {
  display: flex;
  transition: transform 0.4s ease-in-out;
}

.carousel-item {
  min-width: 100%;
  aspect-ratio: 1;
  position: relative;
}

.carousel-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.carousel-item .caption {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(180deg, transparent 0%, rgba(0, 0, 0, 0.7) 100%);
  color: white;
  padding: 16px 12px 12px;
  font-size: 16px;
  font-weight: 500;
  text-align: center;
}

.carousel-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(245, 223, 77, 0.9);
  color: #2A2A2A;
  border: none;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  font-size: 24px;
  cursor: pointer;
  transition: all 0.2s;
  z-index: 10;
}

.carousel-btn:hover {
  background: var(--accent);
  transform: translateY(-50%) scale(1.1);
}

.carousel-btn.prev {
  left: 12px;
}

.carousel-btn.next {
  right: 12px;
}

.carousel-dots {
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-top: 16px;
}

.carousel-dots span {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: rgba(42, 42, 42, 0.3);
  cursor: pointer;
  transition: all 0.3s;
}

.carousel-dots span.active {
  background: var(--accent);
  transform: scale(1.3);
}

/* Modal */
.modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1001;
  padding: 20px;
  animation: fadeIn 0.3s ease-in-out;
}

.modal-content {
  position: relative;
  background: white;
  border-radius: var(--radius-lg);
  max-width: 90%;
  max-height: 90vh;
  overflow: auto;
  animation: slideUp 0.3s ease-in-out;
}

.modal-content img {
  width: 100%;
  height: auto;
  display: block;
  border-radius: var(--radius-lg) var(--radius-lg) 0 0;
}

.modal-content h3 {
  padding: 20px;
  color: var(--text);
  margin: 0;
  text-align: center;
  font-size: 18px;
}

.image-counter {
  font-size: 14px;
  color: var(--text-soft);
  font-weight: 400;
}

.modal-nav-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(245, 223, 77, 0.9);
  color: #2A2A2A;
  border: none;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  font-size: 28px;
  cursor: pointer;
  transition: all 0.2s;
  z-index: 15;
  font-weight: bold;
}

.modal-nav-btn:hover {
  background: var(--accent);
  transform: translateY(-50%) scale(1.15);
}

.modal-nav-btn.prev {
  left: 20px;
}

.modal-nav-btn.next {
  right: 20px;
}

.modal-close {
  position: absolute;
  top: 12px;
  right: 12px;
  background: var(--accent);
  color: #2A2A2A;
  border: none;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  font-size: 24px;
  cursor: pointer;
  transition: all 0.2s;
  z-index: 10;
}

.modal-close:hover {
  background: var(--accent-hover);
  transform: scale(1.1);
}

/* Full Gallery Modal */
.full-gallery-modal {
  background: rgba(0, 0, 0, 0.9);
  z-index: 1000;
}

.full-gallery-content {
  max-width: 95%;
  max-height: 95vh;
  width: 100%;
  background: white;
}

.full-gallery-content h3 {
  padding: 20px 20px 16px;
  color: var(--text);
  font-size: 24px;
  text-align: center;
  border-bottom: 2px solid var(--accent);
  margin: 0;
}

.full-gallery-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 12px;
  padding: 20px;
  overflow-y: auto;
  max-height: calc(95vh - 100px);
}

.gallery-item-full {
  position: relative;
  background: white;
  border-radius: var(--radius-lg);
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s, box-shadow 0.3s;
  cursor: pointer;
  aspect-ratio: 1;
}

.gallery-item-full:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 20px rgba(245, 223, 77, 0.2);
}

.gallery-item-full img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s;
}

.gallery-item-full:hover img {
  transform: scale(1.08);
}

.gallery-item-full .overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s;
}

.gallery-item-full:hover .overlay {
  opacity: 1;
}

.gallery-item-full .view-btn {
  background: var(--accent);
  color: #2A2A2A;
  padding: 8px 16px;
  border-radius: 999px;
  font-weight: 600;
  font-size: 12px;
}

.gallery-item-full .caption {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(180deg, transparent 0%, rgba(0, 0, 0, 0.7) 100%);
  color: white;
  padding: 12px 8px 8px;
  font-size: 12px;
  font-weight: 500;
  text-align: center;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
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

/* Responsive */
@media (max-width: 1024px) {
  .gallery-grid {
    grid-template-columns: repeat(3, 1fr);
  }

  .full-gallery-grid {
    grid-template-columns: repeat(4, 1fr);
  }
}

@media (max-width: 768px) {
  .gallery-grid {
    display: none;
  }

  .carousel-mobile {
    display: block;
  }

  .load-more-wrapper {
    display: none;
  }

  .gallery-section h2 {
    font-size: 28px;
  }

  .full-gallery-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 600px) {
  .gallery-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .carousel-btn {
    width: 36px;
    height: 36px;
    font-size: 20px;
  }

  .modal-content {
    max-width: 100%;
    max-height: 100%;
  }

  .full-gallery-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 8px;
    padding: 12px;
  }
}
</style>
