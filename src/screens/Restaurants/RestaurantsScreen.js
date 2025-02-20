import React from 'react';
import { View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Button } from '@rneui/themed';
import { screen } from '../../utils';

const RestaurantsScreen = () => {
  const navigation = useNavigation();

  const goToAddRestaurant = () => {
    navigation.navigate(screen.restaurants.AddRestaurant);
  }

  return (
    <View>
      <Text>Restaurant Screen</Text>

      <Button title="Crear restaurante" onPress={goToAddRestaurant}/>
    </View>
  );
};

export default RestaurantsScreen;