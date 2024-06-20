import { useEffect, useState } from 'react';
import Button from '../../components/Button';
import ProductCustomizationItem from '../../components/CustomizationItem';
import NavBar from '../../components/NavBar';
import './style.css';
import Modal, { PontoResult } from '../../components/Modal';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';

export type Ponto = {
	color: string;
	ledType: string;
	message: string;
};

export function ProductCustomization() {
	const [ matriz, setMatriz ] = useState<Ponto[][]>();
	const [ modalOpen, setModalOpen ] = useState<boolean>(false);
	const [ row, setRow ] = useState(0);
	const [ column, setColumn ] = useState(0);
	const navigate = useNavigate();
	const [ params ] = useSearchParams();

	const montaMatriz = (col: number, row: number) => {
		const m = [];
		for (var c = 0; c < col; c++) {
			var linha: Ponto[] = [];
			for (var l = 0; l < row; l++) {
				linha.push({ color: '', ledType: '', message: '' });
			}
			m.push(linha);
		}
		console.log(matriz);
		return m;
	};

	useEffect(() => {
		console.log(params.get('colunas'));
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
		<div>
			<Modal colum={row} line={column} modalOpen={modalOpen} closeModal={closeModal} onSave={onModalSave} />
			<NavBar />
			<div className="menu bg-slate-100">
				<div className="menu-items pb-5">
					<div className="menu-titles">
						<h1 className="title">Personalização ME3011B</h1>
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
					<div className="menu-buttons ">
						<Button
							action={() => {
								setTimeout(() => {
									navigate('/customization-done');
								}, 1000);
							}}
							color="bg-primary-blue mt-1"
							text="Enviar"
							width="w-200"
						/>
					</div>
				</div>
			</div>
			<div className="layout">
				<div className="borda">
					<div className="desenho">
						<div className="wrapper-items">
							{matriz ? (
								matriz.map((item, col) => (
									<div key={col}>
										{item.map((item, rw) => (
											<div
												onClick={() => {
													setColumn(col);
													setRow(rw);
													setModalOpen(true);
												}}
												key={rw}
											>
												<ProductCustomizationItem
													ledColor={item.color}
													ledType={item.ledType}
													message={item.message}
												/>
											</div>
										))}
									</div>
								))
							) : (
								<span>Erro</span>
							)}
							<div className="teclado">
								{/* <img src={Teclado} alt="Teclado ME" className="image-teclado" /> */}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
