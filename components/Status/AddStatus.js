import React from 'react'
import {View,Text,Image, StyleSheet} from 'react-native'
import AddIcon from 'react-native-vector-icons/MaterialIcons'
import testImage from '../../assets/testImage.png'



const AddStatus = ()=> {
    return (
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
    )
}

const styles = StyleSheet.create({
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
})
export default AddStatus
