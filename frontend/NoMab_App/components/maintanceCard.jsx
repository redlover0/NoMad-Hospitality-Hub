import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from "expo-router"
import ForeverLoading from "./foreverLoading"

export default function MaintenanceCard({
                                            title,
                                            content,
                                            onPress,
                                            buttonText = "Go Back",
                                            showLoading = true,
                                        }) {
    const navigation = useNavigation()

    const handlePress = () => {
        if (onPress) {
            onPress()
        } else {
            navigation.goBack()
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.card}>
                {/*// Decorative top bar */}
                <View style={styles.topBar} />

                {/*// Header */}
                <View style={styles.header}>
                    <Text style={styles.title}>{title}</Text>
                </View>

                {/* Content */}
                <Text style={styles.content}>{content}</Text>

                {/*// Loading placeholder */}
                {showLoading && (
                    <View style={styles.loadingContainer}>
                        <View style={styles.loadingWrapper}>
                            <ForeverLoading />
                        </View>
                    </View>
                )}

                {/*// Back button */}
                <TouchableOpacity
                    onPress={handlePress}
                    style={styles.button}
                    activeOpacity={0.7}
                >
                    <Text style={styles.buttonText}>
                        {buttonText}
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
        backgroundColor: '#f8fafc',
    },
    card: {
        backgroundColor: 'white',
        borderRadius: 24,
        width: '100%',
        maxWidth: 380,
        padding: 0,
        overflow: 'hidden',
        elevation: 8,
        shadowColor: '#1e293b',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.12,
        shadowRadius: 12,
        alignItems: 'center',
    },
    topBar: {
        width: '100%',
        height: 6,
        backgroundColor: '#4f46e5',
        marginBottom: 24,
    },
    header: {
        alignItems: 'center',
        marginBottom: 20,
        paddingHorizontal: 24,
    },
    title: {
        fontSize: 24,
        fontWeight: '800',
        color: '#1e293b',
        textAlign: 'center',
        letterSpacing: -0.5,
    },
    content: {
        fontSize: 16,
        color: '#64748b',
        textAlign: 'center',
        lineHeight: 26,
        marginBottom: 28,
        paddingHorizontal: 24,
        fontWeight: '400',
    },
    loadingContainer: {
        width: '100%',
        paddingHorizontal: 24,
        marginBottom: 32,
    },
    loadingWrapper: {
        // backgroundColor: '#f1f5f9',
        borderRadius: 16,
        padding: 24,
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: 100,
        // borderWidth: 1,
        // borderColor: '#e2e8f0',
    },
    button: {
        backgroundColor: '#4f46e5',
        borderRadius: 16,
        paddingVertical: 16,
        paddingHorizontal: 40,
        minWidth: 180,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 28,
        elevation: 4,
        shadowColor: '#4f46e5',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 8,
    },
    buttonText: {
        color: 'white',
        fontSize: 17,
        fontWeight: '700',
        letterSpacing: 0.5,
    },
})