<template>
  <section id="about" class="section about-section">
    <div class="container">
      <div class="section-header text-center">
        <h2 class="text-primary">{{ aboutData.title }}</h2>
        <div class="header-line"></div>
      </div>
      
      <div class="about-intro text-center mb-5">
        <p class="lead">{{ aboutData.description }}</p>
        <p>{{ aboutData.extendedDescription }}</p>
        <div class="objective-box mt-4">
          <span class="emoji-icon">👉</span>
          <p class="objective-text"><strong>Nuestro objetivo es simple:</strong> {{ aboutData.objective }}</p>
        </div>
      </div>

      <div class="grid about-grid">
        <div v-for="(item, index) in aboutData.pillars" :key="index" class="pillar-card">
          <div class="pillar-icon">
            <span v-if="item.icon">{{ item.icon }}</span>
          </div>
          <h3>{{ item.title }}</h3>
          <p>{{ item.text }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const aboutData = {
  title: '¿Quiénes somos?',
  description: 'EDIFICA es una empresa orientada a brindar soluciones integrales para el hogar y la construcción, combinando obras, servicios y productos en un mismo lugar.',
  extendedDescription: 'Trabajamos con un enfoque práctico, moderno y eficiente, acompañando a cada cliente desde la idea hasta la ejecución, ofreciendo soluciones reales, funcionales y estéticas.',
  objective: 'Que cada espacio se transforme en algo mejor, más cómodo y con valor real.',
  pillars: [
    {
      title: 'Misión',
      icon: '🎯',
      text: 'Brindar soluciones integrales en obras, servicios y productos para el hogar, con calidad, compromiso y atención personalizada, facilitando cada etapa del proceso al cliente.'
    },
    {
      title: 'Visión',
      icon: '🚀',
      text: 'Ser una empresa referente en Córdoba en soluciones para el hogar, destacándonos por la confianza, la calidad de nuestros productos y la integración de servicios en un solo lugar.'
    },
    {
      title: 'Hacia dónde vamos',
      icon: '🧭',
      text: 'En EDIFICA buscamos crecer de manera sólida y escalable, incorporando nuevas líneas de productos y mejorando continuamente la experiencia del cliente. Apuntamos a convertirnos en un ecosistema completo.'
    }
  ]
}
</script>

<style scoped>
.about-section {
  background-color: #ffffff;
  padding: 6rem 0;
}
.header-line {
  width: 60px;
  height: 4px;
  background-color: var(--color-gold);
  margin: 1rem auto 2rem;
  border-radius: 2px;
}
.about-intro {
  max-width: 800px;
  margin: 0 auto;
}
.lead {
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--color-primary);
  margin-bottom: 1.5rem;
}
.objective-box {
  background-color: #f8f9fa;
  padding: 1.5rem;
  border-left: 4px solid var(--color-gold);
  display: inline-flex;
  align-items: center;
  gap: 1rem;
  border-radius: 0 8px 8px 0;
  text-align: left;
}
.objective-text {
  margin: 0;
  font-size: 1.1rem;
}
.about-grid {
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin-top: 4rem;
}
.pillar-card {
  padding: 2.5rem 2rem;
  background: #fdfdfd;
  border: 1px solid #eee;
  border-radius: 12px;
  transition: all 0.3s ease;
  text-align: center;
}
.pillar-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 30px rgba(0,0,0,0.05);
  border-color: var(--color-gold);
}
.pillar-icon {
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
}
.pillar-card h3 {
  margin-bottom: 1rem;
  color: var(--color-primary);
  font-weight: 700;
}
.pillar-card p {
  color: #666;
  line-height: 1.6;
}
</style>
