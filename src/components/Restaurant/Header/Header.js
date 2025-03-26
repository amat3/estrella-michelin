import React from 'react';
import { View } from 'react-native';
import { Rating } from 'react-native-ratings';
import { Text } from '@rneui/themed';
import { styles } from './Header.styles';

export function Header(props) {
    const { restaurant } = props;
    const ratingValue = restaurant.ratingMedia ?? 0;

    return (
        <View style={styles.container}>
        <View style={styles.titleView}>
            <Text style={styles.name}>{restaurant.name}</Text>
            <Rating
                    type='star'
                    ratingCount={5}
                    imageSize={20}
                    readonly
                    startingValue={ratingValue}
                />
        </View>
            <Text style={styles.description}>{restaurant.description}</Text>
        </View>
    );
}