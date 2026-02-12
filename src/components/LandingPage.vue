<script setup>
import Calculator from './Calculator.vue'
import ServicesSection from './ServicesSection.vue'
import CatalogSection from './CatalogSection.vue'
import DistributorSection from './DistributorSection.vue'


const scrollToCalculator = () => {
  const el = document.getElementById('calculator-section')
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}
</script>

<template>
  <div class="landing-page">
    <!-- Navigation -->
    <nav class="navbar glass">
      <div class="container nav-content">
        <div class="logo">
          <img src="/logo_landing.png" alt="EDIFICA Obras y Servicios" class="logo-img">
        </div>
        <div class="nav-links">
          <a href="#features">Servicios</a>
          <a href="#projects">Proyectos</a>
          <button class="btn btn-primary" @click="scrollToCalculator">Cotizar Ahora</button>
        </div>
      </div>
    </nav>

    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-bg">
        <img src="/assets/uploads/hero_new.png" alt="Edifica Construction" class="bg-img">
        <div class="overlay"></div>
      </div>
      <div class="container hero-content">
        <h1>Calidad, Control y Compromiso Profesional</h1>
        <p class="subtitle">Construcción de casas, edificios y muebles a medida con supervisión constante.</p>
        <div class="hero-actions">
          <button class="btn btn-primary btn-lg" @click="scrollToCalculator">Calcula tu Inversión</button>
          <a href="#contact" class="btn btn-outline btn-lg text-white">Contáctanos</a>
        </div>
      </div>
    </section>

    <!-- Services Section -->
    <ServicesSection />

    <!-- Distributor Section -->
    <DistributorSection />

    <!-- Catalog Section -->
    <CatalogSection />

    <!-- Calculator & Catalog Section -->
    <section id="calculator-section" class="section bg-dark">
      <div class="container grid split-screen">
        <!-- Catalog (Left Side) -->
        <div class="catalog-wrapper">
          <div class="section-header text-left">
            <h2 class="text-white">Catálogo de Referencia</h2>
            <p class="text-gray">Inspírate con nuestras obras y materiales de alta calidad.</p>
          </div>
          <div class="grid catalog-grid-mini">
            <div class="catalog-card-mini">
              <span class="icon-mini">🏗️</span>
              <div>
                <h3>Obras</h3>
                <button class="btn-link-mini">Ver Galería &rarr;</button>
              </div>
            </div>
            <div class="catalog-card-mini">
              <span class="icon-mini">🪟</span>
              <div>
                <h3>Aberturas</h3>
                <button class="btn-link-mini">Ver Modelos &rarr;</button>
              </div>
            </div>
            <div class="catalog-card-mini">
              <span class="icon-mini">✨</span>
              <div>
                <h3>Acabados</h3>
                <button class="btn-link-mini">Ver Catálogo &rarr;</button>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Calculator (Right Side) -->
        <div class="calculator-wrapper">
          <Calculator />
        </div>
      </div>
    </section>



    <!-- Contact & Location (QR) -->
    <section id="contact" class="section">
      <div class="container grid split-screen">
        <div class="contact-info">
          <h2>Visítanos</h2>
          <p>Ven a conocer nuestro showroom y oficinas. Tecnología y diseño en un solo lugar.</p>
          <img src="/assets/uploads/local_2.png" alt="Showroom Edifica" class="showroom-img rounded">
          <div class="address mt-4">
            <p><strong>Ubicación:</strong> [Dirección del Local]</p>
            <p><strong>Horario:</strong> Lunes a Viernes 9:00 - 18:00</p>
          </div>
        </div>
        <div class="qr-action text-center">
          <h3>Hablemos por WhatsApp</h3>
          <p>Escanea el código para atención inmediata.</p>
          <img src="/assets/uploads/qr_code.png" alt="WhatsApp QR" class="qr-code">
          <br>
          <a href="https://wa.me/message/EDIFICA" class="btn btn-primary mt-4">Abrir WhatsApp Web</a>
          <br>
          <div class="socials mt-4">
            <a href="https://www.facebook.com/profile.php?id=61583482260018&amp;locale=es_LA" target="_blank" class="social-link">Síguenos en Facebook</a>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="footer">
      <div class="container text-center">
        <p>&copy; 2026 EDIFICA Obras y Servicios. Todos los derechos reservados.</p>
      </div>
    </footer>
  </div>
