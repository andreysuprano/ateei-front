import './style.css';

interface ProductCustomizationItemProps {
	message: string;
	ledType: string;
	ledColor: string;
	position: number;
}

export default function ProductCustomizationItemAntron(props: ProductCustomizationItemProps) {
	function convertColor() {
		switch (props.ledColor) {
			case 'Vermelho':
				return 'bg-red';
			case 'Azul':
				return 'bg-blue';
			case 'Amarelo':
				return 'bg-yellow';
			case 'Verde':
				return 'bg-green';
		}
	}
	return (
		<div className={`componenet ${props.ledType === 'back' ? convertColor() : ''}`}>
			<div className="wrapper">
				<div>{props.position}</div>
				{props.ledType === 'front' && <div className={`led ${convertColor()}`} />}
				{props.ledColor == '' ? (
					<div
						className={`message ${props.ledType === 'back'
							? 'text-[11px]'
							: 'text-[11px]'} tracking-widest`}
					>
						<span>_______________</span>
						<span>_______________</span>
						<span>_______________</span>
						<span>_______________</span>
					</div>
				) : (
					<div className={`message ${props.ledType === 'back' ? 'text-[11px]' : 'text-[11px]'}`}>
						{<span>{props.message.split('|')[0]}</span>}
						{<span>{props.message.split('|')[1]}</span>}
						{<span>{props.message.split('|')[2]}</span>}
						{<span>{props.message.split('|')[3]}</span>}
					</div>
				)}
			</div>
		</div>
	);
}
