<template>
  <div class="admin-dashboard">

    <!-- HEADER -->
    <header class="admin-header">
      <div>
        <h2>Tableau de bord <span>Admin</span></h2>
        <p>Gérez votre contenu</p>
      </div>

      <button @click="logout" class="logout">
        Déconnexion
      </button>
    </header>

    <!-- ONGLETS -->
    <nav class="admin-tabs">
      <button
        :class="{ active: activeTab === 'formations' }"
        @click="activeTab = 'formations'"
      >
        🎓 Formations
      </button>

      <button
        :class="{ active: activeTab === 'galerie' }"
        @click="activeTab = 'galerie'"
      >
        🖼️ Galerie
      </button>

      <button
        :class="{ active: activeTab === 'avis' }"
        @click="activeTab = 'avis'"
      >
        ⭐ Avis
      </button>
    </nav>


    <!-- ========================= -->
    <!-- FORMATIONS -->
    <!-- ========================= -->

    <section v-if="activeTab === 'formations'" class="tab-content">

      <div class="section-header">
        <div>
          <h3>🎓 Formations</h3>
          <p>Ajoutez et gérez les formations proposées.</p>
        </div>

        <span class="count-badge">
          {{ formations.length }} formation{{ formations.length > 1 ? 's' : '' }}
        </span>
      </div>

      <!-- AJOUT -->
      <div class="content-card">

        <h4>Ajouter une formation</h4>

        <form @submit.prevent="addFormation" class="add-form formations-form">

          <input
            v-model="newFormation.title"
            type="text"
            placeholder="Titre de la formation"
            required
          />

          <input
            v-model="newFormation.description"
            type="text"
            placeholder="Description courte"
          />

          <div class="form-row">
            <input
              v-model="newFormation.duration"
              type="text"
              placeholder="Durée"
            />

            <input
              v-model="newFormation.price"
              type="text"
              placeholder="Prix / Tarif"
            />
          </div>

          <input
            v-model="newFormation.image"
            type="text"
            placeholder="URL de l'image"
          />

          <textarea
            v-model="newFormation.accessibility"
            placeholder="Accessibilité (ex: Pour tous)"
          ></textarea>

          <textarea
            v-model="newFormation.prerequisites"
            placeholder="Prérequis"
          ></textarea>

          <textarea
            v-model="newFormation.objectives"
            placeholder="Objectifs (1 par ligne)"
          ></textarea>

          <textarea
            v-model="newFormation.coursContent"
            placeholder="Contenu du cours (1 item par ligne)"
          ></textarea>

          <textarea
            v-model="newFormation.pedagogicalMethods"
            placeholder="Méthodes pédagogiques (1 par ligne)"
          ></textarea>

          <textarea
            v-model="newFormation.evaluation"
            placeholder="Modalités d'évaluation"
          ></textarea>

          <textarea
            v-model="newFormation.requiredMaterials"
            placeholder="Matériel requis"
          ></textarea>

          <input
            v-model="newFormation.trainer"
            type="text"
            placeholder="Formateur / Formatrice"
          />

          <button type="submit" class="primary-btn">
            + Ajouter la formation
          </button>

        </form>

        <div v-if="formationError" class="error">
          {{ formationError }}
        </div>

      </div>


      <!-- LISTE -->
      <div class="content-card">

        <div class="list-header">
          <h4>Formations existantes</h4>
        </div>

        <div v-if="formations.length === 0" class="empty-state">
          Aucune formation pour le moment.
        </div>

        <div v-else class="formation-list">

          <div
            v-for="formation in formations"
            :key="formation._id"
            class="formation-item"
          >

            <div class="formation-main">

              <div class="formation-info">

                <h4>
                  {{ formation.title }}
                </h4>

                <span
                  v-if="formation.duration"
                  class="formation-duration"
                >
                  {{ formation.duration }}
                </span>

                <p v-if="formation.description">
                  {{ formation.description }}
                </p>

                <span
                  v-if="formation.price"
                  class="formation-price"
                >
                  {{ formation.price }}
                </span>

              </div>

              <div class="formation-actions">

                <button
                  class="edit-btn"
                  @click="editFormation(formation)"
                  title="Modifier"
                >
                  ✏️
                </button>

                <button
                  class="delete-btn"
                  @click="deleteFormation(formation._id)"
                  title="Supprimer"
                >
                  🗑️
                </button>

              </div>

            </div>

          </div>

        </div>

      </div>


      <!-- MODALE MODIFICATION -->
      <div v-if="editMode" class="edit-modal">

        <div class="edit-modal-content">

          <button
            class="modal-close"
            @click="cancelEdit"
          >
            ✕
          </button>

          <h4>Modifier la formation</h4>

          <form
            @submit.prevent="updateFormation"
            class="add-form formations-form"
          >

            <input
              v-model="editFormationData.title"
              type="text"
              placeholder="Titre"
              required
            />

            <input
              v-model="editFormationData.description"
              type="text"
              placeholder="Description courte"
            />

            <div class="form-row">

              <input
                v-model="editFormationData.duration"
                type="text"
                placeholder="Durée"
              />

              <input
                v-model="editFormationData.price"
                type="text"
                placeholder="Prix / Tarif"
              />

            </div>

            <input
              v-model="editFormationData.image"
              type="text"
              placeholder="URL de l'image"
            />

            <textarea
              v-model="editFormationData.accessibility"
              placeholder="Accessibilité"
            ></textarea>

            <textarea
              v-model="editFormationData.prerequisites"
              placeholder="Prérequis"
            ></textarea>

            <textarea
              v-model="editFormationData.objectives"
              placeholder="Objectifs (1 par ligne)"
            ></textarea>

            <textarea
              v-model="editFormationData.coursContent"
              placeholder="Contenu du cours (1 item par ligne)"
            ></textarea>

            <textarea
              v-model="editFormationData.pedagogicalMethods"
              placeholder="Méthodes pédagogiques (1 par ligne)"
            ></textarea>

            <textarea
              v-model="editFormationData.evaluation"
              placeholder="Modalités d'évaluation"
            ></textarea>

            <textarea
              v-model="editFormationData.requiredMaterials"
              placeholder="Matériel requis"
            ></textarea>

            <input
              v-model="editFormationData.trainer"
              type="text"
              placeholder="Formateur / Formatrice"
            />

            <div class="modal-actions">

              <button type="submit" class="primary-btn">
                Enregistrer
              </button>

              <button
                type="button"
                @click="cancelEdit"
                class="cancel-btn"
              >
                Annuler
              </button>

            </div>

          </form>

        </div>

      </div>

    </section>


    <!-- ========================= -->
    <!-- GALERIE -->
    <!-- ========================= -->

    <section v-if="activeTab === 'galerie'" class="tab-content">

      <div class="section-header">

        <div>
          <h3>🖼️ Galerie photos</h3>
          <p>Ajoutez et gérez les photos du site.</p>
        </div>

        <span class="count-badge">
          {{ gallery.length }} photo{{ gallery.length > 1 ? 's' : '' }}
        </span>

      </div>


      <!-- AJOUT PHOTO -->
      <div class="content-card">

        <h4>Ajouter une photo</h4>

        <form
          @submit.prevent="addPhoto"
          class="photo-form"
        >

          <input
            v-model="newPhoto.url"
            type="text"
            placeholder="URL de l'image"
            required
          />

          <input
            v-model="newPhoto.title"
            type="text"
            placeholder="Titre"
          />

          <input
            v-model="newPhoto.formation"
            type="text"
            placeholder="Formation liée"
          />

          <button type="submit" class="primary-btn">
            + Ajouter la photo
          </button>

        </form>

        <div v-if="photoError" class="error">
          {{ photoError }}
        </div>

      </div>


      <!-- PHOTOS -->
      <div class="content-card">

        <h4>Photos existantes</h4>

        <div v-if="gallery.length === 0" class="empty-state">
          Aucune photo pour le moment.
        </div>

        <div v-else class="gallery-grid">

          <div
            v-for="photo in gallery"
            :key="photo._id"
            class="gallery-item"
          >

            <div class="img-wrapper">
              <img
                :src="photo.url"
                :alt="photo.title"
              />
            </div>

            <div class="photo-info">

              <strong>
                {{ photo.title || 'Sans titre' }}
              </strong>

              <span v-if="photo.formation">
                {{ photo.formation }}
              </span>

            </div>

            <button
              class="delete-btn"
              @click="deletePhoto(photo._id)"
            >
              🗑️ Supprimer
            </button>

          </div>

        </div>

      </div>

    </section>


    <!-- ========================= -->
    <!-- AVIS -->
    <!-- ========================= -->

    <section v-if="activeTab === 'avis'" class="tab-content">

      <div class="section-header">

        <div>
          <h3>⭐ Avis clients</h3>
          <p>Invitez vos clients à laisser un témoignage.</p>
        </div>

      </div>


      <div class="content-card testimonial-card">

        <div class="testimonial-icon">
          ⭐
        </div>

        <div class="testimonial-content">

          <h4>Inviter un client à donner son avis</h4>

          <p>
            Générez un lien personnalisé que vous pourrez envoyer
            directement à votre client.
          </p>

          <form
            @submit.prevent="inviteTestimonial"
            class="invite-form"
          >

            <input
              v-model="inviteEmail"
              type="email"
              placeholder="Email du client"
              required
            />

            <button
              type="submit"
              class="primary-btn"
            >
              Générer le lien
            </button>

          </form>

          <div v-if="inviteError" class="error">
            {{ inviteError }}
          </div>


          <div
            v-if="inviteLink"
            class="invite-result"
          >

            <label>
              Lien à envoyer :
            </label>

            <div class="link-row">

              <input
                :value="inviteLink"
                readonly
                @focus="$event.target.select()"
              />

              <button
                @click="copyLink"
                class="copy-btn"
              >
                Copier
              </button>

            </div>

            <span
              v-if="copied"
              class="copied"
            >
              ✓ Lien copié !
            </span>

          </div>

        </div>

      </div>

    </section>

  </div>
