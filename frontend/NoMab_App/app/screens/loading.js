// src/screens/LoadingScreen.js
import React, { useEffect } from 'react'; // Import useEffect
import { View, Image, StyleSheet, Dimensions } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {SafeAreaView} from "react-native-safe-area-context";

const { width, height } = Dimensions.get('window');

const Loading = ({ navigation }) => { // Receive navigation prop
    useEffect(() => {
        // Simulate some loading time
        const timer = setTimeout(() => {
            navigation.replace('Home'); // Use .replace() to prevent going back to loading screen
        }, 2000); // 3-second delay

        // Cleanup the timer if the component unmounts before the timeout
        return () => clearTimeout(timer);
    }, [navigation]); // Dependency array: re-run if navigation object changes (unlikely here, but good practice)

    return (
        <View style={styles.fullScreenBackground}>
        <SafeAreaView style={styles.safeArea}>
            {/*<LinearGradient*/}
            {/*    colors={['#4c669f', '#3b5998', '#192f6a']}*/}
            {/*    style={styles.gradientBackground}*/}
            {/*    start={{ x: 0, y: 0 }}*/}
            {/*    end={{ x: 1, y: 1 }}*/}
            {/*/>*/}
            <Image
                source={require('../../assets/images/Monogram_Master_M_White (1).png')} // **Adjust path based on your structure**
                style={styles.logo}
                resizeMode="contain"
            />
            <Image source={require("../../assets/images/Group 5.svg")}
                   style={{width: 200, height: 200}}/>
        </SafeAreaView>
        </View>
    );
};

const styles = StyleSheet.create({
    fullScreenBackground: {
        flex: 1, // Makes this View take up the entire screen space
        backgroundColor: '#003366', // The deep blue color for the entire background
        justifyContent: 'center', // Center content vertically
        alignItems: 'center',     // Center content horizontally
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    safeArea: {
        flex: 3,
        backgroundColor: '#003366',
    },
    logo: {
        paddingTop: 100,
        width: width * 0.5,
        height: height * 0.3,
    },
});

export default Loading;