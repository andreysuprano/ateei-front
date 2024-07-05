import NavBar from '../components/NavBar';
import FormLayout from '../components/FormLayout';
import ProgressBar from '../components/ProgressBar';
import Button from '../components/Button';

import { useNavigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';

import { SubmitHandler, useForm } from 'react-hook-form';
import useQuotation from '../hooks/useQuotation';

type Inputs = {
	tensaoCampoVcc: string;
	tensaoCampoVca: string;
	tipoTensaoAlarme: string;
	valorTensaoAlarme: string;
};

export function Tensoes() {
	const navigate = useNavigate();
	const { sam, setSam } = useQuotation();

	const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();

	const onSubmitForm: SubmitHandler<Inputs> = ({
		tensaoCampoVca,
		tensaoCampoVcc,
		tipoTensaoAlarme,
		valorTensaoAlarme
	}: Inputs) => {
		setSam({
			...sam,
			tensaoCampoVcc,
			tensaoCampoVca,
			tipoTensaoAlarme,
			valorTensaoAlarme
		});
		navigate('/conexoes');
	};

	return (
		<div>
			<NavBar />
			<FormLayout>
				<section className="w-96">
					<p className="font-bold mb-2 text-lg">Tensões do Equipamento</p>
					<ProgressBar percent="20" />
					<p className="text-sm text-gray-700">
						Selecione todas as tensões compatíveis com os seus equipamentos, e as tensões disponíveis para
						alimentação do equipamento.
					</p>
					<div className="checkboxs-1 mt-7 mb-4">
						<p className="font-semibold text-sm">Tensão de campo VCC</p>
						{errors.tensaoCampoVcc && <p className="text-[14px] text-red mb-5">Este campo é obrigatório</p>}
						<div className="inputs flex mt-3">
							<div className="flex items-center me-4">
								<input
									type="radio"
									value="24V"
									className="w-4 h-4 text-primary-blue bg-gray-100 border-gray-300 rounded"
									{...register('tensaoCampoVcc', { required: true })}
								/>
								<label htmlFor="" className="ms-2 text-sm text-gray-900">
									24V
								</label>
							</div>
							<div className="flex items-center me-4">
								<input
									type="radio"
									value="48V"
									className="w-4 h-4 text-primary-blue bg-gray-100 border-gray-300 rounded"
									{...register('tensaoCampoVcc', { required: true })}
								/>
								<label htmlFor="" className="ms-2 text-sm text-gray-900">
									48V
								</label>
							</div>
							<div className="flex items-center me-4">
								<input
									type="radio"
									value="60V"
									className="w-4 h-4 text-primary-blue bg-gray-100 border-gray-300 rounded"
									{...register('tensaoCampoVcc', { required: true })}
								/>
								<label htmlFor="" className="ms-2 text-sm text-gray-900">
									60V
								</label>
							</div>
						</div>

						<div className="checkboxs-2 mt-3">
							<p className="font-semibold text-sm">Tensão de campo VCA</p>
							{errors.tensaoCampoVca && (
								<p className="text-[14px] text-red mb-5">Este campo é obrigatório</p>
							)}
							<div className="flex mt-3">
								<div className="flex items-center me-4">
									<input
										type="radio"
										value="110V"
										className="w-4 h-4 text-primary-blue bg-gray-100 border-gray-300 rounded"
										{...register('tensaoCampoVca', { required: true })}
									/>
									<label htmlFor="" className="ms-2 text-sm text-gray-900">
										110V
									</label>
								</div>
								<div className="flex items-center me-4">
									<input
										type="radio"
										value="220V"
										className="w-4 h-4 text-primary-blue bg-gray-100 border-gray-300 rounded"
										{...register('tensaoCampoVca', { required: true })}
									/>
									<label htmlFor="" className="ms-2 text-sm text-gray-900">
										220V
									</label>
								</div>
							</div>
						</div>
					</div>
					<div className="mt-3">
						<p className="font-semibold text-sm">Alarme tensão de alimentação</p>
						{errors.tipoTensaoAlarme && (
							<p className="text-[14px] text-red mb-5">Este campo é obrigatório</p>
						)}
						<div className="flex mt-2">
							<div className="flex items-center me-4">
								<input
									type="radio"
									value=""
									className="w-4 h-4 text-primary-blue bg-gray-100 border-gray-300 rounded "
									{...register('tipoTensaoAlarme', { required: true })}
								/>
								<label htmlFor="" className="ms-2 text-sm text-gray-900">
									Não optar
								</label>
							</div>

							<div className="flex items-center me-4">
								<input
									type="radio"
									value="VCC"
									className="w-4 h-4 text-primary-blue bg-gray-100 border-gray-300 rounded"
									{...register('tipoTensaoAlarme', { required: true })}
								/>
								<label htmlFor="" className="ms-2 text-sm text-gray-900">
									VCC
								</label>
							</div>

							<div className="flex items-center me-4">
								<input
									type="radio"
									value="VCA"
									className="w-4 h-4 text-primary-blue bg-gray-100 border-gray-300 rounded"
									{...register('tipoTensaoAlarme', { required: true })}
								/>
								<label htmlFor="" className="ms-2 text-sm text-gray-900">
									VCA
								</label>
							</div>
						</div>
						<input
							type="email"
							placeholder="Valor"
							className={`border ${errors.valorTensaoAlarme
								? 'border-red border-2 mb-0'
								: 'border-blue-100'} rounded-md mt-4 px-2 py-1 text-sm text-gray-900 w-full h-12 focus:outline-none mb-5`}
							{...register('valorTensaoAlarme', { required: true })}
						/>
					</div>
					<Button action={handleSubmit(onSubmitForm)} color="bg-primary-blue" text="Proximo" />
				</section>
			</FormLayout>
		</div>
	);
}
