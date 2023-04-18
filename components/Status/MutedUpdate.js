import React, {useEffect,useRef} from 'react'
import { View,Text,StyleSheet,Pressable, Animated,Image } from 'react-native'
import testImage from '../../assets/testImage.png'
import { useGlobalContext } from '../../contexts/context'


const MutedUpdate = ()=> {

    const { showData } = useGlobalContext()

    const scaleValue = useRef(new Animated.Value(0)).current


    const increaseScale = ()=> {
        Animated.timing(scaleValue, {
            toValue:1,
            duration:100,
            useNativeDriver:false
        }).start()
    }

    const decreaseScale = ()=> {
        Animated.timing(scaleValue, {
            toValue:0,
            duration:100,
            useNativeDriver:false
        }).start()
    }


    useEffect(()=> {
        if (showData === true) {
            increaseScale()
        }
        else {
            decreaseScale()
        }
    },[showData])

    return (
        <Pressable
            android_ripple={{color:'rgba(100,100,100,0.2)'}}
        >
            <Animated.View style={[styles.mutedUpdate,{transform:[{scaleY:scaleValue}]}]}>
                <Image
                    style={styles.profileImage}
                    source={testImage}
                />
                <View style={styles.mutedUpdateText}>
                    <Text style={styles.largeText}>Aryaman</Text>
                    <Text style={styles.smallText}>Today, 15:34</Text>
                </View>
            </Animated.View>
        </Pressable>
    )
}


const styles = StyleSheet.create({
    mutedUpdate : {
        flexDirection:'row',
        alignItems:'center',
        gap:12 ,
        paddingVertical:10,
        paddingHorizontal:18,
    },
    mutedUpdateText : {
        marginTop:2.5,
    },
    largeText: {
        fontSize:16.5,
        letterSpacing:0.2
    }, 
    smallText : {
        color:'rgba(10,10,10,0.65)',
        fontSize:12.5,
    },
    profileImage : {
        height:50,
        width:50,
        borderRadius:50,
        borderWidth:0.5,
        borderColor:'grey',
    },
})

export default MutedUpdate