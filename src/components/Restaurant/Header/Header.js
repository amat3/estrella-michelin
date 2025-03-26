import React from 'react';
import { View } from 'react-native';
import { Text, Rating } from '@rneui/base';
import { styles } from './Header.styles';

export function Header(props) {
    const { restaurant } = props;
    console.log(restaurant.ratingMedia)

    return (
        <View style={styles.container}>
        <View style={styles.titleView}>
            <Text style={styles.name}>{restaurant.name}</Text>
            <Rating 
                imageSize={20} 
                readonly
                startingValue={restaurant.ratingMedia | 0} 
                />
        </View>
            <Text style={styles.description}>{restaurant.description}</Text>
        </View>
    );
}