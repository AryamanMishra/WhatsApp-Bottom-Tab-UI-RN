import React from 'react'
import { View,StyleSheet,ScrollView } from 'react-native'
import Chat from '../components/Chats/Chat'
import NewMessageIcon from 'react-native-vector-icons/MaterialCommunityIcons'


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
            <NewMessageIcon 
                name='message-text-outline'
                size={30}
                color='white'
                style={styles.newMsgIcon}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    mainChats : {
        backgroundColor:'rgba(200,200,200,0.1)'
    },
    newMsgIcon : {
        backgroundColor:'rgb(40,160,90)',
        position:'absolute',
        top:'88%',
        right:'6%',
        paddingVertical:14,
        paddingHorizontal:14,
        borderRadius:50
    }
})
export default Chats
