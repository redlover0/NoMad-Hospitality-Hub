import { View, Text, StyleSheet, TouchableOpacity, Button } from 'react-native'
import React from 'react'
import {Ionicons} from "@expo/vector-icons";


export default function MaintanceCard({
    title,
    content,
    onPress,
    icon,
                                      }) {
  return (
      <View style={styles.backGround}>
    <View style={styles.cardContainer}>
        <Ionicons name={icon} size={50} color="#4A90E2" style={ {marginTop: 10, alignSelf: 'center'}}/>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.content}>{content}</Text>
        <TouchableOpacity onPress={onPress}>
            <Button title="Click Me" />
        </TouchableOpacity>
    </View>
      </View>
  )
}

const styles = StyleSheet.create({
    backGround: {
    },
    cardContainer: {
        backgroundColor: 'white',
        borderRadius: 12,
        marginHorizontal: 16,
        height: 300,
        marginTop: 16,
        padding: 16,
        width: 350,
        elevation: 2,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
    },
    title: {
        alignSelf: 'center',
        fontSize: 18,
        fontWeight: '600',
        color: '#333',
    },
    content: {
        fontSize: 14,
        color: '#666',
        alignSelf: 'center',
        marginTop: 10,
        marginBottom: 10,
        width: 300,
        textAlign: 'center',
    },
})