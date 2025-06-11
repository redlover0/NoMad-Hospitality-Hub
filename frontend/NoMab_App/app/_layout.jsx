import {Stack} from "expo-router";
import {SafeAreaProvider, SafeAreaView} from "react-native-safe-area-context";
import Home from "./Home";
import Loading from "./loading";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {View, StyleSheet} from "react-native";
import TabLayout from "./(tabs)/index";
import Room from "./room_service";
import AboutUs from "./aboutUs";

export default function RootLayout() {
    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator>
            <Stack.Screen name="Loading" component={Loading}
                          options={{headerShown: false, presentation: 'modal', animation: 'slide_from_bottom'}}/>
            <Stack.Screen name="home" component={Home} options={{headerShown: false,title: 'Home' }}/>
            <Stack.Screen name="tab" component={TabLayout} options={{headerShown: false}}/>
            <Stack.Screen name="room_service" component={Room} options={{headerShown: false, title: 'Room Service', animation: 'slide_from_bottom', }}/>
            <Stack.Screen name="aboutUs" component={AboutUs} options={{headerShown: false, title: 'About Us', animation: 'slide_from_right',}}/>
        </Stack.Navigator>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#003366',
    }
})