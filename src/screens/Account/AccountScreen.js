import React, { useEffect, useState} from 'react';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import  UserGuestScreen  from './UserGuestScreen';
import  UserLoggedScreen  from './UserLoggedScreen';

const AccountScreen = () => {
  const [hasLogged, setHasLogged] = useState(false);

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
       setHasLogged(user ? true : false);
    });
  }, []);

  return hasLogged ? <UserLoggedScreen /> : <UserGuestScreen />;
};

export default AccountScreen;