</template>


<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'
import { useRouter } from 'vue-router'

const router = useRouter()

// =========================
// ONGLETS
// =========================

const activeTab = ref('formations')

// =========================
// GALERIE
// =========================

const gallery = ref([])
const newPhoto = ref({
  url: '',
  title: '',
  formation: ''
})
const photoError = ref('')

// =========================
// FORMATIONS
// =========================

const formations = ref([])

const newFormation = ref({
  title: '',
  description: '',
  duration: '',
  price: '',
  image: '',
  accessibility: '',
  prerequisites: '',
  objectives: '',
  coursContent: '',
  pedagogicalMethods: '',
  evaluation: '',
  requiredMaterials: '',
  trainer: ''
})

const formationError = ref('')
const editMode = ref(false)

const editFormationData = ref({
  _id: '',
  title: '',
  description: '',
  duration: '',
  price: '',
  image: '',
  accessibility: '',
  prerequisites: '',
  objectives: '',
  coursContent: '',
  pedagogicalMethods: '',
  evaluation: '',
  requiredMaterials: '',
  trainer: ''
})

// =========================
// AVIS
// =========================

const inviteEmail = ref('')
const inviteError = ref('')
const inviteLink = ref('')
const copied = ref(false)

// =========================
// TOKEN
// =========================

