import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { View,Text,StyleSheet } from 'react-native'
import Navbar from '../components/HomeFiles/Navbar'
import Content from '../components/HomeFiles/Content'


const Home = ()=> {
    return (
        <View style={styles.homeContainer}>
            <Navbar />
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
