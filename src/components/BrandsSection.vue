<template>
  <section id="brands" class="section brands-section">
    <div class="container">
      <div class="section-header text-center">
        <h2 class="text-white">Nuestras Marcas</h2>
        <p class="text-gray">Unidades de negocio especializadas para cada necesidad.</p>
        <div class="header-line"></div>
      </div>

      <div class="grid brands-grid">
        <div v-for="(brand, index) in brands" :key="index" class="brand-card">
          <div class="brand-image">
            <div class="brand-overlay">
              <span class="brand-tag">{{ brand.category }}</span>
            </div>
            <!-- Dynamic image placeholder - User can replace src later -->
            <img :src="brand.image" :alt="brand.name">
          </div>
          <div class="brand-content">
            <div class="brand-header">
              <span class="brand-emoji">{{ brand.emoji }}</span>
              <h3>{{ brand.name }}</h3>
            </div>
            <p>{{ brand.description }}</p>
            <div class="brand-footer">
              <p class="brand-hook">{{ brand.hook }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const brands = [
  {
    name: 'PIATTI',
    category: 'Puertas y portones',
    emoji: '🚪',
    description: 'Soluciones en puertas interiores y portones levadizos, combinando funcionalidad, seguridad y diseño.',
    hook: 'Pensado para quienes buscan mejorar accesos con productos durables y modernos.',
    image: 'https://images.unsplash.com/photo-1506377585622-bedcbb027afc?auto=format&fit=crop&q=80&w=800'
  },
  {
    name: 'LIV',
    category: 'Sillas y sillones',
    emoji: '🪑',
    description: 'Línea de mobiliario orientada al confort y diseño, con opciones para comedor, living y espacios modernos.',
    hook: 'Productos seleccionados para combinar estética, calidad y precio.',
    image: 'https://images.unsplash.com/photo-1567016432779-094069958ea5?auto=format&fit=crop&q=80&w=800'
  },
  {
    name: 'INTERIA',
    category: 'Interiorismo',
    emoji: '🏠',
    description: 'Soluciones de diseño interior enfocadas en cocinas, vestidores y optimización de espacios.',
    hook: 'Pensado para transformar ambientes en lugares funcionales, ordenados y visualmente atractivos.',
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=800'
  }
]
</script>

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
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2.5rem;
}
.brand-card {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}
.brand-card:hover {
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
}
.brand-content p {
  color: #ccc;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  font-size: 0.95rem;
}
.brand-hook {
  font-style: italic;
  color: var(--color-gold) !important;
  font-size: 0.9rem !important;
  margin: 0 !important;
  border-top: 1px solid rgba(255,255,255,0.1);
  padding-top: 1rem;
}
</style>
