import { useState } from "react";

const services = [
  { title: "Corte de Cabelo", price: 25 },
  { title: "Corte + Barba", price: 35 },
  { title: "Corte + Luzes + Barba", price: 95 },
  { title: "Barba Completa", price: 15 },
  { title: "Pigmentação", price: 10 },
  { title: "Corte + Barba + Pigmentação", price: 50 },
];

export default function Agendamento() {
  const [nome, setNome] = useState("");
  const [horario, setHorario] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [selecionados, setSelecionados] = useState([]);
  const [showServices, setShowServices] = useState(false);

  const horariosDisponiveis = [
    "09:00", "10:00", "10:30", "11:00", "11:30", "12:00", "12:30",
    "13:00", "13:30", "14:00", "14:30", "15:00", "15:30", "16:00",
    "16:30", "17:00", "17:30", "18:00", "18:30"
  ];

  const toggleServico = (service) => {
    if (selecionados.includes(service)) {
      setSelecionados(selecionados.filter(s => s !== service));
    } else {
      setSelecionados([...selecionados, service]);
    }
  };

  const total = selecionados.reduce((acc, s) => acc + s.price, 0);

  const agendar = () => {
    if (!nome || !horario || selecionados.length === 0) {
      setMensagem("Preencha nome, horário e selecione pelo menos um serviço.");
      return;
    }

    const servicosNomes = selecionados.map(s => s.title).join(", ");
    setMensagem(`✅ Agendamento confirmado! ${nome} às ${horario} com: ${servicosNomes}. Total: R$ ${total},00`);

    setNome("");
    setHorario("");
    setSelecionados([]);
    setShowServices(false);
  };

  return (
    <div className="max-w-md mx-auto p-6 md:p-8 border rounded-2xl shadow-xl bg-yellow-500 text-black">
      <h1 className="text-2xl md:text-3xl font-bold mb-6 text-center">Agendar Horário</h1>

      {/* Nome */}
      <input
        type="text"
        placeholder="Seu nome"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
        className="w-full mb-5 px-4 py-3 rounded-xl border-2 border-black focus:outline-none focus:ring-2 focus:ring-black text-black"
      />

      {/* Horário */}
      <div className="mb-5">
        <p className="font-semibold mb-2">Escolha o horário:</p>
        <div className="flex flex-wrap gap-2">
          {horariosDisponiveis.map((h) => (
            <button
              key={h}
              onClick={() => setHorario(h)}
              className={`px-4 py-2 rounded-lg font-medium border-2 transition ${
                horario === h
                  ? "bg-black text-yellow-500 border-black"
                  : "bg-yellow-400 text-black border-yellow-400 hover:bg-yellow-300 hover:text-black"
              }`}
            >
              {h}
            </button>
          ))}
        </div>
      </div>

      {/* Serviços */}
      <div className="mb-5 relative">
        <button
          onClick={() => setShowServices(!showServices)}
          className="w-full px-4 py-3 rounded-xl border-2 border-black bg-black text-yellow-500 font-semibold hover:bg-yellow-500 hover:text-black transition flex justify-between items-center"
        >
          {selecionados.length > 0
            ? `${selecionados.length} serviço(s) selecionado(s)`
            : "Escolher Serviços"}
          <span className={`ml-2 transform transition-transform ${showServices ? "rotate-180" : ""}`}>
            ▼
          </span>
        </button>

        {showServices && (
          <div className="absolute z-10 w-full mt-2 bg-yellow-400 border-2 border-black rounded-xl shadow-lg p-2 max-h-64 overflow-y-auto transition-all">
            {services.map((s) => (
              <div
                key={s.title}
                onClick={() => toggleServico(s)}
                className={`p-3 rounded-lg mb-1 cursor-pointer flex justify-between items-center transition ${
                  selecionados.includes(s)
                    ? "bg-black text-yellow-500 font-semibold"
                    : "hover:bg-black hover:text-yellow-500"
                }`}
              >
                <span>{s.title}</span>
                <span>R$ {s.price},00</span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Total */}
      {selecionados.length > 0 && (
        <p className="font-semibold mb-5 text-right">Total: R$ {total},00</p>
      )}

      {/* Botão Agendar */}
      <button
        onClick={agendar}
        className="w-full px-6 py-3 border-2 border-black bg-black text-yellow-500 font-bold rounded-xl hover:bg-yellow-500 hover:text-black transition text-lg md:text-xl"
      >
        Agendar Horário
      </button>

      {/* Mensagem */}
      {mensagem && (
        <p className="mt-5 text-center text-black font-medium">{mensagem}</p>
      )}
    </div>
  );
}