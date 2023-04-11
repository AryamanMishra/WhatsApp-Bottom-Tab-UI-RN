import React from 'react'
import { Text, View,StyleSheet } from 'react-native'
import LinkIcon from 'react-native-vector-icons/Fontisto'

const CreateCallLink = ()=> {
    return (
        <View style={styles.createCallLinkSection}>
            <LinkIcon 
                name='link'
                size={20}
                color='white'
                style={styles.createCallLinkIcon}
            />
            <View style={styles.createCallLinkText}>
                <Text style={styles.largeText}>Create call link</Text>
                <Text style={styles.smallText}>Share a link for your WhatsApp call</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    createCallLinkSection : {
        flexDirection:'row',
        marginHorizontal:15,
        marginVertical:17,
        gap:15  
    },
    createCallLinkText : {
        marginTop:4
    },
    createCallLinkIcon : {
        backgroundColor:'rgb(40,160,90)',
        paddingVertical:15,
        paddingHorizontal:15,
        borderRadius:50
    },
    largeText: {
        fontSize:16.5,
        letterSpacing:0.2
    }, 
    smallText : {
        color:'rgba(10,10,10,0.65)',
        fontSize:13,
    },
})

export default CreateCallLink
