import imgAbout from "../assets/imgabout.png"; // substitua pela sua imagem

export default function About() {
  return (
    <section
      id="about"
      className="bg-black text-white py-20 px-6 scroll-mt-20"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Texto */}
        <div className="md:w-1/2 space-y-6">
          <h1 className="text-4xl md:text-5xl font-extrabold uppercase">
            Sobre <span className="text-yellow-500">Nós</span>
          </h1>
          <p className="text-gray-400 text-sm md:text-base leading-relaxed">
            Na nossa barbearia, cada detalhe importa. Desde o corte clássico até
            os estilos mais modernos, cuidamos da sua aparência com precisão e
            dedicação. Com profissionais experientes e atendimento personalizado,
            garantimos uma experiência única, com conforto, estilo e tradição.
          </p>
          <p className="text-gray-400 text-sm md:text-base leading-relaxed">
            Nosso objetivo é que cada cliente saia não apenas com um corte,
            mas com confiança e satisfação. Aqui, você não é só mais um, você é
            parte da nossa história.
          </p>
          {/* <button className="mt-4 px-6 py-3 border-2 border-yellow-500 text-yellow-500 font-semibold rounded hover:bg-yellow-500 hover:text-black transition">
            Agende seu horário
          </button> */}
        </div>

        {/* Imagem */}
        <div className="md:w-1/2">
          <img
            src={imgAbout}
            alt="Sobre a Barbearia"
            className="w-full rounded-2xl object-cover shadow-lg hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>
    </section>
  );
}