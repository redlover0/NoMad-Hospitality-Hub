import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    ScrollView,
    TextInput,
    Alert,
    LogBox,
    KeyboardAvoidingView, // <-- Added KeyboardAvoidingView
    Platform // <-- Added Platform for OS-specific behavior
} from 'react-native'
import {Ionicons} from "@expo/vector-icons";
import {SafeAreaView} from "react-native-safe-area-context";
import {useNavigation} from "expo-router";
import {MultipleSelectList} from 'react-native-dropdown-select-list'
import {useState} from 'react';

LogBox.ignoreLogs([
    'Text strings must be rendered within a <Text> component'
]);

const serviceTypeData = [
    {key: '1', value: 'Room Cleaning'},
    {key: '2', value: 'Fresh Towels'},
    {key: '3', value: 'Extra Pillows'},
    {key: '4', value: 'Maintenance Issue'},
    {key: '5', value: 'Mini Bar Refill'},
    {key: '6', value: 'Bathroom Supplies'},
];

const timeData = [
    {key: '1', value: 'Now'},
    {key: '2', value: 'Within 1 hour'},
    {key: '3', value: 'This afternoon'},
    {key: '4', value: 'Tomorrow morning'},
    {key: '5', value: 'Tomorrow afternoon'},
];

// Updated roomAccessData for practicality
const roomAccessData = [
    {key: '1', value: 'Please enter, I will not be in the room'},
    {key: '2', value: 'Please knock, I will be in the room'},
    {key: '3', value: 'Call me before entering (My number: +1 234 567 8901)'}, // You'd typically fetch user's number here
    {key: '4', value: 'Come back later (Specify in Special Instructions)'},
];

