import React, { useState, useEffect } from 'react';
import { ScrollView } from 'react-native';
import { Button } from '@rneui/themed';
import { useFormik } from 'formik';
import { v4 as uuid } from 'uuid';
import { doc, setDoc} from 'firebase/firestore';
import { useNavigation } from '@react-navigation/native';
import { db } from '../../../utils';
import { initialValues, validationSchema } from './AddRestaurantScreen.data';
import { InfoForm, UploadImagesForm, ImageRestaurant } from '../../../components/Restaurants/AddRestaurant';
import { styles } from './AddRestaurantScreen.styles';

export function AddRestaurantScreen() {
  const navigation = useNavigation();

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validationSchema(),
    validateOnChange: false,
    onSubmit: async (formValue) => {
       try {
          const newData = formValue
          newData.id = uuid();
          newData.createdAt = new Date();

          await setDoc(doc(db, 'restaurants', newData.id), newData);

          navigation.goBack();
       } catch (error) {
           console.error('Error al crear restaurante:', error);
       }
    }
  });

  const [images, setImages] = useState(formik.values.images);

  useEffect(() => {
    setImages(formik.values.images);
  }, [formik.values.images]);

  console.log('Formik recibido en AddRestaurantScreen:', formik.values.images);

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <ImageRestaurant formik={formik} />

      <InfoForm formik={formik}/>

      <UploadImagesForm formik={formik} />

      <Button title="Crear restaurante" buttonStyle={styles.addRestaurant} onPress={formik.handleSubmit} loading={formik.isSubmitting} />
    </ScrollView>
  );
};
