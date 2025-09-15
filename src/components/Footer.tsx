'use client'

import { motion } from 'framer-motion'
import { 
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon
} from '@heroicons/react/24/outline'

const navigation = {
  servicios: [
    { name: 'Dashboards Power BI', href: '#services' },
    { name: 'Analytics con IA', href: '#services' },
    { name: 'Business Intelligence', href: '#services' },
    { name: 'Integración de Datos', href: '#services' },
  ],
  empresa: [
    { name: 'Sobre Nosotros', href: '#about' },
    { name: 'Nuestros Valores', href: '#about' },
    { name: 'Casos de Éxito', href: '#features' },
    { name: 'Contacto', href: '#contact' },
  ],
  soporte: [
    { name: 'Documentación', href: '#' },
    { name: 'Capacitación', href: '#services' },
    { name: 'Soporte Técnico', href: '#contact' },
    { name: 'FAQ', href: '#' },
  ],
  legal: [
    { name: 'Política de Privacidad', href: '#' },
    { name: 'Términos de Uso', href: '#' },
    { name: 'Cumplimiento', href: '#' },
    { name: 'Cookies', href: '#' },
  ]
}

const socialLinks = [
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/company/alvian-analytics', // Reemplaza con tu URL real de LinkedIn
    icon: (props: React.SVGProps<SVGSVGElement>) => (
      <svg fill="currentColor" viewBox="0 0 20 20" {...props}>
        <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
      </svg>
    ),
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/alviananalytics', // Reemplaza con tu URL real de Instagram
    icon: (props: React.SVGProps<SVGSVGElement>) => (
      <svg fill="currentColor" viewBox="0 0 20 20" {...props}>
        <path fillRule="evenodd" d="M10 0C7.284 0 6.944.012 5.877.06 4.813.107 4.086.277 3.45.525a5.85 5.85 0 00-2.12 1.38A5.85 5.85 0 00.33 3.45C.082 4.087-.088 4.813-.06 5.877-.012 6.944 0 7.284 0 10s.012 3.056.06 4.123c.047 1.064.217 1.79.465 2.427a5.85 5.85 0 001.38 2.12 5.85 5.85 0 002.12 1.38c.637.248 1.363.418 2.427.465C6.944 19.988 7.284 20 10 20s3.056-.012 4.123-.06c1.064-.047 1.79-.217 2.427-.465a5.85 5.85 0 002.12-1.38 5.85 5.85 0 001.38-2.12c.248-.637.418-1.363.465-2.427C19.988 13.056 20 12.716 20 10s-.012-3.056-.06-4.123c-.047-1.064-.217-1.79-.465-2.427a5.85 5.85 0 00-1.38-2.12A5.85 5.85 0 0015.55.525C14.913.277 14.187.107 13.123.06 12.056.012 11.716 0 10 0zm0 1.802c2.67 0 2.987.01 4.042.059.976.045 1.505.207 1.858.344.467.182.8.398 1.15.748.35.35.566.683.748 1.15.137.353.3.882.344 1.857.048 1.055.058 1.37.058 4.04 0 2.672-.01 2.988-.058 4.042-.045.976-.207 1.505-.344 1.858-.182.466-.398.8-.748 1.15-.35.35-.683.566-1.15.748-.353.137-.882.3-1.857.344-1.055.048-1.37.058-4.041.058-2.67 0-2.987-.01-4.04-.058-.976-.045-1.505-.207-1.858-.344a3.097 3.097 0 01-1.15-.748 3.098 3.098 0 01-.748-1.15c-.137-.353-.3-.882-.344-1.857-.048-1.055-.058-1.37-.058-4.041 0-2.67.01-2.986.058-4.04.045-.976.207-1.505.344-1.858.182-.467.398-.8.748-1.15.35-.35.683-.566 1.15-.748.353-.137.882-.3 1.857-.344C7.014 1.812 7.33 1.802 10 1.802zM10 5.378a4.622 4.622 0 100 9.244 4.622 4.622 0 000-9.244zM10 13a3 3 0 110-6 3 3 0 010 6zm5.884-7.804a1.08 1.08 0 11-2.16 0 1.08 1.08 0 012.16 0z" clipRule="evenodd" />
      </svg>
    ),
  },
]

