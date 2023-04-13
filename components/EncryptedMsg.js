import React from 'react'
import LockIcon from 'react-native-vector-icons/FontAwesome'
import { View,StyleSheet,Text } from 'react-native'


const EncryptedMsg = ({ tab })=> {
    return (
        <View style={styles.encryptedMsg}>
            <LockIcon 
                name='lock'
                size={14}
                color='rgba(10,10,10,0.65)'
            />
            {
                tab === 'Status' ? (
                    <Text style={styles.encryptedMsgText}> You status updates are</Text>
                ) 
                : (
                    tab === 'Chats' ? (
                        <Text style={styles.encryptedMsgText}> You personal messages are</Text>
                    )
                    : (
                        <Text style={styles.encryptedMsgText}> You personal calls are</Text>
                    )
                )
            } 
            <Text style={[styles.encryptedMsgText,{ color:'rgb(40,160,90)'}]}>
                end-to-end encrypted
            </Text>       
        </View>
    )
}


const styles = StyleSheet.create({
    encryptedMsg : {
        justifyContent:'center',
        marginTop:20,
        marginBottom:25,
        alignItems:'center'
    },
    encryptedMsgText: {
        color:'rgba(10,10,10,0.65)',
        fontSize:11.5
    }
})

export default EncryptedMsg
