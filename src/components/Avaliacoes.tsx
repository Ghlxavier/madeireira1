import { useState, useEffect } from 'react'

type Review = {
  name: string
  rating: number
  text: string
  date: string
}

const reviews: Review[] = [
  {
    name: 'João Santos',
    rating: 5,
    text: 'Excelente qualidade de madeira e atendimento impecável! Entrega super rápida. Recomendo demais!',
    date: '2 semanas atrás'
  },
  {
    name: 'Ana Costa',
    rating: 5,
    text: 'Fiz meu projeto de deck com a madeira deles. Perfeita! Equipe técnica muito prestativa.',
    date: '1 mês atrás'
  },
  {
    name: 'Pedro Almeida',
    rating: 5,
    text: 'Preços justos e corte sob medida perfeito. Volto sempre!',
    date: '3 semanas atrás'
  },
]

const AvaliacoesGoogle = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const review = reviews[currentIndex]

  return (
    <section className="py-24 bg-gradient-to-br from-green-50 to-emerald-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">O que dizem nossos clientes</h2>
        <p className="text-xl text-gray-600 mb-20 max-w-2xl mx-auto">Avaliações do Google</p>
        
        <div className="relative h-[400px] lg:h-[450px] bg-gradient-to-br from-green-800 to-emerald-900 rounded-3xl shadow-2xl overflow-hidden flex items-center justify-center p-12">
          <div className="text-white text-center max-w-3xl mx-auto">
            <div className="flex justify-center mb-8">
              {Array.from({ length: 5 }).map((_, i) => (
                <span
                  key={i}
                  className={`text-3xl ${i < review.rating ? 'text-yellow-400 drop-shadow-lg' : 'text-gray-400'}`}
                >
                  ★
                </span>
              ))}
            </div>
            <blockquote className="text-2xl lg:text-3xl font-semibold mb-8 leading-relaxed drop-shadow-2xl">
              &ldquo;{review.text}&rdquo;
            </blockquote>
            <div className="space-y-2">
              <p className="text-2xl font-bold drop-shadow-lg">{review.name}</p>
              <p className="text-green-200 text-lg">{review.date}</p>
            </div>
          </div>
          {/* Indicators */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-3">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentIndex === index
                    ? 'bg-white w-12 scale-110 shadow-lg'
                    : 'bg-white/50 hover:bg-white/70 w-3'
                }`}
                aria-label={`Ir para avaliação ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default AvaliacoesGoogle