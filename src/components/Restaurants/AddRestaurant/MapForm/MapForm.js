import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import { Modal } from '../../../Shared'
import { Button } from '@rneui/themed';
import * as Location from 'expo-location';
import MapView, { Marker } from 'react-native-maps';
import Toast from 'react-native-toast-message';
import { styles } from './MapForm.styles';

export function MapForm(props) {
    const { show, close, formik } = props;
    const [location, setLocation] = useState({
        latitude: 0,
        longitude: 0,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
    });

    useEffect(() => {
        (async () => {
            const { status } = await Location.requestForegroundPermissionsAsync();

            if (status !== 'granted') {
                Toast.show({
                    type: 'info',
                    position: 'bottom',
                    text1: 'Tienes que ir a ajustes de la app y activar la localización',
                });
                return;
            }

            const locationTemp = await Location.getCurrentPositionAsync({});

            setLocation({
                latitude: locationTemp.coords.latitude,
                longitude: locationTemp.coords.longitude,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            })       
        })();
    }, []);

    const saveLocation = () => {
        formik.setFieldValue('location', location);
        close();
    }

    return (
        <Modal show={show} close={close}>
            <MapView 
                initialRegion={location} 
                showsUserLocation={true} 
                style={styles.mapStyle} 
                onRegionChange={(locationTemp) => setLocation(locationTemp)}
            >
                <Marker 
                    draggable 
                    coordinate={location} 
                    onDragEnd={(e) => setLocation(e.nativeEvent.coordinate)}
            />
            </MapView>

            <View style={styles.mapActions}>
                <Button 
                    title="Guardar" 
                    containerStyle={styles.btnMapContainerSave} 
                    buttonStyle={styles.btnMapSave} 
                    onPress={saveLocation} 
                />
                <Button title="Cerrar" containerStyle={styles.btnMapContainerCancel} buttonStyle={styles.btnMapCancel} onPress={close} />
            </View>
            
        </Modal>
    )
}