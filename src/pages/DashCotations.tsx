import AdminNavbar from '../components/AdminNavBar';
import Button from '../components/Button';
import { Table } from '../components/Table';

export function DashCotations() {
	return (
		<div>
			<AdminNavbar />
			<div className="w-full h-ful flex flex-col justify-center items-center">
				<div className="w-full h-[100px] bg-gray-100 flex justify-center border border-gray-300">
					<div className="flex w-[60%] items-center justify-between">
						<div className="title">
							<h1 className="text-3xl font-medium">Cotações</h1>
						</div>

						<div className="">
							<Button action={() => {}} color="bg-primary-blue mt-0" text="Adicionar Nova" />
						</div>
					</div>
				</div>
				<div className=" w-[60%] pt-10">
					<Table />
				</div>
			</div>
		</div>
	);
}
