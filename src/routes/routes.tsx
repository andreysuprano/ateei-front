import { BrowserRouter, Routes, Route } from "react-router-dom";
import SobreVoce from "../pages/SobreVoce";
import CheckIn from "../pages/ChekIn";
import { Conexoes } from "../pages/Conexoes";
import { Notificacao } from "../pages/Notficacao";
import { NumeroDePontos } from "../pages/NumeroDePontos";
import { Repetidor } from "../pages/Repetidor";
import { SelecaoEquip } from "../pages/SelecaoEquip";
import { TelaFinal } from "../pages/TelaFinal";
import { Tensoes } from "../pages/Tensoes";
import { Resumo } from "../pages/Resumo";


export const Router = () => {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={SobreVoce}/>
        <Route path="/chekin" element={<CheckIn/>}/>
        <Route path="/conexoes" element={<Conexoes/>}/>
        <Route path="/numerodepontos" element={<NumeroDePontos/>}/>
        <Route path="/repetidor" element={<Repetidor/>}/>
        <Route path="/selecaodeequip" element={<SelecaoEquip/>}/>
        <Route path="/telafinal" element={<TelaFinal/>}/>
        <Route path="/tensoes" element={<Tensoes/>}/>
        <Route path="/notificacao" element={<Notificacao/>}/>
        <Route path="/resumo" element={<Resumo/>}/>
      </Routes>
    </BrowserRouter>
  )
}
