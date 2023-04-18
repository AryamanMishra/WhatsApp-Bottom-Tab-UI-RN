import React, { useEffect, useRef } from 'react'
import ArrowIcon from 'react-native-vector-icons/MaterialIcons'
import { View,StyleSheet,Text,Pressable,Animated } from 'react-native'
import { useGlobalContext } from '../../contexts/context'
import MutedUpdate from './MutedUpdate'


const MutedUpdatesSection = ()=> {

    
    const heightValue = useRef(new Animated.Value(0)).current

    const { showData,setShowData } = useGlobalContext()

    const mutedUpdatessectionRef = useRef(null)


    const increaseHeight = ()=> {
        Animated.timing(heightValue, {
            toValue:mutedUpdatessectionRef.current._children.length*75,
            duration:350,
            useNativeDriver:false
        }).start()
    }

    const decreaseHeight = ()=> {
        Animated.timing(heightValue, {
            toValue:0,
            duration:350,
            useNativeDriver:false
        }).start()
    }
    
    const handlePress = ()=> {
        setShowData(!showData)
        // console.log(mutedUpdatessectionRef.current._children)
    }


    useEffect(()=> {
        if (showData === true) {
            increaseHeight()
        }
        else {
            decreaseHeight()
        }
    },[showData])


    return (
        <View 
            style={styles.mutedUpdatesSection} 
        >
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
                        onPress={handlePress}
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
            <Animated.View
                ref={mutedUpdatessectionRef}
                style={{height:heightValue, opacity:0.55}}      
            >
                <MutedUpdate />
                <MutedUpdate />
                <MutedUpdate />
                <MutedUpdate />
                <MutedUpdate />
            </Animated.View>
        </View> 
    )
}


const styles = StyleSheet.create({
    mutedUpdatesSection : {
        marginTop:10,
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
