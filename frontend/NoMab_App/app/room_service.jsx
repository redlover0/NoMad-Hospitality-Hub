import { View, Text, SafeAreaView, StyleSheet } from 'react-native'
import React from 'react'

export default function Room_service() {
  return (
        <SafeAreaView style={styles.container} >
          <View>
              <Text>room_service Screen</Text>
          </View>
        </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})

