import React from 'react'
import { View,StyleSheet,Text, ScrollView } from 'react-native'
import RecentUpdate from '../components/Status/RecentUpdate'
import AddStatus from '../components/Status/AddStatus'


const Status = ()=> {
    return (
        <ScrollView style={styles.mainStatus}>
            <AddStatus />
            <View style={styles.recentUpdatesSection}>
                <Text style={styles.subheadingText}>Recent updates</Text>
                <View style={styles.recentUpdates}>
                    <RecentUpdate />
                    <RecentUpdate />
                    <RecentUpdate />
                    <RecentUpdate />
                    <RecentUpdate />
                    <RecentUpdate />
                    <RecentUpdate />
                    <RecentUpdate />
                    <RecentUpdate />
                </View>
            </View>
        </ScrollView>
    )
}


const styles = StyleSheet.create({
    mainStatus : {
        flex:1,
        gap:1
    },
    subheadingText : {
        color:'rgba(10,10,10,0.65)',
        fontSize:14,
        marginLeft:18
    },
    recentUpdatesSection : {
        marginVertical:14,
    },
    recentUpdates : {
        marginTop:14,
        gap:8
    },
    
})

export default Status
