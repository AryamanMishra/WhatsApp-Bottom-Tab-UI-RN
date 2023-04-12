import React from 'react'
import { View,StyleSheet,Text, ScrollView } from 'react-native'
import RecentUpdate from '../components/Status/RecentUpdate'
import AddStatus from '../components/Status/AddStatus'
import CameraIcon from 'react-native-vector-icons/FontAwesome'
import EditIcon from 'react-native-vector-icons/MaterialIcons'


const Status = ()=> {
    return (
        <View style={styles.mainStatus}>
            <ScrollView>
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
            <View style={styles.iconsView}>
                <EditIcon 
                    style={styles.editIcon}
                    name='edit'
                    color='#ffe'
                    size={24}
                />
                <CameraIcon 
                    style={styles.cameraIcon}
                    name='camera'
                    color='#ffe'
                    size={19.5}
                /> 
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
    iconsView : {
        position:'absolute',
        top:'80%',
        right:'4%',
        gap:16,
        alignItems:'center'
    },
    cameraIcon : {
        backgroundColor:'rgb(40,160,90)',  
        paddingVertical:20.5,
        paddingHorizontal:20.5,
        borderRadius:50
    },
    editIcon : {
        backgroundColor:'rgba(20,40,50,0.8)',
        paddingVertical:10,
        paddingHorizontal:10,
        borderRadius:50,
    }
})

export default Status
