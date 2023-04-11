import React from 'react'
import testImage from '../../assets/testImage.png'
import ArrowDownLeft from 'react-native-vector-icons/Feather'
import { Text, View,StyleSheet,Image, Pressable } from 'react-native'
import CallsIcon from 'react-native-vector-icons/Ionicons'


const RecentCall = ()=> {
    return (
        <Pressable
            android_ripple={{color:'rgba(100,100,100,0.2)'}}
        >
            <View style={styles.recentCall}>
                <View style={styles.recentCallmain}>
                    <View style={styles.yourImage}>
                        <Image 
                            style={styles.profileImage}
                            source={testImage}
                        />
                    </View>
                    <View style={styles.recentCallText}>
                        <Text style={styles.largeText}>Aryaman</Text>
                        <View style={{flexDirection:'row',alignItems:'center',gap:4}}>
                            <ArrowDownLeft 
                                name='arrow-down-left'
                                size={16}
                                color='red'
                            />
                            <Text style={styles.smallText}>Today, 15:34</Text>
                        </View>  
                    </View>
                </View>
                <CallsIcon 
                    name='call'
                    size={23}
                    color='green'
                />
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    recentCall : {
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        paddingVertical:11,
        paddingHorizontal:18
    },
    recentCallmain : {
        flexDirection:'row',
        gap:12 ,
        alignItems:'center'
    },
    profileImage : {
        width:50,
        height:50,
        borderRadius:50,
        borderWidth:0.5,
        borderColor:'grey',
    },
    recentCallText : {
        marginTop:2.5
    },
    largeText: {
        fontSize:16.5,
        letterSpacing:0.2
    }, 
    smallText : {
        color:'rgba(10,10,10,0.65)',
        fontSize:13,
    },
})

export default RecentCall
