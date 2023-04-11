import React from 'react'
import { Text, View,StyleSheet, ScrollView } from 'react-native'
import CreateCallLink from '../components/Calls/CreateCallLink'
import RecentCall from '../components/Calls/RecentCall'


const Calls = ()=> {
    return (
        <ScrollView style={styles.mainCalls}>
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
        </ScrollView>
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
        gap:15
    },
    recentCalls : {
        gap:8
    }, 
})


export default Calls
