const projects: string[] = [
  '/projetos/projeto-1.jpg',
  '/projetos/projeto-2.jpg',
  '/projetos/projeto-3.jpg',
  '/projetos/projeto-4.jpg',
  '/projetos/projeto-5.jpg',
  '/projetos/projeto-6.jpg',
];

const ProjetosRealizados = () => (
  <section id="projetos" className="py-24 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-20">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Projetos Realizados</h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">Confira alguns de nossos trabalhos</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((image, index) => (
          <div
            key={index}
            className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105"
          >
            <img
              src={image}
              alt={`Projeto ${index + 1}`}
              className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8">
              <h3 className="text-white font-bold text-2xl drop-shadow-lg">
                Projeto {index + 1}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ProjetosRealizados;