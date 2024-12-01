import MapView, { Polyline, Circle } from 'react-native-maps';
import { ActivityIndicator } from 'react-native';

export default function Map({ currentLocation, locations }) {
    if (!currentLocation) {
        return <ActivityIndicator className='my-28' size='large' />
    }
    return (
        <MapView style={{ height: 430, width: 350 }}
            initialRegion={{
                ...currentLocation.coords,
                latitudeDelta: 0.0017,
                longitudeDelta: 0.0017
            }}
        // region={{
        //     ...currentLocation.coords,
        //     latitudeDelta: 0.0017,
        //     longitudeDelta: 0.0017
        // }}
        >
            <Circle
                center={currentLocation.coords}
                radius={5}
                strokeColor='rgba(72, 71, 232, 0.8)'
                fillColor='rgba(95, 161, 248, 0.8)'
            />
            <Polyline coordinates={locations.map(loc => loc.coords)} />
        </MapView>
    );
}

