import React from 'react';
import { View } from 'react-native';
import { Text, Icon, Button } from '@rneui/themed';
import { useNavigation } from '@react-navigation/native';
import { screen } from '../../../utils';
import { styles } from './UserNotLogged.styles';

export function UserNotLogged() {
    const navigation = useNavigation();

    const goToLogin = () => {
        navigation.navigate(screen.account.tab, { screen: screen.account.login });
    }

    return (
        <View style={styles.container}>
            <Icon type="material-community" name="alert-outline" color="#00a680" size={80} />
            <Text style={styles.info}>No has iniciado sesión</Text>
            <Button title="Iniciar sesión" containerStyle={styles.btnContainer} buttonStyle={styles.btn} onPress={goToLogin} />
        </View>
    );
}