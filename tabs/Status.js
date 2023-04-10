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
        </View>
    )
}

const styles = StyleSheet.create({
    mainStatus : {
        flex:1
    },
    addStatusSection : {
        flexDirection:'row',
        marginHorizontal:16,
        marginVertical:16,
        gap:12    
    },
    profileImage : {
        width:50,
        height:50,
        borderRadius:50,
        borderWidth:0.5,
        borderColor:'grey'
    },
    addIcon : {
        position:'absolute',
        bottom:0,
        right:0,
        backgroundColor:'rgb(40,160,90)',
        borderRadius:50,
    },
    largeText: {
        fontSize:17.5
    }, 
    smallText : {
        color:'grey',
        fontSize:12.5
    }
})

export default Status
