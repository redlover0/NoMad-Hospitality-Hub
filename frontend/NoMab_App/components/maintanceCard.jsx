import { View, Text, StyleSheet, TouchableOpacity, Button } from 'react-native'
import React from 'react'
import {Ionicons} from "@expo/vector-icons";
import {useNavigation} from "expo-router";
import ForeverLoading from "./foreverLoading";



export default function MaintanceCard({
    title,
    content,
    onPress,
    icon,
                                      }) {
    const navigation = useNavigation();
    const backNavigate = () => {
        navigation.goBack();
    }
  return (
      <View style={styles.backGround}>
    <View style={styles.cardContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.content}>{content}</Text>
        <View style={styles.placeHolder}>
            <ForeverLoading/>
        </View>
        <View>

            <View>
        <TouchableOpacity onPress={onPress} style={styles.buttonContainer} >
            <Text style={styles.button}>
                Go Back
            </Text>
        </TouchableOpacity>
            </View>
        </View>
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
        paddingTop: 10,
        fontSize: 14,
        color: '#666',
        alignSelf: 'center',
        marginTop: 10,
        marginBottom: 10,
        width: 300,
        textAlign: 'center',
    },
    placeHolder: {
        height: 100,
        width: 200,
        flex: 1,
        // backgroundColor: 'red',
        alignSelf: 'center',
        // borderRadius: 100,
        marginTop: 10,
        marginBottom: 10,
    },
    button: {
        // backgroundColor: '#4A90E2',
        // marginTop: 10,
        color: 'white',
        fontSize: 25,
        fontWeight: '600',
    },
    buttonContainer: {
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        padding: 10,
        backgroundColor: '#4A90E2',
        width: 200,
    }
})