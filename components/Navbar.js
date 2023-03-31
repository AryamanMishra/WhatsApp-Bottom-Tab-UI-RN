import React from 'react'
import { View,StyleSheet,Text,Pressable } from 'react-native'
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
                    style={{paddingVertical:10}}
                />
                <View style={styles.tabs}>
                    <Pressable
                        style={styles.singleTab}
                        android_ripple={{color:'grey'}}
                    >
                        <Text style={styles.textTab}>Chats</Text>
                    </Pressable>
                    <Pressable
                        style={styles.singleTab}
                        android_ripple={{color:'grey'}}
                    >
                        <Text style={styles.textTab}>Status</Text>
                    </Pressable>
                    <Pressable
                        style={styles.singleTab}
                        android_ripple={{color:'grey'}}
                    >
                        <Text style={styles.textTab}>Calls</Text>
                    </Pressable>
                    
                </View>      
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    navContainer : {
        backgroundColor:"rgb(190,240,155)",
        flex:1.7,
        justifyContent:'center',
        borderBottomWidth:0.5,
        borderBottomColor:'green',
    },
    upperNav : {
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginBottom:20,
    },
    upperNavOptionsContainer : {
        paddingRight:20,
        flexDirection:'row',
        gap:18
    }, 
    textView : {
        paddingLeft:20,
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
        top:'69%',
        paddingLeft:12,
        flexDirection:'row',
        gap:35,
    },
    tabs : {
        flexDirection:'row',  
    },
    singleTab : {
        width:110,
        paddingVertical:9,
        // borderBottomColor:'black',
        // borderBottomWidth:2,
        alignItems:'center'
    }
})

export default Navbar
