import { SubmitHandler, useForm } from 'react-hook-form';
import Button from '../components/Button';
import FormLayout from '../components/FormLayout';
import NavBar from '../components/NavBar';
import ProgressBar from '../components/ProgressBar';

import { useNavigate } from 'react-router-dom';
import useQuotation from '../hooks/useQuotation';

type Inputs = {
	registroEventos: string;
	protocoloComunicacao: string;
	isa: string;
};

export function Conexoes() {
	const navigate = useNavigate();
	const { sam, setSam } = useQuotation();

	const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();

	const onSubmitForm: SubmitHandler<Inputs> = ({ registroEventos, protocoloComunicacao, isa }: Inputs) => {
		setSam({
			...sam,
			registroEventos,
			protocoloComunicacao,
			isa
		});
		navigate('/repetidor');
	};

	return (
		<div>
			<NavBar />
			<FormLayout>
				<section className="w-96">
					<p className="font-bold mb-2 text-lg">Comunicação e Registro de Eventos</p>
					<ProgressBar percent="30" />
					<p className="text-sm text-gray-700">
						Escolha qual protocolo de comunicação o seu sistema utiliza, se deseja ter o registro de eventos
						e qual ISA de operação do seu equipamento.
					</p>
					<div className="input">
						<p className="font-semibold text-sm mt-8">Protocolo de Comunicação</p>
						<div className="relative mt-2">
							<input
								type="text"
								className="w-64 h-8 rounded-md border-2 border-gray-300"
								placeholder=""
							/>
							<div className="absolute inset-y-0 w-full">
								<select
									className="w-64 h-full rounded-md border-0 bg-transparent pl-2 pr-7 text-gray-500 focus:ring-2 focus:ring-inset focus:ring-primary-blue sm:text-sm"
									{...register('protocoloComunicacao', { required: true })}
								>
									<option value="DNP2">DNP2</option>
									<option value="DNP3">DNP3</option>
									<option value="DNP4">DNP4</option>
								</select>
							</div>
						</div>
					</div>

					<div className="mt-3">
						<p className="font-semibold text-sm">Registro de Eventos</p>
						<div className="toggle mt-3">
							<label className="cursor-pointer">
								<input
									type="checkbox"
									className="sr-only peer"
									{...register('registroEventos', { shouldUnregister: false })}
								/>
								<div className="relative w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-primary-blue dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary-green" />
							</label>
						</div>
					</div>

					<div className="input">
						<p className="font-semibold text-sm mt-3">ISA de Operação</p>
						<div className="relative mt-2">
							<input
								type="text"
								className="w-64 h-8 rounded-md border-2 border-gray-300"
								placeholder=""
							/>
							<div className="absolute inset-y-0 w-full">
								<select
									{...register('isa', { required: true })}
									id=""
									className="w-64 h-full rounded-md border-0 bg-transparent pl-2 pr-7 text-gray-500 focus:ring-2 focus:ring-inset focus:ring-primary-blue sm:text-sm"
								>
									<option value="ISA3">ISA3</option>
									<option value="ISA4">ISA4</option>
									<option value="ISA2">ISA2</option>
								</select>
							</div>
						</div>
					</div>
					<Button action={handleSubmit(onSubmitForm)} color="bg-primary-blue" text="Proximo" />
				</section>
			</FormLayout>
		</div>
	);
}
