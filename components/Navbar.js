import React from 'react'
import { View,StyleSheet } from 'react-native'
import SearchIcon from 'react-native-vector-icons/Ionicons'
import CameraIcon from 'react-native-vector-icons/Feather'
import MenuIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import { Text } from 'react-native'



const Navbar = ({route})=> {

    return (
        <View style={styles.navContainer}>
            <View>
                <Text style={styles.headerTitle}>{route.name}</Text>
            </View>
            <View style={styles.navOptionsContainer}>
                <CameraIcon 
                    name='camera'
                    color='#ffe'
                    size={23}
                />
                <SearchIcon 
                    name='search'
                    color='#ffe'
                    size={22}
                    style={{paddingLeft:7.5}}
                /> 
                <MenuIcon 
                    name='dots-vertical'
                    color='#ffe'
                    size={23}
                />
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    navContainer : {
        backgroundColor:'rgb(50,125,90)',
        flexDirection:'row',
        alignItems:"center",
        justifyContent:"space-between",
        width:'100%',
        height:105,
        paddingTop:32,
        paddingHorizontal:10
    },
    navOptionsContainer : {
        flexDirection:'row',
        gap:18
    },
    headerTitle : {
	    color:"#ffe",
    	fontSize:19,
    	letterSpacing:0.3,
    	paddingLeft:12,
    }
})

export default Navbar
