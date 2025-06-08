import {Image, Pressable, Text, TouchableOpacity, View,} from "react-native";
import {styles} from "../../styles/login.styles.js";
import {Link, Tabs} from "expo-router";
import Order_food from "./order_food";
import Room_service from "./room_service";
// import {Link} from "expo-router"; // Uncomment if you want to use Link for navigation

export default function Index() {
  return (
    <View
      style={styles.container}
    >
      <Text>
        Home Screen Page
      </Text>
      {/*  <Image source={require("../assets/images/main-show-drone_01-min-scaled.jpg")} style={{width: 200, height: 300}}*/}
      {/*  ></Image>*/}
      {/*<Text style={styles.title}>Hello.</Text>*/}
      {/*  <TouchableOpacity onPress={() => alert('Order_food')}>*/}
      {/*      <Text>Order_food</Text>*/}
      {/*  </TouchableOpacity>*/}

      {/*  <Pressable onPress={() => alert('About The Creator, How to buy/ contact info')}>*/}
      {/*      <Text>About me - pressable </Text>*/}
      {/*  </Pressable>*/}
    </View>
  );
}