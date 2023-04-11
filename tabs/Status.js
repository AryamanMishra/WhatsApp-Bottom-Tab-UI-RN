import React from 'react'
import { View,StyleSheet,Text } from 'react-native'
import RecentUpdate from '../components/Status/RecentUpdate'
import AddStatus from '../components/Status/AddStatus'


const Status = ()=> {
    return (
        <View style={styles.mainStatus}>
            <AddStatus />
            <View style={styles.recentUpdatesSection}>
                <Text style={styles.subheadingText}>Recent updates</Text>
                <View style={styles.recentUpdates}>
                    <RecentUpdate />
                    <RecentUpdate />
                </View>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    mainStatus : {
        flex:1,
        gap:1
    },
    subheadingText : {
        color:'rgba(10,10,10,0.65)',
        fontSize:13.5,
        marginLeft:3
    },
    recentUpdatesSection : {
        marginHorizontal:17,
        marginVertical:17,
    },
    recentUpdates : {
        marginTop:20,
        gap:22
    },
    
})

export default Status
