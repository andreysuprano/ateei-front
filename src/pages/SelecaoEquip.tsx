import NavBar from "../components/NavBar";
import FormLayout from "../components/FormLayout";
import { useNavigate } from "react-router-dom";


export function SelecaoEquip () {
  const navigate = useNavigate()
  const handleClick = () => {
    navigate("/numerodepontos")
  }
  return (
    <>
      <NavBar/>
      <FormLayout>
        <p className="mb-6 text-xl font-bold">Selecione o produto que deseja adquirir!</p>
        <div onClick={handleClick} className="bg-white border-solid border-2 border-slate-300 h-20 w-96 pr-20 px-1 items-center flex flex-row-reverse mb-3 cursor-pointer">
          <div className="w-96 ml-6">
            <p className="font-semibold text-sm">SAM</p>
            <p className="text-xs">Sinalizador de Alarme Digital</p>
          </div>
          <div className="">
            <img src="#" alt="" className="h-16 w-16"/>
          </div>
        </div>

        <div onClick={handleClick} className="bg-white border-solid border-2 border-slate-300 h-20 w-96 pr-20 px-1 items-center flex flex-row-reverse mb-3 cursor-pointer">
          <div className="w-96 ml-6">
            <p className="font-semibold text-sm">Nome do Equipamento</p>
            <p className="text-xs">Breve descrição do Equipamento...</p>
          </div>
          <div className="">
            <img src="#" alt="" className="h-16 w-16"/>
          </div>
        </div>

        <div onClick={handleClick} className="bg-white border-solid border-2 border-slate-300 h-20 w-96 pr-20 px-1 items-center flex flex-row-reverse mb-3 cursor-pointer">
          <div className="w-96 ml-6">
            <p className="font-semibold text-sm">Nome do Equipamento</p>
            <p className="text-xs">Breve descrição do Equipamento...</p>
          </div>
          <div className="">
            <img src="#" alt="" className="h-16 w-16"/>
          </div>
        </div>

        <div onClick={handleClick} className="bg-white border-solid border-2 border-slate-300 h-20 w-96 pr-20 px-1 items-center flex flex-row-reverse cursor-pointer">
          <div className="w-96 ml-6">
            <p className="font-semibold text-sm">Nome do Equipamento</p>
            <p className="text-xs">Breve descrição do Equipamento...</p>
          </div>
          <div className="">
            <img src="#" alt="" className="h-16 w-16"/>
          </div>
        </div>
      </FormLayout>
    </>
  )
}
