import {Dimensions, Image, Pressable, ScrollView, Text, TouchableOpacity, View, StyleSheet} from "react-native";
// import {styles} from "../styles/login.styles.js";
import React from "react";
import {SafeAreaView} from "react-native-safe-area-context";

const { width, height } = Dimensions.get('window');

export default function Home({ navigation }) {
  const onclick = (Button) => {
    console.log(`Clicked ${Button}`);
  }

  return (
      <SafeAreaView style={styles.safeArea}>
        <ScrollView style={styles.scrollView}>
        <View style={styles.headerContainer}>
         <View>
             <Text style={styles.Header}>Welcome, Dhamari</Text>
             <Text style={styles.roomInfo}>YOO</Text>
         </View>
            </View>
        </ScrollView>
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    safeArea: {
        flex:  1,
        backgroundColor: '#F2F2F2',
    },
    scrollView:{
        flexGrow: 1, // lets context get bigger user scrolls
        paddingHorizontal: 20, // give padding to the right and left
        paddingTop: 20, //  pushes away the content so its not at the top
    },
    headerContainer: {
        flexDirection: 'row', // makes the contex
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottomn: 30,
    },
    Header: {
        fontSize: 30,
        fontWeight: 'bold',
        marginTop: 10,
    },
    roomInfo: {
        fontSize: 20,
        fontWeight: 'lighter',
        // paddingLeft: 10,
        marginTop: 5,
    }
})