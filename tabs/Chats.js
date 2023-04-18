import React from 'react'
import { View,StyleSheet,ScrollView } from 'react-native'
import Chat from '../components/Chats/Chat'
import NewMessageIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import EncryptedMsg from '../components/EncryptedMsg'
import { chats } from '../utils/chats'

const Chats = ()=> {


    return (
        <View style={styles.mainChats}>
            <ScrollView
            >
                <View style={styles.allChats}>
                    {
                        chats.map((chat)=> {
                            return <Chat key={chat.id} chat={chat}/>
                        })
                    }
                </View>
                
                <EncryptedMsg tab='Chats'/>
                
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
        // backgroundColor:'rgba(200,200,200,0.1)',  
    },
    allChats : {
        borderBottomColor:"rgba(100,100,100,0.6)",
        borderBottomWidth:0.2,
        paddingBottom:15 ,
        marginTop:-3
    },
    iconsView : {
        position:'absolute',
        top:'85.95%',
        right:'4.5%',
        alignItems:'center'
    },
    newMsgIcon : {
        backgroundColor:'rgb(40,160,90)', 
        paddingVertical:18,
        paddingHorizontal:18.5,
        borderRadius:50,
    },
})
export default Chats