import React from 'react'
import ArrowIcon from 'react-native-vector-icons/MaterialIcons'
import { View,StyleSheet,Text,Pressable } from 'react-native'
import { useGlobalContext } from '../../context'
import RecentUpdate from './RecentUpdate'


const MutedUpdatesSection = ()=> {

    const {showData,setShowData} = useGlobalContext()
    return (
        <View style={styles.mutedUpdatesSection}>
            {
                showData ? (
                    <Pressable
                        onPress={()=>setShowData(!showData)}
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
                <View style={styles.recentUpdates}>
                    <RecentUpdate />
                    <RecentUpdate />
            </View>
            )
        }  
        </View> 
    )
}


const styles = StyleSheet.create({
    mutedUpdatesSection : {
        marginVertical:8,
        borderBottomColor:"rgba(100,100,100,0.3)",
        borderBottomWidth:0.2,
        paddingBottom:5
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
