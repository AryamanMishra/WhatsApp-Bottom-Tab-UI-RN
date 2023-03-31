import React from 'react'
import { View,StyleSheet,Text } from 'react-native'
import SearchIcon from 'react-native-vector-icons/Ionicons'
import CameraIcon from 'react-native-vector-icons/Feather'
import MenuIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import GroupIcon from 'react-native-vector-icons/MaterialIcons'

const Navbar = ()=> {
    return (
        <View style={styles.navContainer}>
            <View style={styles.upperNav}>
                <View style={styles.textView}>
                    <Text style={styles.text}>WhatsApp</Text>
                </View>
                <View style={styles.upperNavOptionsContainer}>
                    <CameraIcon 
                        name='camera'
                        color='black'
                        size={24}
                    />
                    <SearchIcon 
                        name='search'
                        color='black'
                        size={23}
                        style={{paddingLeft:7.5}}
                    /> 
                    <MenuIcon 
                        name='dots-vertical'
                        color='black'
                        size={24}
                    />
                </View>
            </View>
            <View style={styles.lowerNav}>
                <GroupIcon 
                    name='groups'
                    size={30}
                    color='#002'
                />
                <View style={styles.tabs}>
                    <Text style={styles.textTab}>Chats</Text>
                    <Text style={styles.textTab}>Status</Text>
                    <Text style={styles.textTab}>Calls</Text>
                </View>      
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    navContainer : {
        flex:1.55,
        justifyContent:'center',
        borderBottomWidth:0.5,
        borderBottomColor:'green',
        marginTop:10,
    },
    upperNav : {
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginBottom:30,
    },
    upperNavOptionsContainer : {
        paddingRight:18,
        flexDirection:'row',
        gap:18
    }, 
    textView : {
        paddingLeft:18,
    },
    text: {
        fontSize:19,
        letterSpacing:0.3
    },
    textTab : {
        fontSize:15,
    },
    lowerNav : {
        alignItems:'center',
        position:'absolute',
        bottom:4,
        paddingLeft:12,
        flexDirection:'row',
        gap:55
    },
    tabs : {
        flexDirection:'row',
        gap:72
    }
})

export default Navbar