export default function Footer() {
  return (
    <footer className="bg-slate-900" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          {/* Company Info */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-3">
              <img 
                src="/images/alvian-logo.png" 
                alt="Alvian Logo" 
                className="h-12 w-auto object-contain"
              />
              <span className="text-2xl font-bold text-white">Alvian</span>
            </div>
            <p className="text-slate-300 text-base leading-6 max-w-md">
              Transformamos datos complejos en insights accionables para 
              instituciones financieras. Tu partner estratégico en Business Intelligence.
            </p>
            <div className="space-y-3">
              <div className="flex items-center text-slate-300">
                <EnvelopeIcon className="h-5 w-5 mr-3" />
                <a href="mailto:operaciones@alvianconsultoria.com.py" className="hover:text-white transition-colors">
                  operaciones@alvianconsultoria.com.py
                </a>
              </div>
              <div className="flex items-center text-slate-300">
                <PhoneIcon className="h-5 w-5 mr-3" />
                <a href="tel:+595971369278" className="hover:text-white transition-colors">
                  +595 971 369278
                </a>
              </div>
              <div className="flex items-center text-slate-300">
                <MapPinIcon className="h-5 w-5 mr-3" />
                <span>Encarnación, Paraguay</span>
              </div>
            </div>
            <div className="flex space-x-6">
              {socialLinks.map((item) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-300 hover:text-white transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-6 w-6" aria-hidden="true" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Navigation Links */}
          <div className="mt-12 xl:mt-0 xl:col-span-2">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-base font-semibold text-white">Servicios</h3>
                <ul className="mt-6 space-y-4">
                  {navigation.servicios.map((item) => (
                    <li key={item.name}>
                      <a href={item.href} className="text-slate-300 hover:text-white transition-colors text-sm">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h3 className="text-base font-semibold text-white">Empresa</h3>
                <ul className="mt-6 space-y-4">
                  {navigation.empresa.map((item) => (
                    <li key={item.name}>
                      <a href={item.href} className="text-slate-300 hover:text-white transition-colors text-sm">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <h3 className="text-base font-semibold text-white">Soporte</h3>
                <ul className="mt-6 space-y-4">
                  {navigation.soporte.map((item) => (
                    <li key={item.name}>
                      <a href={item.href} className="text-slate-300 hover:text-white transition-colors text-sm">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <h3 className="text-base font-semibold text-white">Legal</h3>
                <ul className="mt-6 space-y-4">
                  {navigation.legal.map((item) => (
                    <li key={item.name}>
                      <a href={item.href} className="text-slate-300 hover:text-white transition-colors text-sm">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Newsletter - COMENTADO TEMPORALMENTE
        <motion.div
          className="mt-12 pt-8 border-t border-slate-700"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="xl:grid xl:grid-cols-2 xl:gap-8 items-center">
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">
                Mantente al día con nuestros insights
              </h3>
              <p className="text-slate-300 text-sm">
                Recibe las últimas tendencias en Business Intelligence y analytics financiero.
              </p>
            </div>
            <div className="mt-6 xl:mt-0">
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="tu.email@empresa.com"
                  className="flex-1 px-4 py-3 rounded-lg bg-slate-700 border border-slate-500 text-white placeholder-slate-300 focus:ring-2 focus:ring-slate-300 focus:border-transparent transition-all duration-200"
                />
                <motion.button
                  className="px-6 py-3 bg-gradient-to-r from-slate-600 to-slate-700 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Suscribirse
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
        */}

        {/* Copyright */}
        <motion.div
          className="mt-12 pt-8 border-t border-slate-700"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="md:flex md:items-center md:justify-between">
            <div className="flex space-x-6 md:order-2">
              <p className="text-slate-300 text-sm">
                Hecho con ❤️ para instituciones financieras
              </p>
            </div>
            <p className="mt-8 text-slate-300 text-sm md:mt-0 md:order-1">
              &copy; 2024 Alvian. Todos los derechos reservados.
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
