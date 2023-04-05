import React from 'react'
import { Text, View,StyleSheet } from 'react-native'


const Chats = ()=> {
    return (
        <View style={styles.mainChats}>
            <Text>Chats</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    mainChats : {
        flex:7
    }
})
export default Chats
