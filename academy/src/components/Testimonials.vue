<template>
  <section class="temoignages" id="temoignages">
    <div class="container">

      <h2>Ce que disent nos clients</h2>
      <p class="section-sub">
        Plus de 500 professionnels formés et satisfaits à travers toute la France.
      </p>

      <div class="swiper-nav">
      </div>

      <div class="carousel-wrapper">
        <button class="custom-swiper-button prev" @click="swiper?.slidePrev()" aria-label="Précédent">
          &#x2039;
        </button>
        <Swiper
          :modules="[Autoplay, Navigation]"
          :slides-per-view="4"
          :space-between="20"
          :loop="true"
          :autoplay="{ delay: 2800, disableOnInteraction: false }"
          :breakpoints="{
            0:    { slidesPerView: 1 },
            640:  { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }"
          class="swiper"
          @swiper="onSwiper"
        >
          <SwiperSlide v-for="t in testimonials" :key="t.name">
            <div class="card">
              <div class="stars">★★★★★</div>
              <p class="text">"{{ truncate(t.text) }}"</p>
              <div class="author">{{ t.name }}</div>
              <div class="role">{{ t.role }}</div>
            </div>
          </SwiperSlide>
        </Swiper>
        <button class="custom-swiper-button next" @click="swiper?.slideNext()" aria-label="Suivant">
          &#x203A;
        </button>
      </div>

    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay, Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'

const swiper = ref(null)
const onSwiper = (instance) => {
  swiper.value = instance
}

const MAX_TEXT_LENGTH = 180
function truncate(text) {
  return text.length > MAX_TEXT_LENGTH
    ? text.slice(0, MAX_TEXT_LENGTH) + '…'
    : text
}

const testimonials = ref([])

async function fetchTestimonials() {
  try {
    const res = await axios.get('https://academy-m9eq.onrender.com/api/testimonials')
    testimonials.value = res.data
  } catch (err) {
    testimonials.value = []
  }
}
onMounted(fetchTestimonials)
</script>

<style scoped>
.temoignages {
  background: var(--cream);
  overflow: hidden;
}

.temoignages h2 {
  font-size: 36px;
  color: var(--text);
}

.section-sub {
  font-size: 16px;
  color: var(--text-soft);
  max-width: 500px;
  margin: 12px 0 0;
  line-height: 1.7;
}

/* =========================
   CONTAINER
========================= */

.container {
  max-width: 1400px;
  width: 100%;
  margin: 0 auto;
  position: relative;
}

/* =========================
   CAROUSEL
========================= */

.carousel-wrapper {
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  margin-top: 0;
  padding: 0 50px;
}

.swiper {
  width: 100%;
  padding: 40px 0 10px;
  height: 300px;
}

:deep(.swiper-wrapper) {
  align-items: stretch;
}

:deep(.swiper-slide) {
  height: 100%;
  display: flex;
  align-items: stretch;
  box-sizing: border-box;
}

.card {
  background: white;
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  padding: 28px;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  transition: transform 0.25s, box-shadow 0.25s;
}

.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 10px 28px rgba(175, 164, 206, 0.15);
}

/* =========================
   CONTENU AVIS
========================= */

.stars {
  color: var(--accent);
  font-size: 15px;
  margin-bottom: 12px;
  letter-spacing: 2px;
}

.text {
  font-size: 14px;
  color: var(--text-mid);
  line-height: 1.6;
  font-style: italic;
  flex: 1;
  margin-bottom: 12px;
  min-height: 120px;
  max-height: 120px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  line-clamp: 4;
  -webkit-box-orient: vertical;
}

.author {
  font-size: 13px;
  font-weight: 500;
  color: var(--text);
}

.role {
  font-size: 12px;
  color: var(--text-soft);
  margin-top: 2px;
}

/* =========================
   FLÈCHES
========================= */

.custom-swiper-button {
  position: absolute;
  top: 50%;
  z-index: 20;

  width: 40px;
  height: 40px;

  background: none;
  border: none;

  color: var(--accent);
  font-size: 46px;
  line-height: 1;

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;
  transform: translateY(-50%);

  transition: color 0.2s, transform 0.2s;

  padding: 0;
  user-select: none;
}

.custom-swiper-button:hover {
  color: var(--accent-hover);
  transform: translateY(-50%) scale(1.1);
}

.custom-swiper-button.prev {
  left: 0;
}

.custom-swiper-button.next {
  right: 0;
}

/* =========================
   TABLETTE
========================= */

@media (max-width: 1023px) {
  .container {
    max-width: 100%;
  }

  .carousel-wrapper {
    padding: 0 40px;
  }

  .swiper {
    height: 300px;
  }

  .custom-swiper-button {
    font-size: 40px;
  }
}

/* =========================
   MOBILE
========================= */

@media (max-width: 640px) {
  .temoignages {
    overflow: hidden;
  }

  .container {
    padding-inline: 12px;
  }

  .temoignages h2 {
    font-size: 28px;
  }

  .section-sub {
    font-size: 14px;
    line-height: 1.6;
  }

  .carousel-wrapper {
    padding: 0;
    width: 100%;
  }

  .swiper {
    width: 100%;
    height: auto;
    padding: 20px 0 8px;
  }

  :deep(.swiper-slide) {
    width: 100% !important;
    max-width: 100% !important;
  }

  .card {
    padding: 20px 18px;
  }

  .text {
    min-height: 0;
    max-height: none;
  }

  .custom-swiper-button {
    display: none;
  }
}
</style>