import { useState } from 'react';
import Button from '../components/Button';
import FormLayout from '../components/FormLayout';
import NavBar from '../components/NavBar';
import ProgressBar from '../components/ProgressBar';

import { useNavigate } from 'react-router-dom';
import { SubmitHandler, useForm } from 'react-hook-form';
import useQuotation from '../hooks/useQuotation';

type Inputs = {
	releRepetidor: string;
	tipoSincronismo: string;
	tensaoSincronismo: string;
};

export function Repetidor() {
	const [ pulso, setPulso ] = useState(false);
	const [ outro, setOutro ] = useState(false);
	const { sam, setSam } = useQuotation();

	const navigate = useNavigate();

	const { register, handleSubmit } = useForm<Inputs>();

	const onSubmitForm: SubmitHandler<Inputs> = ({ releRepetidor, tipoSincronismo, tensaoSincronismo }: Inputs) => {
		setSam({
			...sam,
			releRepetidor,
			tipoSincronismo,
			tensaoSincronismo
		});
		navigate('/notificacao');
	};

	return (
		<div>
			<NavBar />
			<FormLayout>
				<section className="w-96">
					<p className="font-bold mb-2 text-lg">Relé repetidor e Sincronismo</p>
					<ProgressBar percent="40" />
					<p className="text-sm text-gray-700">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. A eligendi aliquid laborum!
					</p>

					<div className="mt-3">
						<p className="font-semibold text-sm">Relé repetidor</p>
						<div className="toggle mt-3">
							<label className="cursor-pointer">
								<input
									type="checkbox"
									className="sr-only peer"
									{...register('releRepetidor', { shouldUnregister: false })}
								/>
								<div className="relative w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-primary-blue dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary-green" />
							</label>
						</div>
					</div>

					<div className="checkboxs mt-4 mb-2">
						<p className="font-semibold text-sm">Sincronismo</p>
						<div className="inputs flex mt-3">
							<div className="flex items-center me-4">
								<input
									type="radio"
									className="w-4 h-4 text-primary-blue bg-gray-100 border-gray-300 rounded"
									{...register('tipoSincronismo', { required: true })}
								/>
								<label htmlFor="" className="ms-2 text-sm text-gray-900">
									Não optar
								</label>
							</div>
							<div className="flex items-center me-4 ml-1">
								<input
									type="radio"
									className="w-4 h-4 text-primary-blue bg-gray-100 border-gray-300 rounded"
									{...register('tipoSincronismo', { required: true })}
								/>
								<label htmlFor="" className="ms-2 text-sm text-gray-900">
									lrig-B
								</label>
							</div>
							<div className="flex items-center me-4 ml-3">
								<input
									type="radio"
									className="w-4 h-4 text-primary-blue bg-gray-100 border-gray-300 rounded"
									{...register('tipoSincronismo', {
										required: true
									})}
									onChange={() => {
										setPulso(true);
									}}
								/>
								<label htmlFor="" className="ms-2 text-sm text-gray-900">
									Pulso de 1 seg
								</label>
							</div>
						</div>

						{pulso && (
							<div className="inputs flex mt-3">
								<div className="flex items-center me-4">
									<input
										type="radio"
										className="w-4 h-4 text-primary-blue bg-gray-100 border-gray-300 rounded"
										value="12VCC"
										{...register('tensaoSincronismo', { required: true })}
									/>
									<label htmlFor="" className="ms-2 text-sm text-gray-900">
										12 VCC
									</label>
								</div>
								<div className="flex items-center me-4 ml-5">
									<input
										type="radio"
										className="w-4 h-4 text-primary-blue bg-gray-100 border-gray-300 rounded"
										value="24VCC"
										{...register('tensaoSincronismo', { required: true })}
									/>
									<label htmlFor="" className="ms-2 text-sm text-gray-900">
										24 VCC
									</label>
								</div>
								<div className="flex items-center me-4">
									<input
										type="radio"
										className=" w-4 h-4 text-primary-blue bg-gray-100 border-gray-300 rounded"
										onChange={() => setOutro(true)}
									/>
									<label htmlFor="" className="ms-2 text-sm text-gray-900">
										Outro
									</label>
								</div>
							</div>
						)}
					</div>
					{outro && (
						<div>
							<input
								type="text"
								placeholder="Informe a Tensão"
								className="mt-2 w-48 h-8 px-2 text-sm border-solid border-2 border-gray-300 rounded-md"
								{...register('tensaoSincronismo', { required: true })}
							/>
						</div>
					)}

					<div>
						<Button action={handleSubmit(onSubmitForm)} color="bg-primary-blue" text="Proximo" />
					</div>
				</section>
			</FormLayout>
		</div>
	);
}
