<template>
  <div class="admin-dashboard">
    <!-- Admin Toolbar -->
    <nav class="admin-toolbar glass">
      <div class="container toolbar-content">
        <div class="status">
          <span class="dot"></span> Modo Edición Activo
        </div>
        <div class="actions">
          <button @click="saveChanges" class="btn btn-primary btn-save">Guardar Cambios</button>
          <button @click="logout" class="btn btn-outline text-white">Cerrar Sesión</button>
        </div>
      </div>
    </nav>
    
    <main class="editable-content">
      <div class="admin-notice container">
        <p>💡 <strong>Tip:</strong> Haz clic directamente en los textos o iconos para editarlos. Los cambios se guardan al presionar el botón de la barra superior.</p>
      </div>
      
      <!-- Reusing live components with editable prop -->
      <AboutUs :is-editable="true" />
      <BrandsSection :is-editable="true" />
      
    </main>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { contentStore } from '../utils/contentStore'
import AboutUs from '../components/AboutUs.vue'
import BrandsSection from '../components/BrandsSection.vue'

const router = useRouter()

const saveChanges = () => {
  // Changes are reactive in contentStore and saved to localStorage via watch
  alert('¡Cambios guardados con éxito! Los visitantes verán la nueva información.')
}

const logout = () => {
  sessionStorage.removeItem('admin_auth')
  router.push('/superuser')
}
</script>

<style scoped>
.admin-dashboard {
  min-height: 100vh;
  background: #f0f2f5;
  padding-top: 70px; /* Space for fixed toolbar */
}
.admin-toolbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: var(--color-primary);
  color: white;
  padding: 0.75rem 0;
  border-bottom: 2px solid var(--color-gold);
}
.toolbar-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.status {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 600;
  font-size: 0.9rem;
}
.dot {
  width: 8px;
  height: 8px;
  background: #10b981;
  border-radius: 50%;
  box-shadow: 0 0 10px #10b981;
}
.actions {
  display: flex;
  gap: 1rem;
}
.btn-save {
  box-shadow: 0 0 15px rgba(212, 175, 55, 0.3);
}
.admin-notice {
  background: #fffbeb;
  border: 1px solid #fef3c7;
  color: #92400e;
  padding: 1rem;
  border-radius: 8px;
  margin-top: 2rem;
  margin-bottom: -4rem;
  position: relative;
  z-index: 10;
  font-size: 0.9rem;
}
.editable-content {
  animation: fadeIn 0.5s ease;
}
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>
