import React from 'react';
import { ScrollView } from 'react-native';
import { Text, Button, Image } from '@rneui/themed';
import { useNavigation } from '@react-navigation/native';
import { screen } from '../../../utils';
import { styles } from './UserGuestScreen.styles';

export function UserGuestScreen() {
  const navigation = useNavigation();

  const goToLogin = () => {
    navigation.navigate(screen.account.login);
  }

  return (
    <ScrollView centerContent={true} style={styles.container}>
      <Image source={require('../../../../assets/img/user-guest.png')} style={styles.image} />
      <Text style={styles.title}>Consultar tu perfil en Estrella Michelin</Text>
      <Text style={styles.description}>¿Como describirias tu mejor restaurante? Busca y visualiza los mejores restaurantes de una forma sencilla, vota cual te ha gustado más y comenta como ha sido tu experiencia.</Text>
    
      <Button title="Ver tu perfil" onPress={() => goToLogin()} buttonStyle={styles.button} />
    
    </ScrollView>
  );
};
