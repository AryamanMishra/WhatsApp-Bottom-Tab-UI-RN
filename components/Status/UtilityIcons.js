import React, { useEffect, useRef } from 'react'
import CameraIcon from 'react-native-vector-icons/FontAwesome'
import EditIcon from 'react-native-vector-icons/MaterialIcons'
import { View,StyleSheet,Animated } from 'react-native'
import { useGlobalContext } from '../../context'


const UtilityIcons = ()=> {

    const {focusedTab} = useGlobalContext()

    const moveUpValue = useRef(new Animated.Value(0)).current
    const moveDownValue = useRef(new Animated.Value(0)).current

    const moveUpAnim = ()=> {
        Animated.timing(moveUpValue, {
            toValue:-15,
            duration:400,
            useNativeDriver:true
        }).start()
    }


    const moveDownAnim = ()=> {
        Animated.timing(moveUpValue, {
            toValue:30,
            duration:400,
            useNativeDriver:true
        }).start()
    }


    useEffect(()=> {
        if (focusedTab === 'Status') {    
            moveUpAnim()
        }
        else {
            moveDownAnim()
        }
    },[focusedTab])


    return (
        <View style={styles.iconsView}>
            {
                focusedTab === 'Status' ? (
                    <Animated.View
                        style={{transform:[{translateY:moveUpValue}]}}
                    >
                        <EditIcon 
                            style={styles.editIcon}
                            name='edit'
                            color='#ffe'
                            size={24}
                        />
                    </Animated.View>
                )
                : (
                    <Animated.View
                        style={{transform:[{translateY:moveDownValue}]}}
                    >
                        <EditIcon 
                            style={styles.editIcon}
                            name='edit'
                            color='#ffe'
                            size={24}
                        />
                    </Animated.View>
                )
            }
              
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
        top:'80.2%',
        right:'4.4%',
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
