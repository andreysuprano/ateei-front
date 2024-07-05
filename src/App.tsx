import { QuotationContextProvider } from './contexts/QuotationContext';
import { Router } from './routes/routes';

function App() {
	return (
		<QuotationContextProvider>
			<Router />
		</QuotationContextProvider>
	);
}

export default App;