function getToken() {
  return localStorage.getItem('adminToken')
}

// =========================
// GALERIE
// =========================

async function fetchGallery() {
  try {
    const res = await axios.get(
      'https://academy-m9eq.onrender.com/api/gallery',
      {
        headers: {
          Authorization: 'Bearer ' + getToken()
        }
      }
    )

    gallery.value = res.data

  } catch (err) {
    photoError.value = 'Erreur chargement galerie'
  }
}

async function addPhoto() {

  photoError.value = ''

  try {

    await axios.post(
      'https://academy-m9eq.onrender.com/api/gallery',
      newPhoto.value,
      {
        headers: {
          Authorization: 'Bearer ' + getToken()
        }
      }
    )

    newPhoto.value = {
      url: '',
      title: '',
      formation: ''
    }

    fetchGallery()

  } catch (err) {

    photoError.value =
      err.response?.data?.message ||
      'Erreur ajout photo'
  }
}

async function deletePhoto(id) {

  try {

    await axios.delete(
      `https://academy-m9eq.onrender.com/api/gallery/${id}`,
      {
        headers: {
          Authorization: 'Bearer ' + getToken()
        }
      }
    )

    fetchGallery()

  } catch (err) {

    photoError.value = 'Erreur suppression photo'
  }
}

// =========================
// FORMATIONS
// =========================

