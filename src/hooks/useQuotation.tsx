import { useContext } from 'react';
import { QuotationContext } from '../contexts/QuotationContext';

const useQuotation = () => {
	return useContext(QuotationContext);
};

export default useQuotation;
