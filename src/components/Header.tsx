'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [
  { name: 'Inicio', href: '#home' },
  { name: 'Servicios', href: '#services' },
  { name: 'Características', href: '#features' },
  { name: 'Nosotros', href: '#about' },
  { name: 'Contacto', href: '#contact' },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg' 
        : 'bg-transparent'
    }`}>
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <motion.a 
            href="#home" 
            className="-m-1.5 p-1.5"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="sr-only">Alvian</span>
            <div className="flex items-center space-x-3">
              <img 
                src="/images/alvian-logo.png" 
                alt="Alvian Logo" 
                className="h-14 w-auto object-contain"
              />
              <span className={`text-xl font-bold ${
                scrolled ? 'text-slate-900' : 'text-white'
              }`}>
                Alvian
              </span>
            </div>
          </motion.a>
        </div>
        
        <div className="flex lg:hidden">
          <button
            type="button"
            className={`-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 ${
              scrolled ? 'text-slate-900' : 'text-white'
            }`}
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Abrir menú principal</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <motion.a
              key={item.name}
              href={item.href}
              className={`text-sm font-semibold leading-6 transition-colors ${
                scrolled 
                  ? 'text-slate-900 hover:text-slate-600' 
                  : 'text-white hover:text-slate-200'
              }`}
              whileHover={{ y: -2 }}
              whileTap={{ y: 0 }}
            >
              {item.name}
            </motion.a>
          ))}
        </div>
        
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <motion.a
            href="#contact"
            className="rounded-lg bg-gradient-to-r from-slate-600 to-slate-700 px-6 py-2.5 text-sm font-semibold text-white shadow-lg hover:shadow-xl transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Solicitar Demo
          </motion.a>
        </div>
      </nav>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="fixed inset-0 z-50" />
            <motion.div
              className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            >
              <div className="flex items-center justify-between">
                <a href="#home" className="-m-1.5 p-1.5">
                  <div className="flex items-center space-x-3">
                    <img 
                      src="/images/alvian-logo.png" 
                      alt="Alvian Logo" 
                      className="h-14 w-auto object-contain"
                    />
                    <span className="text-xl font-bold text-slate-900">Alvian</span>
                  </div>
                </a>
                <button
                  type="button"
                  className="-m-2.5 rounded-md p-2.5 text-slate-900"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="sr-only">Cerrar menú</span>
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-500/10">
                  <div className="space-y-2 py-6">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-slate-900 hover:bg-slate-100"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                  <div className="py-6">
                    <a
                      href="#contact"
                      className="w-full rounded-lg bg-gradient-to-r from-slate-600 to-slate-700 px-6 py-2.5 text-center text-sm font-semibold text-white shadow-lg"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Solicitar Demo
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
