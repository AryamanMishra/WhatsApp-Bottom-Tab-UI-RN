import { AppProvider } from './contexts/context'
import NavigatorComp from "./components/NavigatorComp.js"

const App = ()=> {

	return (
		<AppProvider>
			<NavigatorComp />
		</AppProvider>	
	)
}

export default App