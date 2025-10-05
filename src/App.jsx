import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <img src="/images/probaho_logo.png" alt="Probaho Logo" className="h-8 w-auto mr-3" />
              <span className="text-2xl font-bold text-blue-600">Probaho</span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('problem')} className="text-gray-700 hover:text-blue-600 transition-colors">Problem</button>
              <button onClick={() => scrollToSection('solution')} className="text-gray-700 hover:text-blue-600 transition-colors">Solution</button>
              <button onClick={() => scrollToSection('how')} className="text-gray-700 hover:text-blue-600 transition-colors">How</button>
              <button onClick={() => scrollToSection('pilot')} className="text-gray-700 hover:text-blue-600 transition-colors">Pilot</button>
            </nav>
            <button 
              onClick={() => scrollToSection('cta')}
              className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors"
            >
              Pre-order
            </button>
          </div>
      </div>
      </header>

      {/* Hero Section */}
      <section id="hero" className="pt-20 pb-16 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Flowing Purity for Every Community
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                A simple tube purifier for Bangladesh. It works without power and handles muddy or salty water.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => scrollToSection('cta')}
                  className="bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-700 transition-all transform hover:scale-105"
                >
                  Pre-order Probaho
                </button>
                <button 
                  onClick={() => scrollToSection('pilot')}
                  className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-600 hover:text-white transition-all"
                >
                  See Pilot Results
        </button>
              </div>
              <div className="flex flex-wrap gap-4">
                <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium">Field-tested</span>
                <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium">No electricity</span>
                <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium">Easy upkeep</span>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white p-8 rounded-2xl shadow-2xl">
                <img src="/images/product_image.jpg" alt="Probaho tube purifier prototype" className="w-full h-96 object-contain rounded-xl" />
                <p className="text-center text-sm text-gray-500 mt-4">Probaho tube purifier prototype</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section id="problem" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">The problem we are solving</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Bangladesh faces dirty water, salinity, and shortage.<br />
              Women and children carry the biggest burden.
        </p>
      </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="group">
              <div className="relative overflow-hidden rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-300">
                <img src="/images/bd_image_1.jpg" alt="Women collecting water in a flooded slum" className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300" />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-gray-800">
                  Bangladesh – Slum
                </div>
              </div>
              <p className="mt-4 text-gray-600 text-center">Contaminated shallow water and flood water.</p>
            </div>
            <div className="group">
              <div className="relative overflow-hidden rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-300">
                <img src="/images/bd_image_2.jpg" alt="Women taking water from a small stream in hill area" className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300" />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-gray-800">
                  Bangladesh – Hill Tract
                </div>
              </div>
              <p className="mt-4 text-gray-600 text-center">Drought and long walks for water.</p>
            </div>
            <div className="group">
              <div className="relative overflow-hidden rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-300">
                <img src="/images/bd_image_3.jpg" alt="People taking water from a pond near the coast" className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300" />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-gray-800">
                  Bangladesh – Coastal
                </div>
              </div>
              <p className="mt-4 text-gray-600 text-center">Salty water and microbes rise with the sea.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section id="solution" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-8">Why Probaho</h2>
              <ul className="space-y-4">
                <li className="flex items-center text-lg text-gray-700">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-4"></span>
                  Works without electricity
                </li>
                <li className="flex items-center text-lg text-gray-700">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-4"></span>
                  Multi-stage media for dirty and salty water
                </li>
                <li className="flex items-center text-lg text-gray-700">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-4"></span>
                  Fast flow for family use
                </li>
                <li className="flex items-center text-lg text-gray-700">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-4"></span>
                  Low cost refills
                </li>
                <li className="flex items-center text-lg text-gray-700">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-4"></span>
                  Captures microplastics
                </li>
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="relative overflow-hidden rounded-2xl shadow-lg">
                <img src="/images/microplastic1.jpg" alt="Plastic pollution underwater" className="w-full h-48 object-cover" />
              </div>
              <div className="relative overflow-hidden rounded-2xl shadow-lg">
                <img src="/images/microplastic2.jpg" alt="Microplastics facts graphic" className="w-full h-48 object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section id="how" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-8">How it works</h2>
              <ol className="space-y-6">
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mr-4">1</span>
                  <div>
                    <h3 className="font-semibold text-gray-900">Pre-screen and sediment</h3>
                    <p className="text-gray-600">It blocks sand and silt.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mr-4">2</span>
                  <div>
                    <h3 className="font-semibold text-gray-900">Activated carbon</h3>
                    <p className="text-gray-600">It improves taste and smell.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mr-4">3</span>
                  <div>
                    <h3 className="font-semibold text-gray-900">Ion-exchange or special media</h3>
                    <p className="text-gray-600">It targets salinity and heavy metals.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mr-4">4</span>
                  <div>
                    <h3 className="font-semibold text-gray-900">UF or hollow fiber</h3>
                    <p className="text-gray-600">It removes microbes.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mr-4">5</span>
                  <div>
                    <h3 className="font-semibold text-gray-900">Optional post UV (future)</h3>
                    <p className="text-gray-600">Additional protection layer.</p>
                  </div>
                </li>
              </ol>
              <p className="mt-6 text-gray-600 italic">
                Modules can change by region. We tune the middle layer for slum, hill tract, or coastal water.
              </p>
            </div>
            <div className="relative">
              <div className="bg-white p-8 rounded-2xl shadow-xl">
                <img src="/images/product_image.jpg" alt="Tube with layered cartridges" className="w-full h-96 object-contain rounded-xl" />
                <p className="text-center text-sm text-gray-500 mt-4">Tube with layered cartridges</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pilot Stories Section */}
      <section id="pilot" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-16">Early pilot stories</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative">
                <img src="/images/bd_image_4.jpg" alt="Women lining up at a pond stair to collect water" className="w-full h-48 object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Dhaka Slum</h3>
                <p className="text-gray-600">Families report better taste and fewer stomach issues.</p>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative">
                <img src="/images/bd_image_2.jpg" alt="Women taking water from a stream in hills" className="w-full h-48 object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">CHT Village</h3>
                <p className="text-gray-600">Less time to fetch water. Children attend school more.</p>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative">
                <img src="/images/bd_image_3.jpg" alt="Collecting pond water in coastal area" className="w-full h-48 object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Coastal Union</h3>
                <p className="text-gray-600">Lower salty taste after the special cartridge.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-16">Gallery</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            <div className="group relative overflow-hidden rounded-2xl shadow-lg">
              <img src="/images/bd_image_1.jpg" alt="Bangladesh slum water collection" className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-gray-800">
                Bangladesh – Slum
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-2xl shadow-lg">
              <img src="/images/bd_image_2.jpg" alt="Bangladesh hill tract water collection" className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-gray-800">
                Bangladesh – Hill Tract
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-2xl shadow-lg">
              <img src="/images/bd_image_3.jpg" alt="Bangladesh coastal water collection" className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-gray-800">
                Bangladesh – Coastal
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-2xl shadow-lg">
              <img src="/images/india_image_1.jpg" alt="Women taking water from a pond in India" className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-gray-800">
                India
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-2xl shadow-lg">
              <img src="/images/pak_image_1.jpg" alt="Family beside flood water in Pakistan" className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-gray-800">
                Pakistan
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-2xl shadow-lg">
              <img src="/images/bd_image_5.jpg" alt="Boy filling a jerry can from a pipe" className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-gray-800">
                Bangladesh – Child
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Final CTA Section */}
      <section id="cta" className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Bring safe water closer, every day.</h2>
          <p className="text-xl text-blue-100 mb-8">Join our pilot, pre-order a unit, or partner for community roll-outs.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => window.open('mailto:hello@probaho.org', '_blank')}
              className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all transform hover:scale-105"
            >
              Contact Us
            </button>
            <button 
              onClick={() => window.open('https://wa.me/', '_blank')}
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-all transform hover:scale-105"
            >
              WhatsApp
            </button>
            <button 
              onClick={() => window.open('mailto:hello@probaho.org', '_blank')}
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-all transform hover:scale-105"
            >
              Partner with us
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-20 h-20 bg-blue-500 rounded-full animate-pulse"></div>
          <div className="absolute top-20 right-20 w-16 h-16 bg-blue-400 rounded-full animate-bounce"></div>
          <div className="absolute bottom-10 left-1/4 w-12 h-12 bg-blue-300 rounded-full animate-ping"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-6 md:mb-0 group">
              <div className="relative">
                <img 
                  src="/images/probaho_logo.png" 
                  alt="Probaho Logo" 
                  className="h-12 w-12 rounded-full object-cover ring-4 ring-blue-500/20 group-hover:ring-blue-500/40 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6" 
                />
                <div className="absolute inset-0 rounded-full bg-blue-500/20 group-hover:bg-blue-500/30 transition-all duration-500"></div>
              </div>
              <p className="text-gray-400 ml-4 group-hover:text-white transition-colors duration-300">© {new Date().getFullYear()} Probaho – Flowing Purity</p>
            </div>
            
            <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
              <div className="flex space-x-6">
                <a 
                  href="mailto:hello@probaho.org" 
                  className="text-gray-400 hover:text-white transition-all duration-300 hover:scale-110 transform"
                >
                  hello@probaho.org
                </a>
                <a 
                  href="https://wa.me/" 
                  className="text-gray-400 hover:text-green-400 transition-all duration-300 hover:scale-110 transform flex items-center space-x-2"
                  aria-label="WhatsApp"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                  </svg>
                  <span>WhatsApp</span>
                </a>
              </div>
              
              <div className="flex space-x-6">
                <a 
                  href="#" 
                  className="text-gray-400 hover:text-blue-400 transition-all duration-300 hover:scale-125 transform hover:-translate-y-1" 
                  aria-label="Facebook"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a 
                  href="#" 
                  className="text-gray-400 hover:text-pink-400 transition-all duration-300 hover:scale-125 transform hover:-translate-y-1" 
                  aria-label="Instagram"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
