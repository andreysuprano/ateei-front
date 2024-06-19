import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import FormLayout from "../components/FormLayout";
import NavBar from "../components/NavBar";

export function Resumo() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/chekin");
  };
  return (
    <>
      <NavBar />
      <FormLayout>
        <div className="w-full h-96 px-6 bg-slate-100">
          <p className="font-semibold text-lg mt-4">NOME DO EQUIPAMENTO</p>
          <div className="flex">
            <p className="text-sm text-gray-500">256 pontos</p>
            <p className="text-sm text-gray-500 ml-2">3 Slots Reserva</p>
          </div>

          <div className="flex flex-wrap">
            <div className="mt-5 flex">
              <div className="w-64 h-28 py-2 px-5 bg-white">
                <p className="text-lg font-semibold">Tensões</p>
                <p className="text-sm font-medium">
                  Tensão de campo VCA:{" "}
                  <span className="text-sm text-gray-500">127V</span>
                </p>
                <p className="text-sm font-medium">
                  Tensão de campo VCC:{" "}
                  <span className="text-sm text-gray-500">48V</span>
                </p>
                <p className="text-sm font-medium">
                  Alarme - Tensão de campo:{" "}
                  <span className="text-sm text-gray-500">90V</span>
                </p>
              </div>

              <div className="w-64 h-28 ml-2 py-2 px-5 bg-white">
                <p className="text-lg font-semibold">Comunicação: </p>
                <p className="text-sm font-medium">
                  Protocolo: <span className="text-sm text-gray-700">DNP3</span>
                </p>
                <p className="text-sm font-medium">
                  ISA de Operação:{" "}
                  <span className="text-sm text-gray-500">ISADORA</span>
                </p>
                <p className="text-sm font-medium">
                  Conexões:{" "}
                  <span className="text-sm text-gray-500">USB, Ethernet</span>
                </p>
              </div>
            </div>

            <div className="w-full h-28 mt-3 py-2 px-5 bg-white">
              <p className="text-lg font-semibold">Funcionalidades:</p>
              <p className="text-sm font-medium">
                Rele Repetidor:{" "}
                <span className="text-sm text-gray-500">sim</span>
              </p>
              <p className="text-sm font-medium">
                Registro de eventos:{" "}
                <span className="text-sm text-gray-500">sim</span>
              </p>
              <p className="text-sm font-medium">
                Linguagem: <span className="text-sm text-gray-500">ingles</span>
              </p>
            </div>
          </div>
        </div>
        <Button action={handleClick} color="bg-primary-blue" text="Continuar" />
      </FormLayout>
    </>
  );
}
