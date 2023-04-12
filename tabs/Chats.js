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
            <View style={styles.iconsView}>
                <NewMessageIcon 
                    name='message-text-outline'
                    size={24.5}
                    color='white'
                    style={styles.newMsgIcon}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    mainChats : {
        // backgroundColor:'rgba(200,200,200,0.1)'
    },
    iconsView : {
        position:'absolute',
        top:'88.8%',
        right:'4%',
        alignItems:'center'
    },
    newMsgIcon : {
        backgroundColor:'rgb(40,160,90)',
        paddingVertical:18.75,
        paddingHorizontal:18.75,
        borderRadius:50
    }
})
export default Chats
