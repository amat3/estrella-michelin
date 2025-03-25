import React from 'react';
import MapView, { Marker } from 'react-native-maps';
import openMap from 'react-native-open-maps';
import { styles } from './Map.styles';

export function Map(props) {
    const { location, name } = props;

    const openAppMaps = () => {
        openMap({
            latitude: location.latitude,
            longitude: location.longitude,
            zoom: 19,
            query: name
        });
    }

    return (
        <MapView style={styles.container} initialRegion={location} onPress={openAppMaps}>
            <Marker coordinate={location} title={name} />
        </MapView>
    );
}