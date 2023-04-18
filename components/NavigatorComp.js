import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Chats from '../tabs/Chats';
import Status from '../tabs/Status.js';
import Calls from '../tabs/Calls.js';
import Navbar from './Navbar';
import CustomTabBar from './CustomTabBar.js';
import { StatusBar } from 'expo-status-bar';
import { useGlobalContext } from '../context.js';
// import NavOnLongPress from './components/Chats/NavOnLongPress.js';


const Tab = createBottomTabNavigator()

const NavigatorComp = ()=> {

    const {longPress} = useGlobalContext()
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={{
                    header: ({ navigation, route, options }) => {
                        return <Navbar route={route} />;
                    },
                }}
                tabBar={props=><CustomTabBar {...props}/>}
            >
                <Tab.Screen name="Chats" component={Chats}/>
                <Tab.Screen name="Status" component={Status} />
                <Tab.Screen name="Calls" component={Calls} />
            </Tab.Navigator>
            <StatusBar style='light' />
		</NavigationContainer>
    )
}

export default NavigatorComp
