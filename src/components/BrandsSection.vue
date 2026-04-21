<script setup>
import { computed } from 'vue'
import { contentStore } from '../utils/contentStore'

const props = defineProps({
  isEditable: {
    type: Boolean,
    default: false
  }
})

const brands = contentStore.brands

const gridCols = computed(() => {
  const len = brands.length
  if (len === 4) return 4
  return 3 // Default as per user request (3 or 4)
})

const addBrand = () => {
  contentStore.addBrand()
}

const removeBrand = (index) => {
  if (confirm('¿Estás seguro de que deseas eliminar esta marca?')) {
    contentStore.removeBrand(index)
  }
}
</script>

<template>
  <section id="brands" class="section brands-section" :class="{ 'admin-mode': isEditable }">
    <div class="container">
      <div class="section-header text-center">
        <h2 class="text-white">Nuestras Marcas</h2>
        <p class="section-subtitle">Unidades de negocio especializadas para cada necesidad.</p>
        <div class="header-line"></div>
      </div>

      <div class="grid brands-grid" :style="{ gridTemplateColumns: `repeat(${gridCols}, 1fr)` }">
        <div v-for="(brand, index) in brands" :key="index" class="brand-card">
          <button v-if="isEditable" @click="removeBrand(index)" class="delete-btn" title="Eliminar Marca">×</button>
          <div class="brand-image">
            <div class="brand-overlay">
              <input v-if="isEditable" v-model="brand.category" class="edit-input tag-style">
              <span v-else class="brand-tag">{{ brand.category }}</span>
            </div>
            <img :src="brand.image" :alt="brand.name">
            <div v-if="isEditable" class="img-edit-overlay">
              <input v-model="brand.image" class="edit-input url-style" placeholder="URL de imagen">
            </div>
          </div>
          <div class="brand-content">
            <div class="brand-header">
              <input v-if="isEditable" v-model="brand.emoji" class="edit-input emoji-style">
              <span v-else class="brand-emoji">{{ brand.emoji }}</span>
              
              <input v-if="isEditable" v-model="brand.name" class="edit-input h3-style">
              <h3 v-else>{{ brand.name }}</h3>
            </div>
            
            <textarea v-if="isEditable" v-model="brand.description" class="edit-textarea desc-style" rows="3"></textarea>
            <p v-else>{{ brand.description }}</p>
            
            <div class="brand-footer">
              <input v-if="isEditable" v-model="brand.hook" class="edit-input hook-style">
              <p v-else class="brand-hook">{{ brand.hook }}</p>
            </div>
          </div>
        </div>

        <!-- Add Brand Button (Admin Only) -->
        <div v-if="isEditable" class="brand-card add-card" @click="addBrand">
          <div class="add-content">
            <span class="plus-icon">+</span>
            <span>Agregar Nueva Marca</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.brands-section {
  background-color: var(--color-primary);
  color: white;
  padding: 6rem 0;
}
.header-line {
  width: 60px;
  height: 4px;
  background-color: var(--color-gold);
  margin: 1rem auto 3rem;
  border-radius: 2px;
}
.brands-grid {
  display: grid;
  gap: 2.5rem;
}
.brand-card {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  overflow: hidden;
  position: relative;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}
.brand-card:hover:not(.add-card) {
  transform: translateY(-12px);
  background: rgba(255, 255, 255, 0.08);
  border-color: var(--color-gold);
  box-shadow: 0 20px 40px rgba(0,0,0,0.3);
}

.brand-image {
  height: 220px;
  position: relative;
  overflow: hidden;
}
.brand-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}
.brand-card:hover .brand-image img {
  transform: scale(1.1);
}
.brand-overlay {
  position: absolute;
  top: 0; left: 0; width: 100%; height: 100%;
  background: linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.6));
  z-index: 1;
  display: flex;
  align-items: flex-end;
  padding: 1.5rem;
}
.brand-tag {
  border: 1px solid var(--color-gold);
  color: white;
  padding: 0.4rem 1rem;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 700;
  text-transform: uppercase;
}
.brand-content {
  padding: 2rem;
}
.brand-header {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1rem;
}
.brand-emoji {
  font-size: 1.5rem;
}
.brand-header h3 {
  font-size: 1.5rem;
  font-weight: 800;
  letter-spacing: 1px;
  margin: 0;
  color: white;
}
.brand-content p {
  color: #ccc;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  font-size: 0.95rem;
}
.section-subtitle {
  font-size: 1.5rem;
  opacity: 0.8;
  font-weight: 300;
  color: #fff;
  margin-top: 0.5rem;
}
.brand-hook {
  font-style: italic;
  color: var(--color-gold) !important;
  font-size: 0.9rem !important;
  margin: 0 !important;
  border-top: 1px solid rgba(255,255,255,0.1);
  padding-top: 1rem;
}

/* Edit Styles */
.edit-input, .edit-textarea {
  background: rgba(255,255,255,0.1);
  border: 1px dotted var(--color-gold);
  color: white;
  padding: 0.3rem;
  border-radius: 4px;
  width: 100%;
}
.tag-style { border-radius: 20px; padding: 0.4rem 1rem; font-size: 0.85rem; font-weight: 700; text-transform: uppercase; border-style: solid; text-align: center; }
.emoji-style { width: 40px; text-align: center; }
.h3-style { font-size: 1.5rem; font-weight: 800; }
.desc-style { font-size: 0.95rem; line-height: 1.6; color: #ccc; }
.hook-style { font-style: italic; color: var(--color-gold); font-size: 0.9rem; }
.url-style { font-size: 0.7rem; color: #aaa; }

.img-edit-overlay {
  position: absolute;
  top: 10px;
  right: 10px;
  width: 150px;
  z-index: 5;
}

.delete-btn {
  position: absolute;
  top: 10px;
  left: 10px;
  background: #f87171;
  color: white;
  border: none;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  cursor: pointer;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
}

.add-card {
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px dashed rgba(255,255,255,0.3);
  cursor: pointer;
  min-height: 400px;
}
.add-card:hover {
  background: rgba(255,255,255,0.1);
  border-color: var(--color-gold);
}
.add-content {
  text-align: center;
  color: #ccc;
}
.plus-icon {
  display: block;
  font-size: 4rem;
  line-height: 1;
  margin-bottom: 1rem;
  color: var(--color-gold);
}

@media (max-width: 992px) {
  .brands-grid { grid-template-columns: repeat(2, 1fr) !important; }
}
@media (max-width: 600px) {
  .brands-grid { grid-template-columns: 1fr !important; }
}
</style>
