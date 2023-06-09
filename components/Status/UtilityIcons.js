import React, { useEffect, useRef } from 'react'
import CameraIcon from 'react-native-vector-icons/FontAwesome'
import EditIcon from 'react-native-vector-icons/MaterialIcons'
import { View,StyleSheet,Animated } from 'react-native'
import { useGlobalContext } from '../../contexts/context'


const UtilityIcons = ()=> {

    const { focusedTab } = useGlobalContext()

    const initialMoveValue = useRef(new Animated.Value(0)).current

    const moveUpAnim = ()=> {
        Animated.timing(initialMoveValue, {
            toValue:-12,
            duration:300,
            useNativeDriver:true,
            // easing:Easing.bounce
        }).start()
    }


    const moveDownAnim = ()=> {
        Animated.timing(initialMoveValue, {
            toValue:40,
            duration:300,
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
            <Animated.View
                style={{transform:[{translateY:initialMoveValue}]}}
            >
                <EditIcon 
                    style={styles.editIcon}
                    name='edit'
                    color='#ffe'
                    size={24.5}
                />
            </Animated.View>
              
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
        top:'76.8%',
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
