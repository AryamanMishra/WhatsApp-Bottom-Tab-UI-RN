import React from 'react'
import ArrowDownLeft from 'react-native-vector-icons/Feather'
import ArrowTopRight from 'react-native-vector-icons/Feather'
import { Text, View,StyleSheet,Image, Pressable } from 'react-native'
import CallsIcon from 'react-native-vector-icons/Ionicons'


const RecentCall = ({ call })=> {
    return (
        <Pressable
            android_ripple={{color:'rgba(100,100,100,0.2)'}}
        >
            <View style={styles.recentCall}>
                <View style={styles.recentCallmain}>
                    <View style={styles.yourImage}>
                        <Image 
                            style={styles.profileImage}
                            source={call.image}
                        />
                    </View>
                    <View style={styles.recentCallText}>
                        <Text style={styles.largeText}>{call.name}</Text>
                        <View style={{flexDirection:'row',alignItems:'center',gap:4}}>
                            {
                                call.type === 'incoming' ? (
                                    call.missed ? (
                                        <ArrowDownLeft 
                                            name='arrow-down-left'
                                            size={16}
                                            color='red'
                                        />
                                    )
                                    : (
                                        <ArrowDownLeft 
                                            name='arrow-down-left'
                                            size={16}
                                            color='green'
                                        />
                                    )
                                )
                                : (
                                    <ArrowTopRight
                                        name='arrow-up-right'
                                        size={16}
                                        color='green'
                                    />
                                )
                            } 
                            <Text style={styles.smallText}>{call.dateTime}</Text>
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
        letterSpacing:0.2,
        textTransform:"capitalize"
    }, 
    smallText : {
        color:'rgba(10,10,10,0.65)',
        fontSize:13,
    },
})

export default RecentCall
