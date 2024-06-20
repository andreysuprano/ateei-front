import FormLayout from '../components/FormLayout';
import NavBar from '../components/NavBar';

export function CustomizationDone() {
	return (
		<div>
			<NavBar />
			<FormLayout>
				<div className="text-center pt-32">
					<p className="text-lg font-bold">Obrigado!</p>
					<p className="text-lg font-bold">Recebemos sua inscrição!</p>
					<p className="text-base text-gray-700 pt-3">
						Em breve um de nossos consultores comerciais entrará em contato para dar seguimento ao seu
						atendimento
					</p>
				</div>
				<div className="w-full">
					<a href="/">
						<button
							type="submit"
							className="cursor-pointer rounded-md bg-primary-blue px-4 py-2 text-sm font-semibold text-white w-full mt-5"
						>
							Voltar ao início
						</button>
					</a>
				</div>
			</FormLayout>
		</div>
	);
}
