import React, { useState } from 'react';
import { View } from 'react-native';
import { Button } from '@rneui/themed';
import { getAuth, signOut } from 'firebase/auth';
import { LoadingModal } from '../../../components';
import { InfoUser, AccountOptions } from '../../../components/Account';
import { styles } from './UserLoggedScreen.styles';

export function UserLoggedScreen() {
  const [loading, setLoading] = useState(false);
  const [loadingText, setLoadingText] = useState('');
  const [reload, setReload] = useState(false);

  const onReload = () => {
    setReload(!reload);
  }

  const logout = async () => {
    const auth = getAuth();
    await signOut(auth);
  }

  return (
    <View style={styles.container}>
      <InfoUser setLoading={setLoading} setLoadingText={setLoadingText} />

      <AccountOptions onReload={onReload} />

      <Button title="Cerrar sesión" onPress={logout} buttonStyle={styles.btnStyles} titleStyle={styles.btnTextStyles} />
    
      <LoadingModal show={loading} text={loadingText} />
    </View>
  );
};


