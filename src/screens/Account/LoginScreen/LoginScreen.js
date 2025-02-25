import React from 'react';
import { View, ScrollView } from 'react-native';
import { Text, Image } from '@rneui/themed';
import { useNavigation } from '@react-navigation/native';
import  { LoginForm }  from '../../../components/Auth';
import { screen } from '../../../utils';
import { styles } from './LoginScreen.styles';

export function LoginScreen() {
  const navigation = useNavigation();

  const goToRegister = () => {
    navigation.navigate(screen.account.register);
  }

  return (
    <ScrollView>
      <Image source={require('../../../../assets/img/logo-estrella-michelin.webp')} style={styles.image} />

      <View style={styles.container}>
        <LoginForm />

      <Text style={styles.textRegister}>
        ¿Aún no tienes cuenta?
        <Text style={styles.btnRegister} onPress={goToRegister}> Registrarse</Text>
        </Text>
      </View>
    </ScrollView>
  );
};

