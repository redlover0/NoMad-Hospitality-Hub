import {View, Text, TouchableOpacity, StyleSheet} from 'react-native'
import React from 'react'
import {Ionicons} from "@expo/vector-icons";
import {SafeAreaView} from "react-native-safe-area-context";
import {useNavigation} from "expo-router";


export default function AboutUs() {
    const Navigation = useNavigation();
    const backNavigate = () => {
        Navigation.goBack();
    }
  return (
      <SafeAreaView style={styles.safeArea}>
          <View style={styles.headerContainer}>
              {/* Back Button */}
              <TouchableOpacity
                  style={styles.backButton}
                  onPress={backNavigate}
              >
                  <Ionicons name="arrow-back-outline" size={30} color="black" />
              </TouchableOpacity>

              {/* Header Title (Centered) */}
              <View style={styles.headerTitleWrapper}>
                  <Text style={styles.headerTitle}>About Us</Text>
              </View>

              {/* Placeholder for right side (to push title to center) */}
              <View style={styles.rightPlaceholder} />
          </View>

          {/* Main content of your About Us page */}
          <View style={styles.content}>
              <Text>This is the main content of the About Us page.</Text>
              {/* ... other About Us content ... */}
          </View>
      </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    scrollViewContent: {
        flexGrow: 1,
        paddingHorizontal: 20,
        paddingTop: 20,
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
    },
    safeArea: {
        flex: 1,
        backgroundColor: '#F2F2F2', // Match your app's background
    },
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        height: 60,
        // backgroundColor: 'white',
        borderBottomWidth: 1,
        borderBottomColor: '#e0e0e0', // creates a little shadow
    },
    backButton: {
        padding: 5, // so its easier for people to press
    },
    headerTitleWrapper: {
        flex: 1,
        alignItems: 'center',
    },
    headerTitle: {
        fontSize: 22,
        fontWeight: 'bold',
        color: 'black',
    },
    rightPlaceholder: {
        width: 30 + (5 * 2), // Size of icon + padding on both sides of backButton
    },
    content: {
        flex: 1,
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
});