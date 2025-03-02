import React, { useState,useEffect } from 'react';
import { View, Text } from 'react-native';
import { Icon } from '@rneui/themed';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { screen } from '../../../utils';
import { styles } from './RestaurantsScreen.styles';

export function RestaurantsScreen(props) {
  const { navigation } = props;
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
        setCurrentUser(user);
    });
  }, []);

  const goToAddRestaurant = () => {
    navigation.navigate(screen.restaurant.tab, { screen: screen.restaurant.AddRestaurant});
  }

  return (
    <View style={styles.container}>
      <Text>Restaurant Screen</Text>

    {currentUser && (
      <Icon 
        reverse
        type="material-community" 
        name="plus" 
        color="#00a680" 
        containerStyle={styles.btnContainer}
        onPress={goToAddRestaurant} />
    )}
    </View>
  );
};
