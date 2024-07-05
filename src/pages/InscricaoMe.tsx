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
	const [ formacao, setFormacao ] = useState('');
	const [ ledType, setLedType ] = useState('');

	const navigate = useNavigate();

	const handleClick = () => {
		if (nome == '' || email == '' || ordemDeCompra == '' || formacao == '' || ledType == '') {
			return toast.error('Preencha os campos corretamente!');
		}
		navigate(
			`/customization-me?nomeEmpresa=${nome}&email=${email}&ordemDeCompra=${ordemDeCompra}&linhas=${formacao.split(
				','
			)[1]}&colunas=${formacao.split(',')[0]}&ledType=${ledType}`
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
					<div className="input w-full">
						<select
							id=""
							name="isa"
							onChange={(e) => setFormacao(e.target.value)}
							className="w-full h-10 mt-3 rounded-md border-0 bg-white pl-2 pr-7 text-gray-500 focus:ring-2 focus:ring-inset focus:ring-primary-blue sm:text-sm"
						>
							<option value="4,2">Formação</option>
							<option value="4,2">4V x 2H</option>
							<option value="6,2">6V x 2H</option>
							<option value="2,4">2V x 4H</option>
							<option value="4,4">4V x 4H</option>
							<option value="8,2">8V x 2H</option>
							<option value="6,4">6V x 4H</option>
							<option value="10,2">10V x 2H</option>
							<option value="8,4">8V x 4H</option>
							<option value="2,6">2V x 6H</option>
							<option value="4,6">4V x 6H</option>
							<option value="12,2">12V x 2H</option>
							<option value="10,4">10V x 4H</option>
							<option value="6,6">6V x 6H</option>
							<option value="8,6">8V x 6H</option>
							<option value="12,4">12V x 4H</option>
							<option value="14,2">14V x 2H</option>
							<option value="10,6">10V x 6H</option>
							<option value="2,8">2V x 8H</option>
							<option value="14,4">14V x 4H</option>
							<option value="4,8">4V x 8H</option>
							<option value="16,2">16V x 2H</option>
							<option value="6,8">6V x 8H</option>
							<option value="8,8">8V x 8H</option>
							<option value="16,4">16V x 4H</option>
							<option value="18,2">18V x 2H</option>
							<option value="10,8">10V x 8H</option>
							<option value="18,4">18V x 4H</option>
							<option value="12,8">12V x 8H</option>
							<option value="2,10">2V x 10H</option>
							<option value="4,10">4V x 10H</option>
							<option value="20,2">20V x 2H</option>
							<option value="6,10">6V x 10H</option>
							<option value="14,8">14V x 8H</option>
							<option value="20,4">20V x 4H</option>
							<option value="22,2">22V x 2H</option>
							<option value="16,8">16V x 8H</option>
							<option value="22,4">22V x 4H</option>
							<option value="2,12">2V x 12H</option>
							<option value="18,8">18V x 8H</option>
							<option value="4,12">4V x 12H</option>
							<option value="24,2">24V x 2H</option>
							<option value="6,12">6V x 12H</option>
							<option value="8,12">8V x 12H</option>
							<option value="24,4">24V x 4H</option>
							<option value="20,8">20V x 8H</option>
							<option value="10,12">10V x 12H</option>
							<option value="12,12">12V x 12H</option>
							<option value="22,8">22V x 8H</option>
							<option value="14,12">14V x 12H</option>
							<option value="2,14">2V x 14H</option>
							<option value="4,14">4V x 14H</option>
							<option value="16,12">16V x 12H</option>
							<option value="24,8">24V x 8H</option>
							<option value="18,12">18V x 12H</option>
							<option value="20,12">20V x 12H</option>
							<option value="2,16">3V x 16H</option>
							<option value="4,16">4V x 16H</option>
							<option value="6,16">6V x 16H</option>
							<option value="8,16">8V x 16H</option>
							<option value="10,16">10V x 16H</option>
							<option value="12,16">12V x 16H</option>
							<option value="14,16">14V x 16H</option>
							<option value="16,16">16V x 16H</option>
						</select>
					</div>
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
