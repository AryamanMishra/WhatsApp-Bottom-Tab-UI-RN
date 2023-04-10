import React from 'react'
import { Text, Pressable, View, StyleSheet } from 'react-native'
import ChatIcon from 'react-native-vector-icons/Ionicons'
import StatusIcon from 'react-native-vector-icons/Zocial'
import CallsIcon from 'react-native-vector-icons/Ionicons'


const CustomTabBar = ({ state, descriptors, navigation })=> {
    return (
        <View style={styles.customTabBarView}>
            {
                state.routes.map((route,index) => {
                    const { options } = descriptors[route.key];
                    const label = route.name
                    const isFocused = state.index === index

                    const onPress = () => {
                        const event = navigation.emit({
                            type: 'tabPress',
                            target: route.key,
                            canPreventDefault: true,
                        });

                        if (!isFocused && !event.defaultPrevented) {
                            navigation.navigate({ name: route.name, merge: true });
                        }
                    };
                    
                    return (
                        <Pressable 
                            key={index}
                            android_ripple={{color:'rgba(20,150,20,0.25)',borderless:false}}
                            testID={options.tabBarTestID}
                            style={isFocused ? styles.customTabOn : styles.customTab}
                            onPress={onPress}
                        >   
                            {
                                label === 'Chats' ? (
                                    isFocused ? (
                                        <ChatIcon 
                                            name='md-chatbox'
                                            size={25}
                                            color='green'
                                        /> 
                                    ): (
                                        <ChatIcon 
                                        name='md-chatbox-outline'
                                        size={25}
                                        color='green'
                                        /> 
                                    )
                                    
                                )
                                : 
                                label === 'Status' ?(
                                    <StatusIcon
                                        name='statusnet'
                                        size={25}
                                        color={isFocused ? 'rgb(0,100,0)' :'rgb(0,150,0)'}
                                    />
                                ) :(
                                    isFocused ? (
                                        <CallsIcon 
                                            name='call'
                                            size={25}
                                            color='green'
                                        />
                                    )
                                    : (
                                        <CallsIcon 
                                            name='call-outline'
                                            size={25}
                                            color='green'
                                        />
                                    )
                                )
                            }
                            <Text style={styles.text}>{label}</Text>
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
        gap:2
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
