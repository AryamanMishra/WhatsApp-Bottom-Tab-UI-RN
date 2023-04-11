import React from 'react'
import { Text, View,StyleSheet,Image } from 'react-native'
import LinkIcon from 'react-native-vector-icons/Fontisto'
import testImage from '../assets/testImage.png'
import ArrowDownLeft from 'react-native-vector-icons/Feather'


const Calls = ()=> {
    return (
        <View style={styles.mainCalls}>
            <View style={styles.createCallLinkSection}>
                <LinkIcon 
                    name='link'
                    size={20}
                    color='white'
                    style={styles.createCallLinkIcon}
                />
                <View style={styles.createCallLinkText}>
                    <Text style={styles.largeText}>Create call link</Text>
                    <Text style={styles.smallText}>Share a link for your WhatsApp call</Text>
                </View>
            </View>

            <View style={styles.recentCallsSection}>
                <Text style={styles.subheadingText}>Recent</Text>
                <View style={styles.recentCalls}>
                    <View style={styles.recentCall}>
                        <View style={styles.yourImage}>
                            <Image 
                                style={styles.profileImage}
                                source={testImage}
                            />
                        </View>
                        <View style={styles.recentCallText}>
                            <Text style={styles.largeText}>Aryaman</Text>
                            <View style={{flexDirection:'row',alignItems:'center',gap:5}}>
                                <ArrowDownLeft 
                                    name='arrow-down-left'
                                    size={15}
                                    color='red'
                                />
                                <Text style={styles.smallText}>Today, 15:34</Text>
                            </View>  
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    mainCalls : {
        flex:1
    },
    createCallLinkSection : {
        flexDirection:'row',
        marginHorizontal:15,
        marginVertical:17,
        gap:15  
    },
    createCallLinkText : {
        marginTop:4
    },
    createCallLinkIcon : {
        backgroundColor:'rgb(40,160,90)',
        paddingVertical:15,
        paddingHorizontal:15,
        borderRadius:50
    },
    largeText: {
        fontSize:16.5,
        letterSpacing:0.2
    }, 
    smallText : {
        color:'rgba(10,10,10,0.65)',
        fontSize:13,
    },
    subheadingText : {
        color:'rgba(10,10,10,0.65)',
        fontSize:14,
        marginLeft:2
    },
    recentCallsSection : {
        marginHorizontal:15,
        marginVertical:17,
        gap:15  
    },
    recentCalls : {
        marginTop:5,
        gap:22
    },
    recentCall : {
        flexDirection:'row',
        gap:12 
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
    }
})


export default Calls
