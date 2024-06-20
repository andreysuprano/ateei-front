import NavBar from "../components/NavBar";
import FormLayout from "../components/FormLayout";
import ProgressBar from "../components/ProgressBar";
import Button from "../components/Button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export function Tensoes() {
  const [checkBox, setCheckBox] = useState("");
  const [descreva, setDescreva] = useState("");
  const [valor, setValor] = useState("");

  const navigate = useNavigate();

  const handleClick = () => {
    if (!checkBox || !descreva || !valor) {
      return toast.error("Todos os campos sao obrigatorios");
    }
    navigate('/conexoes')
  };

  return (
    <>
      <NavBar />
      <FormLayout>
        <section className="w-96">
          <p className="font-bold mb-2 text-lg">Tensões do Equipamento</p>
          <ProgressBar />
          <p className="text-sm text-gray-700">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A eligendi
            aliquid laborum!
          </p>
            <div className="checkboxs-1 mt-7 mb-4">
              <p className="font-semibold text-sm">Tensão de campo VCC</p>
              <div className="inputs flex mt-3">
                <div className="flex items-center me-4">
                  <input
                    type="radio"
                    name="checkbox"
                    id=""
                    onChange={(e) => setCheckBox(e.target.value)}
                    className="w-4 h-4 text-primary-blue bg-gray-100 border-gray-300 rounded"
                  />
                  <label htmlFor="" className="ms-2 text-sm text-gray-900">
                    24V
                  </label>
                </div>
                <div className="flex items-center me-4">
                  <input
                    type="radio"
                    name="checkbox"
                    id=""
                    onChange={(e) => setCheckBox(e.target.value)}
                    className="w-4 h-4 text-primary-blue bg-gray-100 border-gray-300 rounded"
                  />
                  <label htmlFor="" className="ms-2 text-sm text-gray-900">
                    48V
                  </label>
                </div>
                <div className="flex items-center me-4">
                  <input
                    type="radio"
                    name="checkbox"
                    id=""
                    onChange={(e) => setCheckBox(e.target.value)}
                    className="w-4 h-4 text-primary-blue bg-gray-100 border-gray-300 rounded"
                  />
                  <label htmlFor="" className="ms-2 text-sm text-gray-900">
                    60V
                  </label>
                </div>
              </div>

            <div className="checkboxs-2 mt-3">
              <p className="font-semibold text-sm">Tensão de campo VCA</p>
              <div className="flex mt-3">
                <div className="flex items-center me-4">
                  <input
                    type="radio"
                    name="checkbox"
                    id=""
                    onChange={(e) => setCheckBox(e.target.value)}
                    className="w-4 h-4 text-primary-blue bg-gray-100 border-gray-300 rounded"
                  />
                  <label htmlFor="" className="ms-2 text-sm text-gray-900">
                    110V
                  </label>
                </div>
                <div className="flex items-center me-4">
                  <input
                    type="radio"
                    name="checkbox"
                    id=""
                    onChange={(e) => setCheckBox(e.target.value)}
                    className="w-4 h-4 text-primary-blue bg-gray-100 border-gray-300 rounded"
                  />
                  <label htmlFor="" className="ms-2 text-sm text-gray-900">
                    220V
                  </label>
                </div>
                <div className="flex items-center me-4">
                  <input
                    type="radio"
                    name="checkbox"
                    id=""
                    onChange={(e) => setCheckBox(e.target.value)}
                    className="w-4 h-4 text-primary-blue bg-gray-100 border-gray-300 rounded"
                  />
                  <label htmlFor="" className="ms-2 text-sm text-gray-900">
                    Outra
                  </label>
                </div>
              </div>
            </div>
          </div>

          <div>
            <p className="font-semibold text-sm">Outra(Sob Consulta)</p>
            <input
              type="text"
              name="descreva"
              id=""
              onChange={(e) => setDescreva(e.target.value)}
              placeholder="Descreva..."
              className="mt-2 w-64 h-8 px-2 text-sm border-solid border-2 border-gray-300 rounded-md"
            />
          </div>
          <div className="mt-3">
            <p className="font-semibold text-sm">
              Alarme tensão de alimentação
            </p>
            <div className="flex mt-2">
              <div className="flex items-center me-4">
                <input
                  type="radio"
                  name="checkbox"
                  id=""
                  onChange={(e) => setCheckBox(e.target.value)}
                  className="w-4 h-4 text-primary-blue bg-gray-100 border-gray-300 rounded "
                />
                <label htmlFor="" className="ms-2 text-sm text-gray-900">
                  Não optar
                </label>
              </div>

              <div className="flex items-center me-4">
                <input
                  type="radio"
                  name="checkbox"
                  id=""
                  onChange={(e) => setCheckBox(e.target.value)}
                  className="w-4 h-4 text-primary-blue bg-gray-100 border-gray-300 rounded"
                />
                <label htmlFor="" className="ms-2 text-sm text-gray-900">
                  VCC
                </label>
              </div>

              <div className="flex items-center me-4">
                <input
                  type="radio"
                  name="checkbox"
                  id=""
                  onChange={(e) => setCheckBox(e.target.value)}
                  className="w-4 h-4 text-primary-blue bg-gray-100 border-gray-300 rounded"
                />
                <label htmlFor="" className="ms-2 text-sm text-gray-900">
                  VCA
                </label>
              </div>
            </div>
            <input
              type="text"
              name="valor"
              id=""
              onChange={(e) => setValor(e.target.value)}
              placeholder="Valor"
              className="mt-2 w-64 h-8 px-2 text-sm border-solid border-2 border-gray-300 rounded-md"
            />
          </div>
          <Button action={handleClick} color="bg-primary-blue" text="Proximo" />
          <ToastContainer />
        </section>
      </FormLayout>
    </>
  );
}
