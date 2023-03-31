import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/Home';
import Status from './screens/Status';
import Calls from './screens/Calls'



const Stack = createNativeStackNavigator()

const App = ()=> {
	return (
		<NavigationContainer>
			<Stack.Navigator
				screenOptions={{
						headerShown: false,
				}}
			>
				<Stack.Screen 
					name='Home'
					component={Home}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	)
}

export default App