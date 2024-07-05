import NavBar from "../components/NavBar";
import FormLayout from "../components/FormLayout";
import { useNavigate } from "react-router-dom";
import antronImg from '../assets/img/antron.png';
import maImg from '../assets/img/ma2016b.png';
import meImg from '../assets/img/me3011b.png';
import sam from '../assets/img/sam.png';

export function SelecaoEquipamentos () {
  const navigate = useNavigate()
  const handleClick = () => {
    navigate("/numero-de-pontos")
  }
  return (
    <>
      <NavBar/>
      <FormLayout>
        <p className="mb-6 text-xl font-bold">Selecione o produto que deseja adquirir!</p>
        <div onClick={handleClick} className="bg-white border-solid border-2 border-slate-300 h-20 w-96 pr-20 px-1 items-center flex flex-row-reverse mb-3 cursor-pointer p-10">
          <div className="w-52 ml-6 border-">
            <p className="font-semibold text-sm">SAM</p>
            <p className="text-xs">Sinalizador de Alarme Digital</p>
          </div>
          <div className="">
            <img src={sam} alt="" className="h-16 w-16 rounded-lg ml-1"/>
          </div>
        </div>

        <div onClick={handleClick} className="bg-white border-solid border-2 border-slate-300 h-20 w-96 pr-20 px-1 items-center flex flex-row-reverse mb-3 cursor-pointer p-10">
          <div className="w-52 ml-6">
            <p className="font-semibold text-sm">ME3011B</p>
            <p className="text-xs">Anunciador de Alarme Analógico</p>
          </div>
          <div className="">
            <img src={meImg} alt="" className="h-16 w-16 rounded-lg ml-1"/>
          </div>
        </div>

        <div onClick={handleClick} className="bg-white border-solid border-2 border-slate-300 h-20 w-96 pr-20 px-1 items-center flex flex-row-reverse mb-3 cursor-pointer p-10">
          <div className="w-52 ml-6 border-">
            <p className="font-semibold text-sm">MA2016b</p>
            <p className="text-xs">Anunciador de Alarme Analógico</p>
          </div>
          <div className="">
            <img src={maImg} alt="" className="h-16 w-16 rounded-lg ml-1"/>
          </div>
        </div>

        <div onClick={handleClick} className="bg-white border-solid border-2 border-slate-300 h-20 w-96 pr-20 px-1 items-center flex flex-row-reverse mb-3 cursor-pointer p-10">
          <div className="w-52 ml-6 border-">
            <p className="font-semibold text-sm">Antron</p>
            <p className="text-xs">Anunciador de Alarme Analógico</p>
          </div>
          <div className="">
            <img src={antronImg} alt="" className="h-16 w-16 rounded-lg ml-1"/>
          </div>
        </div>
      </FormLayout>
    </>
  )
}
