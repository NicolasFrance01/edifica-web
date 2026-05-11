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
  services: {
    title: 'Nuestros Servicios',
    subtitle: 'Soluciones profesionales para cada etapa de tu obra.',
    items: [
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
        iconPath: 'M12 21a6 6 0 0 1-3.6-10.25L12 7l3.6 3.75A6 6 0 0 1 12 21z'
      },
      {
        title: 'Obras Generales',
        description: 'Gestión completa de proyectos de construcción.',
        iconPath: 'M22 11.08V12a10 10 0 1 1-5.93-9.14'
      }
    ]
  },
  distributor: {
    badge: 'Distribuidor Oficial',
    title: 'PIATTI',
    subtitle: 'Aberturas de Alta Prestación | PVC & Aluminio',
    benefits: [
      {
        title: 'Garantía de Fábrica',
        description: 'Respaldo directo y servicio post-venta asegurado.',
        icon: 'check-circle'
      },
      {
        title: 'Instalación Certificada',
        description: 'Personal capacitado bajo estándares internacionales.',
        icon: 'zap'
      },
      {
        title: 'Precios Directos',
        description: 'Accede a tarifas preferenciales sin intermediarios.',
        icon: 'dollar-sign'
      }
    ]
  },
  catalog: {
    title: 'Catálogo de Productos',
    subtitle: 'Calidad y diseño para tu hogar.',
    categories: [
      { 
        id: 'escaleras', 
        name: 'Escaleras', 
        title: 'Escaleras a Medida',
        description: 'Diseños exclusivos en madera, metal y vidrio para interiores y exteriores.',
        image: 'https://images.unsplash.com/photo-1560185007-cde436f6a4d0?auto=format&fit=crop&q=80&w=800',
        items: [] 
      },
      { 
        id: 'aberturas', 
        name: 'Aberturas Piatti', 
        title: 'Distribuidor Oficial Piatti',
        description: 'La mejor tecnología en aberturas de PVC y Aluminio.',
        image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800',
        items: ['Ventana Oscilobatiente', 'Puerta Pivotante', 'Portón Automático'] 
      },
      { 
        id: 'interiorismo', 
        name: 'Interiorismo', 
        title: 'Mobiliario y Vestidores',
        description: 'Optimización de espacios con diseño exclusivo.',
        image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=800',
        items: ['Placar Melamina', 'Vestidor Walk-in', 'Mueble TV'] 
      },
      { 
        id: 'artefactos', 
        name: 'Artefactos', 
        title: 'Terminaciones y Complementos',
        description: 'Griferías, sanitarios y detalles constructivos.',
        image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800',
        items: [] 
      }
    ]
  },
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
