import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Text, Image, Rating, Icon } from '@rneui/themed';
import { useNavigation } from '@react-navigation/native';
import { screen } from '../../../utils';
import { styles } from './RestaurantRanking.styles';

export function RestaurantRanking(props) {
    const { restaurant, index } = props;
    const navigation = useNavigation();

    const goToRestaurant = () => {
        navigation.navigate(screen.restaurant.tab, { screen: screen.restaurant.restaurant, params: { id: restaurant.id } });
    }

    const renderMedal = () => {
        if (index > 2) return null;

        let color= ""
        if (index === 0) color = '#ffd700';
        if (index === 1) color = '#bebebe';
        if (index === 2) color = '#cd7f32';

        return (
            <Icon
                type='material-community'
                name='medal-outline'
                color={color}
                size={30}
                style={styles.medal}
            />
        )
    }

    return (
        <TouchableOpacity onPress={goToRestaurant}>
            <View style={styles.container}>
                <Image
                    source={{ uri: restaurant.images[0] }}
                    style={styles.image}
                />
                <View style={styles.infoContent}>
                    <View style={styles.nameContainer}>
                    {renderMedal()}
                    <Text style={styles.name}>{restaurant.name}</Text>
                    </View>
                    <Rating 
                        imageSize={15} 
                        startingValue={restaurant.ratingMedia} 
                        readonly 
                    />
                </View>
                <Text style={styles.description}>{restaurant.description}</Text>
            </View>
        </TouchableOpacity>
    );
}