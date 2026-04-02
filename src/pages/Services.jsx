import { useState } from "react";
import Agendamento from "../components/Agendamento"; // Certifique-se que o caminho está correto

export default function Services() {
  const services = [
    { title: "Corte de Cabelo", description: "Corte moderno com acabamento profissional e finalização.", price: 25 },
    { title: "Corte + Barba", description: "Corte completo + modelagem de barba com navalha.", price: 35 },
    { title: "Corte + Luzes + Barba", description: "Visual completo com iluminação, corte e barba alinhada.", price: 95 },
    { title: "Barba Completa", description: "Modelagem e acabamento da barba com toalha quente.", price: 15 },
    { title: "Pigmentação", description: "Disfarce de falhas e realce do visual com pigmentação.", price: 10 },
    { title: "Corte + Barba + Pigmentação", description: "Pacote completo para um visual impecável.", price: 50 },
  ];

  const [modalOpen, setModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  const openModal = (service) => {
    setSelectedService(service);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedService(null);
  };

  return (
    <section id="services" className="bg-black text-white py-16 px-6 scroll-mt-20">
      {/* Título */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold uppercase">
          Nossos <span className="text-yellow-500">Serviços</span>
        </h1>
        <p className="text-gray-400 mt-2 text-sm md:text-base">
          Qualidade, estilo e precisão em cada detalhe
        </p>
      </div>

      {/* Grid de serviços */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 hover:border-yellow-500 hover:scale-105 transition-all duration-300 flex flex-col justify-between"
          >
            <h2 className="text-xl font-semibold text-yellow-500">{service.title}</h2>
            <p className="text-gray-400 mt-3 text-sm md:text-base flex-1">{service.description}</p>

            <div className="mt-6 flex justify-between items-center">
              <span className="text-lg font-bold">R$ {service.price},00</span>
              <button
                onClick={() => openModal(service)}
                className="bg-yellow-500 text-black px-4 py-2 rounded-lg font-semibold hover:bg-yellow-400 transition"
              >
                Agendar
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4">
          <div className="bg-yellow-500 rounded-xl max-w-md w-full p-6 relative">
            <button
              onClick={closeModal}
              className="absolute top-3 right-3 text-black font-bold text-xl"
            >
              ×
            </button>
            <Agendamento defaultService={selectedService} onClose={closeModal} />
          </div>
        </div>
      )}
    </section>
  );
}