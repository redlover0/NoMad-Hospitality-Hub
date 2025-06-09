import {Dimensions, Image, Pressable, ScrollView, Text, TouchableOpacity, View, StyleSheet} from "react-native";
import React from "react";
import {SafeAreaView} from "react-native-safe-area-context";
import {Ionicons} from "@expo/vector-icons";

import {Carousel, Spacings} from "react-native-ui-lib";

const INITIAL_PAGE = 0; // Keeping it at 0 to start with the first image
const IMAGES = [
    'https://michigancentral.com/wp-content/uploads/2025/06/2024-TheStationHotel-18thFloor-Stephanie-Rhoades-Hume_3-scaled.jpg',
    'https://michigancentral.com/wp-content/uploads/2025/05/2025-0520-BGCSW-MCS-Autonomous-Innovation-Views-2-2-scaled.png',
    'https://michigancentral.com/wp-content/uploads/2025/05/Michigan-Central-Station-Exteriors-QEA-CB-0009-scaled.jpg'
];

const {width} = Dimensions.get('window'); // Only need width for calculations

export default function Home({navigation}) {
    const onclick = (buttonName) => {
        console.log(`Clicked ${buttonName}`);
    }

    const carouselHorizontalPadding = Spacings.s4;
    const itemGap = Spacings.s3;

    // calculate the width of each pages
    const pageWidth = width - (carouselHorizontalPadding * 2) - itemGap;

    return (
        <SafeAreaView style={styles.safeArea}>
            <ScrollView contentContainerStyle={styles.scrollViewContent}>
                <View style={styles.headerContainer}>
                    <View>
                        <Text style={styles.Header}>Welcome, Dhamari</Text>
                        <Text style={styles.roomInfo}>Floor 6 - Suite Royal Best</Text>
                    </View>
                    <TouchableOpacity style={{padding: 10}} onPress={() => onclick('Menu Button')}>
                        <Ionicons name="menu" size={30} color="black"/>
                    </TouchableOpacity>
                </View>

                <Carousel
                    initialPage={INITIAL_PAGE} // start at image 0
                    pageWidth={pageWidth}
                    itemSpacings={itemGap} // gap between each image
                    containerMarginHorizontal={carouselHorizontalPadding}
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
        // debugging borders
        // borderWidth: 1,
        // borderColor: '#ccc',
        // borderRadius: 8,
    },
    carouselImage: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        borderRadius: 8,
    },
});