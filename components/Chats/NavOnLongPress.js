import React from 'react'
import { StyleSheet } from 'react-native'
import { View } from 'react-native'
import BackArrow from 'react-native-vector-icons/Feather'
import PinIcon from 'react-native-vector-icons/SimpleLineIcons'
import DeleteIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import SoundIcon from 'react-native-vector-icons/AntDesign'
import ArchiveIcon from 'react-native-vector-icons/Foundation'
import DotsIcon from 'react-native-vector-icons/MaterialCommunityIcons'


const NavOnLongPress = ()=> {
    return (
        <View style={styles.navOnLongPressView}>
            <BackArrow 
                name='arrow-left'
                size={24}
                color='black'
            />
            <View style={styles.optionsView}>
                <PinIcon 
                    name='pin'
                    size={24}
                    color='black'
                />
                <DeleteIcon 
                    name='delete'
                    size={24}
                    color='black'
                />
                <SoundIcon 
                    name='sound'
                    size={24}
                    color='black'
                />
                <ArchiveIcon 
                    name='archive'
                    size={24}
                    color='black'
                />
                <DotsIcon 
                    name='dots-vertical'
                    size={24}
                    color='black'
                />
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    navOnLongPressView : {
        flexDirection:'row',
        alignItems:"center",
        justifyContent:"space-between",
        width:'100%',
    },
    optionsView : {
        flexDirection:'row',
        gap:12
    }
})

export default NavOnLongPress
