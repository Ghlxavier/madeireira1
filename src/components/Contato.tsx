/*
 * Componente de Contato atualizado.
 * OBS: Ideal trocar o iframe pelo embed exato do Google Maps para a localização precisa.
 * Acesse Google Maps, busque o endereço e gere o código de embed.
 */

const ContatoLocalizacao = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Mensagem enviada! Obrigado pelo contato.');
  };

  const whatsappNumber = '556199961228';
  const whatsappMessage = 'Olá! Vim pelo site e gostaria de solicitar um orçamento.';
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <section id="contato" className="py-24 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Entre em Contato</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">Estamos prontos para ajudar no seu projeto</p>
        </div>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-300">Nome</label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition"
                  placeholder="Seu nome completo"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-300">Email</label>
                <input
                  type="email"
                  required
                  className="w-full px-4 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition"
                  placeholder="seu@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-300">Mensagem</label>
                <textarea
                  rows={6}
                  required
                  className="w-full px-4 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition resize-vertical"
                  placeholder="Conte-nos sobre seu projeto..."
                />
              </div>
              <button
                type="submit"
                className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-8 rounded-xl text-lg shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
              >
                Enviar Mensagem
              </button>
            </form>
          </div>
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Nossa Localização</h3>
              <div className="space-y-3 text-gray-300">
                <p>Setor O QNO 08 Setor de Oficina, Conjunto A Lote 26/28 - </p>
                <p>DF, Brasília - DF, 72251-801</p>
                <p>Telefone: (61) 9996-1228</p>
                <p>Email: mad_xavier@hotmail.com</p>
              </div>
            </div>
            <div>
              {/* Botão WhatsApp mais chamativo */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="group w-full bg-[#25d366] hover:bg-[#20ba56] text-white font-bold py-5 px-6 rounded-2xl text-xl shadow-2xl hover:shadow-3xl transform hover:scale-105 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-3"
              >
                <svg
                  className="w-8 h-8 group-hover:scale-110 transition-transform duration-300"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
                <span>Falar pelo WhatsApp</span>
              </a>
            </div>
            <div className="w-full rounded-2xl overflow-hidden shadow-2xl">
              {/* OBS: Troque pelo embed exato do Google Maps para precisão */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3839.054995333647!2d-48.131804924112174!3d-15.801053923120628!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935bcd0f8888f671%3A0x73392fa18a52ce4d!2sMadeireira%20Xavier!5e0!3m2!1spt-BR!2sus!4v1777483996961!5m2!1spt-BR!2sus"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContatoLocalizacao;