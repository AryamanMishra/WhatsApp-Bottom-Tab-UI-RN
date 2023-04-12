import React from 'react'
import { View,StyleSheet,Text, ScrollView } from 'react-native'
import RecentUpdate from '../components/Status/RecentUpdate'
import AddStatus from '../components/Status/AddStatus'
import CameraIcon from 'react-native-vector-icons/FontAwesome'
import EditIcon from 'react-native-vector-icons/MaterialIcons'
import LockIcon from 'react-native-vector-icons/FontAwesome'


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
                    </View>
                </View>  
                <View style={styles.viewedUpdatesSection}>
                <Text style={styles.subheadingText}>Viewed updates</Text>
                    <View style={styles.viewedUpdates}>
                        <RecentUpdate />
                        <RecentUpdate />
                        <RecentUpdate />
                        <RecentUpdate />
                        <RecentUpdate />
                        <RecentUpdate />
                    </View>
                </View> 
                <View style={styles.encryptedMsg}>
                    <LockIcon 
                        name='lock'
                        size={14}
                        color='rgba(10,10,10,0.65)'
                    />
                    <Text style={styles.encryptedMsgText}>
                        Your status updates are
                        </Text>
                    <Text style={[styles.encryptedMsgText,{ color:'rgb(40,160,90)'}]}>
                        end-to-end encrypted
                    </Text>       
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
        marginTop:10,
        gap:6
    },
    viewedUpdatesSection : {
        marginVertical:12,
        borderBottomColor:"rgba(100,100,100,0.6)",
        borderBottomWidth:0.2,
        paddingBottom:15
    },
    viewedUpdates : {
        marginTop:10,
        gap:6
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

export default Status
