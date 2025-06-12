import {Dimensions, Image, Pressable, ScrollView, Text, TouchableOpacity, View, StyleSheet} from "react-native";
import React, { useEffect, useState } from "react"; // Added useState
import {SafeAreaView} from "react-native-safe-area-context";
import {Ionicons} from "@expo/vector-icons";

import {Carousel} from "react-native-ui-lib"; // Removed Spacings as it's not used
import {useRouter} from "expo-router"; // Keep if you use useRouter elsewhere, otherwise can be removed

import hotelDataFinder from "./api/hotelDataFinder";


const INITIAL_PAGE = 0; // Keeping it at 0 to start with the first image
const IMAGES = [
    'https://michigancentral.com/wp-content/uploads/2025/06/2024-TheStationHotel-18thFloor-Stephanie-Rhoades-Hume_3-scaled.jpg',
    'https://michigancentral.com/wp-content/uploads/2025/05/2025-0520-BGCSW-MCS-Autonomous-Innovation-Views-2-2-scaled.png',
    'https://michigancentral.com/wp-content/uploads/2025/05/Michigan-Central-Station-Exteriors-QEA-CB-0009-scaled.jpg'
];

const {width} = Dimensions.get('window'); // Only need width for calculations

export default function Home({navigation}) {
    // State to hold user information and room details
    const [userInfo, setUserInfo] = useState({});
    const [roomDetails, setRoomDetails] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await hotelDataFinder.get(`/`)
                console.log("Response status:", response.status)
                console.log("Response data:", response.data.rows)
                if (response.status !== 200) {
                    console.log("Error status:", response.status)
                } else {
                    console.log("Success! Data received:", response.data.rows)
                    if (response.data.rows && response.data.rows.length > 0) {
                        const userData = response.data.rows[0]; // Assuming the first item is the relevant user data
                        setUserInfo({
                            first_name: userData.first_name,
                            last_name: userData.last_name
                        });
                        setRoomDetails({
                            floor_number: userData.floor_number,
                            room_type: userData.room_type
                        });
                    }
                }
            } catch (error) {
                console.error("API call failed:", error)
                console.log("Error details:", error.response?.data)
            }
        }
        fetchData();
    }, []); // Empty dependency array means this effect runs once after the initial render

    const onclick = (buttonName) => {
        console.log(`Clicked ${buttonName}`);
    }

    const roomServiceNavigate = () => {
        navigation.navigate('room_service');
    }

    const aboutUsNavigate = () => {
        navigation.navigate('aboutUs');
    }

    return (
        <SafeAreaView style={styles.safeArea}>
            <ScrollView contentContainerStyle={styles.scrollViewContent}>
                <View style={styles.headerContainer}>
                    <View>
                        <Text style={styles.Header}>
                            Welcome, {userInfo.first_name ? userInfo.first_name  : 'Guest'}
                        </Text>
                        <Text style={styles.roomInfo}>
                            {roomDetails.floor_number ? `Floor ${roomDetails.floor_number} - ${roomDetails.room_type}` : 'Loading room info...'}
                        </Text>
                    </View>
                    <TouchableOpacity style={{padding: 10}} onPress={() => aboutUsNavigate()} >
                        <Ionicons name="menu" size={30} color="black" />
                    </TouchableOpacity>
                </View>

                <Carousel
                    initialPage={INITIAL_PAGE}
                    containerStyle={styles.carouselContainer}
                    pageControlPosition={Carousel.pageControlPositions.UNDER}
                    allowAccessibleLayout
                    loop
                >
                    {IMAGES.map((image, index) => (
                        <Image
                            key={index}
                            source={{uri: image}}
                            style={styles.carouselImage}
                        />
                    ))}
                </Carousel>
                <View style={styles.servicesContainer}>
                    <Text style={styles.quickService}>
                        Quick Services
                    </Text>
                    <View style={styles.buttonGrid}>
                        <TouchableOpacity style={styles.buttonGridItem} onPress={() => roomServiceNavigate()}>
                            <Ionicons name="restaurant-outline" size={24} color="#003366"/>
                            <Text style={styles.buttonText}>Room Service</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttonGridItem} onPress={() => onclick('Housekeeping')}>
                            <Ionicons name="bed-outline" size={24} color="#003366"/>
                            <Text style={styles.buttonText}>Housekeeping</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttonGridItem} onPress={() => onclick('Concierge')}>
                            <Ionicons name="information-circle-outline" size={24} color="#003366"/>
                            <Text style={styles.buttonText}>Concierge</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttonGridItem} onPress={() => onclick('Amenities')}>
                            <Ionicons name="fitness-outline" size={24} color="#003366"/>
                            <Text style={styles.buttonText}>Amenities</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.buttomPictureContainer}>
                        {/* Assuming you have this image in your assets folder */}
                        <Image
                            source={require('../assets/images/Group 5.svg')}
                            style={{width: 100, height: 100}}
                        />
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#F2F2F2',
    },
    scrollViewContent: {
        flexGrow: 1,
        paddingHorizontal: 20,
        paddingTop: 20,
    },
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 30,
    },
    Header: {
        fontSize: 30,
        fontWeight: 'bold',
        marginTop: 10,
    },
    roomInfo: {
        fontSize: 20,
        fontWeight: 'lighter',
        marginTop: 5,
    },
    carouselContainer: {
        height: 200,
        marginBottom: 20,
    },
    carouselImage: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        borderRadius: 8,
    },
    servicesContainer: {
        flex: 1,
    },
    quickService: {
        paddingBottom: 10,
        fontSize: 30,
        fontWeight: 'bold',
    },
    buttonGrid: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
    },
    buttonGridItem: {
        width: (width - 40 - 20) / 2, // 40 for horizontal padding, 20 for space between
        height: 120,
        backgroundColor: 'white',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 3.84,
        elevation: 5,
    },
    buttonText: {
        marginTop: 8,
        color: '#003366',
        fontSize: 16,
        fontWeight: '500',
    },
    buttomPictureContainer: {
        alignItems: 'center',
        marginTop: 20,
        paddingBottom: 20,
    }
});