async function fetchFormations() {

  try {

    const res = await axios.get(
      'https://academy-m9eq.onrender.com/api/formation'
    )

    formations.value = res.data

  } catch (err) {

    formationError.value =
      'Erreur chargement formations'
  }
}

async function addFormation() {

  formationError.value = ''

  try {

    const formationData = {
      ...newFormation.value,

      objectives:
        newFormation.value.objectives
          .split('\n')
          .filter(o => o.trim()),

      coursContent:
        newFormation.value.coursContent
          .split('\n')
          .filter(c => c.trim()),

      pedagogicalMethods:
        newFormation.value.pedagogicalMethods
          .split('\n')
          .filter(m => m.trim())
    }

    await axios.post(
      'https://academy-m9eq.onrender.com/api/formation',
      formationData,
      {
        headers: {
          Authorization: 'Bearer ' + getToken()
        }
      }
    )

    newFormation.value = {
      title: '',
      description: '',
      duration: '',
      price: '',
      image: '',
      accessibility: '',
      prerequisites: '',
      objectives: '',
      coursContent: '',
      pedagogicalMethods: '',
      evaluation: '',
      requiredMaterials: '',
      trainer: ''
    }

    fetchFormations()

  } catch (err) {

    formationError.value =
      err.response?.data?.message ||
      'Erreur ajout formation'
  }
}

function editFormation(formation) {

  editMode.value = true

  editFormationData.value = {
    ...formation
  }
}

async function updateFormation() {

  try {

    const formationData = {
      ...editFormationData.value,

      objectives:
        Array.isArray(editFormationData.value.objectives)
          ? editFormationData.value.objectives
          : editFormationData.value.objectives
              .split('\n')
              .filter(o => o.trim()),

      coursContent:
        Array.isArray(editFormationData.value.coursContent)
          ? editFormationData.value.coursContent
          : editFormationData.value.coursContent
              .split('\n')
              .filter(c => c.trim()),

      pedagogicalMethods:
        Array.isArray(editFormationData.value.pedagogicalMethods)
          ? editFormationData.value.pedagogicalMethods
          : editFormationData.value.pedagogicalMethods
              .split('\n')
              .filter(m => m.trim())
    }

    await axios.put(
      `https://academy-m9eq.onrender.com/api/formation/${editFormationData.value._id}`,
      formationData,
      {
        headers: {
          Authorization: 'Bearer ' + getToken()
        }
      }
    )

    editMode.value = false

    fetchFormations()

  } catch (err) {

    formationError.value =
      'Erreur modification formation'
  }
}

function cancelEdit() {

  editMode.value = false

  editFormationData.value = {
    _id: '',
    title: '',
    description: '',
    duration: '',
    price: '',
    image: '',
    accessibility: '',
    prerequisites: '',
    objectives: '',
    coursContent: '',
    pedagogicalMethods: '',
    evaluation: '',
    requiredMaterials: '',
    trainer: ''
  }
}

async function deleteFormation(id) {

  try {

    await axios.delete(
      `https://academy-m9eq.onrender.com/api/formation/${id}`,
      {
        headers: {
          Authorization: 'Bearer ' + getToken()
        }
      }
    )

    fetchFormations()

  } catch (err) {

    formationError.value =
      'Erreur suppression formation'
  }
}

// =========================
// INVITATION AVIS
// =========================

async function inviteTestimonial() {

  inviteError.value = ''
  inviteLink.value = ''
  copied.value = false

  try {

    const res = await axios.post(
      'https://academy-m9eq.onrender.com/api/testimonials/invite',
      {
        email: inviteEmail.value
      },
      {
        headers: {
          Authorization: 'Bearer ' + getToken()
        }
      }
    )

    inviteLink.value =
      `${window.location.origin}/avis?token=${res.data.token}`

  } catch (err) {

    inviteError.value =
      err.response?.data?.message ||
      'Erreur lors de la génération du lien.'
  }
}

function copyLink() {

  if (!inviteLink.value) return

  navigator.clipboard.writeText(
    inviteLink.value
  )

  copied.value = true

  setTimeout(() => {
    copied.value = false
  }, 1500)
}

// =========================
// LOGOUT
// =========================

function logout() {

  localStorage.removeItem('adminToken')

  router.push('/admin-login')
}

// =========================
// INIT
// =========================

