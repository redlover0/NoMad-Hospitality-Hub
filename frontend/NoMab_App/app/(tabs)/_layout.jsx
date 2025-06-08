import { View, Text } from 'react-native'
import React from 'react'
import {Tabs} from "expo-router";

export default function _layout() {
  return <Tabs>
      <Tabs.Screen name="Order_food" />
      <Tabs.Screen name="Room_service"/>
      <Tabs.Screen name="Home"/>
  </Tabs>
}