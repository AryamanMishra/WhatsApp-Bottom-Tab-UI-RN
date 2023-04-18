import React, { useEffect, useRef } from 'react'
import { View,StyleSheet,Pressable,Animated } from 'react-native'
import BackArrow from 'react-native-vector-icons/Feather'
import PinIcon from 'react-native-vector-icons/SimpleLineIcons'
import DeleteIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import SoundIcon from 'react-native-vector-icons/AntDesign'
import ArchiveIcon from 'react-native-vector-icons/Foundation'
import DotsIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import { useGlobalContext } from '../../contexts/context';
import { useBackHandler } from '@react-native-community/hooks'


const NavOnLongPress = ({ navigation })=> {

    const { setLongPressChat,longPressChat,selectedChatId,setSelectedChatId } = useGlobalContext()


    const handleBackButton = ()=> {
        setLongPressChat(false)
        setSelectedChatId(0)
    }

    useBackHandler(() => {
        if (longPressChat) {
            handleBackButton()
            return true
        }
        return false
    })


    return (
        <Animated.View 
            style={[styles.navOnLongPressView]}
        >
            <Pressable
                style={{marginLeft:6}}
                onPress={handleBackButton}
                android_ripple={{color:'rgba(200,200,200,0.3)',radius:25,borderless:true}}
            >
                <BackArrow 
                    name='arrow-left'
                    size={26}
                    color='white'
                />
            </Pressable>
           
            <View style={styles.optionsView}>
                <PinIcon 
                    name='pin'
                    size={19.5}
                    style={{paddingRight:2,paddingBottom:3}}
                    color='white'
                />
                <DeleteIcon 
                    name='delete'
                    size={24}
                    color='white'
                />
                <SoundIcon 
                    name='sound'
                    size={24}
                    color='white'
                />
                <ArchiveIcon 
                    name='archive'
                    size={24}
                    color='white'
                />
                <DotsIcon 
                    name='dots-vertical'
                    size={24}
                    color='white'
                />
            </View>
        </Animated.View>
    )
}


const styles = StyleSheet.create({
    navOnLongPressView : {
        backgroundColor:'rgb(50,125,90)',
        flexDirection:'row',
        alignItems:"center",
        justifyContent:"space-between",
        width:'100%',
        height:105,
        paddingTop:32,
        paddingHorizontal:15
    },
    optionsView : {
        flexDirection:'row',
        alignItems:'center',
        gap:25
    }
})

export default NavOnLongPress
