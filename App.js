import { AppProvider } from "./context.js"
import NavigatorComp from "./components/NavigatorComp.js"

const App = ()=> {

	return (
		<AppProvider>
			<NavigatorComp />
		</AppProvider>
		
	)
}

export default App