onMounted(() => {

  if (!getToken()) {

    router.push('/admin-login')

  } else {

    fetchGallery()
    fetchFormations()

  }

})
</script>


<style scoped>

.admin-dashboard {
  max-width: 1200px;
  margin: 40px auto;
  padding: 32px 32px 60px;
  background: #f8f8f8;
  border-radius: 18px;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.08);
}


/* =========================
   HEADER
========================= */

.admin-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 28px;
}

.admin-header h2 {
  margin: 0;
  font-size: 2.2rem;
  color: #2d2d2d;
  letter-spacing: 1px;
}

.admin-header h2 span {
  color: #9C8570;
}

.admin-header p {
  margin: 6px 0 0;
  color: #777;
}

.logout {
  background: #c00;
  color: white;
  border: none;
  border-radius: 8px;
  padding: 10px 22px;
  cursor: pointer;
  font-size: 15px;
}

.logout:hover {
  background: #a00;
}


/* =========================
   ONGLETS
========================= */

.admin-tabs {
  display: flex;
  gap: 8px;
  background: white;
  padding: 8px;
  border-radius: 12px;
  margin-bottom: 28px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
}

.admin-tabs button {
  flex: 1;
  border: none;
  background: transparent;
  padding: 14px 18px;
  border-radius: 8px;
  font-size: 15px;
  font-weight: 600;
  color: #777;
  cursor: pointer;
  transition: 0.2s;
}

.admin-tabs button:hover {
  background: #f7f4f1;
  color: #9C8570;
}

.admin-tabs button.active {
  background: #9C8570;
  color: white;
}


/* =========================
   CONTENU
========================= */

.tab-content {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.section-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.section-header h3 {
  margin: 0;
  color: #9C8570;
  font-size: 1.5rem;
}

.section-header p {
  margin: 5px 0 0;
  color: #777;
}

.count-badge {
  background: #eee7e0;
  color: #9C8570;
  padding: 7px 14px;
  border-radius: 20px;
  font-size: 13px;
  font-weight: 600;
}


/* =========================
   CARTES
========================= */

.content-card {
  background: white;
  border-radius: 14px;
  padding: 26px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.05);
}

.content-card > h4 {
  margin: 0 0 20px;
  color: #2d2d2d;
  font-size: 1.1rem;
}


/* =========================
   FORMULAIRES
========================= */

.add-form {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
}

.add-form input,
.add-form textarea,
.photo-form input,
.invite-form input {
  width: 100%;
  box-sizing: border-box;
  padding: 12px;
  border: 1.5px solid #e0e0e0;
  border-radius: 8px;
  background: #faf9f7;
  font-size: 14px;
  font-family: inherit;
}

.add-form textarea {
  min-height: 70px;
  resize: vertical;
}

.add-form input:focus,
.add-form textarea:focus,
.photo-form input:focus,
.invite-form input:focus {
  outline: none;
  border-color: #9C8570;
}


/* =========================
   BOUTONS
========================= */

.primary-btn {
  background: #9C8570;
  color: white;
  border: none;
  border-radius: 8px;
  padding: 12px 20px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: 0.2s;
}

.primary-btn:hover {
  background: #7c6a54;
}

.cancel-btn {
  background: #eee;
  color: #555;
  border: none;
  border-radius: 8px;
  padding: 12px 20px;
  cursor: pointer;
}

.delete-btn {
  background: #e74c3c;
  color: white;
  border: none;
  border-radius: 7px;
  padding: 7px 12px;
  cursor: pointer;
}

.delete-btn:hover {
  background: #c0392b;
}

.edit-btn {
  background: #f1c40f;
  color: white;
  border: none;
  border-radius: 7px;
  padding: 7px 12px;
  cursor: pointer;
}


/* =========================
   FORMATIONS
========================= */

.formation-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.formation-item {
  background: #f8f8f8;
  border-radius: 10px;
  padding: 16px;
}

.formation-main {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
}

.formation-info h4 {
  margin: 0;
  color: #2d2d2d;
}

.formation-info p {
  margin: 6px 0;
  color: #666;
  font-size: 14px;
}

.formation-duration {
  display: inline-block;
  margin-top: 5px;
  color: #9C8570;
  font-size: 13px;
}

.formation-price {
  font-size: 13px;
  font-weight: 600;
}

