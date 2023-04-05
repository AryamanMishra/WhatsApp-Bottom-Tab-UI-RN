import React, { useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import { View,StyleSheet } from 'react-native'
import Navbar from '../components/Navbar.js'
import Chats from '../tabs/Chats.js'
import Status from '../tabs/Status.js'
import Calls from '../tabs/Calls.js'
import { useGlobalContext } from '../context.js'


const Home = ({navigation})=> {

    const { tab } = useGlobalContext()
    return (
        <View style={styles.homeContainer}>
            <Navbar navigation={navigation}/>
            {
                tab === 'Chats' ? <Chats /> : tab === 'Status' ? <Status /> : <Calls />
            }
            <StatusBar style="auto" />
        </View>
    )
}


const styles = StyleSheet.create({
    homeContainer : {
        flex:1,
        backgroundColor:'#fff'
    }
})
export default Home
