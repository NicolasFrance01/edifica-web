<template>
  <div class="admin-login-page">
    <div class="login-card glass">
      <h2>Panel Admin</h2>
      <p>Ingresa tus credenciales para continuar</p>
      <form @submit.prevent="handleLogin" class="login-form">
        <div class="form-group">
          <label>Usuario</label>
          <input v-model="username" type="text" placeholder="Usuario" required>
        </div>
        <div class="form-group">
          <label>Contraseña</label>
          <input v-model="password" type="password" placeholder="••••••••" required>
        </div>
        <p v-if="error" class="error-msg">{{ error }}</p>
        <button type="submit" class="btn btn-primary w-full">Ingresar</button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const username = ref('')
const password = ref('')
const error = ref('')

const handleLogin = () => {
  // Hardcoded temporarily to bypass environment variable injection issues in build
  const validUser = 'eromera'
  const validPass = 'romera2026'
  
  if (username.value === validUser && password.value === validPass) {
    sessionStorage.setItem('admin_auth', 'true')
    router.push('/superuser/dashboard')
  } else {
    error.value = 'Credenciales inválidas'
  }
}
</script>

<style scoped>
.admin-login-page {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #1e3a8a 0%, #111827 100%);
}
.login-card {
  width: 100%;
  max-width: 400px;
  padding: 2.5rem;
  border-radius: 1rem;
  text-align: center;
  color: white;
}
h2 { margin-bottom: 0.5rem; color: white; }
p { margin-bottom: 2rem; opacity: 0.8; }
.login-form { text-align: left; }
.form-group { margin-bottom: 1.5rem; }
label { display: block; margin-bottom: 0.5rem; font-size: 0.9rem; font-weight: 600; }
input {
  width: 100%;
  padding: 0.75rem;
  border-radius: 0.5rem;
  border: 1px solid rgba(255,255,255,0.2);
  background: rgba(255,255,255,0.1);
  color: white;
}
.error-msg { color: #f87171; font-size: 0.9rem; margin-top: -1rem; margin-bottom: 1rem; }
.w-full { width: 100%; }
</style>
