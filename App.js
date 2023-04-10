import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AppProvider } from "./context.js"
import Chats from './tabs/Chats';
import Status from './tabs/Status.js';
import Calls from './tabs/Calls.js';
import Navbar from './components/Navbar.js';
import { StatusBar } from 'expo-status-bar';


const Tab = createBottomTabNavigator()

const App = ()=> {
	return (
		<AppProvider>
			<NavigationContainer>
				<Tab.Navigator
					screenOptions={{
						headerRight:()=><Navbar />,
						headerStyle:{
							backgroundColor:'rgb(50,130,90)',
						},
						headerTitleStyle:{
							color:"#ffe",
							paddingLeft:5,
							paddingBottom:8
						},
						headerStatusBarHeight:40,
					}}
				>
					<Tab.Screen name="Chats" component={Chats}/>
					<Tab.Screen name="Status" component={Status} />
					<Tab.Screen name="Calls" component={Calls} />
				</Tab.Navigator>
				<StatusBar style='light' />
			</NavigationContainer>
		</AppProvider>
		
	)
}

export default App