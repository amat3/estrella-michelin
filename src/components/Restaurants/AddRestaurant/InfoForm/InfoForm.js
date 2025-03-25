import React, { useState } from 'react';
import { View } from 'react-native';
import { Input } from '@rneui/themed';
import { MapForm } from '../MapForm';
import { styles } from './InfoForm.styles';

export function InfoForm(props) {
    const { formik } = props;
    const [showMap, setShowMap] = useState(false);

    const openCloseMap = () => {
        setShowMap(!showMap);
    }

  return (
    <>
    <View style={styles.container}>
      <Input 
        placeholder="Nombre del restaurante" 
        onChangeText={(text) => formik.setFieldValue('name', text)}
        errorMessage={formik.errors.name}
        />
    <Input
        placeholder="Dirección"
        rightIcon={{
            type: 'material-community', 
            name: 'map-marker-radius', 
            color: getColorIconMap(formik), 
            onPress: openCloseMap
            }}
        onChangeText={(text) => formik.setFieldValue('address', text)}
        errorMessage={formik.errors.address}
    />
    <Input
        placeholder="Teléfono"
        onChangeText={(text) => formik.setFieldValue('phone', text)}
        errorMessage={formik.errors.phone}
    />
    <Input
        placeholder="Email"
        onChangeText={(text) => formik.setFieldValue('email', text)}
        errorMessage={formik.errors.email}
    />
    <Input
        placeholder="Descripción del restaurante" 
        multiline={true}
        inputContainerStyle={styles.textArea}
        onChangeText={(text) => formik.setFieldValue('description', text)}
        errorMessage={formik.errors.description}
    />
    </View>

    <MapForm show={showMap} close={openCloseMap} formik={formik} />
    </>
  );
};

const getColorIconMap = (formik) => {
    if (formik.errors.location) return '#ff0000';

    if (formik.values.location) return '#00a680';

    return '#c2c2c2';
}