import React, { useEffect } from 'react'; // Import useEffect
import { View, Image, StyleSheet, Dimensions } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {SafeAreaView} from "react-native-safe-area-context";
import { useRouter } from 'expo-router';

const { width, height } = Dimensions.get('window');

const Loading = ({ navigation }) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            navigation.replace('home');
        }, 2000);

        return () => clearTimeout(timer);
    }, [navigation]);


    return (
        <View style={styles.background}>
        <SafeAreaView style={styles.safeArea}>
            {/*<LinearGradient*/}
            {/*    colors={['#4c669f', '#3b5998', '#192f6a']}*/}
            {/*    style={styles.gradientBackground}*/}
            {/*    start={{ x: 0, y: 0 }}*/}
            {/*    end={{ x: 1, y: 1 }}*/}
            {/*/>*/}
            <Image
                source={require('../assets/images/Monogram_Master_M_White (1).png')}
                style={styles.logo}
                resizeMode="contain"
            />
            <Image source={require("../assets/images/Group 5.svg")}
                   style={{width: 200, height: 200}}/>
        </SafeAreaView>
        </View>
    );
};

const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: '#003366',
        justifyContent: 'center', // center
        alignItems: 'center', // center
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