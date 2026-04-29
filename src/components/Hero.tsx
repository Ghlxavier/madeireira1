/*
 * Coloque a imagem 'loja-madeireira.jpg' na pasta public/ do seu projeto Next.js
 * para que o caminho /loja-madeireira.jpg funcione corretamente.
 */

const Hero = () => (
  <section id="home" className="relative bg-[url('/loja-madeireira.jpg')] bg-cover bg-center bg-no-repeat text-white py-60 overflow-hidden">
    <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>
    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h1 className="text-5xl md:text-7xl font-bold mb-6 drop-shadow-2xl leading-tight">
        Madeireira Xavier
      </h1>
      <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto opacity-95 drop-shadow-lg">
        Sua parceira em madeiras de alta qualidade para construções, reformas e projetos especiais.
      </p>
      <a
        href="#categorias"
        className="inline-block bg-amber-500 hover:bg-amber-400 text-slate-900 px-10 py-5 rounded-2xl font-bold text-xl shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 transition-all duration-300"
      >
        Conheça Nossos  Produtos
      </a>
    </div>
  </section>
);

export default Hero;
