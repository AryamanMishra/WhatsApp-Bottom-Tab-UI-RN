import React from 'react'
import { View,StyleSheet,ScrollView } from 'react-native'
import Chat from '../components/Chat'
import { useGlobalContext } from '../context'

const Chats = ()=> {

    const { tab,previousTab } = useGlobalContext()
    return (
        <View style={previousTab === 'Chats' && previousTab !== tab && previousTab !== null ? styles.mainChatsScroll : styles.mainChats}>
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
        // width:'100%'
    },
    mainChatsScroll : {
        transform:[{translateX:-100}]
    }
})
export default Chats
