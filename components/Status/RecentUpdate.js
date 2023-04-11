import React from 'react'
import { View,Text,Image, StyleSheet,Pressable } from 'react-native'
import testImage from '../../assets/testImage.png'


const RecentUpdate = ()=> {
    return (
        <Pressable
            android_ripple={{color:'rgba(100,100,100,0.2)'}}
        >
            <View style={styles.recentUpdate}>
                <View style={styles.yourImage}>
                    <Image 
                        style={styles.profileImage}
                        source={testImage}
                    />
                </View>
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
        paddingVertical:11,
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
        width:50,
        height:50,
        borderRadius:50,
        borderWidth:0.5,
        borderColor:'grey',
    },
})

export default RecentUpdate
