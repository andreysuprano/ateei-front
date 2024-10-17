interface ButtonProps {
	text: string;
	color: string;
	width?: string;
	action: () => void;
}

export default function Button(button: ButtonProps) {
	return (
		<div className={`${button.width ? button.width : 'w-full'}`}>
			<button
				type="submit"
				className={`cursor-pointer rounded-md  px-4 py-2 text-sm font-semibold text-white ${button.width
					? button.width
					: 'w-full'}   ${button.color}  h-12`}
				onClick={button.action}
			>
				{button.text}
			</button>
		</div>
	);
}
