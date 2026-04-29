const services = [
  {
    icon: '✂️',
    title: 'Corte Sob Medida',
    desc: 'Cortes precisos com as dimensões exatas para o seu projeto.'
  },
  {
    icon: '🚚',
    title: 'Entrega Rápida',
    desc: 'Entregamos em sua obra com agilidade e segurança.'
  },
  {
    icon: '🔧',
    title: 'Consultoria Técnica',
    desc: 'Nossa equipe ajuda a escolher o material ideal.'
  },
  {
    icon: '💰',
    title: 'Preços Competitivos',
    desc: 'Qualidade premium com o melhor custo-benefício.'
  },
]

const Servicos = () => (
  <section id="servicos" className="py-24 bg-gray-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-20">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Nossos Serviços</h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">Tudo para facilitar sua compra</p>
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-8">
        {services.map((service, index) => (
          <div key={index} className="text-center group p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all hover:-translate-y-3">
            <div className="text-6xl mb-8 group-hover:scale-110 transition-transform mx-auto w-24 h-24 flex items-center justify-center bg-green-100 rounded-2xl shadow-lg">
              {service.icon}
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6 group-hover:text-green-800 transition">{service.title}</h3>
            <p className="text-gray-600 text-lg leading-relaxed">{service.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
)

export default Servicos