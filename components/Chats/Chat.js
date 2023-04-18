import React, { useState } from 'react'
import { View, StyleSheet, Pressable, Text,Image } from 'react-native'
import { useGlobalContext } from '../../contexts/context'

const Chat = ({chat})=> {

    
    const { longPressChat,setLongPressChat,selectedChatId,setSelectedChatId } = useGlobalContext()


    const handleLongPress = ()=> {
        setLongPressChat(true)
        setSelectedChatId(chat.id)
    }

    return (
        <Pressable 
            style={longPressChat === true && selectedChatId === chat.id ? styles.selectedSingleChat: styles.singleChat}
            android_ripple={{color:'rgba(100,100,100,0.2)'}}
            onLongPress={handleLongPress}
        >
            <Image 
                style={styles.profileImage}
                source={chat.image}
            />
            <View style={styles.chatOverlay}>
                <Text style={styles.profileName}>{chat.name}</Text>
                <Text style={styles.recentMsg}>Hi</Text>
            </View>
            <View style={styles.recentMsgTimeView}>
                <Text style={styles.recentMsgTime}>15:36</Text>
            </View>
        </Pressable>
    )
}


const styles = StyleSheet.create({
    singleChat : {
        flex:1,
        flexDirection:'row',
        alignItems:'center',
        // borderWidth:1,
        marginTop:10,
        gap:20,
        paddingHorizontal:14,
        paddingVertical:10
    },
    selectedSingleChat : {
        backgroundColor:"rgba(10,100,150,0.3)",
        flex:1,
        flexDirection:'row',
        alignItems:'center',
        marginTop:10,
        gap:20,
        paddingHorizontal:14,
        paddingVertical:10
    },
    chatOverlay : {
        flexDirection:'column'
    },
    profileImage : {
        width:50,
        height:50,
        borderRadius:50,
        borderWidth:0.5,
        borderColor:'grey'
    },
    profileName : {
        textTransform:"capitalize",
        fontSize:15
    },
    recentMsg : {
        fontSize:13,
        color:"grey"
    },
    recentMsgTimeView : {
        marginLeft:'auto',
        height:'70%',
        // borderWidth:1
    },
    recentMsgTime : {
        fontSize:13,
        color:"grey"
    }
})
export default Chat
