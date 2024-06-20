import FormLayout from "../components/FormLayout";
import NavBar from "../components/NavBar";
import Button from "../components/Button";
import { useState } from "react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

export default function Form() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [skype, setSkype] = useState("");
  const [telefone, setTelefone] = useState("");

  const navigate = useNavigate();

  const handleClick = () => {
    if (!nome || !email || !skype || !telefone) {
      return toast.error("Todos os campos São obrigatórios");
    }
    navigate("/chekin");
  };
  return (
    <div>
      <NavBar />
      <FormLayout>
        <p className="text-xl font-bold">
          Para iniciar precisamos saber um pouco mais sobre você.
        </p>
        <div className="pt-8 pb-2 w-full">
          <input
            type="text"
            name="Nome"
            placeholder="Seu nome"
            onChange={(e) => setNome(e.target.value)}
            className="border border-blue-100 rounded-md px-2 py-1 text-sm text-gray-900 w-full h-9"
          />
        </div>
        <div className="pt-2 pb-2 w-full">
          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            className="border border-blue-100 rounded-md px-2 py-1 text-sm text-gray-900 w-full h-9"
          />
        </div>

        <div className="pt-2 pb-2 w-full">
          <input
            type="text"
            name="Skaype"
            placeholder="Skype"
            onChange={(e) => setSkype(e.target.value)}
            className="border border-blue-100 rounded-md px-2 py-1 text-sm text-gray-900 w-full h-9"
          />
        </div>

        <div className="pt-2 pb-2 w-full">
          <input
            type="tel"
            name="telefone"
            placeholder="Telefone/WhatsApp"
            onChange={(e) => setTelefone(e.target.value)}
            className="border border-blue-100 rounded-md px-2 py-1 text-sm text-gray-900 w-full h-9"
          />
        </div>

        <div className="w-full">
          <Button action={handleClick} color="bg-primary-blue" text="Proximo" />
          <ToastContainer />
        </div>
      </FormLayout>
    </div>
  );
}
