import React from 'react'
import { View,StyleSheet,Image, Text } from 'react-native'
import testImage from '../assets/testImage.png'
import AddIcon from 'react-native-vector-icons/MaterialIcons'


const Status = ()=> {
    return (
        <View style={styles.mainStatus}>
            <View style={styles.addStatusSection}>
                <View style={styles.yourImage}>
                    <Image 
                        style={styles.profileImage}
                        source={testImage}
                    />
                    <AddIcon 
                        name='add'
                        size={18}
                        color='white'
                        style={styles.addIcon}
                    />
                </View>
                <View style={styles.addStatusText}>
                    <Text style={styles.largeText}>My status</Text>
                    <Text style={styles.smallText}>Tap to add status update</Text>
                </View>
            </View>

            <View style={styles.recentUpdatesSection}>
                <Text style={styles.subheadingText}>Recent updates</Text>
                <View style={styles.recentUpdates}>
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
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    mainStatus : {
        flex:1,
        gap:2
    },
    addStatusSection : {
        flexDirection:'row',
        marginHorizontal:17,
        marginVertical:17,
        gap:12    
    },
    addStatusText : {
        marginTop:2.5
    },
    profileImage : {
        width:50,
        height:50,
        borderRadius:50,
        borderWidth:0.5,
        borderColor:'grey',
    },
    addIcon : {
        position:'absolute',
        bottom:0,
        right:0,
        backgroundColor:'rgb(40,160,90)',
        borderRadius:50,
    },
    largeText: {
        fontSize:16.5,
        letterSpacing:0.2
    }, 
    smallText : {
        color:'rgba(10,10,10,0.65)',
        fontSize:12.5,
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
        gap:20
    },
    recentUpdate : {
        flexDirection:'row',
        gap:12 
    },
    recentUpdateText : {
        marginTop:2.5,
    }
})

export default Status
