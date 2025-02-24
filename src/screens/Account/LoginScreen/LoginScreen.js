import React from 'react';
import { View, ScrollView } from 'react-native';
import { Text, Image } from '@rneui/themed';
import { useNavigation } from '@react-navigation/native';
import { screen } from '../../../utils';
import { styles } from './LoginScreen.styles';

const LoginScreen = () => {
  const navigation = useNavigation();

  const goToRegister = () => {
    navigation.navigate(screen.account.register);
  }

  return (
    <ScrollView>
      <Image source={require('../../../../assets/img/logo-estrella-michelin.webp')} style={styles.image} />
      <View style={styles.container}>
      <Text>Estamos en Login</Text>
      </View>

      <Text onPress={goToRegister}>Registrarse</Text>
    </ScrollView>
  );
};

export default LoginScreen;