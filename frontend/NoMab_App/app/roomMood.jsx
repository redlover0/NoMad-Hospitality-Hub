import {View, Text, StyleSheet, ScrollView} from 'react-native'
import React from 'react'
import {SafeAreaView} from "react-native-safe-area-context";
import MaintanceCard from "../components/maintanceCard";
import {Ionicons} from "@expo/vector-icons";
import {Header} from "../components/header";

export default function RoomMood() {
  return (

    <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
            <View>
            <MaintanceCard title="Room Mood" content="This is the room mood page" icon="reload-outline">
            </MaintanceCard>
            </View>
        </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#F8F8F8',
    },
    container: {
        flex: 1,               // This View expands to fill the SafeAreaView
        justifyContent: 'center', // Centers children vertically
        alignItems: 'center',    // Centers children horizontally
    },
});