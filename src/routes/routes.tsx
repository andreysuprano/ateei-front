import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SobreVoce from '../pages/SobreVoce';
import CheckIn from '../pages/ChekIn';
import { Conexoes } from '../pages/Conexoes';
import { Notificacao } from '../pages/Notficacao';
import { NumeroDePontos } from '../pages/NumeroDePontos';
import { Repetidor } from '../pages/Repetidor';
import { SelecaoEquipamentos } from '../pages/SelecaoEquip';
import { TelaFinal } from '../pages/TelaFinal';
import { Tensoes } from '../pages/Tensoes';
import { ProductCustomization } from '../pages/MeCustomization';
import { CustomizationDone } from '../pages/TelaFinalCustomization';
import { Resumo } from '../pages/Resumo';
import { DashCotations } from '../pages/DashCotations';
import { ProdutosAcessorios } from '../pages/ProdutosAcessorios';
import { Customization } from '../pages/Customization';
import { Configuration } from '../pages/Configuration';
import { Login } from '../pages/Login';
import { Inscricao } from '../pages/Inscricao';

export const Router = () => {
	return (
		<BrowserRouter>
			<Routes>
				{/* Redirecionamentos */}
				<Route path="/" Component={SobreVoce} />

				{/* Inscrições ME/MA/ANTRON */}
				<Route path="/subscription/:produto" Component={Inscricao} />
				<Route path="/customization" element={<ProductCustomization />} />

				{/* SAM */}
				<Route path="/menu" element={<CheckIn />} />
				<Route path="/tensoes" element={<Tensoes />} />
				<Route path="/conexoes" element={<Conexoes />} />
				<Route path="/numero-de-pontos" element={<NumeroDePontos />} />
				<Route path="/repetidor" element={<Repetidor />} />
				<Route path="/equipamentos" element={<SelecaoEquipamentos />} />
				<Route path="/telafinal" element={<TelaFinal />} />
				<Route path="/customization-done" element={<CustomizationDone />} />
				<Route path="/notificacao" element={<Notificacao />} />
				<Route path="/resumo" element={<Resumo />} />

				{/* DASHBOARD */}
				<Route path="/dashboard" element={<DashCotations />} />
				<Route path="/dashboard/produtos-acessorios" element={<ProdutosAcessorios />} />
				<Route path="/dashboard/customization" element={<Customization />} />
				<Route path="/dashboard/configuration" element={<Configuration />} />
				<Route path="/dashboard/login" element={<Login />} />
			</Routes>
		</BrowserRouter>
	);
};
