import { useState, useEffect, useCallback } from 'react';
import { Button, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { Pedometer } from 'expo-sensors';
import { StatusBar } from 'expo-status-bar';
import DetailsCard from '../components/DetailsCard';
import { useIsFocused } from '@react-navigation/native';
import useLocation from '../hooks/useLocation';
import { LinearGradient } from 'expo-linear-gradient';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Map from '../components/map';

export default function Home({ navigation }) {
    const isFocused = useIsFocused()

    const [isPedometerAvailable, setIsPedometerAvailable] = useState('checking');
    const [pastStepCount, setPastStepCount] = useState(0);
    const [currentStepCount, setCurrentStepCount] = useState(0);
    const [locations, setLocations] = useState([]);
    const [recording, setRecording] = useState(false);
    const [currentLocation, setCurrentLocation] = useState(null);

    const handleLocationChange = (location) => {
        setCurrentLocation(location);
        if (recording) {
            setLocations(prevLocations => [...prevLocations, location]);
        }
    };

    const startRecording = () => {
        setRecording(true);
    }

    const stopRecording = () => {
        setRecording(false);
    }

    const saveTrack = () => {
        console.log(locations);
    }

    const callback = useCallback((location) => handleLocationChange(location), [recording])
    const [errorMsg] = useLocation(isFocused || recording, callback)

    const subscribe = async () => {
        const isAvailable = await Pedometer.isAvailableAsync();
        setIsPedometerAvailable(String(isAvailable));

        if (isAvailable) {
            const end = new Date();
            const start = new Date();
            start.setDate(end.getDate() - 1);

            const pastStepCountResult = await Pedometer.getStepCountAsync(start, end);

            if (pastStepCountResult) {
                setPastStepCount(pastStepCountResult.steps);
            }

            return Pedometer.watchStepCount(result => {
                setCurrentStepCount(result.steps);
            });
        }
    };

    useEffect(() => {
        const subscription = subscribe();
        return () => subscription && subscription.remove();
    }, []);


    return (
        <LinearGradient
            colors={['#f17f55', '#8046c3']}
            style={styles.container}
        >
            <ScrollView>
                <StatusBar style="light" />

                <View style={styles.header}>
                    <View style={styles.headerContent}>
                        <Text style={styles.headerTitle}>Fitness Tracker</Text>
                        <Pressable
                            onPress={() => navigation.navigate('Profile')}
                            style={styles.profileButton}
                        >
                            <FontAwesome name="user-circle" size={45} color="white" />
                        </Pressable>
                    </View>
                </View>

                <View style={styles.mapContainer}>
                    <Map currentLocation={currentLocation} locations={locations} />
                    {errorMsg && (
                        <View style={styles.errorContainer}>
                            <Text style={styles.errorText}>Please enable location services</Text>
                        </View>
                    )}
                </View>

                <View style={styles.statsContainer}>
                    <View style={styles.statsContent}>
                        <View style={styles.statsCards}>
                            <DetailsCard
                                title="Pedometer Status"
                                details={isPedometerAvailable ? "Active" : "Off"}
                            />
                            <DetailsCard
                                title="24h Steps"
                                details={pastStepCount}
                            />
                            <DetailsCard
                                title="Current Steps"
                                details={currentStepCount}
                            />
                        </View>

                        <View style={styles.actionButtons}>
                            <Pressable
                                style={[styles.button, recording && styles.recordingButton]}
                                onPress={recording ? stopRecording : startRecording}
                            >
                                <FontAwesome
                                    name={recording ? "pause" : "play"}
                                    size={20}
                                    color="white"
                                />
                                <Text style={styles.buttonText}>
                                    {recording ? 'Pause' : 'Start Recording'}
                                </Text>
                            </Pressable>

                            {!recording && locations.length > 0 && (
                                <Pressable
                                    style={[styles.button, styles.saveButton]}
                                    onPress={saveTrack}
                                >
                                    <FontAwesome name="save" size={20} color="white" />
                                    <Text style={styles.buttonText}>Save Recording</Text>
                                </Pressable>
                            )}
                        </View>
                    </View>
                </View>
            </ScrollView>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        paddingTop: 50,
        paddingHorizontal: 20,
    },
    headerContent: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    headerTitle: {
        fontSize: 28,
        fontWeight: 'bold',
        color: 'white',
    },
    profileButton: {
        padding: 5,
    },
    mapContainer: {
        margin: 20,
        borderRadius: 20,
        overflow: 'hidden',
        elevation: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    },
    errorContainer: {
        position: 'absolute',
        bottom: 20,
        left: 20,
        right: 20,
        backgroundColor: 'rgba(255, 0, 0, 0.8)',
        padding: 10,
        borderRadius: 10,
    },
    errorText: {
        color: 'white',
        textAlign: 'center',
    },
    statsContainer: {
        flex: 1,
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        padding: 20,
    },
    statsContent: {
        flex: 1,
    },
    statsCards: {
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        borderRadius: 15,
        padding: 20,
        marginBottom: 20,
    },
    actionButtons: {
        gap: 10,
        marginBottom: 20
    },
    button: { 
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        padding: 15,
        height: 50,
        borderRadius: 10,
        gap: 10,
    },
    recordingButton: {
        backgroundColor: '#f17f55',
    },
    saveButton: {
        backgroundColor: '#8046c3',
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: '500',
    },
});