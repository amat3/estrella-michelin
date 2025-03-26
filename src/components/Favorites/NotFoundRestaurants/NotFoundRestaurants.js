import React from 'react';
import { View } from 'react-native';
import { Text, Icon } from '@rneui/themed';
import { styles } from './NotFoundRestaurants.styles';

export function NotFoundRestaurants() {
    return (
        <View style={styles.container}>
            <Icon
                type="material-community"
                name="alert-outline"
                color="#00a680"
                size={80}
            />
            <Text style={styles.text}>No tienes restaurantes en tu lista</Text>
        </View>
    );
}