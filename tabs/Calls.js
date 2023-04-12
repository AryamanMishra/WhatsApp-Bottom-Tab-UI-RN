import React from 'react'
import { Text, View,StyleSheet, ScrollView } from 'react-native'
import CreateCallLink from '../components/Calls/CreateCallLink'
import RecentCall from '../components/Calls/RecentCall'
import AddCallIcon from 'react-native-vector-icons/MaterialIcons'


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
        gap:15
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
    }
})


export default Calls
