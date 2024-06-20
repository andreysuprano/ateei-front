import { useState } from "react";
import BtnToggle from "../components/BtnToggle";
import Button from "../components/Button";
import FormLayout from "../components/FormLayout";
import NavBar from "../components/NavBar";
import ProgressBar from "../components/ProgressBar";

import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export function Repetidor () {
  const [checkbox, setCheckbox] = useState('')
  const [tensao, setTensao] = useState('')
  const navigate = useNavigate()

  const handleClick = () => {
    if(!checkbox || !tensao) {
      return toast.error("Todos os campos São obrigatórios");
    }
    navigate("/notificacao")
  }

  return (
    <>
      <NavBar/>
      <FormLayout>
        <section className="w-96">
          <p className="font-bold mb-2 text-lg">Relé repetidor e Sincronismo</p>
          <ProgressBar/>
          <p className="text-sm text-gray-700">Lorem ipsum dolor sit amet consectetur adipisicing elit. A eligendi aliquid laborum!</p>

          <div className="mt-3">
            <p className="font-semibold text-sm mt-3 mb-2">Relé Repetidor</p>
            <BtnToggle/>
          </div>

          <div className="checkboxs mt-4 mb-2">
            <p className="font-semibold text-sm">Sincronismo</p>
            <div className="inputs flex mt-3">
              <div className="flex items-center me-4">
                <input type="checkbox" name="checkbox" id="checkbox" onChange={(e) => setCheckbox(e.target.value)} className="w-4 h-4 text-primary-blue bg-gray-100 border-gray-300 rounded"/>
                <label htmlFor="" className="ms-2 text-sm text-gray-900">Não optar</label>
              </div>
              <div className="flex items-center me-4 ml-1">
                <input type="checkbox" name="checkbox" id="checkbox" onChange={(e) => setCheckbox(e.target.value)} className="w-4 h-4 text-primary-blue bg-gray-100 border-gray-300 rounded"/>
                <label htmlFor="" className="ms-2 text-sm text-gray-900">lrig-B</label>
              </div>
              <div className="flex items-center me-4 ml-3">
                <input type="checkbox" name="checkbox" id="checkbox" onChange={(e) => setCheckbox(e.target.value)} className="w-4 h-4 text-primary-blue bg-gray-100 border-gray-300 rounded"/>
                <label htmlFor="" className="ms-2 text-sm text-gray-900">Pulso de 1 seg</label>
              </div>
            </div>

            <div className="inputs flex mt-3">
              <div className="flex items-center me-4">
                <input type="checkbox" name="checkbox" id="checkbox" onChange={(e) => setCheckbox(e.target.value)} className="w-4 h-4 text-primary-blue bg-gray-100 border-gray-300 rounded"/>
                <label htmlFor="" className="ms-2 text-sm text-gray-900">12 VCC</label>
              </div>
              <div className="flex items-center me-4 ml-5">
                <input type="checkbox" name="checkbox" id="checkbox" onChange={(e) => setCheckbox(e.target.value)} className="w-4 h-4 text-primary-blue bg-gray-100 border-gray-300 rounded"/>
                <label htmlFor="" className="ms-2 text-sm text-gray-900">24 VCC</label>
              </div>
              <div className="flex items-center me-4">
                <input type="checkbox" name="checkbox" id="checkbox" onChange={(e) => setCheckbox(e.target.value)} className=" w-4 h-4 text-primary-blue bg-gray-100 border-gray-300 rounded"/>
                <label htmlFor="" className="ms-2 text-sm text-gray-900">Outro</label>
              </div>
            </div>
          </div>

          <div>
            <input type="text" name="tensao" id="" onChange={(e) => setTensao(e.target.value)} placeholder="Informe a Tensão" className="mt-2 w-48 h-8 px-2 text-sm border-solid border-2 border-gray-300 rounded-md" />
          </div>
          <div>
          <Button action={handleClick} color="bg-primary-blue" text="Proximo"/>
          <ToastContainer/>
          </div>
        </section>
      </FormLayout>
    </>
  )
}
