import { useNavigate } from "react-router-dom";
import FormLayout from "../components/FormLayout";
import NavBar from "../components/NavBar";
import Button from "../components/Button";


export default function CheckIn() {
  const navigate = useNavigate()
  const handleClick = () => {
    navigate("/selecaodeequip")
  }
  return (
    <>
      <NavBar />
      <FormLayout>
        <section>
          <p className="mb-1 text-xl font-bold">
          Quantos Sinalizadores deseja adquirir?
          </p>
          <p className="text-xs mb-2">Quantidade: 1</p>
          <div onClick={handleClick} className="mt-6 h-16 bg-slate-50 outline-dashed outline-2 outline-slate-300 flex items-center justify-center cursor-pointer">
              <p className="text-sm">Adicionar Equipamento +</p>
          </div>

          <div onClick={handleClick} className="mt-2 h-16 bg-slate-50 outline-dashed outline-2 outline-slate-300 flex items-center justify-center cursor-pointer">
              <p className="text-sm">Adicionar Acessórios +</p>
          </div>
        </section>
      </FormLayout>
    </>
  );
}
