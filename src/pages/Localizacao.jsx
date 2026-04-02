export default function Localizacao() {
  return (
    <section id="localizacao" className="bg-black text-white py-16 px-6 scroll-mt-20">
      {/* Título */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold uppercase">
          Nossa <span className="text-yellow-500">Localização</span>
        </h1>
        <p className="text-gray-400 mt-2 text-sm md:text-base">
          Venha nos visitar! Estamos te esperando com estilo e precisão.
        </p>
      </div>

      {/* Conteúdo com mapa */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8 items-center">
        {/* Informações */}
        <div className="flex-1 text-center md:text-left space-y-4">
          <h2 className="text-2xl font-semibold text-yellow-500">Barbearia Exemplo</h2>
          <p className="text-gray-300">Rua do Corte, 123</p>
          <p className="text-gray-300">Recife, PE</p>
          <p className="text-gray-300">Telefone: (81) 99999-9999</p>
        </div>

        {/* Mapa */}
        <div className="flex-1 w-full h-64 md:h-96 rounded overflow-hidden shadow-lg border border-yellow-500">
          <iframe
            title="Mapa da Barbearia"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3979.563883901462!2d-34.8771503!3d-8.0475602!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ab18ed7b0e4d8%3A0x3b2e9a1f3c2b74b!2sRecife%2C%20PE!5e0!3m2!1spt-BR!2sbr!4v1701482428165!5m2!1spt-BR!2sbr"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
}