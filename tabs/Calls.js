import React from 'react'
import { Text, View,StyleSheet } from 'react-native'
import CreateCallLink from '../components/Calls/CreateCallLink'
import RecentCall from '../components/Calls/RecentCall'


const Calls = ()=> {
    return (
        <View style={styles.mainCalls}>
            <CreateCallLink />
            <View style={styles.recentCallsSection}>
                <Text style={styles.subheadingText}>Recent</Text>
                <View style={styles.recentCalls}>
                    <RecentCall />
                    <RecentCall />
                    <RecentCall />
                </View>
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
        marginLeft:2
    },
    recentCallsSection : {
        marginHorizontal:15,
        marginVertical:12,
        gap:15  
    },
    recentCalls : {
        marginTop:5,
        gap:22
    }, 
})


export default Calls
