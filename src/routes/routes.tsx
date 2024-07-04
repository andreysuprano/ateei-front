import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SobreVoce from '../pages/SobreVoce';
import CheckIn from '../pages/ChekIn';
import { Conexoes } from '../pages/Conexoes';
import { Notificacao } from '../pages/Notficacao';
import { NumeroDePontos } from '../pages/NumeroDePontos';
import { Repetidor } from '../pages/Repetidor';
import { SelecaoEquip } from '../pages/SelecaoEquip';
import { TelaFinal } from '../pages/TelaFinal';
import { Tensoes } from '../pages/Tensoes';
import { ProductCustomization } from '../pages/ProductCustomization/ProductCustomization';
import { CustomizationDone } from '../pages/TelaFinalCustomization';
import { Resumo } from '../pages/Resumo';
import { DashCotations } from '../pages/DashCotations';
import { ProdutosAcessorios } from '../pages/ProdutosAcessorios';
import { Customization } from '../pages/Customization';
import { Configuration } from '../pages/Configuration';
import { Login } from '../pages/Login';
import InscricaoMe from '../pages/InscricaoMe';

export const Router = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" Component={SobreVoce} />
				<Route path="/personalization" Component={InscricaoMe} />
				<Route path="/customization-me" element={<ProductCustomization />} />
				<Route path="/tensoes" element={<Tensoes />} />
				<Route path="/chekin" element={<CheckIn />} />
				<Route path="/conexoes" element={<Conexoes />} />
				<Route path="/numerodepontos" element={<NumeroDePontos />} />
				<Route path="/repetidor" element={<Repetidor />} />
				<Route path="/selecaodeequip" element={<SelecaoEquip />} />
				<Route path="/telafinal" element={<TelaFinal />} />
				<Route path="/customization-done" element={<CustomizationDone />} />
				<Route path="/notificacao" element={<Notificacao />} />
				<Route path="/resumo" element={<Resumo />} />
				<Route path="/dashboard" element={<DashCotations />} />
				<Route path="/dashboard/produtos-acessorios" element={<ProdutosAcessorios />} />
				<Route path="/dashboard/customization" element={<Customization />} />
				<Route path="/dashboard/configuration" element={<Configuration />} />
				<Route path="/dashboard/login" element={<Login />} />
			</Routes>
		</BrowserRouter>
	);
};
