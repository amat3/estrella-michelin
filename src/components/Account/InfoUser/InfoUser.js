import React, { useState } from 'react';
import { View } from 'react-native';
import { Avatar, Text } from '@rneui/themed';
import * as ImagePicker from 'expo-image-picker';
import { getAuth, updateProfile } from 'firebase/auth';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { styles } from './InfoUser.styles';

export function InfoUser(props) {
  const { setLoading, setLoadingText } = props;
  const { uid, photoURL, displayName, email } = getAuth().currentUser;
  const [avatar, setAvatar] = useState(photoURL);

  const changeAvatar = async () => {
    try {
      const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== 'granted') {
        alert('No se pudo acceder a la galería de imágenes');
        return;
      }

      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,  // Asegúrate de usar la constante correcta
        allowsEditing: true,
        aspect: [4, 3],
      });

      if (!result.canceled && result.assets && result.assets.length > 0) {
        uploadImage(result.assets[0].uri);
      }
    } catch (error) {
      console.error('Error al abrir la galería:', error);
    }
  };

  const uploadImage = async (uri) => {
    setLoadingText('Actualizando avatar...');
    setLoading(true);

    const response = await fetch(uri);
    const blob = await response.blob();

    const storage = getStorage();
    const storageRef = ref(storage, `avatar/${uid}`);

    uploadBytes(storageRef, blob).then((snapshot) => {
      updatePhotoURL(snapshot.metadata.fullPath);
    });
  };

  const updatePhotoURL = async (imagePath) => {
    const storage = getStorage();
    const imageRef = ref(storage, imagePath);

    const imageURL = await getDownloadURL(imageRef);

    const auth = getAuth();
    await updateProfile(auth.currentUser, { photoURL: imageURL });

    setAvatar(imageURL);
    setLoading(false);
  };

  return (
    <View style={styles.container}>
      <Avatar 
        size='large' 
        rounded 
        containerStyle={styles.avatar}
        icon={!avatar ? { type: 'material-community', name: 'account' } : undefined}
        source={avatar ? { uri: avatar } : undefined }
      >
        <Avatar.Accessory size={24} onPress={changeAvatar} />
      </Avatar>
      <View>
        <Text style={styles.displayName}>{displayName || "Anónimo"}</Text>
        <Text>{email}</Text>
      </View>
    </View>
  );
}