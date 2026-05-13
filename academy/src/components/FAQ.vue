<template>
  <section class="faq" id="faq">
    <div class="container">
      <h2>Vous avez des questions ?</h2>
      <p class="section-sub">Nous avons les réponses ! Consultez notre FAQ pour trouver des réponses aux questions les plus fréquemment posées.</p>

      <div class="faq-grid">
        <div 
          v-for="(item, index) in faqItems" 
          :key="index"
          class="faq-item"
        >
          <button 
            class="faq-question"
            @click="toggleItem(index)"
            :class="{ active: expandedItems.has(index) }"
          >
            <span>{{ item.question }}</span>
            <span class="icon">+</span>
          </button>
          <div 
            v-if="expandedItems.has(index)"
            class="faq-answer"
          >
            {{ item.answer }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const expandedItems = ref(new Set())

const faqItems = [
  {
    question: "Est-ce que j'ai un nombre limité de salariés pour bénéficier d'une formation subventionnée ?",
    answer: "Non, il n'y a pas de limite de nombre de salariés. Toutes les entreprises, peu importe leur taille, peuvent bénéficier d'une formation subventionnée par les OPCO. Que vous soyez TPE, PME ou grande entreprise, nous pouvons vous proposer des formations adaptées."
  },
  {
    question: "Je suis gérant TNS, est-ce que je peux bénéficier d'une formation subventionnée ?",
    answer: "Oui, absolument ! En tant que gérant TNS (Travailleur Non Salarié), vous pouvez bénéficier de formations subventionnées par les OPCO. Nous vous accompagnons dans les démarches administratives pour accéder à ces aides."
  },
  {
    question: "Qui peut me garantir le remboursement des frais de formation ?",
    answer: "Les OPCO (Opérateurs de Compétences) sont responsables du financement des formations. Academy est agréée auprès de tous les OPCO majeurs, garantissant ainsi le remboursement des frais de formation pour les entreprises affiliées."
  },
  {
    question: "Je suis réticent à effectuer des formations car ça va occuper mes employés pendant le travail",
    answer: "C'est une préoccupation légitime. Nous proposons des formations en présentiel et en distanciel, flexibles et sur-mesure, qui peuvent s'adapter à votre calendrier et vos contraintes opérationnelles. Nos formations contribuent à l'amélioration des performances de vos employés."
  },
  {
    question: "Quels sont les délais de mise en place d'une formation ?",
    answer: "Les délais varient selon le type de formation. En général, une formation inter-entreprise peut démarrer rapidement. Pour les formations intra-entreprise, nous étudions vos besoins et proposons des dates adaptées à votre agenda."
  },
  {
    question: "Proposez-vous des formations en ligne (e-learning) ?",
    answer: "Oui, nous proposons des formations en Digital Learning (e-learning) pour certains domaines. Cette modalité offre une flexibilité maximale et permet d'apprendre à votre rythme."
  }
]

function toggleItem(index) {
  if (expandedItems.value.has(index)) {
    expandedItems.value.delete(index)
  } else {
    expandedItems.value.add(index)
  }
}
</script>

<style scoped>
.faq {
  background: var(--cream);
  padding: 80px 5%;
}

.faq h2 {
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

.faq-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  gap: 24px;
}

.faq-item {
  background: white;
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  overflow: hidden;
  transition: box-shadow 0.2s;
}

.faq-item:hover {
  box-shadow: 0 8px 24px rgba(175, 164, 206, 0.1);
}

.faq-question {
  width: 100%;
  padding: 20px 24px;
  background: white;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  font-size: 15px;
  font-weight: 600;
  color: var(--text);
  font-family: 'Outfit', sans-serif;
  transition: background-color 0.2s;
}

.faq-question:hover {
  background-color: rgba(175, 164, 206, 0.05);
}

.faq-question.active {
  color: var(--primary);
}

.faq-question span:first-child {
  text-align: left;
  flex: 1;
}

.icon {
  font-size: 24px;
  color: var(--accent);
  font-weight: 300;
  transition: transform 0.3s;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.faq-question.active .icon {
  transform: rotate(45deg);
}

.faq-answer {
  padding: 0 24px 20px 24px;
  color: var(--text-mid);
  font-size: 14px;
  line-height: 1.7;
  animation: slideDown 0.3s ease-out;
}

@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Responsive */
@media (max-width: 768px) {
  .faq {
    padding: 60px 5%;
  }

  .faq h2 {
    font-size: 28px;
  }

  .faq-grid {
    grid-template-columns: 1fr;
  }

  .faq-question {
    padding: 16px 20px;
    font-size: 14px;
  }

  .faq-answer {
    padding: 0 20px 16px 20px;
    font-size: 13px;
  }
}

@media (max-width: 480px) {
  .faq {
    padding: 50px 4%;
  }

  .faq h2 {
    font-size: 24px;
  }

  .section-sub {
    font-size: 14px;
    margin-bottom: 32px;
  }

  .faq-question {
    padding: 14px 16px;
    font-size: 13px;
  }

  .faq-answer {
    padding: 0 16px 14px 16px;
    font-size: 12px;
  }

  .icon {
    font-size: 20px;
  }
}
</style>
