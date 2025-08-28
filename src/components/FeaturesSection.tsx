'use client'

import { motion } from 'framer-motion'
import { 
  BoltIcon, 
  EyeIcon, 
  ShieldCheckIcon,
  ArrowTrendingUpIcon,
  ClockIcon,
  UsersIcon
} from '@heroicons/react/24/outline'

const features = [
  {
    icon: BoltIcon,
    title: 'Procesamiento en Tiempo Real',
    description: 'Dashboards que se actualizan automáticamente con datos en vivo, permitiendo tomar decisiones basadas en información actualizada al segundo.'
  },
  {
    icon: EyeIcon,
    title: 'Visualizaciones Intuitivas',
    description: 'Interfaz clara y fácil de entender que convierte datos complejos en insights visuales que cualquier stakeholder puede interpretar.'
  },
  {
    icon: ShieldCheckIcon,
    title: 'Seguridad Bancaria',
    description: 'Cumplimos con los más altos estándares de seguridad financiera, incluyendo encriptación end-to-end y auditorías completas.'
  },
  {
    icon: ArrowTrendingUpIcon,
    title: 'Análisis Predictivo',
    description: 'Modelos de machine learning que identifican tendencias futuras y oportunidades de negocio antes que la competencia.'
  },
  {
    icon: ClockIcon,
    title: 'Implementación Rápida',
    description: 'Metodología ágil que permite tener dashboards funcionales en semanas, no meses, con resultados inmediatos.'
  },
  {
    icon: UsersIcon,
    title: 'Colaboración Mejorada',
    description: 'Herramientas que facilitan el trabajo en equipo y la toma de decisiones colaborativa entre diferentes departamentos.'
  }
]

const stats = [
  { number: '250%', label: 'Aumento en eficiencia de reporting' },
  { number: '85%', label: 'Reducción en tiempo de análisis' },
  { number: '99.9%', label: 'Uptime garantizado' },
  { number: '24/7', label: 'Soporte especializado' }
]

export default function FeaturesSection() {
  return (
    <section id="features" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl mb-6">
            Características{' '}
            <span className="bg-gradient-to-r from-slate-600 to-slate-800 bg-clip-text text-transparent">
              Únicas
            </span>
          </h2>
          <p className="text-xl text-slate-600 leading-8">
            Nuestra plataforma está diseñada específicamente para las necesidades 
            del sector financiero, con características que marcan la diferencia.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex flex-col items-center text-center p-6 rounded-2xl hover:bg-slate-50 transition-all duration-300">
                <div className="flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-gradient-to-r from-slate-500/20 to-slate-600/20 group-hover:from-slate-600 group-hover:to-slate-700 transition-all duration-300">
                  <feature.icon className="h-8 w-8 text-slate-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          className="bg-gradient-to-r from-slate-600 to-slate-700 rounded-3xl p-12 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.h3
            className="text-3xl font-bold text-white mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Resultados que Hablan por Sí Mismos
          </motion.h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-blue-100 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Demo Section */}
        <motion.div
          className="text-center mt-20 bg-slate-50 rounded-3xl p-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-slate-900 mb-6">
            ¿Listo para Ver la Diferencia?
          </h3>
          <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
            Agenda una demo personalizada y descubre cómo nuestros dashboards 
            pueden transformar la toma de decisiones en tu institución financiera.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="#contact"
              className="inline-flex items-center rounded-xl bg-gradient-to-r from-slate-600 to-slate-700 px-8 py-4 text-lg font-semibold text-white shadow-lg hover:shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Solicitar Demo
            </motion.a>
            <motion.a
              href="#about"
              className="inline-flex items-center rounded-xl border-2 border-slate-600 px-8 py-4 text-lg font-semibold text-slate-900 hover:border-slate-700 hover:text-slate-700 transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Conocer Más
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
