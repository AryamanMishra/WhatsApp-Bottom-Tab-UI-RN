import React from 'react'
import { View,StyleSheet,ScrollView,Text } from 'react-native'
import Chat from '../components/Chats/Chat'
import NewMessageIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import LockIcon from 'react-native-vector-icons/FontAwesome'

const Chats = ()=> {


    return (
        <View style={styles.mainChats}>
                <ScrollView
                >
                    <View style={styles.allChats}>
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
                    </View>
                    <View style={styles.encryptedMsg}>
                        <LockIcon 
                            name='lock'
                            size={14}
                            color='rgba(10,10,10,0.65)'
                        />
                        <Text style={styles.encryptedMsgText}>
                            Your personal messages are
                            </Text>
                        <Text style={[styles.encryptedMsgText,{ color:'rgb(40,160,90)'}]}>
                            end-to-end encrypted
                        </Text>       
                    </View>
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
        paddingBottom:15  
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
    },
    encryptedMsg : {
        justifyContent:'center',
        marginTop:12,
        marginBottom:25,
        alignItems:'center'
    },
    encryptedMsgText: {
        color:'rgba(10,10,10,0.65)',
        fontSize:11.5
    }
})
export default Chats
