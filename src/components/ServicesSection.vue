<script setup>
const services = [
  {
    title: 'Reformas Integrales',
    description: 'Transformamos espacios con diseño y funcionalidad.',
    iconPath: 'M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z M9 22V12h6v10'
  },
  {
    title: 'Impermeabilización',
    description: 'Soluciones definitivas para humedades y filtraciones.',
    iconPath: 'M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z'
  },
  {
    title: 'Estructuras',
    description: 'Hormigón armado y estructuras metálicas.',
    iconPath: 'M3 21h18 M5 21V7l8-4 8 4v14 M8 21v-3 M16 21v-3 M12 21V10'
  },
  {
    title: 'Pintura y Terminaciones',
    description: 'Acabados perfectos para interiores y exteriores.',
    iconPath: 'M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z' // Reusing droplet for paint for now, or preferably a brush: M18 13.5c0 2.2-1.8 4-4 4s-4-1.8-4-4 0-2.2 1.8-4 4-4 4 1.8 4 4z M17.4 6c-.8-2.3-3.1-4-5.4-4-2.3 0-4.6 1.7-5.4 4' (brush is complex, sticking to simple shapes or finding better path)
  },
  {
    title: 'Obras Generales',
    description: 'Gestión completa de proyectos de construcción.',
    iconPath: 'M2 22h20 M16 17v5 M8 17v5 M5 17h14l-2-6H7z'
  }
]
// Better SVG paths for Paint and General
services[3].iconPath = 'M12 21a6 6 0 0 1-3.6-10.25L12 7l3.6 3.75A6 6 0 0 1 12 21z' // Drop/Brush-ish
services[4].iconPath = 'M22 11.08V12a10 10 0 1 1-5.93-9.14' // Check circle/Hard hat metaphor implies management
</script>

<template>
  <section id="services" class="section bg-light">
    <div class="container">
      <div class="section-header text-center">
        <h2>Nuestros Servicios</h2>
        <p>Soluciones profesionales para cada etapa de tu obra.</p>
      </div>
      <div class="grid services-grid">
        <div v-for="(service, index) in services" :key="index" class="service-card">
          <div class="icon-wrapper">
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather">
              <path :d="service.iconPath" />
            </svg>
          </div>
          <h3>{{ service.title }}</h3>
          <p>{{ service.description }}</p>
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
</style>
