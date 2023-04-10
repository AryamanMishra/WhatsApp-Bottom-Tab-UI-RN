import React from 'react'
import { View,StyleSheet,ScrollView } from 'react-native'
import Chat from '../components/Chat'

const Chats = ()=> {


    return (
        <View style={styles.mainChats}>
            <ScrollView
            >
                <Chat />
                <Chat />
                <Chat />
                <Chat />
                <Chat />
                <Chat />
                <Chat />
                <Chat />
                <Chat />
                <Chat />
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    mainChats : {
        backgroundColor:'rgba(100,100,100,0.1)'
    },
})
export default Chats
