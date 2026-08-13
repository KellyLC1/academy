<template>
  <nav class="navbar">
    <div class="nav-inner">
      <a href="#" class="logo" aria-label="Accueil">
        Academy
      </a>
      <button class="burger" @click="showMenu = !showMenu" aria-label="Menu" v-if="isMobile">
        <span :class="{'open': showMenu}"></span>
        <span :class="{'open': showMenu}"></span>
        <span :class="{'open': showMenu}"></span>
      </button>
      <ul class="nav-links" :class="{ open: showMenu || !isMobile }">
        <li><a href="#haccp">HACCP</a></li>
        <li><a href="#whyus">Pourquoi nous</a></li>
        <li><a href="#certifications">Certifications</a></li>
        <li><a href="#temoignages">Avis</a></li>
        <li><a href="#formations">Formations</a></li>
        <li><a href="#faq">FAQ</a></li>
      </ul>
      <a href="#inscription" class="nav-cta">S'inscrire</a>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
const showMenu = ref(false)
const isMobile = ref(false)

function handleResize() {
  isMobile.value = window.innerWidth <= 900
  if (!isMobile.value) showMenu.value = false
}
onMounted(() => {
  handleResize()
  window.addEventListener('resize', handleResize)
})
onUnmounted(() => {
  window.removeEventListener('resize', handleResize)
})
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  background: rgba(255, 253, 248, 0.92);
  backdrop-filter: blur(12px);
  border-bottom: 2px solid var(--accent);
  padding: 8px 4%;
}

.nav-inner {
  position: relative;
  width: 100%;
  max-width: 1200px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 56px;
}

.logo {
  display: flex;
  align-items: center;
  text-decoration: none;
  height: 40px;
}

.logo-img {
  height: 80px;
  width: auto;
  display: block;
}

.burger {
  display: none;
  flex-direction: column;
  gap: 4px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px;
}
.burger span {
  display: block;
  width: 26px;
  height: 3px;
  background: var(--text-mid);
  border-radius: 2px;
  transition: 0.3s;
}
.burger span.open:nth-child(1) {
  transform: translateY(7px) rotate(45deg);
}
.burger span.open:nth-child(2) {
  opacity: 0;
}
.burger span.open:nth-child(3) {
  transform: translateY(-7px) rotate(-45deg);
}

.nav-links {
  display: flex;
  gap: 28px;
  list-style: none;
}

.nav-links a {
  font-size: 16px;
  color: var(--text-mid);
  text-decoration: none;
  font-weight: 400;
  transition: color 0.2s;
}

.nav-links a:hover {
  color: var(--primary-hover);
}

.nav-cta {
  background: var(--accent);
  color: #2A2A2A;
  padding: 10px 22px;
  border-radius: 999px;
  font-size: 14px;
  font-weight: 600;
  text-decoration: none;
  transition: background 0.2s, transform 0.2s;
}

.nav-cta:hover {
  background: var(--accent-hover);
  transform: scale(1.03);
}

@media (max-width: 900px) {
  .navbar {
    padding: 6px 4%;
  }

  .nav-inner {
    height: 52px;
  }

  .logo {
    font-size: 1.05rem;
    line-height: 1;
    z-index: 2;
  }

  .burger {
    display: flex;
    margin-left: auto;
    z-index: 2;
    padding: 6px;
  }

  .burger span {
    width: 22px;
    height: 2.5px;
  }

  .nav-links {
    position: absolute;
    top: calc(100% + 6px);
    left: -4%;
    right: -4%;
    width: calc(100% + 8%);
    background: rgba(255,253,248,0.98);
    flex-direction: column;
    gap: 0;
    padding: 0;
    border-bottom: 1px solid rgba(245, 166, 35, 0.2);
    display: none;
    z-index: 20;
    box-shadow: 0 10px 30px rgba(42, 42, 42, 0.08);
  }

  .nav-links.open {
    display: flex;
  }

  .nav-links li {
    border-bottom: 1px solid rgba(245, 166, 35, 0.15);
    text-align: center;
    padding: 16px 0;
  }

  .nav-cta {
    display: none;
  }
}
</style>
