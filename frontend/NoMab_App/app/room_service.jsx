import {View, Text, TouchableOpacity, StyleSheet, ScrollView} from 'react-native'
import {Ionicons} from "@expo/vector-icons";
import {SafeAreaView} from "react-native-safe-area-context";
import {useNavigation} from "expo-router";
import {MultipleSelectList} from 'react-native-dropdown-select-list'

import {useState} from 'react';

const data = [
    {key: '1', value: 'Mobiles', disabled: false},
    {key: '2', value: 'Appliances'},
    {key: '3', value: 'Cameras'},
    {key: '4', value: 'Computers', disabled: false},
    {key: '5', value: 'Vegetables'},
    {key: '6', value: 'Diary Products'},
    {key: '7', value: 'Drinks'},
]

export default function AboutUs() {
    const [selected, setSelected] = useState([]);
    const Navigation = useNavigation();
    const backNavigate = () => {
        Navigation.goBack();
    }
    return (
        <ScrollView>
            <SafeAreaView style={styles.safeArea}>
                <View style={styles.headerContainer}>
                    {/* Back Button */}
                    <TouchableOpacity
                        style={styles.backButton}
                        onPress={backNavigate}
                    >
                        <Ionicons name="arrow-back-outline" size={30} color="black"/>
                    </TouchableOpacity>
                    <View style={styles.headerTitleWrapper}>
                        <Text style={styles.headerTitle}>House Keeping</Text>
                    </View>
                    <View style={styles.rightPlaceholder}/>
                </View>
                <View style={[styles.cardContainer, {height: 400}]}>
                    <View style={styles.cardHeaderContainer}>
                        <Ionicons name="information-circle-outline" size={40}></Ionicons>
                    </View>
                    <View>
                        <Text style={styles.cardHeaderText}>
                            Your Assigned agent is: Linda
                        </Text>
                        <Text style={{padding: 10, backgroundColor: 'white', borderRadius: 8, marginTop: 10}}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Praesent euismod, tortor eu tincidunt efficitur,
                        </Text>
                    </View>
                    <View style={styles.cardPlaceholder}>
                        <Text>

                        </Text>
                    </View>
                    <View style={{padding: 10, backgroundColor: 'white', borderRadius: 8}}>
                        <View>
                            <Text style={{fontWeight: 'bold', fontSize: 18, paddingRight: 50, paddingBottom: 10, alignSelf: 'flex-start'}}>
                                Service Type:
                            </Text>
                        </View>
                        <View>
                        <MultipleSelectList
                            setSelected={(val) => setSelected(val)}
                            data={data}
                            save="value"
                            onSelect={() => console.log(selected)}
                            label="Categories"
                            placeholder="Select Room Service Categories"
                            searchPlaceholder={"Search Bar"}
                        />
                        </View>
                        <View style={styles.cardPlaceholder}>
                            <Text>

                            </Text>
                        </View>
                        <View style={{padding: 10, backgroundColor: 'white', borderRadius: 8}}>
                            <Text style={{fontWeight: 'bold', fontSize: 18, paddingRight: 50, paddingBottom: 10, alignSelf: 'flex-start'}}>
                                Service Type:
                            </Text>
                        </View>
                        <MultipleSelectList
                            setSelected={(val) => setSelected(val)}
                            data={data}
                            save="value"
                            onSelect={() => console.log(selected)}
                            label="Categories"
                            placeholder="Select Room Service Categories"
                            searchPlaceholder={"Search Bar"}
                        />
                    </View>
                </View>
            </SafeAreaView>
        </ScrollView>
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
    cardContainer: {
        backgroundColor: 'white',
        borderRadius: 8,
        width: '90%',
        height: 150,
        marginTop: 20,
        alignSelf: 'center',
    },
    cardHeaderContainer: {
        alignSelf: 'center',
        paddingTop: 15,
        flexDirection: 'row',
        // borderBottomColor: '#e0e0e0',
        // backgroundColor: '#e0e0e0',
    },
    cardHeaderText: {
        fontWeight: 'bold',
        fontSize: 20,
        alignSelf: 'center',
    },
    cardContent: {
        padding: 10,
        flexWrap: 'wrap',
    },
    cardPlaceholder: {
        height: 30,
        width: '100%',
        margin: 10,
        alignSelf: 'center',
        backgroundColor: '#F2F2F2'
    }
});