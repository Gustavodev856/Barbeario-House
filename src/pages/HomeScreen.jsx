import { useState } from "react";
import imgprincipal from "../assets/imgprincipal.png";
import { FaBars } from 'react-icons/fa';
import Agendamento from "../components/Agendamento";

export default function HomeScreen() {
  const [open, setOpen] = useState(false);

  return (
    <section className="min-h-screen bg-black scroll-smooth">
      {/* Navbar */}
      <div className="flex items-center justify-between p-4 bg-black">
        <h1 className="uppercase font-bold text-white text-xl md:text-2xl">
          Barb<span className="text-yellow-500">earia</span>
        </h1>

        <ul className="hidden md:flex gap-6 text-white">
          {/* <li><a href="#sobrenos" className="hover:text-yellow-500">Sobre</a></li> */}
          <li><a href="#services" className="hover:text-yellow-500">Serviços</a></li>
          <li><a href="#localizacao" className="hover:text-yellow-500">Localização</a></li>
        </ul>

        <button onClick={() => setOpen(!open)} className="text-white md:hidden text-2xl">
          <FaBars />
        </button>
      </div>

      {open && (
        <nav className="md:hidden bg-black text-white p-4 italic">
          <ul className="flex flex-col gap-2">
            <li><a href="#" className="text-white hover:text-yellow-500 text-sm md:text-base">Sobre</a></li>
            <li><a href="#services" className="text-white hover:text-yellow-500 text-sm md:text-base">Serviços</a></li>
            <li><a href="#" className="text-white hover:text-yellow-500 text-sm md:text-base">Localização</a></li>
          </ul>
        </nav>
      )}

      {/* Conteúdo principal */}
      <section className="flex flex-col md:flex-row">
        {/* Imagem */}
        <div className="relative w-full md:w-2/3 h-64 md:h-[calc(100vh-80px)]">
          <img src={imgprincipal} alt="Imagem Principal" className="w-full h-full object-cover" />
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-0 w-1/4 h-full bg-gradient-to-r from-black/70 to-transparent"></div>
            <div className="absolute top-0 right-0 w-1/4 h-full bg-gradient-to-l from-black/100 to-transparent"></div>
            <div className="absolute top-0 left-0 w-full h-1/4 bg-gradient-to-b from-black/100 to-transparent"></div>
            <div className="absolute bottom-0 left-0 w-full h-1/4 bg-gradient-to-t from-black/100 to-transparent"></div>
          </div>
        </div>

        {/* Texto e botões */}
        <div className="w-full md:w-1/3 p-8 md:p-12 flex flex-col justify-center gap-4 md:gap-6 text-center md:text-left">
          <p className="text-yellow-500 uppercase tracking-widest font-semibold text-sm md:text-base">
            ° Recife PE °
          </p>

          <div className="text-white space-y-2">
            <h1 className="text-2xl md:text-4xl font-extrabold">O Corte certo</h1>
            <h1 className="text-2xl md:text-4xl font-extrabold">Faz parte de quem</h1>
            <h1 className="text-2xl md:text-4xl font-extrabold">Você é.</h1>

            <p className="mt-2 md:mt-4 text-sm md:text-lg text-gray-300">
              Na Barbearia, cada telha é tratada com precisão, do corte à barba,
              entregamos resultado com tradição e estilo.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              {/* Botão Agendar / Formulário */}
              <Agendamento />

              {/* Botão Ver Serviços */}
              {/* <button className="px-6 py-3 border-2 border-yellow-500 text-yellow-500 font-semibold rounded hover:bg-yellow-500 hover:text-black transition">
                Ver Serviços
              </button> */}
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}