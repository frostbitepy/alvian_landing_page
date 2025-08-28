'use client'

import { motion } from 'framer-motion'
import { 
  ChartBarIcon, 
  CpuChipIcon, 
  DocumentChartBarIcon,
  CloudIcon,
  ShieldCheckIcon,
  AcademicCapIcon
} from '@heroicons/react/24/outline'

const services = [
  {
    icon: DocumentChartBarIcon,
    title: 'Dashboards Power BI Personalizados',
    description: 'Creamos dashboards interactivos y personalizados que transforman tus datos financieros en visualizaciones claras y accionables.',
    features: ['Visualizaciones interactivas', 'KPIs personalizados', 'Reportes automatizados', 'Integración en tiempo real']
  },
  {
    icon: CpuChipIcon,
    title: 'Analytics Avanzado con IA',
    description: 'Implementamos modelos de machine learning para predecir tendencias, detectar fraudes y optimizar procesos financieros.',
    features: ['Detección de fraudes', 'Análisis predictivo', 'Segmentación de clientes', 'Optimización de riesgos']
  },
  {
    icon: ChartBarIcon,
    title: 'Business Intelligence Estratégico',
    description: 'Desarrollamos estrategias de BI completas que alinean tus datos con los objetivos de negocio de tu institución.',
    features: ['Estrategia de datos', 'Arquitectura de BI', 'Gobierno de datos', 'ROI measurable']
  },
  {
    icon: CloudIcon,
    title: 'Integración y Migración',
    description: 'Conectamos y migramos tus sistemas existentes para crear un ecosistema de datos unificado y eficiente.',
    features: ['Migración segura', 'APIs robustas', 'ETL optimizado', 'Sincronización automática']
  },
  {
    icon: ShieldCheckIcon,
    title: 'Cumplimiento y Seguridad',
    description: 'Aseguramos que todos los dashboards y procesos cumplan con las regulaciones financieras más estrictas.',
    features: ['Cumplimiento normativo', 'Auditorías integradas', 'Seguridad de datos', 'Trazabilidad completa']
  },
  {
    icon: AcademicCapIcon,
    title: 'Capacitación y Soporte',
    description: 'Entrenamos a tu equipo para maximizar el valor de los insights y brindar soporte continuo.',
    features: ['Training personalizado', 'Soporte 24/7', 'Documentación completa', 'Actualizaciones regulares']
  }
]

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl mb-6">
            Nuestros{' '}
            <span className="bg-gradient-to-r from-slate-600 to-slate-800 bg-clip-text text-transparent">
              Servicios
            </span>
          </h2>
          <p className="text-xl text-slate-600 leading-8">
            Ofrecemos soluciones completas de Business Intelligence especializadas 
            para el sector financiero, desde la estrategia hasta la implementación.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-6 rounded-xl bg-gradient-to-r from-slate-600 to-slate-700 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="h-8 w-8 text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-slate-900 mb-4 text-center">
                {service.title}
              </h3>
              
              <p className="text-slate-600 mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-slate-700">
                    <svg className="w-4 h-4 text-slate-600 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <p className="text-lg text-slate-600 mb-8">
            ¿Necesitas una solución personalizada para tu institución financiera?
          </p>
          <motion.a
            href="#contact"
            className="inline-flex items-center rounded-xl bg-gradient-to-r from-slate-600 to-slate-700 px-8 py-4 text-lg font-semibold text-white shadow-lg hover:shadow-xl transition-all duration-300"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Solicitar Consulta Gratuita
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
