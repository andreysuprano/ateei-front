
import BtnToggle from "../components/BtnToggle";
import Button from "../components/Button";
import FormLayout from "../components/FormLayout";
import NavBar from "../components/NavBar";
import ProgressBar from "../components/ProgressBar";
import { useState } from "react";

import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


export function Conexoes() {
  const [checkbox, setCheckbox] = useState("");
  const [comunicacao, setComunicaco] = useState("");
  const [isa, setIsa] = useState("");

  const navigate = useNavigate();

  const handleClick = () => {
    if (!checkbox || !comunicacao || !isa) {
      return toast.error("Todos os campos sao obrigatorios");
    }
    navigate("/repetidor");
  };
  return (
    <>
      <NavBar />
      <FormLayout>
        <section className="w-96">
          <p className="font-bold mb-2 text-lg">Conexões</p>
          <ProgressBar/>
          <p className="text-sm text-gray-700">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A eligendi
            aliquid laborum!
          </p>

          <div className="checkboxs mt-7 mb-4">
            <p className="font-semibold text-sm">Comunicação</p>
            <div className="flex mt-3">
              <div className="flex items-center me-4">
                <input
                  type="checkbox"
                  name="checkbox"
                  id="checkbox"
                  onChange={(e) => setCheckbox(e.target.value)}
                  className="w-4 h-4 text-primary-blue bg-gray-100 border-gray-300 rounded"
                />
                <label htmlFor="" className="ms-2 text-sm text-gray-900">
                  USB
                </label>
              </div>
              <div className="flex items-center me-4">
                <input
                  type="checkbox"
                  name="checkbox"
                  id="checkbox"
                  onChange={(e) => setCheckbox(e.target.value)}
                  className="w-4 h-4 text-primary-blue bg-gray-100 border-gray-300 rounded"
                />
                <label htmlFor="" className="ms-2 text-sm text-gray-900">
                  Wifi
                </label>
              </div>
              <div className="flex items-center me-4">
                <input
                  type="checkbox"
                  name="checkbox"
                  id="checkbox"
                  onChange={(e) => setCheckbox(e.target.value)}
                  className="w-4 h-4 text-primary-blue bg-gray-100 border-gray-300 rounded"
                />
                <label htmlFor="" className="ms-2 text-sm text-gray-900">
                  Ethernet
                </label>
              </div>
              <div className="flex items-center me-4">
                <input
                  type="checkbox"
                  name="checkbox"
                  id="checkbox"
                  onChange={(e) => setCheckbox(e.target.value)}
                  className="w-4 h-4 text-primary-blue bg-gray-100 border-gray-300 rounded"
                />
                <label htmlFor="" className="ms-2 text-sm text-gray-900">
                  RS485
                </label>
              </div>
            </div>
          </div>

          <div className="input">
            <p className="font-semibold text-sm">Protocolo de Comunicação</p>
            <div className="relative mt-2">
              <input
                type="text"
                name="comunicacao"
                id="name"
                className="w-64 h-8 rounded-md border-2 border-gray-300"
                placeholder=""
              />
              <div className="absolute inset-y-0 w-full">
                <select
                  id=""
                  name="comunicacao"
                  onChange={(e) => setComunicaco(e.target.value)}
                  className="w-64 h-full rounded-md border-0 bg-transparent pl-2 pr-7 text-gray-500 focus:ring-2 focus:ring-inset focus:ring-primary-blue sm:text-sm"
                >
                  <option>DNP3</option>
                  <option>DNP4</option>
                  <option>DNP2</option>
                </select>
              </div>
            </div>
          </div>

          <div className="mt-3">
            <p className="font-semibold text-sm">Registro de Eventos</p>
            <BtnToggle />
          </div>

          <div className="input">
            <p className="font-semibold text-sm mt-3">ISA de Operação</p>
            <div className="relative mt-2">
              <input
                type="text"
                name="isa"
                id="name"
                className="w-64 h-8 rounded-md border-2 border-gray-300"
                placeholder=""
              />
              <div className="absolute inset-y-0 w-full">
                <select
                  id=""
                  name="isa"
                  onChange={(e) => setIsa(e.target.value)}
                  className="w-64 h-full rounded-md border-0 bg-transparent pl-2 pr-7 text-gray-500 focus:ring-2 focus:ring-inset focus:ring-primary-blue sm:text-sm"
                >
                  <option>ISA3</option>
                  <option>ISA4</option>
                  <option>ISA2</option>
                </select>
              </div>
            </div>
          </div>
          <Button action={handleClick} color="bg-primary-blue" text="Proximo" />
          <ToastContainer/>
        </section>
      </FormLayout>
    </>
  );
}
