import { useState } from 'react';
import Button from './Button';
import { ModalDetalhes } from './Modal/ModalDetalhes';
import { QuotationGetDto } from '../services/api';

export type QuotationsTableProps = {
	quotationsTable: QuotationGetDto[] | undefined;
};

export function QuotationsTable(data: QuotationsTableProps) {
	const [ onModalOpen, setModalOpen ] = useState<boolean>(false);

	return (
		<div className="">
			<div className="relative overflow-x-auto shadow-md sm:rounded-lg">
				<div className="p-4 bg-gray-100 ">
					<label htmlFor="table-search" className="sr-only">
						Search
					</label>
					<div className="relative mt-1">
						<div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
							<svg
								className="w-5 h-5 text-gray-500 "
								fill="currentColor"
								viewBox="0 0 20 20"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									fillRule="evenodd"
									d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
									clipRule="evenodd"
								/>
							</svg>
						</div>
						<input
							type="text"
							id="table-search"
							className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-80 pl-10 p-2.5  "
							placeholder="Search for items"
						/>
					</div>
				</div>
				<table className="w-full text-sm text-left text-gray-500">
					<thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
						<tr>
							<th scope="col" className="px-6 py-3">
								Id
							</th>
							<th scope="col" className="px-6 py-3">
								Nome Cliente
							</th>
							<th scope="col" className="px-6 py-3">
								Email
							</th>
							<th scope="col" className="px-6 py-3">
								Status
							</th>

							<th scope="col" className="px-6 py-3">
								Produto
							</th>
							<th scope="col" className="px-6 py-3">
								Ações
							</th>
						</tr>
					</thead>
					<tbody>
						{data.quotationsTable &&
							data.quotationsTable.map((item, key) => (
								<tr className="bg-white border-b  hover:bg-gray-50" key={key}>
									<th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
										{item.id}
									</th>
									<td className="px-6 py-4">{item.companyName}</td>
									<td className="px-6 py-4">{item.email}</td>
									<td className="px-6 py-4">
										<span className="bg-blue m-2 inline-block rounded border border-transparent py-1 px-2.5 text-xs font-medium text-white">
											{item.status}
										</span>
									</td>
									<td className="px-6 py-4">{item.phone}</td>
									<td className="px-6 py-4 text-right">
										<Button
											action={() => {
												setModalOpen(true);
											}}
											color="bg-primary-green"
											text="Detalhes"
											width="mt-0"
										/>
									</td>
								</tr>
							))}
					</tbody>
				</table>
			</div>
			<ModalDetalhes
				closeModal={() => {
					setModalOpen(false);
				}}
				modalOpen={onModalOpen}
			/>
		</div>
	);
}
