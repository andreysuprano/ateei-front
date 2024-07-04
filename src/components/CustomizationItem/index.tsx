import './style.css';

interface ProductCustomizationItemProps {
	message: string;
	ledType: string;
	ledColor: string;
}

export default function ProductCustomizationItem(props: ProductCustomizationItemProps) {
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
		<div className="componenet">
			<div className="wrapper">
				<div className="led" />
				{props.ledColor == '' ? (
					<div className={`message bg-white`}>
						<span>_______________</span>
						<span>_______________</span>
						<span>_______________</span>
						<span>_______________</span>
					</div>
				) : (
					<div className={`message ${convertColor()}`}>
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
