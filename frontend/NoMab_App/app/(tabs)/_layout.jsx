import { View, Text } from 'react-native'
import React from 'react'
import {Tabs} from "expo-router";

export default function TabLayout() {
  return <Tabs>
      <Tabs.Screen name="Order_food" options={{headerShown: false}}/>
      <Tabs.Screen name="Room_service" options={{headerShown: false}}/>
      <Tabs.Screen name="Home" options={{headerShown: false}}/>
  </Tabs>
}