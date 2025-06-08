// src/screens/LoadingScreen.js
import React, { useEffect } from 'react'; // Import useEffect
import { View, Image, StyleSheet, Dimensions } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const { width, height } = Dimensions.get('window');

const Loading = ({ navigation }) => { // Receive navigation prop
    useEffect(() => {
        // Simulate some loading time
        const timer = setTimeout(() => {
            navigation.replace('Home'); // Use .replace() to prevent going back to loading screen
        }, 3000); // 3-second delay

        // Cleanup the timer if the component unmounts before the timeout
        return () => clearTimeout(timer);
    }, [navigation]); // Dependency array: re-run if navigation object changes (unlikely here, but good practice)

    return (
        <View style={styles.container}>
            {/*<LinearGradient*/}
            {/*    colors={['#4c669f', '#3b5998', '#192f6a']}*/}
            {/*    style={styles.gradientBackground}*/}
            {/*    start={{ x: 0, y: 0 }}*/}
            {/*    end={{ x: 1, y: 1 }}*/}
            {/*/>*/}
            <Image
                source={require('../../assets/images/main-show-drone_01-min-scaled.jpg')} // **Adjust path based on your structure**
                style={styles.logo}
                resizeMode="contain"
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    gradientBackground: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
    },
    logo: {
        width: width * 0.7,
        height: height * 0.3,
    },
});

export default Loading;