import React from 'react'
import CameraIcon from 'react-native-vector-icons/FontAwesome'
import EditIcon from 'react-native-vector-icons/MaterialIcons'
import { View,StyleSheet } from 'react-native'


const UtilityIcons = ()=> {
    return (
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
    )
   
}

const styles = StyleSheet.create({
    iconsView : {
        position:'absolute',
        bottom:10,
        right:15,
        gap:16,
        alignItems:'center',
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
})

export default UtilityIcons
