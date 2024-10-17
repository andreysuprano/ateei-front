import { useNavigate } from 'react-router-dom';
import logo from '../assets/img/logo-ateei.png';

export default function NavBar() {
	const navigate = useNavigate();

	function onHandleClick(to: string) {
		navigate(to);
	}
	return (
		<div className="w-full">
			<div className="w-full flex justify-around bg-white h-30 p-5">
				<div className="">
					<img src={logo} alt="" />
				</div>
				<div className="flex flex-col items-start justify-center">
					<a href="">Admin</a>
					<a className="text-sm text-gray-500" href="">
						Administrador
					</a>
				</div>
			</div>
			<div className="w-full flex justify-center bg-primary-blue">
				<div className="w-[60%] mt-1 mb-1">
					<div className="flex items-center gap-4">
						<a
							className="hover:bg-gray-600/60 p-2 text-white rounded-md cursor-pointer"
							onClick={() => onHandleClick('/dashboard')}
						>
							Cotações
						</a>
						<a
							className="hover:bg-gray-600/60 p-2 text-white rounded-md cursor-pointer"
							onClick={() => onHandleClick('/dashboard/produtos-acessorios')}
						>
							Produtos e Acessórios
						</a>
						<a
							className="hover:bg-gray-600/60 p-2 text-white rounded-md cursor-pointer"
							onClick={() => onHandleClick('/dashboard/customization')}
						>
							Inscrições ME e Antron
						</a>
						<a
							className="hover:bg-gray-600/60 p-2 text-white rounded-md cursor-pointer"
							onClick={() => onHandleClick('/dashboard/configuration')}
						>
							Configurações
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}
