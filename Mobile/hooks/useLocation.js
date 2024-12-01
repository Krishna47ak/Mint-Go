import { useState, useEffect } from 'react';
import { requestForegroundPermissionsAsync, Accuracy, watchPositionAsync } from 'expo-location';

export default (shouldTrackFocus, callback) => {
    const [errorMsg, setErrorMsg] = useState(null);

    useEffect(() => {
        let subscriber;
        const startWatching = async () => {
            const { status } = await requestForegroundPermissionsAsync()
            if (status !== 'granted') {
                setErrorMsg('Permission to access location was denied');
                return;
            }
            subscriber = await watchPositionAsync({
                accuracy: Accuracy.BestForNavigation,
                timeInterval: 1000,
                distanceInterval: 10
            }, callback);
        }

        if (shouldTrackFocus) {            
            startWatching()
        }else{
            if (subscriber) {
                subscriber.remove()
            }
            subscriber = null
        }
        return () => {
            if (subscriber) {
                subscriber.remove()
            }
        }
    }, [shouldTrackFocus, callback])

    return [errorMsg]
}