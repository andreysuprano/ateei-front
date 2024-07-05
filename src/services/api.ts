import axios from 'axios';

const defaultOptions = {
	baseURL: 'http://localhost:3000/'
};

const client = axios.create(defaultOptions);

export type QuotationDto = {
	name: string;
	companyName: string;
	document: string;
	phone: string;
	skype: string;
	email: string;
	referer: string;
	description: string;
	accessories: string;
	purchaseOrder: string;
	products: string;
};

export type QuotationGetDto = {
	id: number;
	name: string;
	companyName: string;
	document: string;
	phone: string;
	skype: string;
	email: string;
	status: string;
	referer: string;
	description: string;
	accessories: string;
	purchaseOrder: string;
	products: string;
};

export const addQuotation = async (quotation: QuotationDto) => {
	return await client.post('/quotation/create', quotation);
};

export const getQuotations = async () => {
	return await client.get<QuotationGetDto>('/quotation/create');
};
