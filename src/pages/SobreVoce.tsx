import FormLayout from '../components/FormLayout';
import NavBar from '../components/NavBar';
import Button from '../components/Button';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import { SubmitHandler, useForm } from 'react-hook-form';
import useQuotation from '../hooks/useQuotation';

type Inputs = {
	nome: string;
	email: string;
	skype: string;
	telefone: string;
};

export default function Form() {
	const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();

	const navigate = useNavigate();
	const { setQuotation, quotation } = useQuotation();

	const onSubmitForm: SubmitHandler<Inputs> = (data: Inputs) => {
		setQuotation({
			...quotation,
			nome: data.nome,
			email: data.email,
			skype: data.skype,
			telefone: data.telefone
		});
		navigate('/menu');
	};

	return (
		<div>
			<NavBar />
			<FormLayout>
				<p className="text-xl font-bold">Para iniciar precisamos saber um pouco mais sobre você.</p>
				<form action="" className="pt-8 pb-2 w-full" onSubmit={handleSubmit(onSubmitForm)}>
					<label>Nome</label>
					<input
						type="text"
						placeholder="Seu nome"
						className={`border ${errors.nome
							? 'border-red border-2 mb-0'
							: 'border-blue-100'} rounded-md px-2 py-1 text-sm text-gray-900 w-full h-12 focus:outline-none mb-5`}
						{...register('nome', { required: true })}
					/>
					{errors.nome && <p className="text-[14px] text-red mb-5">Este campo é obrigatório</p>}
					<label>Email</label>
					<input
						type="email"
						placeholder="Email"
						className={`border ${errors.email
							? 'border-red border-2 mb-0'
							: 'border-blue-100'} rounded-md px-2 py-1 text-sm text-gray-900 w-full h-12 focus:outline-none mb-5`}
						{...register('email', { required: true })}
					/>
					{errors.email && <p className="text-[14px] text-red mb-5">Este campo é obrigatório</p>}
					<label>Skype</label>
					<input
						type="text"
						placeholder="Skype"
						className={`border ${errors.skype
							? 'border-red border-2 mb-0'
							: 'border-blue-100'} rounded-md px-2 py-1 text-sm text-gray-900 w-full h-12 focus:outline-none mb-5`}
						{...register('skype', { required: true })}
					/>
					{errors.skype && <p className="text-[14px] text-red mb-5">Este campo é obrigatório</p>}
					<label>Telefone</label>
					<input
						type="tel"
						placeholder="Telefone/WhatsApp"
						className={`border ${errors.telefone
							? 'border-red border-2 mb-0'
							: 'border-blue-100'} rounded-md px-2 py-1 text-sm text-gray-900 w-full h-12 focus:outline-none `}
						{...register('telefone', { required: true })}
					/>
					{errors.telefone && <p className="text-[14px] text-red">Este campo é obrigatório</p>}
					<div className="w-full">
						<Button action={() => {}} color="bg-primary-blue" text="Proximo" />
					</div>
				</form>
				<ToastContainer />
			</FormLayout>
		</div>
	);
}
