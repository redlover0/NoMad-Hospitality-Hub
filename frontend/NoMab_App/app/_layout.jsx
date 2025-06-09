import {Stack} from "expo-router";
import {SafeAreaProvider, SafeAreaView} from "react-native-safe-area-context";
import Home from "./Home";
import Loading from "./loading";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {View, StyleSheet} from "react-native";
import TabLayout from "./(tabs)/_layout";

export default function RootLayout() {
    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator>
            <Stack.Screen name="Loading" component={Loading}
                          options={{headerShown: false, presentation: 'modal', animation: 'slide_from_bottom'}}/>
            <Stack.Screen name="Home" component={Home} options={{headerShown: false}}/>
            <Stack.Screen name="Tabs" component={TabLayout} options={{headerShown: false}}/>
        </Stack.Navigator>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#003366',
    }
})