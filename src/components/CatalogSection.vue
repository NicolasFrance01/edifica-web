<script setup>
import { ref } from 'vue'

const categories = [
  { id: 'escaleras', name: 'Escaleras', iconPath: 'M8 3v18 M16 3v18 M3 21h18 M3 15h18 M3 9h18' },
  { id: 'aberturas', name: 'Aberturas Piatri', iconPath: 'M3 3h18v18H3z M12 3v18 M3 12h18' },
  { id: 'interiorismo', name: 'Interiorismo', iconPath: 'M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4' },
  { id: 'artefactos', name: 'Artefactos', iconPath: 'M9 21h6 M12 3a7 7 0 0 0-7 7c0 2.3 1.3 4.3 3.3 5.3C9.8 16.1 10 17.5 10 19v1h4v-1c0-1.5.2-2.9 1.7-3.7 2-1 3.3-3 3.3-5.3a7 7 0 0 0-7-7z' }
]

const activeCategory = ref('escaleras')
</script>

<template>
  <section id="catalog-full" class="section">
    <div class="container">
      <div class="section-header text-center">
        <h2>Catálogo de Productos</h2>
        <p>Calidad y diseño para tu hogar.</p>
      </div>
      
      <div class="tabs">
        <button 
          v-for="cat in categories" 
          :key="cat.id"
          :class="['tab-btn', { active: activeCategory === cat.id }]"
          @click="activeCategory = cat.id"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-2">
            <path :d="cat.iconPath" />
          </svg>
          {{ cat.name }}
        </button>
      </div>

      <div class="catalog-content mt-4 fade-in">


        <div v-if="activeCategory === 'escaleras'" class="category-panel">
          <h3>Escaleras a Medida</h3>
          <p>Diseños exclusivos en madera, metal y vidrio para interiores y exteriores.</p>
          <div class="placeholder-box">
            <span>Visualización de Proyectos</span>
          </div>
        </div>

        <div v-if="activeCategory === 'aberturas'" class="category-panel">
          <h3>Distribuidor Oficial Piatri</h3>
          <p>La mejor tecnología en aberturas de PVC y Aluminio.</p>
           <div class="product-grid">
            <div class="product-card">Ventana Oscilobatiente</div>
            <div class="product-card">Puerta Pivotante</div>
            <div class="product-card">Portón Automático</div>
          </div>
        </div>

        <div v-if="activeCategory === 'interiorismo'" class="category-panel">
          <h3>Mobiliario y Vestidores</h3>
          <p>Optimización de espacios con diseño exclusivo.</p>
           <div class="product-grid">
            <div class="product-card">Placar Melamina</div>
            <div class="product-card">Vestidor Walk-in</div>
            <div class="product-card">Mueble TV</div>
          </div>
        </div>

        <div v-if="activeCategory === 'artefactos'" class="category-panel">
          <h3>Terminaciones y Complementos</h3>
          <p>Griferías, sanitarios y detalles constructivos.</p>
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
}
.fade-in { animation: fadeIn 0.3s ease; }
@keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
</style>
