import React from 'react'
import { Text, Pressable, View, StyleSheet } from 'react-native'
import ChatIcon from 'react-native-vector-icons/Ionicons'
import StatusIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import CallsIcon from 'react-native-vector-icons/Ionicons'
import {useGlobalContext} from '../context'


const CustomTabBar = ({ state, descriptors, navigation })=> {

    const {setFocusedTab} = useGlobalContext()

    const onPress = (route,isFocused) => {
        const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
        });
        setFocusedTab(route.name)
        if (!isFocused && !event.defaultPrevented) {
            navigation.navigate({ name: route.name, merge: true });
        }
    };


    return (
        <View style={styles.customTabBarView}>
            {
                state.routes.map((route,index) => {
                    const { options } = descriptors[route.key];
                    const label = route.name
                    const isFocused = state.index === index

                    return (
                        <Pressable 
                            key={index}
                            android_ripple={{color:'rgba(50,100,50,0.2)',borderless:false}}
                            testID={options.tabBarTestID}
                            style={isFocused ? styles.customTabOn : styles.customTab}
                            onPress={()=>onPress(route,isFocused)}
                        >   
                            {
                                label === 'Chats' ? (
                                    isFocused ? (
                                        <ChatIcon 
                                            name='md-chatbox'
                                            size={25}
                                            color='rgb(0,150,0)'
                                        /> 
                                    ): (
                                        <ChatIcon 
                                        name='md-chatbox-outline'
                                        size={25}
                                        color='rgb(0,150,0)'
                                        /> 
                                    )
                                    
                                )
                                : 
                                label === 'Status' ?(
                                    <StatusIcon
                                        name='google-circles'
                                        size={26}
                                        color={isFocused ? 'rgb(0,110,0)' :'rgb(0,150,0)'}
                                    />
                                ) :(
                                    isFocused ? (
                                        <CallsIcon 
                                            name='call'
                                            size={25}
                                            color='rgb(0,150,0)'
                                        />
                                    )
                                    : (
                                        <CallsIcon 
                                            name='call-outline'
                                            size={25}
                                            color='rgb(0,150,0)'
                                        />
                                    )
                                )
                            }
                            {
                                isFocused && <Text style={styles.text}>{label}</Text>
                            }
                            
                        </Pressable>
                    )
                })
            }
        </View>
    )
}

const styles = StyleSheet.create({
    customTabBarView : {
        flexDirection:'row'
    },
    customTab : {
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        paddingVertical:10,
        gap:3
    },
    customTabOn : {
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        paddingVertical:10,
        gap:2
    },
    text : {
        color:"black",
        fontSize:12,
        
    }
})

export default CustomTabBar
