import React from 'react';
import { View } from 'react-native';
import { Image } from '@rneui/themed';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { RegisterForm } from '../../../components/Auth';
import { styles } from './RegisterScreen.styles';

const RegisterScreen = () => {
  return (
    <KeyboardAwareScrollView>
    <Image source={require('../../../../assets/img/logo-estrella-michelin.webp')} style={styles.image} />
     <View style={styles.container}>
      <RegisterForm />
     </View>
    </KeyboardAwareScrollView>
  );
};

export default RegisterScreen;