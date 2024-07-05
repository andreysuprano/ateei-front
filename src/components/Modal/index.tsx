import { useEffect, useState } from 'react';

export interface PontoResult {
	message: string;
	color: string;
	colum: number;
	line: number;
}

export interface ModalProps {
	modalOpen: boolean;
	closeModal: () => void;
	onSave: (ponto: PontoResult) => void;
	colum: number;
	line: number;
	ledType: string;
}

export const Modal = (props: ModalProps) => {
	const [ ponto, setPonto ] = useState<PontoResult>();

	const [ line1, setLine1 ] = useState<string>('');
	const [ line2, setLine2 ] = useState<string>('');
	const [ line3, setLine3 ] = useState<string>('');
	const [ line4, setLine4 ] = useState<string>('');

	const [ color, setColor ] = useState<string>('Vermelho');

	useEffect(
		() => {
			setPonto({
				message: `
				${line1?.toUpperCase()?line1?.toUpperCase(): '_______________'}|
				${line2?.toUpperCase()?line2?.toUpperCase(): '_______________'}|
				${line3?.toUpperCase()?line3?.toUpperCase(): '_______________'}|
				${line4?.toUpperCase()?line4?.toUpperCase(): '_______________'}`,
				color,
				colum: props.colum,
				line: props.line
			});
		},
		[ line1, line2, line3, line4, color ]
	);

	function handleSalvar() {
		if (ponto) {
			setLine1('');
			setLine2('');
			setLine3('');
			setLine4('');
			props.onSave(ponto);
			props.closeModal();
			setPonto(undefined);
		} else {
			props.closeModal();
		}
	}

	return (
		<div
			className={`fixed left-0 top-0 flex h-full min-h-screen w-full items-center justify-center bg-dark/30 px-4 py-5 ${props.modalOpen
				? 'block'
				: 'hidden'}`}
		>
			<div className="w-full max-w-[570px] rounded-[20px] bg-white px-8 py-12 text-center md:px-[70px] md:py-[60px]">
				<h3 className="pb-[18px] text-xl font-semibold text-dark dark:text-dark-1 sm:text-2xl">
					Inscrição de ponto
				</h3>
				<span className="mx-auto mb-6 inline-block h-1 w-[90px] rounded bg-primary-green" />
				<div className="flex-col">
					<p className="mb-4 text-base leading-relaxed text-body-color dark:text-dark-6">
						Preencha como ficara o texto em cada linha e a cor do led.
					</p>

					<div className="">
						<input
							type="text"
							name="comunicacao"
							id="name"
							className="w-full p-3 text-center h-10 rounded-md border-2 border-gray-300 mb-4 uppercase"
							placeholder={`Max ${props.ledType == 'front' ? 15 : 19} caracteres`}
							maxLength={props.ledType == 'front' ? 15 : 19}
							onChange={(e) => setLine1(e.target.value)}
							value={line1}
						/>

						<input
							type="text"
							name="comunicacao"
							id="name"
							className="w-full p-3 text-center h-10 rounded-md border-2 border-gray-300 mb-4 uppercase"
							placeholder={`Max ${props.ledType == 'front' ? 15 : 19} caracteres`}
							maxLength={props.ledType == 'front' ? 15 : 19}
							onChange={(e) => setLine2(e.target.value)}
							value={line2}
						/>

						<input
							type="text"
							name="comunicacao"
							id="name"
							className="w-full p-3 text-center h-10 rounded-md border-2 border-gray-300 mb-4 uppercase"
							placeholder={`Max ${props.ledType == 'front' ? 15 : 19} caracteres`}
							maxLength={props.ledType == 'front' ? 15 : 19}
							onChange={(e) => setLine3(e.target.value)}
							value={line3}
						/>

						<input
							type="text"
							name="comunicacao"
							id="name"
							className="w-full p-3 text-center h-10 rounded-md border-2 border-gray-300 mb-4 uppercase"
							placeholder={`Max ${props.ledType == 'front' ? 15 : 19} caracteres`}
							maxLength={props.ledType == 'front' ? 15 : 19}
							onChange={(e) => setLine4(e.target.value)}
							value={line4}
						/>
					</div>

					<div className="flex justify-center mb-5">
						<div className="flex items-center me-4">
							<input
								type="checkbox"
								name="checkbox"
								id="checkbox"
								className="w-4 h-4 text-primary-blue bg-gray-100 border-gray-300 rounded"
								checked={color == 'Azul' ? true : false}
								onChange={() => setColor('Azul')}
							/>
							<label htmlFor="" className="ms-2 text-sm text-gray-900">
								Azul
							</label>
						</div>

						<div className="flex items-center me-4">
							<input
								type="checkbox"
								name="checkbox"
								id="checkbox"
								className="w-4 h-4 text-primary-blue bg-gray-100 border-gray-300 rounded"
								checked={color == 'Verde' ? true : false}
								onChange={() => setColor('Verde')}
							/>
							<label htmlFor="" className="ms-2 text-sm text-gray-900">
								Verde
							</label>
						</div>

						<div className="flex items-center me-4">
							<input
								type="checkbox"
								name="checkbox"
								id="checkbox"
								className="w-4 h-4 text-primary-blue bg-gray-100 border-gray-300 rounded"
								checked={color == 'Vermelho' ? true : false}
								onChange={() => setColor('Vermelho')}
							/>
							<label htmlFor="" className="ms-2 text-sm text-gray-900">
								Vermelho
							</label>
						</div>

						<div className="flex items-center me-4">
							<input
								type="checkbox"
								name="checkbox"
								id="checkbox"
								className="w-4 h-4 text-primary-blue bg-gray-100 border-gray-300 rounded"
								checked={color == 'Amarelo' ? true : false}
								onChange={() => setColor('Amarelo')}
							/>
							<label htmlFor="" className="ms-2 text-sm text-gray-900">
								Amarelo
							</label>
						</div>
					</div>
				</div>
				<div className="-mx-3 flex flex-wrap gap-6 justify-center">
					<button
						onClick={() => props.closeModal()}
						className="block w-[200px] rounded-md  p-3 text-center text-base font-medium text-white transition  hover:bg-primary-blue/90 hover:text-white dark:bg-primary-blue"
					>
						Cancelar
					</button>
					<button
						className="block w-[200px] rounded-md bg-primary-green p-3 text-center text-base font-medium text-white transition hover:bg-primary-green/80"
						onClick={handleSalvar}
					>
						<p> Salvar </p>
					</button>
				</div>
			</div>
		</div>
	);
};

export default Modal;
