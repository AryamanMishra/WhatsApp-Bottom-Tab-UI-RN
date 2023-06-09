import React from 'react'
import { View,Text,StyleSheet,Pressable, Image } from 'react-native'
import testImage from '../../assets/testImage.png'


const RecentUpdate = ()=> {

    return (
        <Pressable
            android_ripple={{color:'rgba(100,100,100,0.2)'}}
        >
            <View style={styles.recentUpdate}>
                <Image
                    style={styles.profileImage}
                    source={testImage}
                />
                <View style={styles.recentUpdateText}>
                    <Text style={styles.largeText}>Aryaman</Text>
                    <Text style={styles.smallText}>Today, 15:34</Text>
                </View>
            </View>
        </Pressable>
    )
}


const styles = StyleSheet.create({
    recentUpdate : {
        flexDirection:'row',
        alignItems:'center',
        gap:12 ,
        paddingVertical:10,
        paddingHorizontal:18
    },
    recentUpdateText : {
        marginTop:2.5,
    },
    largeText: {
        fontSize:16.5,
        letterSpacing:0.2
    }, 
    smallText : {
        color:'rgba(10,10,10,0.65)',
        fontSize:12.5,
    },
    profileImage : {
        height:50,
        width:50,
        borderRadius:50,
        borderWidth:0.5,
        borderColor:'grey',
    },
})

export default RecentUpdate