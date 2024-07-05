import Button from '../components/Button';
import FormLayout from '../components/FormLayout';
import NavBar from '../components/NavBar';
import ProgressBar from '../components/ProgressBar';
import { useNavigate } from 'react-router-dom';
import { SubmitHandler, useForm } from 'react-hook-form';
import useQuotation from '../hooks/useQuotation';

type Inputs = {
	notificacao: string;
	idioma: string;
};

export function Notificacao() {
	const navigate = useNavigate();
	const { sam, setSam } = useQuotation();

	const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();

	const onSubmitForm: SubmitHandler<Inputs> = ({ notificacao, idioma }: Inputs) => {
		setSam({
			...sam,
			notificacao,
			idioma
		});
		navigate('/resumo');
	};

	return (
		<div>
			<NavBar />
			<FormLayout>
				<section className="w-96">
					<div>
						<p className="font-bold mb-2 text-lg">Notificações e Alertas</p>
						<ProgressBar percent="50" />
						<p className="text-sm text-gray-700">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. A eligendi aliquid laborum!
						</p>
					</div>

					<div className="checkboxs mt-7 mb-4">
						<p className="font-semibold text-sm">Software de utilização</p>
						<div className="flex mt-3">
							<div className="flex items-center me-4">
								<input
									type="radio"
									value="Email"
									className="w-4 h-4 text-primary-blue bg-gray-100 border-gray-300 rounded"
									{...register('notificacao', { required: true })}
								/>
								<label htmlFor="" className="ms-2 text-sm text-gray-900">
									Envio de Email
								</label>
							</div>
							<div className="flex items-center me-4">
								<input
									type="radio"
									value="sms"
									id=""
									className="w-4 h-4 text-primary-blue bg-gray-100 border-gray-300 rounded"
									{...register('notificacao', { required: true })}
								/>
								<label htmlFor="" className="ms-2 text-sm text-gray-900">
									Envio de Mensagem SMS
								</label>
							</div>
						</div>
					</div>

					<div className="checkboxs mt-7 mb-4">
						<p className="font-semibold text-sm">Idioma</p>
						<div className="flex mt-3">
							<div className="flex items-center me-4">
								<input
									type="radio"
									className="w-4 h-4 text-primary-blue bg-gray-100 border-gray-300 rounded"
									value="Português"
									{...register('idioma', { required: true })}
								/>
								<label htmlFor="" className="ms-2 text-sm text-gray-900">
									Português
								</label>
							</div>
							<div className="flex items-center me-4">
								<input
									type="radio"
									className="w-4 h-4 text-primary-blue bg-gray-100 border-gray-300 rounded"
									value="Inglês"
									{...register('idioma', { required: true })}
								/>
								<label htmlFor="" className="ms-2 text-sm text-gray-900">
									Inglês
								</label>
							</div>
							<div className="flex items-center me-4">
								<input
									type="radio"
									className="w-4 h-4 text-primary-blue bg-gray-100 border-gray-300 rounded"
									value="Espanhol"
									{...register('idioma', { required: true })}
								/>
								<label htmlFor="" className="ms-2 text-sm text-gray-900">
									Espanhol
								</label>
							</div>
						</div>
					</div>
					<Button action={handleSubmit(onSubmitForm)} color="bg-primary-blue" text="Proximo" />
				</section>
			</FormLayout>
		</div>
	);
}