</template>

<style scoped>
.landing-page { overflow-x: hidden; }

/* Navbar */
.navbar {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
  padding: 1rem 0;
  transition: all 0.3s;
}
.glass {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  box-shadow: 0 2px 10px rgba(0,0,0,0.05);
}
.nav-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.logo {
  display: flex;
  align-items: center;
  gap: 1rem;
}
.logo-img { height: 60px; width: auto; }
.brand-name {
  font-weight: 800;
  font-size: 1.5rem;
  color: var(--color-primary);
  letter-spacing: -0.05em;
}
.nav-links a {
  margin-right: 2rem;
  font-weight: 500;
  color: var(--color-text);
}
.nav-links a:hover { color: var(--color-secondary); }

/* Hero */
.hero {
  position: relative;
  height: 90vh;
  display: flex;
  align-items: center;
  color: white;
  margin-top: 60px;
}
.hero-bg {
  position: absolute;
  top: 0; left: 0; width: 100%; height: 100%;
  z-index: -1;
}
.bg-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.overlay {
  position: absolute;
  top: 0; left: 0; width: 100%; height: 100%;
  background: linear-gradient(90deg, rgba(30,58,138,0.9) 0%, rgba(30,58,138,0.4) 100%);
}
.hero-content {
  max-width: 800px;
}
.hero h1 {
  font-size: 3.5rem;
  color: white;
  margin-bottom: 1.5rem;
  line-height: 1.1;
}
.subtitle {
  font-size: 1.25rem;
  margin-bottom: 2.5rem;
  opacity: 0.9;
}
.btn-lg {
  padding: 1rem 2rem;
  font-size: 1.1rem;
  margin-right: 1rem;
}
.text-white { color: white !important; }

/* Sections */
.section { padding: 5rem 0; }
.bg-light { background-color: #F9FAFB; }
.bg-dark { background-color: var(--color-primary); color: white; }
.section-header { margin-bottom: 4rem; }
.section-header h2 { font-size: 2.5rem; margin-bottom: 1rem; }

/* Features */
.features-grid {
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
}
.feature-card {
  background: white;
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 4px 6px rgba(0,0,0,0.05);
  transition: transform 0.3s;
}
.feature-card:hover { transform: translateY(-5px); }
.icon { font-size: 3rem; margin-bottom: 1rem; }

/* Catalog Mini (Integrated) */
.catalog-wrapper {
  padding-right: 2rem;
}
.catalog-grid-mini {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-top: 2rem;
}
.catalog-card-mini {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  background: rgba(255, 255, 255, 0.1);
  padding: 1rem;
  border-radius: 0.5rem;
  transition: background 0.3s;
}
.catalog-card-mini:hover {
  background: rgba(255, 255, 255, 0.2);
}
.icon-mini {
  font-size: 2rem;
}
.catalog-card-mini h3 {
  color: white;
  font-size: 1.1rem;
  margin-bottom: 0.25rem;
}
.btn-link-mini {
  background: none;
  border: none;
  color: var(--color-secondary);
  font-weight: 600;
  cursor: pointer;
  padding: 0;
  font-size: 0.9rem;
}
.btn-link-mini:hover {
  text-decoration: underline;
  color: var(--color-secondary-hover);
}

/* Contact */
.split-screen {
  grid-template-columns: 1fr 1fr;
  align-items: center;
}
.showroom-img {
  width: 100%;
  height: 300px;
  object-fit: cover;
  margin-top: 1.5rem;
}
.qr-code {
  width: 200px;
  height: 200px;
  margin: 1.5rem auto;
  border: 4px solid var(--color-primary);
  border-radius: 1rem;
}
.rounded { border-radius: 1rem; }
.mt-4 { margin-top: 1.5rem; }

/* Responsive */
@media (max-width: 768px) {
  .hero h1 { font-size: 2.5rem; }
  .split-screen { grid-template-columns: 1fr; gap: 4rem; }
  .nav-links { display: none; } /* Mobile menu simplified for MVP */
}
</style>
