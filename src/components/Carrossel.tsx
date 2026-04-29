import { useState, useEffect } from 'react'

type Slide = {
  image: string
  title: string
  description: string
}

const slides: Slide[] = [
  {
    image: 'https://images.adsttc.com/media/images/5787/e6b4/e58e/ced0/cb00/0049/large_jpg/Essencial_Wood_Itapu%C3%A3_Trama_Tit%C3%A2nioeGrafite.jpg?1468524178',
    title: 'Itapuã Essencial Wood Duratex',
    description: 'A beleza da lâmina natural da madeira com seu acabamento madeirado.'
  },
  {
    image: 'https://www.floramdf.com.br/imagem/render/vitrine/1651673192_7e2a458c8b540bab32eb.jpg',
    title: 'Milano Natura Flora',
    description: 'Este encantador padrão adequa-se perfeitamente aos ambientes clássicos e imponentes.'
  },
  {
    image: 'https://www.floramdf.com.br/imagem/render/vitrine/1651866299_240f6ea7a310ca959ce0.jpg',
    title: 'Fendi Supermatte Flora',
    description: 'Combinações produzidas com tonalidades neutras, criam um visual romântico e equilibrado.'
  },
  {
    image: 'https://placasdobrasil.com.br/wp-content/uploads/2026/03/p6_0047_25d_render_tauari_solar.jpg',
    title: 'Tauarí Solar Placas do Brasil',
    description: 'Um padrão que transforma ambientes com leveza, elegância e a essência luminosa autêntica da madeira brasileira.'
  },
  {
    image: 'https://placasdobrasil.com.br/wp-content/uploads/2025/03/Render_Castanha_de_Caju-768x432.jpg',
    title: 'Castanha de Caju Placas do Brasil',
    description: 'Inspirado nas tonalidades naturais das castanhas brasileiras, apresenta nuances que transmitem aconchego e elegância.'
  },
]

const Carrossel = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Destaques da Semana</h2>
          <p className="text-xl text-gray-600">Nossos produtos mais vendidos</p>
        </div>
        <div className="relative h-[500px] lg:h-[600px] overflow-hidden rounded-3xl shadow-2xl">
          <div
            className="flex h-full transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {slides.map((slide, index) => (
              <div key={index} className="min-w-full h-full flex-shrink-0 relative">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-center justify-center p-12">
                  <div className="text-center text-white max-w-2xl mx-auto">
                    <h3 className="text-4xl lg:text-5xl font-bold mb-6 drop-shadow-2xl">
                      {slide.title}
                    </h3>
                    <p className="text-2xl drop-shadow-lg">
                      {slide.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-3">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentIndex === index
                    ? 'bg-white w-12 scale-110 shadow-lg'
                    : 'bg-white/50 hover:bg-white/70 w-3'
                }`}
                aria-label={`Ir para slide ${index + 1}`}
              />
            ))}
          </div>
          <button
            onClick={() => setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length)}
            className="absolute top-1/2 left-6 -translate-y-1/2 w-14 h-14 lg:w-16 lg:h-16 rounded-full flex items-center justify-center text-white text-3xl lg:text-4xl font-black transition-all duration-300 hover:scale-110 shadow-2xl z-20 focus:outline-none focus:ring-4 focus:ring-white/50"
            aria-label="Slide anterior"
          >
            ←
          </button>
          <button
            onClick={() => setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length)}
            className="absolute top-1/2 right-6 -translate-y-1/2 w-14 h-14 lg:w-16 lg:h-16 rounded-full flex items-center justify-center text-white text-3xl lg:text-4xl font-black transition-all duration-300 hover:scale-110 shadow-2xl z-20 focus:outline-none focus:ring-4 focus:ring-white/50"
            aria-label="Próximo slide"
          >
            →
          </button>
        </div>
      </div>
    </section>
  )
}

export default Carrossel