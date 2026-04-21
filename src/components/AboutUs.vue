<script setup>
import { contentStore } from '../utils/contentStore'
const props = defineProps({
  isEditable: {
    type: Boolean,
    default: false
  }
})
const aboutData = contentStore.about
</script>

<template>
  <section id="about" class="section about-section" :class="{ 'admin-mode': isEditable }">
    <div class="container">
      <div class="section-header text-center">
        <h2 v-if="!isEditable" class="text-primary">{{ aboutData.title }}</h2>
        <input v-else v-model="aboutData.title" class="edit-input h2-style">
        <div class="header-line"></div>
      </div>
      
      <div class="about-intro text-center mb-5">
        <textarea v-if="isEditable" v-model="aboutData.description" class="edit-textarea lead-style" rows="2"></textarea>
        <p v-else class="lead">{{ aboutData.description }}</p>
        
        <textarea v-if="isEditable" v-model="aboutData.extendedDescription" class="edit-textarea" rows="3"></textarea>
        <p v-else>{{ aboutData.extendedDescription }}</p>
        
        <div class="objective-box mt-4">
          <p class="objective-text">
            <strong>Nuestro objetivo es simple:</strong> 
            <span v-if="!isEditable"> {{ aboutData.objective }}</span>
            <input v-else v-model="aboutData.objective" class="edit-input objective-inline">
          </p>
        </div>
      </div>

      <div class="grid about-grid">
        <div v-for="(item, index) in aboutData.pillars" :key="index" class="pillar-card">
          <div class="pillar-icon">
            <input v-if="isEditable" v-model="item.icon" class="edit-input icon-style">
            <span v-else-if="item.icon">{{ item.icon }}</span>
          </div>
          <input v-if="isEditable" v-model="item.title" class="edit-input h3-style">
          <h3 v-else>{{ item.title }}</h3>
          
          <textarea v-if="isEditable" v-model="item.text" class="edit-textarea card-text-style" rows="3"></textarea>
          <p v-else>{{ item.text }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

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

/* Edit Modes Styles */
.edit-input, .edit-textarea {
  width: 100%;
  padding: 0.5rem;
  border: 1px dotted var(--color-gold);
  background: rgba(212, 175, 55, 0.05);
  color: inherit;
  font-family: inherit;
  text-align: inherit;
  border-radius: 4px;
}
.edit-input:focus, .edit-textarea:focus {
  outline: none;
  background: rgba(212, 175, 55, 0.1);
  border-style: solid;
}
.h2-style { font-size: 2.5rem; font-weight: 800; border: none; background: transparent; }
.lead-style { font-size: 1.25rem; font-weight: 600; color: var(--color-primary); }
.objective-inline { display: inline-block; width: auto; min-width: 300px; padding: 0 0.5rem; border-top: none; border-left: none; border-right: none; border-radius: 0; }
.h3-style { font-size: 1.5rem; font-weight: 700; color: var(--color-primary); margin-bottom: 1rem; }
.card-text-style { font-size: 0.95rem; line-height: 1.6; color: #666; }
.icon-style { font-size: 1.5rem; width: 50px; text-align: center; }

.admin-mode .pillar-card:hover { transform: none; box-shadow: none; }
</style>
