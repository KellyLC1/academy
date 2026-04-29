<template>
  <section class="haccp" id="haccp">
    <div class="container">

      <h2>Centre spécialisé HACCP</h2>
      <p class="section-sub">
        VAL Academy est la référence nationale en formations hygiène alimentaire HACCP,
        essentielles pour garantir la conformité et la sécurité alimentaire en entreprise.
      </p>

      <div class="editorial">
        <div class="content-block">
          <h3>Qu'est-ce que le HACCP ?</h3>
          <p>
            Le HACCP (Hazard Analysis and Critical Control Point) est une méthode scientifique et systématique 
            permettant d'identifier et de maîtriser les dangers sanitaires dans la chaîne alimentaire. 
            Il s'agit d'une approche préventive qui garantit la sécurité alimentaire à chaque étape de la production, 
            de la transformation et de la distribution des aliments.
          </p>
          <p>
            Obligatoire dans l'Union Européenne depuis 1995, la méthode HACCP est devenue l'outil incontournable 
            pour tous les établissements alimentaires : restauration commerciale, cuisines centrales, industries agro-alimentaires, 
            boulangeries, pâtisseries, boucheries, et bien d'autres secteurs d'activité.
          </p>
        </div>

        <div class="content-block">
          <h3>Pourquoi le HACCP est essentiel ?</h3>
          <ul class="benefits-list">
            <li><strong>Protection des consommateurs</strong> : Prévenir les intoxications alimentaires et les contaminations</li>
            <li><strong>Conformité légale</strong> : Respecter les normes réglementaires françaises et européennes</li>
            <li><strong>Traçabilité</strong> : Documenter et suivre chaque étape du processus alimentaire</li>
            <li><strong>Réduction des risques</strong> : Identifier les points critiques avant qu'un problème ne survienne</li>
            <li><strong>Crédibilité professionnelle</strong> : Rassurer vos clients et renforcer votre réputation</li>
            <li><strong>Économies</strong> : Éviter les rappels produits et les fermetures administratives coûteuses</li>
          </ul>
        </div>

        <div class="content-block">
          <h3>Les 7 principes du HACCP</h3>
          <div class="principles-grid">
            <div class="principle">
              <span class="number">1</span>
              <p>Analyser les dangers potentiels (chimiques, biologiques, physiques)</p>
            </div>
            <div class="principle">
              <span class="number">2</span>
              <p>Identifier les points critiques de maîtrise</p>
            </div>
            <div class="principle">
              <span class="number">3</span>
              <p>Fixer les limites critiques pour chaque point</p>
            </div>
            <div class="principle">
              <span class="number">4</span>
              <p>Mettre en place un système de surveillance</p>
            </div>
            <div class="principle">
              <span class="number">5</span>
              <p>Définir les mesures correctives à prendre</p>
            </div>
            <div class="principle">
              <span class="number">6</span>
              <p>Établir des procédures de vérification</p>
            </div>
            <div class="principle">
              <span class="number">7</span>
              <p>Documenter et archiver toutes les informations</p>
            </div>
          </div>
        </div>
      </div>

      <div class="grid">
        <div class="card">
          <h3>Hygiène alimentaire</h3>
          <p>Maîtrise des principes fondamentaux de l'hygiène en restauration et industrie alimentaire.</p>
        </div>
        <div class="card">
          <h3>Normes HACCP</h3>
          <p>Application rigoureuse de la méthode HACCP pour identifier et contrôler les dangers.</p>
        </div>
        <div class="card">
          <h3>Conformité sanitaire</h3>
          <p>Mise en conformité totale avec la réglementation européenne et française en vigueur.</p>
        </div>
        <div class="card">
          <h3>Sécurité alimentaire</h3>
          <p>Protégez vos clients, votre équipe et votre établissement contre tout risque sanitaire.</p>
        </div>
      </div>

      <div class="tags">
        <span>Hygiène alimentaire</span>
        <span>Normes HACCP</span>
        <span>Conformité sanitaire</span>
        <span>Sécurité alimentaire</span>
        <span>Restauration commerciale</span>
        <span>Industrie agroalimentaire</span>
      </div>

    </div>
  </section>
</template>

<style scoped>
.haccp {
  background: white;
  text-align: center;
}

.haccp h2 {
  font-size: 42px;
  font-weight: 700;
  color: var(--text);
  margin-bottom: 16px;
}

.section-sub {
  font-size: 16px;
  color: var(--text-soft);
  max-width: 640px;
  margin: 14px auto 48px;
  line-height: 1.7;
}

.editorial {
  background: linear-gradient(135deg, rgba(245, 223, 77, 0.15) 0%, rgba(245, 223, 77, 0.08) 100%);
  border: 2px solid var(--accent);
  border-radius: var(--radius-lg);
  padding: 48px;
  margin-bottom: 48px;
  text-align: left;
}

.content-block {
  margin-bottom: 40px;
}

.content-block:last-child {
  margin-bottom: 0;
}

.editorial h3 {
  font-size: 20px;
  font-weight: 600;
  color: var(--text);
  margin-bottom: 20px;
  text-align: center;
}

.editorial p {
  font-size: 15px;
  color: var(--text-soft);
  line-height: 1.8;
  margin-bottom: 16px;
}

.editorial p:last-child {
  margin-bottom: 0;
}

.benefits-list {
  list-style: none;
  padding: 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
}

.benefits-list li {
  font-size: 15px;
  color: var(--text-soft);
  line-height: 1.6;
  padding-left: 24px;
  position: relative;
}

.benefits-list li::before {
  content: "✓";
  position: absolute;
  left: 0;
  color: var(--accent);
  font-weight: bold;
  font-size: 18px;
}

.principles-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 16px;
  margin-top: 24px;
}

.principle {
  background: white;
  border: 2px solid rgba(245, 166, 35, 0.2);
  border-radius: var(--radius-md);
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  transition: all 0.25s;
}

.principle:hover {
  border-color: var(--accent);
  background: rgba(245, 223, 77, 0.1);
}

.principle .number {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: var(--accent);
  color: #2A2A2A;
  border-radius: 50%;
  font-weight: 700;
  font-size: 18px;
}

.principle p {
  font-size: 14px;
  color: var(--text-soft);
  line-height: 1.5;
  text-align: center;
}

.grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  margin-bottom: 40px;
}

.card {
  background: var(--primary-pale);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  padding: 28px 20px;
  transition: transform 0.25s, box-shadow 0.25s;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 32px rgba(245, 223, 77, 0.25);
}

.card h3 {
  font-family: var(--font-body);
  font-size: 16px;
  font-weight: 600;
  color: var(--text);
  margin-bottom: 12px;
}

.card p {
  font-size: 14px;
  color: var(--text-soft);
  line-height: 1.6;
}

.tags {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px;
}

.tags span {
  background: var(--accent);
  color: #2A2A2A;
  padding: 9px 18px;
  border-radius: 999px;
  font-size: 13px;
  font-weight: 600;
}

@media (max-width: 768px) {
  .haccp h2 {
    font-size: 28px;
  }

  .editorial {
    padding: 32px 20px;
  }

  .benefits-list {
    grid-template-columns: 1fr;
  }

  .principles-grid {
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  }

  .grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 480px) {
  .haccp h2 {
    font-size: 24px;
  }

  .grid {
    grid-template-columns: 1fr;
  }

  .principles-grid {
    grid-template-columns: 1fr;
  }
}
</style>
