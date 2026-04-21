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
import { contentStore } from '../utils/contentStore'
const aboutData = contentStore.about
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
  border-top: 2px solid var(--color-gold);
  border-bottom: 2px solid var(--color-gold);
  display: block;
  width: 100%;
  border-radius: 8px;
  text-align: center;
}
.objective-text {
  margin: 0;
  font-size: 1.15rem;
  line-height: 1.4;
  padding: 0 1rem;
}

@media (max-width: 768px) {
  .objective-text {
    white-space: normal;
  }
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
