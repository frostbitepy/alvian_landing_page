'use client'

import { motion } from 'framer-motion'
import { 
  CheckCircleIcon,
  SparklesIcon,
  TrophyIcon,
  HeartIcon
} from '@heroicons/react/24/outline'

const values = [
  {
    icon: SparklesIcon,
    title: 'Innovación Constante',
    description: 'Siempre a la vanguardia de las últimas tecnologías en analytics y business intelligence.'
  },
  {
    icon: CheckCircleIcon,
    title: 'Precisión Absoluta',
    description: 'Cada dashboard y análisis es meticulosamente revisado para garantizar la máxima precisión.'
  },
  {
    icon: TrophyIcon,
    title: 'Excelencia Probada',
    description: 'Track record comprobado con instituciones financieras líderes en Latinoamérica.'
  },
  {
    icon: HeartIcon,
    title: 'Compromiso Total',
    description: 'Nos comprometemos con el éxito de nuestros clientes como si fuera nuestro propio éxito.'
  }
]

const achievements = [
  '50+ Instituciones Financieras',
  '200+ Dashboards Implementados',
  '5 Años de Experiencia',
  '99% Satisfacción del Cliente'
]

export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-gradient-to-b from-slate-50 to-white">
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
            Sobre{' '}
            <span className="bg-gradient-to-r from-slate-600 to-slate-800 bg-clip-text text-transparent">
              Alvian
            </span>
          </h2>
          <p className="text-xl text-slate-600 leading-8">
            Somos un equipo de expertos en data analytics y business intelligence, 
            especializados en el sector financiero. Nuestra misión es transformar 
            datos complejos en insights accionables.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Story */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-slate-900 mb-6">
              Nuestra Historia
            </h3>
            <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
              <p>
                Alvian nació de la necesidad de democratizar el acceso a insights 
                de datos de alta calidad en el sector financiero. Fundada por 
                expertos con más de una década de experiencia en analytics y 
                finanzas, entendemos los desafíos únicos que enfrentan las 
                instituciones financieras.
              </p>
              <p>
                Hemos trabajado con bancos, cooperativas de crédito, fintech y 
                otras instituciones financieras para transformar sus datos en 
                ventajas competitivas. Nuestro enfoque no es solo técnico, sino 
                estratégico: cada dashboard que creamos está diseñado para impulsar 
                decisiones de negocio inteligentes.
              </p>
              <p>
                Creemos que los datos son el activo más valioso de cualquier 
                institución financiera, y nuestra misión es ayudar a nuestros 
                clientes a desbloquear todo su potencial.
              </p>
            </div>
          </motion.div>

          {/* Achievements */}
          <motion.div
            className="bg-white rounded-3xl p-8 shadow-xl"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">
              Nuestros Logros
            </h3>
            <div className="space-y-6">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={achievement}
                  className="flex items-center space-x-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 * index }}
                  viewport={{ once: true }}
                >
                  <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-slate-600 to-slate-700 rounded-full flex items-center justify-center">
                    <CheckCircleIcon className="h-5 w-5 text-white" />
                  </div>
                  <span className="text-lg font-semibold text-slate-900">
                    {achievement}
                  </span>
                </motion.div>
              ))}
            </div>
            
            <motion.div
              className="mt-8 p-6 bg-gradient-to-r from-slate-cream to-slate-light-blue/20 rounded-2xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <p className="text-center text-slate-700 font-medium">
                &ldquo;El partner estratégico que necesitas para llevar tus datos 
                al siguiente nivel&rdquo;
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Values */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-slate-900 text-center mb-12">
            Nuestros Valores
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                className="text-center group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center justify-center w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-r from-blue-100 to-blue-200 group-hover:from-blue-600 group-hover:to-slate-700 transition-all duration-300">
                  <value.icon className="h-8 w-8 text-slate-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-4">
                  {value.title}
                </h4>
                <p className="text-slate-600">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-slate-900 mb-6">
            ¿Listo para Transformar tus Datos?
          </h3>
          <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
            Únete a las instituciones financieras que ya confían en nosotros 
            para sus necesidades de business intelligence.
          </p>
          <motion.a
            href="#contact"
            className="inline-flex items-center rounded-xl bg-gradient-to-r from-slate-600 to-slate-700 px-8 py-4 text-lg font-semibold text-white shadow-lg hover:shadow-xl transition-all duration-300"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Empezar Ahora
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
