import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import FormLayout from '../components/FormLayout';
import NavBar from '../components/NavBar';
import useQuotation from '../hooks/useQuotation';
import { useState } from 'react';

export function Resumo() {
	const [quantidade, setQtd] = useState('1');
	const navigate = useNavigate();
	const { sam, quotation, setQuotation } = useQuotation();
	const handleClick = () => {
		if (sam && quotation) {
			sam.qtd = Number(quantidade);
			quotation.produtos = [...(quotation.produtos || []), sam];
			setQuotation(quotation);
			navigate('/menu');
		}
	};
	return (
		<div>
			<NavBar />
			<FormLayout>
				<div className="h-96 px-6 bg-slate-100 rounded-lg">
					<p className="font-semibold text-lg mt-4">SISTEMA AUTOMATICO DE MONITORAMENTO</p>
					<div className="flex">
						<p className="text-sm text-gray-500">{sam?.numeroPontos} pontos</p>
						<p className="text-sm text-gray-500 ml-2">{sam?.slotsReserva} Slots Reserva</p>
					</div>

					<div className="flex flex-wrap">
						<div className="mt-5 flex">
							<div className="w-64 h-32 py-2 px-5 bg-white">
								<p className="text-lg font-semibold">Tensões</p>
								<p className="text-sm font-medium">
									Tensão de campo VCA: <span className="text-sm text-gray-500">{sam?.tensaoCampoVca}</span>
								</p>
								<p className="text-sm font-medium">
									Tensão de campo VCC: <span className="text-sm text-gray-500">{sam?.tensaoCampoVcc}</span>
								</p>
								<p className="text-sm font-medium">
									Alarme - Tensão de campo: <span className="text-sm text-gray-500">{sam?.tipoTensaoAlarme}</span>
								</p>
							</div>

							<div className="w-64 h-32 ml-2 py-2 px-5 bg-white">
								<p className="text-lg font-semibold">Comunicação: </p>
								<p className="text-sm font-medium">
									Protocolo: <span className="text-sm text-gray-700">{sam?.protocoloComunicacao}</span>
								</p>
								<p className="text-sm font-medium">
									ISA de Operação: <span className="text-sm text-gray-500">{sam?.isa}</span>
								</p>
								<p className="text-sm font-medium">
									Conexões: <span className="text-sm text-gray-500">USB, Ethernet, Wifi, Bluetooth</span>
								</p>
							</div>
						</div>

						<div className="w-full h-32 mt-3 py-2 px-5 bg-white">
							<p className="text-lg font-semibold">Funcionalidades:</p>
							<p className="text-sm font-medium">
								Rele Repetidor: <span className="text-sm text-gray-500">{sam?.numeroPontos ? 'Sim' : 'Não'}</span>
							</p>
							<p className="text-sm font-medium">
								Registro de eventos: <span className="text-sm text-gray-500">{sam?.registroEventos ? 'Sim' : 'Não'}</span>
							</p>
							<p className="text-sm font-medium">
								Linguagem: <span className="text-sm text-gray-500">{sam?.idioma}</span>
							</p>
						</div>
					</div>
				</div>
				<label className='mt-10 mb-3'>Quantidade</label>
					<input
						type="number"
						placeholder="Quantidade"
						className={`border border-blue-100 rounded-md px-2 py-1 text-sm text-gray-900 w-full h-12 focus:outline-none `}
						value={quantidade}
						onChange={(e)=>{setQtd(e.target.value)}}
					/>
				<Button action={handleClick} color="bg-primary-blue" text="Continuar" />
			</FormLayout>
		</div>
	);
}
