import React, { useState } from 'react';
import { ScrollView, Alert } from 'react-native';
import { Icon, Avatar, Text } from '@rneui/themed';
import * as ImagePicker from 'expo-image-picker';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { v4 as uuid } from 'uuid';
import { map, filter } from 'lodash';
import { LoadingModal } from '../../../Shared';
import { styles } from './UploadImagesForm.styles';
import { storage } from '../../../../utils/firebase';

export function UploadImagesForm(props) {
    const { formik } = props;
    const [isLoading, setIsLoading] = useState(false);

    const openGallery = async () => {
    try {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
            alert('No se pudo acceder a la galería de imágenes');
            return;
        }

        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        if (!result.canceled && result.assets && result.assets.length > 0 && result.assets[0].uri) {
            setIsLoading(true);
            uploadImage(result.assets[0].uri);
        }
    } catch (error) {
        console.error('Error abriendo la galería:', error);
    }
};

   const uploadImage = async (uri) => {
        try {
            const response = await fetch(uri);
            const blob = await response.blob();
            const storageRef = ref(storage, `restaurants/${uuid()}`); // Usa storage importado
            await uploadBytes(storageRef, blob);

            updatePhotosRestaurant(storageRef.fullPath);
        } catch (error) {
            console.error('Error en la subida:', error, error.message, error.code, error.serverResponse);
            alert(`Error al subir la imagen: ${error.message}`);
            setIsLoading(false);
        }
    };

   const updatePhotosRestaurant = async (imagePath) => {
    try {
        const imageRef = ref(storage, imagePath);
        const imageURL = await getDownloadURL(imageRef);
        const newImages = [...formik.values.images, imageURL];

        formik.setFieldValue('images', newImages);

        await formik.validateForm(); 

    } catch (error) {
        console.error('Error obteniendo URL:', error);
        alert(`No se pudo obtener la URL de la imagen: ${error.message}`);
    } finally {
        setIsLoading(false);
    }
};

const removeImage = (imageURL, formik) => {
    Alert.alert(
        'Eliminar imagen', 
        '¿Estás seguro de que quieres eliminar esta imagen?', 
        [
            { text: 'Cancelar', style: 'cancel' },
            { text: 'Eliminar', onPress: () => {
                const result = filter(formik.values.images, (image) => image !== imageURL);
                formik.setFieldValue('images', result);
            } },
        ],
        { cancelable: false }
    );
};

    return (
        <>
            <ScrollView style={styles.viewImage} horizontal showsHorizontalScrollIndicator={false}>
                <Icon
                    type="material-community"
                    name="camera"
                    color="#a7a7a7"
                    containerStyle={styles.containerIcon}
                    onPress={openGallery}
                />

                {map(formik.values.images, (image, index) => (
                    <Avatar
                        key={index}
                        source={image ? { uri: image } : undefined }
                        containerStyle={styles.imageStyle}
                        onPress={() => removeImage(image, formik)}
                    />
                ))}
            </ScrollView>

            <Text style={styles.error}>{formik.errors.images}</Text>

            <LoadingModal show={isLoading} text="Subiendo imagen..." />
        </>
    );
}
