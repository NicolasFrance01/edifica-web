<script setup>
import { ref } from 'vue'
import { contentStore } from '../utils/contentStore'

const props = defineProps({
  isEditable: {
    type: Boolean,
    default: false
  }
})

const catalogData = contentStore.catalog
const categories = catalogData.categories
const activeCategory = ref('escaleras')

const currentEditingCat = ref(null)

const triggerUpload = (cat) => {
  currentEditingCat.value = cat
  document.getElementById('catalog-file-input').click()
}

const handleImageUpload = (event, cat) => {
  const file = event.target.files[0]
  if (file) {
    const reader = new FileReader()
    reader.onload = (e) => {
      cat.image = e.target.result
    }
    reader.readAsDataURL(file)
  }
}

const addItem = (cat) => {
  cat.items.push('Nuevo Item')
}

const removeItem = (cat, index) => {
  cat.items.splice(index, 1)
}
</script>

<template>
  <section id="catalog-full" class="section" :class="{ 'admin-mode': isEditable }">
    <div class="container">
      <!-- Hidden File Input -->
      <input 
        type="file" 
        id="catalog-file-input" 
        style="display: none;" 
        accept="image/*"
        @change="handleImageUpload($event, currentEditingCat)"
      >

      <div class="section-header text-center">
        <input v-if="isEditable" v-model="catalogData.title" class="edit-input h2-style text-center">
        <h2 v-else>{{ catalogData.title }}</h2>
        
        <input v-if="isEditable" v-model="catalogData.subtitle" class="edit-input p-style text-center">
        <p v-else>{{ catalogData.subtitle }}</p>
      </div>
      
      <div class="tabs">
        <button 
          v-for="cat in categories" 
          :key="cat.id"
          :class="['tab-btn', { active: activeCategory === cat.id }]"
          @click="activeCategory = cat.id"
        >
          <input v-if="isEditable" v-model="cat.name" class="edit-input tab-input">
          <span v-else>{{ cat.name }}</span>
        </button>
      </div>

      <div class="catalog-content mt-4 fade-in">
        <div v-for="cat in categories" :key="cat.id">
          <div v-if="activeCategory === cat.id" class="category-panel">
            <div class="panel-layout">
              <div class="panel-text">
                <input v-if="isEditable" v-model="cat.title" class="edit-input h3-style">
                <h3 v-else>{{ cat.title }}</h3>
                
                <textarea v-if="isEditable" v-model="cat.description" class="edit-textarea desc-style" rows="3"></textarea>
                <p v-else>{{ cat.description }}</p>
                
                <div v-if="cat.items && cat.items.length > 0" class="product-grid">
                  <div v-for="(item, idx) in cat.items" :key="idx" class="product-card">
                    <input v-if="isEditable" v-model="cat.items[idx]" class="edit-input item-input">
                    <span v-else>{{ item }}</span>
                    <button v-if="isEditable" @click="removeItem(cat, idx)" class="remove-item">×</button>
                  </div>
                  <button v-if="isEditable" @click="addItem(cat)" class="add-item-btn">+ Agregar Item</button>
                </div>
                <div v-else-if="isEditable" class="mt-4">
                  <button @click="addItem(cat)" class="add-item-btn">+ Empezar Lista de Items</button>
                </div>
              </div>
              
              <div class="panel-image">
                <img :src="cat.image" :alt="cat.title" class="cat-img">
                <button v-if="isEditable" class="btn-upload-cat" @click="triggerUpload(cat)">📷 Cambiar Imagen</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.tabs {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 3rem;
  border-bottom: 2px solid #eee;
  padding-bottom: 1rem;
}
.tab-btn {
  padding: 0.75rem 1.5rem;
  border: none;
  background: transparent;
  cursor: pointer;
  transition: all 0.3s;
  font-weight: 600;
  color: #888;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  font-size: 0.9rem;
}
.tab-btn:hover { color: var(--color-primary); }
.tab-btn.active {
  color: var(--color-primary);
  border-bottom: 3px solid var(--color-primary);
  margin-bottom: -1.2rem; /* Pull down to overlap border */
}

.category-panel {
  text-align: center;
  padding: 2rem;
  background: white;
  border-radius: 1rem;
  box-shadow: 0 4px 6px rgba(0,0,0,0.05);
}

.placeholder-box {
  background: #f3f4f6;
  height: 300px;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;
  color: #9ca3af;
  font-weight: 500;
  border: 2px dashed #e5e7eb;
}

.product-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  margin-top: 2rem;
}
.product-card {
  padding: 2rem;
  background: #f8f9fa;
  border-radius: 0.5rem;
  font-weight: 600;
  color: var(--color-text);
  border: 1px solid #eee;
  position: relative;
}

.panel-layout {
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  gap: 3rem;
  align-items: center;
  text-align: left;
}
.cat-img {
  width: 100%;
  height: 400px;
  object-fit: cover;
  border-radius: 1rem;
}
.panel-image { position: relative; }

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
.p-style { font-size: 1.1rem; opacity: 0.8; }
.h3-style { font-size: 1.8rem; font-weight: 800; margin-bottom: 1rem; }
.desc-style { font-size: 1.1rem; line-height: 1.6; color: #666; }
.tab-input { text-align: center; font-weight: 600; }
.item-input { background: none; border: none; text-align: center; }

.btn-upload-cat {
  position: absolute;
  top: 10px;
  right: 10px;
  background: var(--color-gold);
  color: var(--color-primary);
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  font-weight: 700;
  cursor: pointer;
  box-shadow: 0 4px 10px rgba(0,0,0,0.2);
}

.remove-item {
  position: absolute;
  top: 5px;
  right: 5px;
  background: #f87171;
  color: white;
  border: none;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  cursor: pointer;
}

.add-item-btn {
  background: none;
  border: 2px dashed #ccc;
  padding: 1rem;
  border-radius: 0.5rem;
  color: #888;
  cursor: pointer;
  font-weight: 600;
}

.fade-in { animation: fadeIn 0.3s ease; }
@keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }

@media (max-width: 992px) {
  .panel-layout { grid-template-columns: 1fr; }
  .cat-img { height: 250px; }
}
</style>
