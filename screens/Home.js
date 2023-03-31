import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { View,Text,StyleSheet } from 'react-native'
import Navbar from '../components/Navbar.js'
import Content from '../components/HomeFiles/Content'


const Home = ({navigation})=> {
    return (
        <View style={styles.homeContainer}>
            <Navbar navigation={navigation}/>
            <Content />
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
