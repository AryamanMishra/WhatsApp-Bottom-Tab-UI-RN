import React from 'react'
import { Text, View,StyleSheet,ScrollView } from 'react-native'
import Chat from '../components/Chat'


const Chats = ()=> {
    return (
        <View style={styles.mainChats}>
            <ScrollView>
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
        flex:7
    }
})
export default Chats
