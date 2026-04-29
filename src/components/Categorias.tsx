import React from 'react';

type Category = {
  name: string;
  icon: string;
};

const categories: Category[] = [
  { name: 'MDF e Fitas de borda', icon: '🪵' },
  { name: 'Portas e batentes', icon: '🚪' },
  { name: 'Colas', icon: '🧴' },
  { name: 'Dobradiças', icon: '🔩' },
  { name: 'Thiner', icon: '🧪' },
  { name: 'Buchas', icon: '🔩' },
  { name: 'Puxadores', icon: '🔧' },
  { name: 'Fechaduras', icon: '🔒' },
  { name: 'Corrediças', icon: '🛤️' },
  { name: 'Rodinhas e sapatas', icon: '🛞' },
];

const Categorias: React.FC = () => {
  return (
    <section id="categorias" className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-amber-50 via-stone-50 to-emerald-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-amber-800 to-stone-800 bg-clip-text text-transparent mb-6">
            Nossas Categorias
          </h2>
          <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Descubra nossa variedade de produtos para marcenaria, construção e acabamentos na Madeireira Xavier.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 md:gap-8">
          {categories.map((category, index) => (
            <div
              key={index}
              className="group cursor-pointer bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 border border-amber-100 hover:border-amber-300 hover:bg-white overflow-hidden"
            >
              <div className="p-8 sm:p-10 text-center h-full flex flex-col justify-center">
                <div className="text-5xl md:text-6xl mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                  {category.icon}
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 group-hover:text-amber-800 transition-colors duration-300">
                  {category.name}
                </h3>
                <p className="text-sm md:text-base text-gray-500 font-medium group-hover:text-gray-600 transition-colors duration-300">
                  Explore agora
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categorias;
