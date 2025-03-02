import React, { useState } from 'react';
import { View } from 'react-native';
import { Input, Button } from '@rneui/themed';
import { useFormik } from 'formik';
import { getAuth, updatePassword, EmailAuthProvider, reauthenticateWithCredential } from 'firebase/auth';
import Toast from 'react-native-toast-message';
import { initialValues, validationSchema } from './ChangePasswordForm.data';
import { styles } from './ChangePasswordForm.styles';

export function ChangePasswordForm(props) {
    const { onClose } = props;
    const [showPassword, setShowPassword] = useState(false);

    const onShowPassword = () => {
        setShowPassword(!showPassword);
    }

    const formik = useFormik({
        initialValues: initialValues(),
        validationSchema: validationSchema(),
        validateOnChange: false,
        onSubmit: async (formValue) => {
          try {
            const currentUser = getAuth().currentUser;

            const credentials = EmailAuthProvider.credential(
                currentUser.email, 
                formValue.password
            );
           await reauthenticateWithCredential(currentUser, credentials);
            await updatePassword(currentUser, formValue.newPassword);

            onClose();
          } catch (error) {
            Toast.show({
              type: 'error',
              position: 'bottom',
              text1: 'Error al cambiar tu contraseña',
            });
            console.log(error);
          }
        }
    })

  return (
    <View style={styles.container}>
      <Input 
        placeholder="Contraseña actual" 
        style={styles.input} 
        secureTextEntry={showPassword ? false : true}
        rightIcon={{ 
            type: "material-community", 
            name: showPassword ? "eye-off-outline" : "eye-outline", 
            color: "#c2c2c2",
            onPress: onShowPassword 
            }}
        onChangeText={(text) => formik.setFieldValue('password', text)}
        errorMessage={formik.errors.password}
        />
      <Input placeholder="Nueva contraseña" style={styles.input} secureTextEntry={showPassword ? false : true}
        rightIcon={{ 
            type: "material-community", 
            name: showPassword ? "eye-off-outline" : "eye-outline", 
            color: "#c2c2c2",
            onPress: onShowPassword 
            }}
        onChangeText={(text) => formik.setFieldValue('newPassword', text)}
        errorMessage={formik.errors.newPassword}
            />
      <Input 
        placeholder="Confirmar nueva contraseña" 
        style={styles.input} 
        secureTextEntry={showPassword ? false : true}
        rightIcon={{ 
            type: "material-community", 
            name: showPassword ? "eye-off-outline" : "eye-outline", 
            color: "#c2c2c2",
            onPress: onShowPassword 
            }}
        onChangeText={(text) => formik.setFieldValue('repeatNewPassword', text)}
        errorMessage={formik.errors.repeatNewPassword}
            />
      <Button 
        title="Cambiar contraseña" 
        containerStyle={styles.btnContainer}
        buttonStyle={styles.btn} 
        onPress={formik.handleSubmit}
        loading={formik.isSubmitting}
        />
    </View>
  );
}
  