import NavBar from '../components/NavBar';
import FormLayout from '../components/FormLayout';
import ProgressBar from '../components/ProgressBar';
import Button from '../components/Button';
import { useState } from 'react';
import slotsImg from '../assets/img/slots.png';

import { useNavigate } from 'react-router-dom';
import useQuotation from '../hooks/useQuotation';

export function NumeroDePontos() {
	const [ pontos, setPontos ] = useState('8');
	const [ slots, setSlots ] = useState('1');

	const navigate = useNavigate();
	const { sam, setSam } = useQuotation();

	const handleClick = () => {
		setSam({
			...sam,
			numeroPontos: pontos,
			slotsReserva: slots
		});
		navigate('/tensoes');
	};

	return (
		<div>
			<NavBar />
			<FormLayout>
				<div className="w-96">
					<p className="font-bold mb-2 text-lg">Número de pontos</p>
					<ProgressBar percent="10" />
					<p className="text-sm">
						Selecione o número de pontos que você deseja monitorar e a quantidade de slots reserva.
					</p>
					<div className="mt-3  h-36 flex justify-center items-center">
						<img src={slotsImg} alt="imagem do produto" />
					</div>

					<p className="mt-2 font-semibold text-sm mb-1">Número de pontos</p>

					<div className="">
						<select
							id=""
							name="pontos"
							onChange={(e) => setPontos(e.target.value)}
							className="w-full h-10 rounded-md border-0  pl-2 pr-7 text-gray-500 focus:ring-2 focus:ring-inset focus:ring-primary-blue sm:text-sm"
						>
							<option value="8">8</option>
							<option value="16">16</option>
							<option value="24">24</option>
							<option value="32">32</option>
							<option value="40">40</option>
							<option value="48">48</option>
							<option value="56">56</option>
							<option value="64">64</option>
							<option value="72">72</option>
							<option value="80">80</option>
							<option value="88">88</option>
							<option value="96">96</option>
							<option value="104">104</option>
							<option value="112">112</option>
							<option value="120">120</option>
							<option value="128">128</option>
							<option value="136">136</option>
							<option value="144">144</option>
							<option value="152">152</option>
							<option value="160">160</option>
							<option value="168">168</option>
							<option value="176">176</option>
							<option value="184">184</option>
							<option value="192">192</option>
							<option value="200">200</option>
							<option value="208">208</option>
							<option value="216">216</option>
							<option value="224">224</option>
							<option value="232">232</option>
							<option value="240">240</option>
							<option value="248">248</option>
							<option value="256">256</option>
						</select>
					</div>

					<p className="mt-3 font-semibold text-sm mb-1">Número de Slots Reservas</p>

					<div className="">
						<select
							id=""
							name="slots"
							onChange={(e) => setSlots(e.target.value)}
							className="w-full h-10 rounded-md border-0 pl-2 pr-7 text-gray-500 focus:ring-2 focus:ring-inset focus:ring-primary-blue sm:text-sm"
						>
							<option value="1">1</option>
							<option value="2">2</option>
							<option value="3">3</option>
							<option value="4">4</option>
							<option value="5">5</option>
							<option value="6">6</option>
							<option value="7">7</option>
							<option value="8">8</option>
							<option value="9">9</option>
							<option value="10">10</option>
						</select>
					</div>

					<div>
						<Button action={handleClick} color="bg-primary-blue" text="Proximo" />
					</div>
				</div>
			</FormLayout>
		</div>
	);
}
