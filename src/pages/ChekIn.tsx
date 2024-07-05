import { useNavigate } from 'react-router-dom';
import FormLayout from '../components/FormLayout';
import NavBar from '../components/NavBar';
import useQuotation from '../hooks/useQuotation';
import lixeira from '../assets/img/lixeira.png';
import sam from '../assets/img/sam.png';
import Button from '../components/Button';
import { addQuotation } from '../services/api';

export default function CheckIn() {
	const navigate = useNavigate();
	const { quotation, setQuotation } = useQuotation();

	const handleClick = () => {
		console.log(quotation);
		navigate('/equipamentos');
	};

	const handleRemoveProduct = (index: number) => {
		console.log(quotation);
		if (quotation && quotation.produtos) {
			const updatedProducts = [...quotation.produtos];
			updatedProducts.splice(index, 1);
			setQuotation({ ...quotation, produtos: updatedProducts });
		}
	};

	const handleFinish = () => {
		if(quotation){
			addQuotation({
				accessories: JSON.stringify(quotation.acessorios+''),
				companyName: quotation.nome+'',
				description:'',
				document:quotation.email+'',
				email:quotation.email+'',
				name:quotation.nome+'',
				phone:quotation.telefone+'',
				products: JSON.stringify(quotation.produtos),
				purchaseOrder:'000000',
				referer:'SITE',
				skype:quotation.skype+'',
			}).then(()=>{
				navigate('/telafinal');
			}).catch((err)=>{
				console.log(err)
			});
		}
	}

	return (
		<div>
			<NavBar />
			<FormLayout>
				<section>
					<p className="mb-1 text-xl font-bold mb-10">Selecione os equipamentos que deseja!</p>
						{
							quotation && quotation?.produtos?.map((item, index)=>
							
									<div
										className="bg-white border-solid border-2 rounded-lg border-slate-300 h-24 w-96  px-1 items-center flex mb-3"
										key={index}
									>
										<img src={sam} alt="" className="h-16 w-16 rounded-lg ml-1" />
										<div className='flex justify-between  w-72' >
											<div className="ml-6 border-">
												<p className="font-semibold text-sm">SAM 1.0</p>
												<p className="text-xs">Quantidade: {item.qtd}</p>
											</div>
											<div className='flex'>
												<div 
													className='pl-1 w-10 h-10 bg-red-500 flex cursor-pointer items-center justify-center rounded-lg hover:bg-red-600'
													onClick={()=>handleRemoveProduct(index)}
												>
													<img src={lixeira} alt="" width={20} height={20}/>
												</div>
											</div>
										</div>
									</div>
							
							)
						}
					<div
						onClick={handleClick}
						className="mt-6 h-24 bg-slate-50 rounded-lg hover:bg-slate-100 outline-dashed outline-2 outline-slate-300 flex items-center justify-center cursor-pointer"
					>
						<p className="text-[16px]">Adicionar Sinalizador de Alarme</p>
					</div>

					<div
						onClick={handleClick}
						className="mt-6 h-24 bg-slate-50 rounded-lg hover:bg-slate-100 outline-dashed outline-2 outline-slate-300 flex items-center justify-center cursor-pointer"
					>
						<p className="text-[16px]">Adicionar Acessórios</p>
					</div>
				</section>
					{
						quotation?.produtos?.length && quotation?.produtos?.length > 0 &&
						<Button action={handleFinish} color='bg-primary-blue' text='Finalizar Solicitação' width="w-96" />
					}
			</FormLayout>
		</div>
	);
}
