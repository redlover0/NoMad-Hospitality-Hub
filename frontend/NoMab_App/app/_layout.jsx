import {Stack} from "expo-router";
import {SafeAreaProvider, SafeAreaView} from "react-native-safe-area-context";
import Home from "./(tabs)/Home";
import Loading from "./screens/loading";
import {createNativeStackNavigator} from "@react-navigation/native-stack";

export default function RootLayout() {
    const Stack = createNativeStackNavigator();
    return (
        <SafeAreaProvider>
            <SafeAreaView style={{flex: 1}}>
                <Stack.Navigator>
                    <Stack.Screen name="Loading" component={Loading} options={{headerShown: false}}/>
                    <Stack.Screen name="Home" component={Home} options={{headerShown: false}}/>
                </Stack.Navigator>
            </SafeAreaView>
        </SafeAreaProvider>
    );
}