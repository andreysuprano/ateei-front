import FormLayout from '../components/FormLayout';
import NavBar from '../components/NavBar';
import Button from '../components/Button';
import { useState } from 'react';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

export default function InscricaoMe() {
	const [ nome, setNome ] = useState('');
	const [ email, setEmail ] = useState('');
	const [ ordemDeCompra, setOrdemDeCompra ] = useState('');
	const [ linhas, setLinhas ] = useState('');
	const [ colunas, setColunas ] = useState('');
	const [ ledType, setLedType ] = useState('');

	const navigate = useNavigate();

	const handleClick = () => {
		if (nome == '' || email == '' || ordemDeCompra == '' || linhas == '' || colunas == '' || ledType == '') {
			return toast.error('Preencha os campos corretamente!');
		}
		navigate(
			`/customization-me?nomeEmpresa=${nome}&email=${email}&ordemDeCompra=${ordemDeCompra}&linhas=${linhas}&colunas=${colunas}&ledType=${ledType}`
		);
	};

	return (
		<div>
			<NavBar />
			<FormLayout>
				<p className="text-xl font-bold">
					Para iniciar precisamos saber quais as especificações do produto e qual ordem de compra está
					registrando!
				</p>
				<span className="text-lg text-gray-900 mt-10">Dados da empresa</span>
				<div className="pt-8 pb-2 w-full">
					<input
						type="text"
						name="Nome"
						placeholder="Nome da Empresa"
						onChange={(e) => setNome(e.target.value)}
						className="border border-blue-100  rounded-md px-2 py-1 text-sm text-gray-900 w-full h-10"
					/>
				</div>

				<div className="pt-2 pb-2 w-full">
					<input
						type="text"
						name="OC"
						placeholder="Ordem De Compra"
						onChange={(e) => setOrdemDeCompra(e.target.value)}
						className="border border-blue-100 rounded-md px-2 py-1 text-sm text-gray-900 w-full h-10"
					/>
				</div>

				<div className="pt-2 pb-2 w-full">
					<input
						type="email"
						name="Email"
						placeholder="Email"
						onChange={(e) => setEmail(e.target.value)}
						className="border border-blue-100 rounded-md px-2 py-1 text-sm text-gray-900 w-full h-10"
					/>
				</div>

				<span className="text-lg text-gray-900 ">Dados do produto</span>
				<div className="pt-2 pb-2 w-full flex items-center gap-5">
					<input
						type="number"
						placeholder="Número de Colunas"
						onChange={(e) => setColunas(e.target.value)}
						className="border border-blue-100 rounded-md px-2 py-1 text-sm text-gray-900 w-full h-10"
					/>

					<input
						type="number"
						placeholder="Número de Linhas"
						onChange={(e) => setLinhas(e.target.value)}
						className="border border-blue-100 rounded-md px-2 py-1 text-sm text-gray-900 w-full h-10"
					/>
				</div>

				<div className="input w-full">
					<select
						id=""
						name="isa"
						onChange={(e) => setLedType(e.target.value)}
						className="w-full h-10 mt-3 rounded-md border-0 bg-white pl-2 pr-7 text-gray-500 focus:ring-2 focus:ring-inset focus:ring-primary-blue sm:text-sm"
					>
						<option value="back">Tipo do Led</option>
						<option value="back">BackLight</option>
						<option value="front">Aparente</option>
					</select>
				</div>

				<div className="w-full">
					<Button action={handleClick} color="bg-primary-blue" text="Proximo" />
					<ToastContainer />
				</div>
			</FormLayout>
		</div>
	);
}
