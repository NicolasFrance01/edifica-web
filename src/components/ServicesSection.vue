<script setup>
import { contentStore } from '../utils/contentStore'

const props = defineProps({
  isEditable: {
    type: Boolean,
    default: false
  }
})

const servicesData = contentStore.services
const services = servicesData.items
</script>

<template>
  <section id="services" class="section bg-light" :class="{ 'admin-mode': isEditable }">
    <div class="container">
      <div class="section-header text-center">
        <input v-if="isEditable" v-model="servicesData.title" class="edit-input h2-style text-center">
        <h2 v-else>{{ servicesData.title }}</h2>
        
        <input v-if="isEditable" v-model="servicesData.subtitle" class="edit-input p-style text-center">
        <p v-else>{{ servicesData.subtitle }}</p>
      </div>
      <div class="grid services-grid">
        <div v-for="(service, index) in services" :key="index" class="service-card">
          <div class="icon-wrapper">
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather">
              <path :d="service.iconPath" />
            </svg>
            <input v-if="isEditable" v-model="service.iconPath" class="edit-input icon-path-input" placeholder="SVG Path">
          </div>
          
          <input v-if="isEditable" v-model="service.title" class="edit-input h3-style text-center">
          <h3 v-else>{{ service.title }}</h3>
          
          <textarea v-if="isEditable" v-model="service.description" class="edit-textarea desc-style text-center" rows="2"></textarea>
          <p v-else>{{ service.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.services-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
}
.service-card {
  background: white;
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 4px 6px rgba(0,0,0,0.05);
  text-align: center;
  transition: transform 0.3s;
  flex: 1 1 300px;
  max-width: 350px;
}
.service-card:hover { transform: translateY(-5px); }
.icon-wrapper {
  color: var(--color-primary);
  margin-bottom: 1rem;
  display: flex;
  justify-content: center;
}
.feather {
  width: 3rem;
  height: 3rem;
}

/* Edit Styles */
.edit-input, .edit-textarea {
  background: rgba(0,0,0,0.05);
  border: 1px dotted var(--color-primary);
  color: inherit;
  padding: 0.3rem;
  border-radius: 4px;
  width: 100%;
  font-family: inherit;
}
.h2-style { font-size: 2.5rem; font-weight: 700; margin-bottom: 1rem; }
.h3-style { font-size: 1.25rem; font-weight: 800; margin-bottom: 0.75rem; }
.p-style { font-size: 1rem; opacity: 0.8; }
.desc-style { font-size: 0.95rem; line-height: 1.6; }
.icon-path-input { font-size: 0.6rem; margin-top: 0.5rem; }
.text-center { text-align: center; }
</style>
