import {Stack} from "expo-router";
import Home from "./Home";
import Loading from "./loading";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import { StyleSheet} from "react-native";
import TabLayout from "./(tabs)/index";
import Room from "./room_service";
import AboutUs from "./aboutUs";
import RoomMood from "./roomMood";
import amenitiesPage from "./amenitiesPage";
import conciegrePage from "./conciegrePage";

export default function RootLayout() {
    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator>
            <Stack.Screen name="Loading" component={Loading}
                          options={{headerShown: false, presentation: 'modal', animation: 'slide_from_bottom'}}/>

            <Stack.Screen name="home"
                          component={Home} options={{headerShown: false,title: 'Home' }}/>

            <Stack.Screen name="tab"
                          component={TabLayout} options={{headerShown: false}}/>

            <Stack.Screen name="room_service"
                          component={Room} options={{headerShown: false, title: 'Room Service', animation: 'slide_from_bottom', }}/>

            <Stack.Screen name="aboutUs"
                          component={AboutUs} options={{headerShown: false, title: 'About Us', animation: 'slide_from_right',}}/>

            <Stack.Screen name="roomMood"
                          component={RoomMood} options={{headerShown: false, title: 'Room Mood', animation: 'slide_from_bottom', }}/>

            <Stack.Screen name="amenities"
                          component={amenitiesPage} options={{headerShown: false, title: 'Room Mood', animation: 'slide_from_bottom', }}/>

            <Stack.Screen name="concierge"
                          component={conciegrePage} options={{headerShown: false, title: 'concierge', animation: 'slide_from_bottom', }}/>
        </Stack.Navigator>
    );
}