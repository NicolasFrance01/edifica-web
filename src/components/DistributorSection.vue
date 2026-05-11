<script setup>
import { contentStore } from '../utils/contentStore'

const props = defineProps({
  isEditable: {
    type: Boolean,
    default: false
  }
})

const distData = contentStore.distributor
</script>

<template>
  <section class="section distributor-section" :class="{ 'admin-mode': isEditable }">
    <div class="overlay"></div>
    <div class="container text-center relative z-10">
      <div class="badge-wrapper">
        <input v-if="isEditable" v-model="distData.badge" class="edit-input badge-style text-center">
        <span v-else class="badge">{{ distData.badge }}</span>
      </div>
      
      <input v-if="isEditable" v-model="distData.title" class="edit-input title-style text-center">
      <h2 v-else class="title">{{ distData.title }}</h2>
      
      <input v-if="isEditable" v-model="distData.subtitle" class="edit-input subtitle-style text-center">
      <p v-else class="subtitle">{{ distData.subtitle }}</p>
      
      <div class="grid distributor-grid mt-5">
        <div v-for="(benefit, index) in distData.benefits" :key="index" class="benefit-card">
          <div class="icon-wrapper">
             <!-- Simplified icon handling, for full control icons could be SVGs in store too -->
             <span class="icon-placeholder">✨</span>
          </div>
          
          <input v-if="isEditable" v-model="benefit.title" class="edit-input h3-style text-center">
          <h3 v-else>{{ benefit.title }}</h3>
          
          <textarea v-if="isEditable" v-model="benefit.description" class="edit-textarea desc-style text-center" rows="2"></textarea>
          <p v-else>{{ benefit.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.distributor-section {
  background: linear-gradient(135deg, #1e3a8a 0%, #111827 100%);
  color: white;
  position: relative;
  overflow: hidden;
  padding: 6rem 0;
}
.overlay {
  position: absolute;
  top: 0; left: 0; width: 100%; height: 100%;
  background: radial-gradient(circle at center, rgba(255,255,255,0.05) 0%, transparent 70%);
}
.z-10 { position: relative; z-index: 10; }

.badge-wrapper { margin-bottom: 1rem; }
.badge {
  background: rgba(255, 215, 0, 0.15);
  color: #fbbf24;
  border: 1px solid #fbbf24;
  padding: 0.5rem 1.5rem;
  border-radius: 2rem;
  font-weight: 600;
  text-transform: uppercase;
  font-size: 0.8rem;
  letter-spacing: 0.1em;
}

.title {
  font-size: 4rem;
  font-weight: 900;
  margin: 1rem 0;
  letter-spacing: -0.05em;
  background: linear-gradient(to right, #fff, #94a3b8);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.subtitle {
  font-size: 1.5rem;
  opacity: 0.8;
  font-weight: 300;
}

.distributor-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
  margin-top: 4rem;
}

.benefit-card {
  background: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(10px);
  padding: 2.5rem;
  border-radius: 1.5rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
  flex: 1 1 280px;
  max-width: 350px;
}
.benefit-card:hover {
  transform: translateY(-10px);
  background: rgba(0, 0, 0, 0.6);
  border-color: #fbbf24;
}

.icon-wrapper {
  color: #fbbf24;
  margin-bottom: 1.5rem;
  display: flex;
  justify-content: center;
}

.benefit-card h3 {
  font-size: 1.25rem;
  margin-bottom: 0.75rem;
  font-weight: 800;
  color: #ffffff;
}
.benefit-card p {
  opacity: 0.9;
  line-height: 1.6;
  color: #f3f4f6;
}

.btn-gold {
  background: #fbbf24;
  color: #111827;
  font-weight: 700;
  padding: 1rem 2.5rem;
  border-radius: 0.5rem;
  margin-top: 3rem;
  display: inline-block;
  transition: transform 0.2s;
}
.btn-gold:hover {
  transform: scale(1.05);
  box-shadow: 0 0 20px rgba(251, 191, 36, 0.4);
}

/* Edit Styles */
.edit-input, .edit-textarea {
  background: rgba(255,255,255,0.1);
  border: 1px dotted var(--color-gold);
  color: white;
  padding: 0.3rem;
  border-radius: 4px;
  width: 100%;
  font-family: inherit;
}
.badge-style { font-size: 0.8rem; text-transform: uppercase; letter-spacing: 0.1em; color: #fbbf24; }
.title-style { font-size: 4rem; font-weight: 900; background: none; -webkit-text-fill-color: white; }
.subtitle-style { font-size: 1.5rem; font-weight: 300; opacity: 0.8; }
.h3-style { font-size: 1.25rem; font-weight: 800; }
.desc-style { font-size: 1rem; opacity: 0.9; }
.icon-placeholder { font-size: 2rem; }
</style>
