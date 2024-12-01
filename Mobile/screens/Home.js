import { useState, useEffect, useCallback } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { Pedometer } from 'expo-sensors';
import { StatusBar } from 'expo-status-bar';
import DetailsCard from '../components/DetailsCard';
import { useIsFocused } from '@react-navigation/native';
import useLocation from '../hooks/useLocation';
import { LinearGradient } from 'expo-linear-gradient';
import Map from '../components/map';


export default function Home() {
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

    console.log("recording", recording);
    console.log("currentLocation", currentLocation);
    console.log("locations", locations);



    return (
        <LinearGradient
            colors={['#f17f55', '#8046c3']}
            style={styles.container}
        >
            <StatusBar style="auto" />
            <View style={{ marginVertical: 70, borderRadius: 10, overflow: 'hidden' }} >
                <Map currentLocation={currentLocation} locations={locations} />
                {errorMsg ? <Text>Please enable location services</Text> : null}
            </View>
            <View style={{ marginBottom: 50, width: 350 }} >
                <View style={{ display: 'flex', justifyContent: 'center' }} >
                    <DetailsCard title="Is pedometer enabled:" details={isPedometerAvailable ? "Yes" : "No"} />
                    <DetailsCard title="Steps taken in the last 24 hours:" details={pastStepCount} />
                    <DetailsCard title="Steps taken now:" details={currentStepCount} />
                </View>
                <View style={{ marginTop: 20 }} >
                    <View style={{ borderRadius: 5 }} > 
                        <Button title={recording ? 'Pause' : 'Start recording'} onPress={recording ? stopRecording : startRecording} />
                    </View>
                    <View style={{ marginTop: 5}} >
                        {!recording && locations.length ? <Button title='Save Recording' onPress={saveTrack} color={'red'} /> : null}
                    </View>
                </View>
            </View>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
});
