'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDownIcon } from '@heroicons/react/24/outline'

const faqs = [
  {
    question: "¿Qué es Business Intelligence y por qué mi empresa lo necesita?",
    answer: "Business Intelligence (BI) es el proceso de transformar los datos dispersos de tu organización en información clara y accionable que impulsa mejores decisiones. Imagina tener todos tus indicadores financieros críticos—cartera, morosidad, rentabilidad por producto, riesgo—actualizados en tiempo real y visualizados de forma que cualquier gerente pueda entenderlos en segundos.\n\nSin BI, tus equipos pasan días consolidando información en Excel, los reportes llegan tarde, y las decisiones se basan en intuición o datos desactualizados. Con BI bien implementado, reduces ese tiempo de análisis en 70%, identificas oportunidades antes que la competencia, y tomas decisiones respaldadas por datos reales.\n\nLas instituciones financieras que implementan BI reportan mejoras inmediatas: detectan fraudes más rápido, optimizan su portafolio de productos, identifican clientes en riesgo antes de la mora y aumentan su rentabilidad con decisiones basadas en evidencia. La pregunta real no es si necesitas BI, sino cuánto está costándole a tu empresa no tenerlo."
  },
  {
    question: "¿Cuánto tiempo toma implementar un dashboard?",
    answer: "Nuestros primeros dashboards funcionales están listos en 3-4 semanas. A diferencia de implementaciones tradicionales que pueden tomar meses, utilizamos una metodología ágil que te permite ver resultados y empezar a tomar mejores decisiones desde el primer sprint. Los proyectos completos varían según la complejidad, pero siempre con entregas incrementales."
  },
  {
    question: "¿Necesito tener conocimientos técnicos para usar los dashboards?",
    answer: "No. Diseñamos cada visualización pensando en que cualquier persona de tu equipo pueda interpretarla fácilmente. Nuestros reportes son intuitivos y están construidos específicamente para tu empresa. Además, incluimos capacitación personalizada para tu equipo y documentación clara que garantiza la adopción exitosa."
  },
  {
    question: "¿Cómo garantizan la seguridad de nuestros datos financieros?",
    answer: "La seguridad es nuestra prioridad. Implementamos encriptación end-to-end, cumplimos con todas las normativas financieras vigentes (incluyendo estándares bancarios internacionales) y realizamos auditorías periódicas. Tus datos nunca salen de tu infraestructura sin tu autorización explícita y trabajamos bajo estrictos acuerdos de confidencialidad."
  },
  {
    question: "¿Pueden integrarse con nuestros sistemas actuales?",
    answer: "Sí. Trabajamos con prácticamente cualquier fuente de datos: bases SQL, ERPs, archivos Excel, APIs y más. Nuestra experiencia en el sector financiero nos permite conectarnos eficientemente con los sistemas más comunes del mercado sin interrumpir tus operaciones."
  },
  {
    question: "¿Qué incluye el soporte continuo?",
    answer: "Nuestro soporte incluye asistencia técnica con tiempo de respuesta garantizado, actualizaciones regulares de tus reportes, optimizaciones de rendimiento, nuevos reportes según tus necesidades y acceso directo a nuestro equipo de especialistas. No te dejamos solo después de la implementación."
  },
  {
    question: "¿Cuál es la inversión inicial?",
    answer: "Cada proyecto es único. Después de entender tus necesidades específicas en la consulta gratuita, te presentamos una propuesta transparente y sin sorpresas. Trabajamos con modelos flexibles que se ajustan a tu presupuesto y el ROI típico supera la inversión en el primer año. La demo gratuita no tiene ningún compromiso."
  }
]

const whyChooseAlvian = [
  {
    title: "Especialización que Marca la Diferencia",
    description: "Otros proveedores ofrecen soluciones genéricas adaptables a cualquier industria.",
    advantage: "Vivimos y respiramos el sector financiero. Conocemos tus KPIs, regulaciones, y desafíos específicos desde el día uno. No necesitas explicarnos qué es un CAR, NPL o ROE."
  },
  {
    title: "Agilidad sin Sacrificar Calidad",
    description: "Consultoras tradicionales pueden tomar 6-12 meses con procesos burocráticos y equipos rotatorios.",
    advantage: "Entregamos valor en semanas con un equipo dedicado que conoce tu proyecto de inicio a fin. Metodología ágil real, no solo en el nombre."
  },
  {
    title: "Soporte que Realmente Responde",
    description: "Equipos internos se sobrecargan con múltiples prioridades. Freelancers independientes pueden desaparecer o no tener respaldo.",
    advantage: "Tenemos un equipo completo enfocado en tu éxito con soporte y conocimiento institucional que permanece."
  },
  {
    title: "Tecnología + Visión de Negocio",
    description: "Proveedores técnicos construyen lo que pides, sin cuestionar si es lo que realmente necesitas.",
    advantage: "Somos tu socio estratégico. Combinamos expertise técnico con visión de negocio para recomendarte las mejores soluciones, incluso si eso significa simplificar tu solicitud inicial."
  }
]

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* FAQ Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl mb-6">
            Preguntas{' '}
            <span className="text-slate-700">
              Frecuentes
            </span>
          </h2>
          <p className="text-xl text-slate-600 leading-8">
            Resolvemos las dudas más comunes sobre nuestros servicios de Business Intelligence
          </p>
        </motion.div>

        {/* FAQ List */}
        <motion.div
          className="max-w-4xl mx-auto mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-slate-50 transition-colors duration-200 focus:outline-none focus:bg-slate-50"
                >
                  <h3 className="text-lg font-semibold text-slate-900 pr-8">
                    {faq.question}
                  </h3>
                  <motion.div
                    animate={{ rotate: activeIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="flex-shrink-0"
                  >
                    <ChevronDownIcon className="h-6 w-6 text-slate-500" />
                  </motion.div>
                </button>
                
                <AnimatePresence>
                  {activeIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-8 pb-6">
                        <div className="text-slate-600 leading-relaxed whitespace-pre-line">
                          {faq.answer}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Why Choose Alvian Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-slate-900 mb-4">
              ¿Por Qué las Instituciones Financieras Eligen Alvian?
            </h3>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              No somos solo otro proveedor de dashboards. Entendemos que tienes opciones: 
              equipos internos, consultoras grandes, o freelancers. Aquí está lo que nos hace diferentes:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {whyChooseAlvian.map((item, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h4 className="text-xl font-bold text-slate-900 mb-4">
                  {item.title}
                </h4>
                <p className="text-slate-600 mb-4 leading-relaxed">
                  <span className="font-medium text-slate-500">Otros:</span> {item.description}
                </p>
                <p className="text-slate-700 leading-relaxed">
                  <span className="font-semibold text-slate-900">Alvian:</span> {item.advantage}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <h4 className="text-2xl font-bold text-slate-900 mb-4">
            ¿Tienes más preguntas?
          </h4>
          <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
            Programa una consulta gratuita de 30 minutos y resolvemos todas tus dudas específicas
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