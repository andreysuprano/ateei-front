import { useEffect, useState } from 'react';
import Button from '../../components/Button';
import ProductCustomizationItem from '../../components/CustomizationItem';
import NavBar from '../../components/NavBar';
import './style.css';
import Modal, { PontoResult } from '../../components/Modal';
import { useNavigate, useSearchParams } from 'react-router-dom';
import Teclado from '../../assets/img/teclado-me.jpeg';
import ProductCustomizationItemAntron from '../../components/CustomizationItemAntron';

export type Ponto = {
	color: string;
	ledType: string;
	message: string;
	position?:number;
};

export function ProductCustomization() {
	const [ matriz, setMatriz ] = useState<Ponto[][]>();
	const [ modalOpen, setModalOpen ] = useState<boolean>(false);
	const [ row, setRow ] = useState(0);
	const [ column, setColumn ] = useState(0);
	const navigate = useNavigate();
	const [ params ] = useSearchParams();

	const montaMatriz = (col: number, row: number) => {
		var pos = 1;
		const m = [];
		for (var c = 0; c < col; c++) {
			var linha: Ponto[] = [];
			for (var l = 0; l < row; l++) {
				linha.push({ color: '', ledType: '', message: '', position:pos });
				pos = pos+1;
			}
			m.push(linha);
		}
		return m;
	};

	useEffect(() => {
		setMatriz(montaMatriz(Number(params.get('colunas')), Number(params.get('linhas'))));
	}, []);

	function closeModal() {
		setModalOpen(false);
	}

	function onModalSave(ponto: PontoResult) {
		setMatriz((prevGrid) => {
			if (prevGrid) {
				return prevGrid.map(
					(row, rIdx) =>
						rIdx === ponto.line
							? row.map(
									(item, cIdx) =>
										cIdx === ponto.colum
											? { ...item, color: ponto.color, ledType: '', message: ponto.message }
											: item
								)
							: row
				);
			}
		});
	}

	return (
		<div className="screen">
			<Modal
				colum={row}
				line={column}
				modalOpen={modalOpen}
				closeModal={closeModal}
				onSave={onModalSave}
				ledType={params.get('ledType') || 'back'}
			/>
			<NavBar />
			<div className="layout">
				<div className="borda">
					<div className="desenho">
						<div className="wrapper-items">
							{matriz ? (
								matriz.map((column, col) => (
									<div key={col}>
										{column.map((item, rw) => {
											return(
											<div
												onClick={() => {
													setColumn(col);
													setRow(rw);
													setModalOpen(true);
												}}
												key={rw}
											>
												{
													params.get('produto') == 'me' ? 
														<>
															{col == Number(params.get('colunas')) - 2 &&
															rw == Number(params.get('linhas')) - 2 && (
																<div className={`teclado ${modalOpen ? 'hidden' : 'flex'}`}>
																	<img src={Teclado} alt="Teclado ME" className="image-teclado" />
																</div>
															)}

															<ProductCustomizationItem
																ledColor={item.color}
																ledType={params.get('ledType') || 'back'}
																message={item.message}
															/>
														</> 
														: 
														<>
															<ProductCustomizationItemAntron
																ledColor={item.color}
																ledType={params.get('ledType') || 'back'}
																message={item.message}
																position={item.position || 0}
															/>
														</>
														}
												
											</div>
										)})}
									</div>
								))
							) : (
								<span>Erro</span>
							)}
						</div>
					</div>
				</div>
			</div>

			<div className="menu">
				<div className="menu-items">
					<div className="menu-titles">
						<h1 className="title">Personalização {params.get('produto') == 'me' ? 'ME3011B' : 'Antron'}</h1>
						<div className="product-description">
							<span className="format">
								<strong>Formação:</strong>
								{` Colunas: ${params.get('colunas')}  Linhas: ${params.get('linhas')}`}
							</span>
							<span className="format">
								<strong>OC:</strong>
								{params.get('ordemDeCompra')}
							</span>
							<span className="format">
								<strong>Cliente:</strong>
								{params.get('nomeEmpresa')}
							</span>
						</div>
					</div>
					<div className="menu-buttons">
						<Button
							action={() => {
								setTimeout(() => {
									navigate('/customization-done');
								}, 1000);
							}}
							color="bg-primary-blue"
							text="Enviar"
							width="w-200"
						/>
					</div>
				</div>
			</div>
		</div>
	);
}
