<template>
  <nav class="navbar">
    <div class="nav-inner">

      <a href="#" class="logo" aria-label="Accueil">
        Academy
      </a>

      <button
        class="burger"
        @click="showMenu = !showMenu"
        aria-label="Menu"
        :aria-expanded="showMenu"
        v-if="isMobile"
      >
        <span :class="{ open: showMenu }"></span>
        <span :class="{ open: showMenu }"></span>
        <span :class="{ open: showMenu }"></span>
      </button>

      <ul
        class="nav-links"
        :class="{ open: showMenu || !isMobile }"
      >
        <li>
          <a href="#haccp" @click="closeMenu">HACCP</a>
        </li>
        <li>
          <a href="#whyus" @click="closeMenu">Pourquoi nous</a>
        </li>
        <li>
          <a href="#certifications" @click="closeMenu">Certifications</a>
        </li>
        <li>
          <a href="#temoignages" @click="closeMenu">Avis</a>
        </li>
        <li>
          <a href="#formations" @click="closeMenu">Formations</a>
        </li>
        <li>
          <a href="#faq" @click="closeMenu">FAQ</a>
        </li>
      </ul>

      <a
        href="#inscription"
        class="nav-cta"
        @click="closeMenu"
      >
        S'inscrire
      </a>

    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const showMenu = ref(false)
const isMobile = ref(false)

function handleResize() {
  isMobile.value = window.innerWidth <= 900

  if (!isMobile.value) {
    showMenu.value = false
  }
}

function closeMenu() {
  showMenu.value = false
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
  width: 100%;
  background: rgba(255, 253, 248, 0.92);
  backdrop-filter: blur(12px);
  border-bottom: 2px solid var(--accent);
  padding: 8px 4%;
}

.nav-inner {
  position: relative;
  width: 100%;
  max-width: 1200px;
  min-width: 0;
  height: 56px;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: space-between;
}

/* =========================
   LOGO
========================= */

.logo {
  display: flex;
  align-items: center;
  flex-shrink: 0;

  height: 40px;

  color: var(--text);
  font-family: 'Outfit', sans-serif;
  font-size: 1.2rem;
  font-weight: 800;

  text-decoration: none;
}

/* Si tu utilises une image comme logo */
.logo-img {
  height: 42px;
  width: auto;
  display: block;
}

/* =========================
   LIENS
========================= */

.nav-links {
  display: flex;
  align-items: center;
  gap: 28px;

  list-style: none;
  margin: 0;
  padding: 0;
}

.nav-links a {
  display: block;

  color: var(--text-mid);
  font-size: 16px;
  font-weight: 400;

  text-decoration: none;

  transition:
    color 0.2s ease,
    transform 0.2s ease;
}

.nav-links a:hover {
  color: var(--primary-hover);
}

/* =========================
   BOUTON INSCRIPTION
========================= */

.nav-cta {
  flex-shrink: 0;

  background: var(--accent);
  color: #2A2A2A;

  padding: 10px 22px;
  border-radius: 999px;

  font-size: 14px;
  font-weight: 600;

  text-decoration: none;

  transition:
    background 0.2s ease,
    transform 0.2s ease;
}

.nav-cta:hover {
  background: var(--accent-hover);
  transform: scale(1.03);
}

/* =========================
   BURGER
========================= */

.burger {
  display: none;

  flex-direction: column;
  align-items: center;
  justify-content: center;

  gap: 4px;

  width: 42px;
  height: 42px;

  margin: 0;
  padding: 6px;

  background: transparent;
  border: none;

  cursor: pointer;
  flex-shrink: 0;
}

.burger span {
  display: block;

  width: 22px;
  height: 2.5px;

  background: var(--text-mid);
  border-radius: 2px;

  transition:
    transform 0.25s ease,
    opacity 0.2s ease;
}

.burger span.open:nth-child(1) {
  transform: translateY(6.5px) rotate(45deg);
}

.burger span.open:nth-child(2) {
  opacity: 0;
}

.burger span.open:nth-child(3) {
  transform: translateY(-6.5px) rotate(-45deg);
}

/* =========================
   TABLET / MOBILE
========================= */

@media (max-width: 900px) {

  .navbar {
    padding: 6px 12px;
  }

  .nav-inner {
    width: 100%;
    max-width: 100%;
    height: 52px;
  }

  .logo {
    font-size: 1.05rem;
  }

  .burger {
    display: flex;
  }

  /* MENU MOBILE */

  .nav-links {
    position: absolute;

    top: calc(100% + 8px);
    left: 0;

    width: 100%;
    max-width: 100%;

    display: none;
    flex-direction: column;
    align-items: stretch;

    gap: 0;

    padding: 0;

    background: rgba(255, 253, 248, 0.98);

    border-radius: 0 0 14px 14px;

    border-bottom: 1px solid rgba(245, 166, 35, 0.2);

    box-shadow:
      0 10px 30px rgba(42, 42, 42, 0.08);

    overflow: hidden;
  }

  .nav-links.open {
    display: flex;
  }

  .nav-links li {
    width: 100%;

    padding: 0;

    text-align: center;

    border-bottom: 1px solid rgba(245, 166, 35, 0.15);
  }

  .nav-links li:last-child {
    border-bottom: none;
  }

  .nav-links a {
    width: 100%;
    padding: 15px 20px;

    font-size: 15px;
  }

  .nav-links a:hover {
    background: var(--primary-pale);
  }

  /* Cacher le bouton desktop */

  .nav-cta {
    display: none;
  }
}

/* =========================
   PETITS TÉLÉPHONES
========================= */

@media (max-width: 480px) {

  .navbar {
    padding: 6px 10px;
  }

  .nav-inner {
    height: 50px;
  }

  .logo {
    font-size: 1rem;
  }

  .burger {
    width: 40px;
    height: 40px;
  }

  .nav-links a {
    padding: 14px 16px;
    font-size: 14px;
  }
}
</style>
