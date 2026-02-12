<template>
  <section class="section distributor-section">
    <div class="overlay"></div>
    <div class="container text-center relative z-10">
      <div class="badge-wrapper">
        <span class="badge">Distribuidor Oficial</span>
      </div>
      <h2 class="title">PIATRI</h2>
      <p class="subtitle">Aberturas de Alta Prestación | PVC & Aluminio</p>
      
      <div class="grid distributor-grid mt-5">
        <div class="benefit-card">
          <div class="icon-wrapper">
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
              <polyline points="22 4 12 14.01 9 11.01"></polyline>
            </svg>
          </div>
          <h3>Garantía de Fábrica</h3>
          <p>Respaldo directo y servicio post-venta asegurado.</p>
        </div>
        <div class="benefit-card">
          <div class="icon-wrapper">
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather">
              <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
            </svg>
          </div>
          <h3>Instalación Certificada</h3>
          <p>Personal capacitado bajo estándares internacionales.</p>
        </div>
        <div class="benefit-card">
          <div class="icon-wrapper">
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather">
              <line x1="12" y1="1" x2="12" y2="23"></line>
              <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
            </svg>
          </div>
          <h3>Precios Directos</h3>
          <p>Accede a tarifas preferenciales sin intermediarios.</p>
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
  font-weight: 700;
}
.benefit-card p {
  opacity: 0.7;
  line-height: 1.6;
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
</style>