.formation-actions {
  display: flex;
  gap: 8px;
}


/* =========================
   GALERIE
========================= */

.photo-form {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr auto;
  gap: 10px;
  align-items: center;
}

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 18px;
}

.gallery-item {
  background: #f8f8f8;
  border-radius: 10px;
  padding: 12px;
}

.img-wrapper {
  height: 150px;
  background: #ececec;
  border-radius: 8px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
}

.gallery-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.photo-info {
  display: flex;
  flex-direction: column;
  gap: 3px;
  margin-bottom: 10px;
}

.photo-info strong {
  color: #2d2d2d;
}

.photo-info span {
  color: #9C8570;
  font-size: 13px;
}


/* =========================
   AVIS
========================= */

.testimonial-card {
  display: flex;
  gap: 24px;
  align-items: flex-start;
}

.testimonial-icon {
  width: 60px;
  height: 60px;
  border-radius: 14px;
  background: #f7f0d5;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 28px;
  flex-shrink: 0;
}

.testimonial-content {
  flex: 1;
}

.testimonial-content h4 {
  margin: 0 0 8px;
  font-size: 1.2rem;
}

.testimonial-content p {
  margin: 0 0 20px;
  color: #777;
}

.invite-form {
  display: flex;
  gap: 10px;
}

.invite-form input {
  flex: 1;
}

.invite-result {
  margin-top: 20px;
  padding: 16px;
  background: #f5faf7;
  border-radius: 10px;
}

.invite-result label {
  display: block;
  font-size: 13px;
  color: #555;
  margin-bottom: 8px;
}

.link-row {
  display: flex;
  gap: 8px;
}

.link-row input {
  flex: 1;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 7px;
}

.copy-btn {
  background: #2d2d2d;
  color: white;
  border: none;
  border-radius: 7px;
  padding: 0 16px;
  cursor: pointer;
}

.copied {
  display: block;
  margin-top: 8px;
  color: #1a7f3c;
  font-size: 13px;
}


/* =========================
   MODALE
========================= */

.edit-modal {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.55);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2000;
  padding: 20px;
}

.edit-modal-content {
  position: relative;
  background: white;
  border-radius: 14px;
  padding: 30px;
  width: 90%;
  max-width: 650px;
  max-height: 90vh;
  overflow-y: auto;
}

.edit-modal-content h4 {
  margin: 0 0 24px;
  font-size: 1.4rem;
}

.modal-close {
  position: absolute;
  right: 18px;
  top: 18px;
  border: none;
  background: transparent;
  font-size: 22px;
  cursor: pointer;
}

.modal-actions {
  display: flex;
  gap: 10px;
}


/* =========================
   ETATS
========================= */

.error {
  color: #c00;
  margin-top: 12px;
  font-size: 14px;
}

.empty-state {
  text-align: center;
  padding: 40px;
  color: #999;
}


/* =========================
   MOBILE
========================= */

@media (max-width: 900px) {

  .admin-dashboard {
    margin: 20px;
    padding: 24px;
  }

  .photo-form {
    grid-template-columns: 1fr;
  }

  .form-row {
    grid-template-columns: 1fr;
  }

}

@media (max-width: 640px) {

  .admin-dashboard {
    margin: 10px;
    padding: 18px;
    border-radius: 12px;
  }

  .admin-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
  }

  .admin-header h2 {
    font-size: 1.7rem;
  }

  .logout {
    width: 100%;
  }

  .admin-tabs {
    overflow-x: auto;
  }

  .admin-tabs button {
    min-width: 120px;
    padding: 12px 10px;
    font-size: 13px;
  }

  .section-header {
    align-items: flex-start;
    gap: 12px;
  }

  .content-card {
    padding: 18px;
  }

  .formation-main {
    flex-direction: column;
    align-items: flex-start;
  }

  .formation-actions {
    width: 100%;
  }

  .formation-actions button {
    flex: 1;
  }

  .testimonial-card {
    flex-direction: column;
  }

  .invite-form {
    flex-direction: column;
  }

  .invite-form button {
    width: 100%;
  }

  .link-row {
    flex-direction: column;
  }

  .copy-btn {
    padding: 10px;
  }

  .edit-modal-content {
    padding: 22px 18px;
  }

}

</style>