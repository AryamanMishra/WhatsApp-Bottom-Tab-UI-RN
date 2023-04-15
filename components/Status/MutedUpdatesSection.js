import React, { useEffect, useRef } from 'react'
import ArrowIcon from 'react-native-vector-icons/MaterialIcons'
import { View,StyleSheet,Text,Pressable,Animated,Easing } from 'react-native'
import { useGlobalContext } from '../../context'
import RecentUpdate from './RecentUpdate'


const MutedUpdatesSection = ()=> {


    useEffect(()=> {
        if (showData === true) {
            // animOpen()
        }
        else {
            // animClose()
        }
    },[showData])

    
    const handlePress = ()=> {
        setShowData(!showData)
    }

    const {showData,setShowData} = useGlobalContext()
    return (
        <View style={styles.mutedUpdatesSection}>
            {
                showData ? (
                    <Pressable
                        onPress={handlePress}
                        style={styles.mutedUpdatesHeading}
                    >
                        <Text style={styles.subheadingText}>Muted updates</Text>
                        <ArrowIcon 
                            name='keyboard-arrow-up'
                            size={24}
                            color='green' 
                            style={{paddingRight:25}} 
                        />
                    </Pressable>
                )
                : (
                    <Pressable
                        onPress={()=>setShowData(!showData)}
                        style={styles.mutedUpdatesHeading}
                    >
                        <Text style={styles.subheadingText}>Muted updates</Text>
                        <ArrowIcon 
                            name='keyboard-arrow-down'
                            size={24}
                            color='green'  
                            style={{paddingRight:25}} 
                        />
                    </Pressable>
                )
            }
            {
                showData && (
                    <Animated.View
                        // style={{height:heightValue}}
                    >
                        <View>
                                <RecentUpdate />
                                <RecentUpdate />
                        </View>
                    </Animated.View>
                )
            }
        </View> 
    )
}


const styles = StyleSheet.create({
    mutedUpdatesSection : {
        marginTop:8,
        borderBottomColor:"rgba(100,100,100,0.3)",
        borderBottomWidth:0.2,
        paddingBottom:5,
    },
    subheadingText : {
        color:'rgba(10,10,10,0.65)',
        fontSize:14,
        marginLeft:18
    },
    mutedUpdatesHeading : {
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginBottom:8
    },
})
export default MutedUpdatesSection
