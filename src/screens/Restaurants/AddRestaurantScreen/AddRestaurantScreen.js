import React from 'react';
import { View } from 'react-native';
import { Button } from '@rneui/themed';
import { useFormik } from 'formik';
import { initialValues, validationSchema } from './AddRestaurantScreen.data';
import { InfoForm } from '../../../components/Restaurants/AddRestaurant';
import { styles } from './AddRestaurantScreen.styles';

export function AddRestaurantScreen() {
  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validationSchema(),
    validateOnChange: false,
    onSubmit: async (values) => {
        console.log(values);
    }
  });

  return (
    <View>
      <InfoForm 
        formik={formik}
      />

      <Button title="Crear restaurante" buttonStyle={styles.addRestaurant} onPress={formik.handleSubmit} loading={formik.isSubmitting} />
    </View>
  );
};
