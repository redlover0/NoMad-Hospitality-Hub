import {Dimensions, Image, Pressable, ScrollView, Text, TouchableOpacity, View,} from "react-native";
import {styles} from "../../styles/login.styles.js";
import React from "react";
import {SafeAreaView} from "react-native-safe-area-context";

const { width, height } = Dimensions.get('window');

export default function Home({ navigation}) {
  const onclick = (Button) => {
    console.log(`Clicked ${Button}`);
  }

  return (
      <SafeAreaView>
        <ScrollView>
          <Text>Home Screen</Text>
        </ScrollView>
      </SafeAreaView>
  );
}