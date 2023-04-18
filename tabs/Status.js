import React from 'react'
import { View,StyleSheet,Text, ScrollView } from 'react-native'
import RecentUpdate from '../components/Status/RecentUpdate'
import AddStatus from '../components/Status/AddStatus'
import MutedUpdatesSection from '../components/Status/MutedUpdatesSection'
import UtilityIcons from '../components/Status/UtilityIcons'
import EncryptedMsg from '../components/EncryptedMsg'



const Status = ()=> {
    
    return (
        <View style={styles.mainStatus}>
            <ScrollView>
                <AddStatus />
                <View style={styles.recentUpdatesSection}>
                    <View style={styles.recentUpdatesHeading}>
                        <Text style={styles.subheadingText}>Recent updates</Text>
                    </View>
                    <View style={styles.recentUpdates}>
                        <RecentUpdate />
                    </View>
                </View>  

                <View style={styles.viewedUpdatesSection}>
                    <Text style={styles.subheadingText}>Viewed updates</Text>
                    <View style={styles.viewedUpdates}>
                        <RecentUpdate />                    
                        <RecentUpdate />
                        <RecentUpdate />
                    </View>
                </View> 

                <MutedUpdatesSection />

                <EncryptedMsg tab='Status'/>
                                
            </ScrollView>

            <UtilityIcons />

        </View>
    )
}


const styles = StyleSheet.create({
    mainStatus : {
        flex:1,
        height:'auto'
    },
    subheadingText : {
        color:'rgba(10,10,10,0.65)',
        fontSize:14,
        marginLeft:18
    },
    recentUpdatesSection : {
        marginVertical:12,
    },
    recentUpdates : {
        marginTop:5,
        gap:6
    },
    recentUpdatesHeading : {
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        paddingBottom:4
    },
    viewedUpdatesSection : {
        marginVertical:8,  
    },
    viewedUpdates : {
        marginTop:10,
        gap:6
    },
})

export default Status
