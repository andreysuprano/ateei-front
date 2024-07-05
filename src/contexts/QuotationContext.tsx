import { ReactNode, createContext, useState } from 'react';

type Sam = {
	numeroPontos?: string;
	slotsReserva?: string;
	registroEventos?: string;
	protocoloComunicacao?: string;
	isa?: string;
	notificacao?: string;
	idioma?: string;
	releRepetidor?: string;
	tipoSincronismo?: string;
	tensaoSincronismo?: string;
	tensaoCampoVcc?: string;
	tensaoCampoVca?: string;
	tipoTensaoAlarme?: string;
	valorTensaoAlarme?: string;
	qtd?: number;
};

type Acessorio = {
	name?: string;
	description?: string;
	qtd?: number;
};

export type Quotation = {
	nome?: string;
	email?: string;
	skype?: string;
	telefone?: string;
	produtos?: Sam[];
	acessorios?: Acessorio[];
};

type QuotationContextType = {
	quotation: Quotation | undefined;
	setQuotation: (quotation: Quotation) => void;
	sam: Sam | undefined;
	setSam: (sam: Sam) => void;
};

interface UserContextProviderProps {
	children: ReactNode;
}

export const QuotationContext = createContext({} as QuotationContextType);

export const QuotationContextProvider = ({ children }: UserContextProviderProps) => {
	const [ quotation, setQuotation ] = useState<Quotation>();
	const [ sam, setSam ] = useState<Sam>();
	return (
		<QuotationContext.Provider value={{ quotation, setQuotation, sam, setSam }}>
			{children}
		</QuotationContext.Provider>
	);
};
