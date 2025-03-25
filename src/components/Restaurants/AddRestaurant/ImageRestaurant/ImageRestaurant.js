import React from 'react';
import { View } from 'react-native';
import { Image } from '@rneui/themed';
import { styles } from './ImageRestaurant.styles';

export function ImageRestaurant(props) {
    const { formik } = props;
    const primaryImage = formik.values.images[0];

    return (
        <View style={styles.container}>
            <Image
                source={
                    primaryImage 
                        ? { uri: primaryImage } 
                        : require('../../../../../assets/img/image-not-found.png')
                }
                style={styles.imageStyle}
                />
        </View>
    );
}