import {Stack} from "expo-router";
import {SafeAreaProvider, SafeAreaView} from "react-native-safe-area-context";
import Home from "./(tabs)/Home";
import Loading from "./screens/loading";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {View, StyleSheet} from "react-native";

export default function RootLayout() {
    const Stack = createNativeStackNavigator();
    return (
                <Stack.Navigator>
                    <Stack.Screen name="Loading" component={Loading} options={{headerShown: false, presentation: 'modal'}}/>
                    <Stack.Screen name="Home" component={Home} options={{headerShown: false}}/>
                </Stack.Navigator>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#003366', // This is the key: set your desired background color here
    }
})