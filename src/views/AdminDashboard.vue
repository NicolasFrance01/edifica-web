<template>
  <div class="admin-dashboard">
    <nav class="admin-nav glass">
      <div class="container nav-content">
        <h1>Dashboard Admin</h1>
        <button @click="logout" class="btn btn-outline text-white">Cerrar Sesión</button>
      </div>
    </nav>
    
    <main class="container py-5">
      <div class="dashboard-header">
        <h2>Gestión de Contenido</h2>
        <p>Edita los textos de las secciones institucionales.</p>
      </div>

      <div class="edit-sections grid">
        <div class="edit-card">
          <h3>Sección: ¿Quiénes somos?</h3>
          <div class="form-group">
            <label>Objetivo de la Empresa</label>
            <textarea v-model="contentStore.about.objective" rows="3"></textarea>
          </div>
          <button @click="saveChanges" class="btn btn-primary">Guardar Cambios</button>
        </div>

        <div class="edit-card">
          <h3>Sección: Marcas</h3>
          <div v-for="(brand, index) in contentStore.brands" :key="index" class="brand-edit">
            <h4>{{ brand.name }}</h4>
            <div class="form-group">
              <label>Categoría</label>
              <input v-model="brand.category" type="text">
            </div>
            <div class="form-group">
              <label>Descripción</label>
              <textarea v-model="brand.description" rows="2"></textarea>
            </div>
          </div>
          <button @click="saveChanges" class="btn btn-primary">Guardar Cambios</button>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { contentStore } from '../utils/contentStore'

const router = useRouter()

const saveChanges = () => {
  // Changes are already reactive in contentStore
  alert('¡Cambios guardados localmente! Se verán reflejados en la Landing Page.')
}

const logout = () => {
  sessionStorage.removeItem('admin_auth')
  router.push('/superuser')
}
</script>

<style scoped>
.admin-dashboard { min-height: 100vh; background: #f9fafb; color: #111827; }
.admin-nav { background: var(--color-primary); color: white; padding: 1rem 0; }
.nav-content { display: flex; justify-content: space-between; align-items: center; }
.dashboard-header { margin-bottom: 3rem; }
.edit-card { background: white; padding: 2rem; border-radius: 1rem; box-shadow: 0 4px 6px rgba(0,0,0,0.05); }
.brand-edit { border-top: 1px solid #eee; padding-top: 1.5rem; margin-top: 1.5rem; }
h3 { margin-bottom: 1.5rem; border-bottom: 2px solid var(--color-gold); padding-bottom: 0.5rem; }
label { display: block; font-weight: 700; margin-bottom: 0.5rem; }
input, textarea {
  width: 100%;
  padding: 0.75rem;
  border-radius: 0.5rem;
  border: 1px solid #ddd;
  margin-bottom: 1rem;
}
</style>
