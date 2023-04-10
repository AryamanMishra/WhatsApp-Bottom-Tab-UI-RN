import React from 'react'
import { View,StyleSheet, Text } from 'react-native'
import SearchIcon from 'react-native-vector-icons/Ionicons'
import CameraIcon from 'react-native-vector-icons/Feather'
import MenuIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import { useGlobalContext } from '../context'

const Navbar = ()=> {

    // const { tab,setTab,setPreviousTab,previousTab } = useGlobalContext()

    return (
        <View style={styles.navContainer}>
            <View style={styles.navOptionsContainer}>
                <CameraIcon 
                    name='camera'
                    color='#ffe'
                    size={24}
                />
                <SearchIcon 
                    name='search'
                    color='#ffe'
                    size={23}
                    style={{paddingLeft:7.5}}
                /> 
                <MenuIcon 
                    name='dots-vertical'
                    color='#ffe'
                    size={24}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    navOptionsContainer : {
        paddingBottom:8,
        paddingRight:18,
        flexDirection:'row',
        gap:18
    },
})

export default Navbar
