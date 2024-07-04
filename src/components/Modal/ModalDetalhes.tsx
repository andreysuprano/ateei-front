export interface ModalProps {
	modalOpen: boolean;
	closeModal: () => void;
	onSave?: () => void;
}

export const ModalDetalhes = (props: ModalProps) => {
	return (
		<div
			className={`fixed left-0 top-0 flex h-full min-h-screen w-full items-center justify-center bg-dark/30 px-4 py-5 ${props.modalOpen
				? 'block'
				: 'hidden'}`}
		>
			<div className="w-full max-w-[570px] rounded-[20px] bg-white px-8 py-12 text-center md:px-[70px] md:py-[60px]">
				<h3 className="pb-[18px] text-xl font-semibold text-dark dark:text-dark-1 sm:text-2xl">
					Detalhes do Pedido
				</h3>
				<span className="mx-auto mb-6 inline-block h-2 w-[300px] rounded bg-primary-green" />
				<div className="flex-col">
					{/* <p className="mb-4 text-base leading-relaxed text-body-color dark:text-dark-6">
						Preencha como ficara o texto em cada linha e a cor do led.
					</p> */}
					<p className="text-lg font-semibold">Produtos</p>

					<div className="flex flex-wrap  justify-center">
						<div className=" flex mb-10">
							<div className="w-64 py-2 px-5 bg-gray rounded-lg">
								<p className="text-sm font-bold">
									Número de pontos: <span className="text-sm text-gray-500"> 32</span>
								</p>
								<p className="text-sm font-bold">
									Slots Reserva: <span className="text-sm text-gray-500"> 2</span>
								</p>
								<p className="text-sm font-bold">
									Tensão de campo VCA: <span className="text-sm text-gray-500"> 127V</span>
								</p>
								<p className="text-sm font-bold">
									Tensão de campo VCC: <span className="text-sm text-gray-500"> 48V</span>
								</p>
								<p className="text-sm font-bold">
									Alarme - Tensão de campo: <span className="text-sm text-gray-500"> 90V</span>
								</p>
								<p className="text-sm font-bold">
									Conexões: <span className="text-sm text-gray-500"> Wi-fi, Ethernet, Bluetooth</span>
								</p>
							</div>
						</div>

						<div className="flex mb-10">
							<div className="w-64 py-2 px-5 bg-gray rounded-lg">
								<p className="text-sm font-bold">
									Número de pontos: <span className="text-sm text-gray-500"> 32</span>
								</p>
								<p className="text-sm font-bold">
									Slots Reserva: <span className="text-sm text-gray-500"> 2</span>
								</p>
								<p className="text-sm font-bold">
									Tensão de campo VCA: <span className="text-sm text-gray-500"> 127V</span>
								</p>
								<p className="text-sm font-bold">
									Tensão de campo VCC: <span className="text-sm text-gray-500"> 48V</span>
								</p>
								<p className="text-sm font-bold">
									Alarme - Tensão de campo: <span className="text-sm text-gray-500"> 90V</span>
								</p>
								<p className="text-sm font-bold">
									Conexões: <span className="text-sm text-gray-500"> Wi-fi, Ethernet, Bluetooth</span>
								</p>
							</div>
						</div>
					</div>
				</div>
				<div className="-mx-3 flex flex-wrap gap-6 justify-center">
					<button
						onClick={() => props.closeModal()}
						className="block w-[200px] rounded-md  p-3 text-center text-base font-medium text-white transition  hover:bg-primary-blue/90 hover:text-white dark:bg-primary-blue"
					>
						Fechar
					</button>
				</div>
			</div>
		</div>
	);
};
