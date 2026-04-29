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
    const res = await axios.get('http://localhost:5000/api/testimonials')
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

.swiper {
  padding: 40px 0 10px;
  height: 300px; /* hauteur fixe pour aligner les cards */
}

:deep(.swiper-slide) {
  height: 100%;
  display: flex;
  align-items: stretch;
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
  transition: transform 0.25s, box-shadow 0.25s;
}

.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 10px 28px rgba(175, 164, 206, 0.15);
}

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

.swiper-nav {
  position: relative;
  width: 100%;
  height: 0;
}
:deep(.swiper-button-prev),
:deep(.swiper-button-next) {
  color: var(--accent) !important;
  background: none !important;
  border: none !important;
  box-shadow: none !important;
}
:deep(.swiper-button-prev)::after,
:deep(.swiper-button-next)::after {
  color: var(--accent) !important;
  font-size: 38px !important;
}
:deep(.swiper-button-prev):hover,
:deep(.swiper-button-next):hover {
  color: var(--accent-hover) !important;
}
:deep(.swiper-button-disabled),
:deep(.swiper-button-disabled)::after {
  color: #f5df4d80 !important;
  opacity: 0.7 !important;
}

.container {
  max-width: 1200px; /* ou 1400px, selon ton besoin */
  margin: 0 auto;
  position: relative;
  padding-inline: 80px;
}
:deep(.swiper-button-prev) {
  left: 0;
}
:deep(.swiper-button-next) {
  right: 0;
}

.carousel-wrapper {
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.custom-swiper-button {
  position: absolute;
  top: 50%;
  z-index: 20;
  width: 38px;
  height: 38px;
  background: none;
  border: none;
  color: var(--accent);
  font-size: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transform: translateY(-50%);
  transition: color 0.2s;
  padding: 0;
  user-select: none;
}

.custom-swiper-button.prev {
  left: -48px;
}

.custom-swiper-button.next {
  right: -48px;
}

.custom-swiper-button:hover {
  color: var(--accent-hover);
}

@media (max-width: 900px) {
  .container {
    padding-inline: 24px;
  }
  :deep(.swiper-button-prev),
  :deep(.swiper-button-next) {
    width: 28px;
    height: 28px;
    font-size: 28px !important;
  }
  :deep(.swiper-button-prev)::after,
  :deep(.swiper-button-next)::after {
    font-size: 28px !important;
  }
  .carousel-wrapper {
    max-width: 100vw;
  }
  .custom-swiper-button.prev {
    left: -16px;
  }
  .custom-swiper-button.next {
    right: -16px;
  }
}

</style>
