import React from 'react'
import { View,StyleSheet,Text,Pressable } from 'react-native'
import SearchIcon from 'react-native-vector-icons/Ionicons'
import CameraIcon from 'react-native-vector-icons/Feather'
import MenuIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import GroupIcon from 'react-native-vector-icons/MaterialIcons'
import { useGlobalContext } from '../context'

const Navbar = ()=> {

    const { tab,setTab } = useGlobalContext()

    const handleTabSwitch = (tab)=> {
        setTab(tab)
    }
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
                        onPress={()=>handleTabSwitch('Chats')}
                        style={tab === 'Chats' ? styles.singleTabWithBorder : styles.singleTab}
                        android_ripple={{color:'rgb(100,185,100)'}}
                    >
                        <Text style={styles.textTab}>Chats</Text>
                    </Pressable>
                    <Pressable
                        onPress={()=>handleTabSwitch('Status')}
                        style={tab === 'Status' ? styles.singleTabWithBorder : styles.singleTab}
                        android_ripple={{color:'rgb(100,185,100)'}}
                    >
                        <Text style={styles.textTab}>Status</Text>
                    </Pressable>
                    <Pressable
                        onPress={()=>handleTabSwitch('Calls')}
                        style={tab === 'Calls' ? styles.singleTabWithBorder : styles.singleTab}
                        android_ripple={{color:'rgb(100,185,100)'}}
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
        backgroundColor:"rgb(190,250,155)",
        flex:1.5,
        justifyContent:'center',
        borderBottomWidth:0.5,
        borderBottomColor:'green',
    },
    upperNav : {
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginBottom:28,
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
        top:'64%',
        paddingLeft:12,
        flexDirection:'row',
        gap:35,
    },
    tabs : {
        flexDirection:'row',  
    },
    singleTab : {
        width:111,
        paddingVertical:15,
        alignItems:'center',
    },
    singleTabWithBorder : {
        width:111,
        paddingVertical:15,
        borderBottomColor:'black',
        borderBottomWidth:2,
        alignItems:'center',
    }
})

export default Navbar
