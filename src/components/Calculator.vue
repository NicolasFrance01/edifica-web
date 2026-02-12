<script setup>
import { ref, computed } from 'vue'

const step = ref(1)
const area = ref(50)
const quality = ref('standard')
const email = ref('')
const showResult = ref(false)

const prices = {
  basic: 800,
  standard: 1200,
  premium: 1800
}

const estimatedCost = computed(() => {
  return area.value * prices[quality.value]
})

const formatCurrency = (value) => {
  return new Intl.NumberFormat('es-AR', { style: 'currency', currency: 'USD' }).format(value)
}

const nextStep = () => {
  if (step.value === 1) step.value = 2
}

const submitLead = () => {
  if (email.value) {
    showResult.value = true
  }
}
</script>

<template>
  <div class="calculator-card">

    <div v-if="!showResult" class="content">
      <!-- Contact Form (Simplified) -->
      <div class="step fade-in">
        <h4>Cotiza tu Proyecto</h4>
        <p>Déjanos tu correo y un asesor te contactará para realizar un presupuesto a medida.</p>
        <input type="email" v-model="email" placeholder="tu@email.com" class="input-email">
        <button class="btn btn-primary w-100" @click="submitLead">Solicitar Asesoramiento</button>
      </div>
    </div>

    <!-- Result -->
    <div v-else class="result fade-in">
      <div class="success-icon">✓</div>
      <h4>Presupuesto Estimado</h4>
      <div class="price-tag">{{ formatCurrency(estimatedCost) }}</div>
      <p class="disclaimer">*Este valor es referencial. Un asesor te contactará en breve.</p>
      <button class="btn btn-outline w-100" @click="showResult = false; step = 1">Nueva Consulta</button>
    </div>
  </div>
</template>

<style scoped>
.calculator-card {
  background: white;
  color: var(--color-text);
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 10px 25px rgba(0,0,0,0.1);
  max-width: 400px;
  margin: 0 auto;
  border-top: 5px solid var(--color-secondary);
}

.header h3 { margin-bottom: 0.5rem; }
.header p { color: var(--color-text-muted); font-size: 0.9rem; margin-bottom: 1.5rem; }

.slider {
  width: 100%;
  margin: 1rem 0 2rem;
  accent-color: var(--color-secondary);
}

.options {
  display: flex;
  gap: 0.5rem;
  margin-bottom: 2rem;
}

.option {
  flex: 1;
  padding: 0.5rem;
  border: 1px solid #E5E7EB;
  border-radius: 0.5rem;
  text-align: center;
  cursor: pointer;
  transition: all 0.2s;
  font-size: 0.9rem;
}

.option.active {
  background-color: var(--color-primary);
  color: white;
  border-color: var(--color-primary);
}

.w-100 { width: 100%; }
.input-email {
  width: 100%;
  padding: 0.75rem;
  margin: 1rem 0;
  border: 1px solid #ccc;
  border-radius: 0.5rem;
}

.blur-overlay {
  filter: blur(5px);
  user-select: none;
  opacity: 0.5;
  margin-bottom: 1rem;
}

.price-tag {
  font-size: 2.5rem;
  font-weight: 800;
  color: var(--color-primary);
  margin: 1rem 0;
}

.fade-in { animation: fadeIn 0.5s ease; }
@keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }

.btn-link {
  background: none;
  border: none;
  color: var(--color-text-muted);
  text-decoration: underline;
  cursor: pointer;
  margin-top: 1rem;
  font-size: 0.9rem;
}
</style>
