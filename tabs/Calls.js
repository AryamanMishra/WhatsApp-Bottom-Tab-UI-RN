import React from 'react'
import { Text, View,StyleSheet, ScrollView } from 'react-native'
import CreateCallLink from '../components/Calls/CreateCallLink'
import RecentCall from '../components/Calls/RecentCall'
import AddCallIcon from 'react-native-vector-icons/MaterialIcons'
import LockIcon from 'react-native-vector-icons/FontAwesome'


const Calls = ()=> {
    return (
        <View style={styles.mainCalls}>
            <ScrollView>
                <CreateCallLink />
                <View style={styles.recentCallsSection}>
                    <Text style={styles.subheadingText}>Recent</Text>
                    <View style={styles.recentCalls}>
                            <RecentCall />
                            <RecentCall />
                            <RecentCall />
                            <RecentCall />
                            <RecentCall />
                            <RecentCall />
                            <RecentCall />
                            <RecentCall />
                            <RecentCall />      
                    </View>
                </View>
                <View style={styles.encryptedMsg}>
                    <LockIcon 
                        name='lock'
                        size={14}
                        color='rgba(10,10,10,0.65)'
                    />
                    <Text style={styles.encryptedMsgText}>
                        Your personal calls are
                        </Text>
                    <Text style={[styles.encryptedMsgText,{ color:'rgb(40,160,90)'}]}>
                        end-to-end encrypted
                    </Text>       
                </View>
            </ScrollView>
            <View style={styles.iconsView}>
                <AddCallIcon 
                    color='white'
                    name='add-call'
                    size={24}
                    style={styles.addCallIcon}
                />
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    mainCalls : {
        flex:1
    },
    subheadingText : {
        color:'rgba(10,10,10,0.65)',
        fontSize:14,
        marginLeft:16
    },
    recentCallsSection : {
        marginVertical:12,
        gap:15,
        borderBottomColor:"rgba(100,100,100,0.6)",
        borderBottomWidth:0.2,
        paddingBottom:15
    },
    recentCalls : {
        gap:8
    }, 
    iconsView : {
        position:'absolute',
        top:'88.8%',
        right:'4%',
        gap:16,
        alignItems:'center'
    },
    addCallIcon : {
        backgroundColor:'rgb(40,160,90)',  
        paddingVertical:18.75,
        paddingHorizontal:18.75,
        borderRadius:50
    },
    encryptedMsg : {
        justifyContent:'center',
        marginTop:3,
        marginBottom:25,
        alignItems:'center'
    },
    encryptedMsgText: {
        color:'rgba(10,10,10,0.65)',
        fontSize:11.5
    }
})


export default Calls