export default function RoomService() {
    const [serviceType, setServiceType] = useState('');
    const [preferredTime, setPreferredTime] = useState('');
    const [specialInstructions, setSpecialInstructions] = useState('');
    const [roomAccess, setRoomAccess] = useState('');
    const navigation = useNavigation();

    const backNavigate = () => {
        navigation.goBack();
    }

    const handleSubmit = () => {
        if (serviceType.length === 0 || preferredTime.length === 0 || roomAccess.length === 0) {
            Alert.alert('Missing Information', 'Please fill in all required fields.');
            return;
        }

        Alert.alert(
            'Request Submitted',
            'Your housekeeping request has been submitted. Linda has been notified.',
            [{ text: 'OK', onPress: () => navigation.goBack() }]
        );
    }

    return (
        <SafeAreaView style={styles.safeArea}>
            {/* KeyboardAvoidingView starts here */}
            <KeyboardAvoidingView
                style={{ flex: 1 }} // Essential to make KeyboardAvoidingView fill available space
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'} // Use 'padding' for iOS, 'height' for Android
                keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 0} // Adjust this offset for iOS if header covers input
            >
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={styles.scrollViewContent} // <-- Added contentContainerStyle
                >
                    <View style={styles.headerContainer}>
                        <TouchableOpacity style={styles.backButton} onPress={backNavigate}>
                            <Ionicons name="arrow-back" size={24} color="#333" />
                        </TouchableOpacity>
                        <View style={styles.headerTitleWrapper}>
                            <Text style={styles.headerTitle}>House Keeping</Text>
                        </View>
                        <View style={styles.rightPlaceholder} />
                    </View>

                    <View style={styles.cardContainer}>
                        <View style={styles.cardHeaderContainer}>
                            <View style={styles.iconContainer}>
                                <Ionicons name="person-circle" size={50} color="#4A90E2" />
                            </View>
                            <View style={styles.housekeeperInfo}>
                                <Text style={styles.cardHeaderText}>Your Assigned HouseKeeper is: Linda</Text>
                                <Text style={styles.statusText}>Currently Available</Text>
                            </View>
                        </View>
                        <View style={styles.statusContainer}>
                            <Ionicons name="call" size={20} color="#4A90E2"
                                      style={[styles.iconContainer, {marginLeft: 15, marginRight: 30}]}/>
                            <Text>+1 234 567 8901</Text>
                        </View>
                    </View>

                    <View style={styles.cardContainer}>
                        <Text style={styles.Header}>Service Request</Text>

                        <View style={styles.cardContent}>
                            <Text style={styles.labelText}>
                                Service Type <Text style={styles.required}>*</Text>
                            </Text>
                            <MultipleSelectList
                                setSelected={setServiceType}
                                data={serviceTypeData}
                                save="value"
                                placeholder="Select services needed"
                                searchPlaceholder="Search services..."
                                boxStyles={styles.dropdownBox}
                                dropdownStyles={styles.dropdown}
                                badgeStyles={styles.badge}
                                badgeTextStyles={styles.badgeText}
                                checkBoxStyles={styles.checkbox}
                                labelStyles={styles.dropdownLabel}
                            />
                        </View>

                        {/* Preferred Time */}
                        <View style={styles.cardContent}>
                            <Text style={styles.labelText}>
                                Preferred Time <Text style={styles.required}>*</Text>
                            </Text>
                            <MultipleSelectList
                                setSelected={setPreferredTime}
                                data={timeData}
                                save="value"
                                placeholder="When would you like service?"
                                searchPlaceholder="Search time slots..."
                                boxStyles={styles.dropdownBox}
                                dropdownStyles={styles.dropdown}
                                labelStyles={styles.dropdownLabel}
                                maxHeight={200}
                                maxSelect={1} // Enforce single selection
                            />
                        </View>

                        {/* Room Access */}
                        <View style={styles.cardContent}>
                            <Text style={styles.labelText}>
                                Room Access Instructions <Text style={styles.required}>*</Text>
                            </Text>
                            <MultipleSelectList
                                setSelected={setRoomAccess}
                                data={roomAccessData} // <-- Using the updated data
                                save="value"
                                placeholder="How should we access your room?"
                                searchPlaceholder="Search access options..."
                                boxStyles={styles.dropdownBox}
                                dropdownStyles={styles.dropdown}
                                labelStyles={styles.dropdownLabel}
                                maxHeight={200}
                                maxSelect={1}
                            />
                        </View>

                        {/* Special Instructions */}
                        <View style={styles.cardContent}>
                            <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                                <Text style={styles.labelText}>Special Instructions</Text>
                                <Text style={styles.characterCount}>
                                    {specialInstructions.length}/500
                                </Text>
                            </View>
                            <TextInput
                                style={styles.textInput}
                                multiline
                                numberOfLines={4}
                                onChangeText={setSpecialInstructions}
                                value={specialInstructions}
                                placeholder="Any specific requests or instructions"
                                placeholderTextColor="#999"
                                textAlignVertical="top"
                                maxLength={500}
                            />
                        </View>
                        <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
                            <Ionicons name="checkmark-circle" size={20} color="white" style={styles.buttonIcon} />
                            <Text style={styles.buttonText}>Submit Request</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
            {/* KeyboardAvoidingView ends here */}
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    Header: {
        fontSize: 20,
        fontWeight: '600',
        color: '#333',
        marginBottom: 20,
        paddingHorizontal: 10,
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
        color: 'white',
        fontSize: 16,
        fontWeight: '600',
    },
    buttomPictureContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 16,
        paddingTop: 16,
        borderTopWidth: 1,
        borderTopColor: '#E5E5E5',
        paddingHorizontal: 10,
    },
    safeArea: {
        flex: 1,
        backgroundColor: '#F8F9FA',
    },
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        paddingVertical: 12,
        backgroundColor: 'white',
        borderBottomWidth: 1,
        borderBottomColor: '#E5E5E5',
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 2, // For Android shadow
    },
    backButton: {
        padding: 8,
        borderRadius: 20,
    },
    headerTitleWrapper: {
        flex: 1,
        alignItems: 'center',
    },
    headerTitle: {
        fontSize: 18,
        fontWeight: '600',
        color: '#333',
    },
    rightPlaceholder: {
        width: 40,
    },
    content: {
        flex: 1,
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    cardContainer: {
        backgroundColor: 'white',
        borderRadius: 12,
        marginHorizontal: 16,
        marginTop: 16,
        padding: 16,
        elevation: 2, // Android shadow
        shadowColor: '#000', // iOS shadow
        shadowOffset: { width: 0, height: 2 }, // iOS shadow
        shadowOpacity: 0.1, // iOS shadow
        shadowRadius: 4, // iOS shadow
    },
    labelText: {
        fontSize: 16,
        fontWeight: '500',
        color: '#333',
        marginBottom: 8,
    },
    textInput: {
        borderWidth: 1,
        borderColor: '#E0E0E0',
        borderRadius: 8,
        paddingHorizontal: 12,
        paddingVertical: 12,
        fontSize: 14,
        backgroundColor: '#FAFAFA',
        minHeight: 100,
        textAlignVertical: 'top',
    },
    cardHeaderContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 12,
    },
    cardHeaderText: {
        fontSize: 18,
        fontWeight: '600',
        color: '#333',
        marginBottom: 2,
    },
    cardContent: {
        marginBottom: 20,
    },
    cardPlaceholder: {
        height: 30,
        width: '100%',
        margin: 10,
        alignSelf: 'center',
        backgroundColor: '#F2F2F2'
    },
    iconContainer: {
        marginRight: 12,
    },
    housekeeperInfo: {
        flex: 1,
    },
    housekeeperDetails: {
        fontSize: 14,
        color: '#666',
    },
    statusContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    statusText: {
        fontSize: 14,
        color: '#4CAF50',
        fontWeight: '500',
    },
    required: {
        color: '#FF4444',
    },
    dropdownBox: {
        borderWidth: 1,
        borderColor: '#E0E0E0',
        borderRadius: 8,
        paddingHorizontal: 12,
        paddingVertical: 12,
        backgroundColor: '#FAFAFA',
    },
    dropdown: {
        borderWidth: 1,
        borderColor: '#E0E0E0',
        borderRadius: 8,
        backgroundColor: 'white',
    },
    dropdownLabel: {
        fontSize: 14,
        color: '#333',
    },
    badge: {
        backgroundColor: '#4A90E2',
        borderRadius: 6,
        paddingHorizontal: 8,
        paddingVertical: 4,
        marginRight: 6,
        marginBottom: 6,
    },
    badgeText: {
        color: 'white',
        fontSize: 12,
        fontWeight: '500',
    },
    checkbox: {
        borderWidth: 1,
        borderColor: '#4A90E2',
    },
    characterCount: {
        fontSize: 12,
        color: '#999',
        textAlign: 'right',
        marginTop: 4,
    },
    submitButton: {
        backgroundColor: '#4A90E2',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 16,
        borderRadius: 8,
        marginTop: 8,
        elevation: 2, // Android shadow
        shadowColor: '#000', // iOS shadow
        shadowOffset: { width: 0, height: 2 }, // iOS shadow
        shadowOpacity: 0.15, // iOS shadow
        shadowRadius: 4, // iOS shadow
        marginHorizontal: 10,
    },
    buttonIcon: {
        marginRight: 8,
    },
    contactText: {
        fontSize: 14,
        color: '#666',
        marginLeft: 8,
        textAlign: 'center',
    },
    scrollViewContent: {
        flexGrow: 1, // Ensure the ScrollView content takes up all available space
        paddingBottom: 20, // prevent content from being too close to the edge
    },
});