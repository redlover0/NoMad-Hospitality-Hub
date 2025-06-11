import {Dimensions, StyleSheet} from "react-native";

const {width} = Dimensions.get('window'); // Only need width for calculations


export const styles = StyleSheet.create({
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