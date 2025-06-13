import {View, Text, StyleSheet, ScrollView} from 'react-native'
import React from 'react'
import {SafeAreaView} from "react-native-safe-area-context";
import MaintanceCard from "../components/maintanceCard";
import {Ionicons} from "@expo/vector-icons";
import {Header} from "../components/header";
import {useNavigation} from "expo-router";
import ForeverLoading from "../components/foreverLoading";

export default function RoomMood() {
    const navigation = useNavigation();
    const backNavigate = () => {
        navigation.goBack();
    }
  return (

    <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
            <View>
            <MaintanceCard title="Room Mood" onPress={backNavigate} content="This Page is currently under maintaince please check in later" icon="reload-outline">
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