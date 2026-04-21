import { reactive, watch } from 'vue'

const defaultContent = {
  about: {
    title: '¿Quiénes somos?',
    description: 'EDIFICA es una empresa orientada a brindar soluciones integrales para el hogar y la construcción, combinando obras, servicios y productos en un mismo lugar.',
    extendedDescription: 'Trabajamos con un enfoque práctico, moderno y eficiente, acompañando a cada cliente desde la idea hasta la ejecución, ofreciendo soluciones reales, funcionales y estéticas.',
    objective: 'Que cada espacio se transforme en algo mejor, más cómodo y con valor real.',
    pillars: [
      {
        title: 'Misión',
        icon: '🎯',
        text: 'Brindar soluciones integrales en obras, servicios y productos para el hogar, con calidad, compromiso y atención personalizada.'
      },
      {
        title: 'Visión',
        icon: '🚀',
        text: 'Ser una empresa referente en Córdoba en soluciones para el hogar, destacándonos por la confianza y la calidad.'
      },
      {
        title: 'Hacia dónde vamos',
        icon: '🧭',
        text: 'En EDIFICA buscamos crecer de manera sólida y escalable, incorporando nuevas líneas de productos.'
      }
    ]
  },
  brands: [
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
  ],
  addBrand() {
    this.brands.push({
      name: 'Nueva Marca',
      category: 'Categoría',
      emoji: '✨',
      description: 'Descripción de la marca...',
      hook: 'Frase destacada...',
      image: 'https://images.unsplash.com/photo-1506377585622-bedcbb027afc?auto=format&fit=crop&q=80&w=800'
    })
  },
  removeBrand(index) {
    this.brands.splice(index, 1)
  }
}

// Load from localStorage or use defaults
const savedContent = localStorage.getItem('edifica_content')
export const contentStore = reactive(savedContent ? JSON.parse(savedContent) : defaultContent)

// Watch for changes and save to localStorage
watch(contentStore, (newContent) => {
  localStorage.setItem('edifica_content', JSON.stringify(newContent))
}, { deep: true })
