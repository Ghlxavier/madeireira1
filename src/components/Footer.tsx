const Footer = () => (
  <footer className="bg-gray-900 text-white border-t border-gray-800">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="grid md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-2xl font-bold text-green-400 mb-6">Madeireira Xavier</h3>
          <p className="text-gray-400 mb-6 leading-relaxed">
            Sua confiança em madeiras de qualidade para todos os projetos.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-green-400 transition text-2xl">📘</a>
            <a href="#" className="text-gray-400 hover:text-green-400 transition text-2xl">📷</a>
            <a href="#" className="text-gray-400 hover:text-green-400 transition text-2xl">🐦</a>
          </div>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-6">Links Úteis</h4>
          <ul className="space-y-3 text-gray-400">
            <li><a href="#home" className="hover:text-green-400 transition">Home</a></li>
            <li><a href="#categorias" className="hover:text-green-400 transition">Categorias</a></li>
            <li><a href="#servicos" className="hover:text-green-400 transition">Serviços</a></li>
            <li><a href="#projetos" className="hover:text-green-400 transition">Projetos</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-6">Serviços</h4>
          <ul className="space-y-3 text-gray-400">
            <li><a href="#" className="hover:text-green-400 transition">Corte Sob Medida</a></li>
            <li><a href="#" className="hover:text-green-400 transition">Entregas</a></li>
            <li><a href="#" className="hover:text-green-400 transition">Consultoria</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-6">Contato</h4>
          <ul className="space-y-3 text-gray-400">
            <li>📍 Setor O QNO 08 Setor de Oficina, Conjunto A Lote 26/28 - DF, Brasília - DF, 72251-801</li>
            <li>📞 (61) 99996-1228</li>
            <li>✉️ mad_xavier@hotmail.com</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500 text-sm">
        © 2026 Madeireira Xavier. Todos os direitos reservados.
      </div>
    </div>
  </footer>
)

export default Footer