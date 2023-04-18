import React from 'react'
import { Text, View,StyleSheet, ScrollView } from 'react-native'
import CreateCallLink from '../components/Calls/CreateCallLink'
import RecentCall from '../components/Calls/RecentCall'
import AddCallIcon from 'react-native-vector-icons/MaterialIcons'
import EncryptedMsg from '../components/EncryptedMsg'
import { calls } from '../utils/calls'

const Calls = ()=> {
    return (
        <View style={styles.mainCalls}>
            <ScrollView>
                <CreateCallLink />
                <View style={styles.recentCallsSection}>
                    <Text style={styles.subheadingText}>Recent</Text>
                    <View style={styles.recentCalls}>
                        {
                            calls.map((call)=> {
                                return <RecentCall key={call.id} call={call}/>
                            })
                        }  
                    </View>
                </View>

                <EncryptedMsg tab='Calls'/>

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
        marginTop:12,
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
        top:'85.9%',
        right:'4.5%',
        gap:16,
        alignItems:'center'
    },
    addCallIcon : {
        backgroundColor:'rgb(40,160,90)',  
        paddingVertical:18.75,
        paddingHorizontal:18.75,
        borderRadius:50
    },
})


export default Calls
