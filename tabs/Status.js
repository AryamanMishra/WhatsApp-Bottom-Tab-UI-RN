import React from 'react'
import { Text, View,StyleSheet } from 'react-native'


const Status = ()=> {
    return (
        <View style={styles.mainStatus}>
            <Text>Status</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    mainStatus : {
        flex:7
    }
})

export default Status
