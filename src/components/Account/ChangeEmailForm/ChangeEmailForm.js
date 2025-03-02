import React, { useState } from 'react';
import { View } from 'react-native';
import { Input, Button } from '@rneui/themed';
import { useFormik } from 'formik';
import { getAuth, updateEmail, EmailAuthProvider, reauthenticateWithCredential } from 'firebase/auth';
import Toast from 'react-native-toast-message';
import { initialValues, validationSchema } from './ChangeEmailForm.data';
import { styles } from './ChangeEmailForm.styles';

export function ChangeEmailForm(props) {
    const { onClose, onReload } = props;
    const [showPassword, setShowPassword] = useState(false)

    const onShowHidePassword = () => {
        setShowPassword(!showPassword)
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
               await updateEmail(currentUser, formValue.email);

                onReload();
                onClose();
            } catch (error) {
                console.log(error);
                Toast.show({
                    type: 'error',
                    position: 'bottom',
                    text1: 'Error al cambiar el correo electrónico',
                });
            }
        }
    });

    return (
        <View style={styles.container}>
            <Input 
                placeholder="Nuevo correo electrónico" 
                containerStyle={styles.input} 
                rightIcon={{ 
                    type: 'material-community', 
                    name: 'email-outline', 
                    iconStyle: styles.icon,
                    color: '#c2c2c2'
                 }}
                 onChangeText={(text) => formik.setFieldValue('email', text)}
                 errorMessage={formik.errors.email}
                />
            <Input 
                placeholder="Contraseña"
                containerStyle={styles.input}
                secureTextEntry={showPassword ? false : true}
                rightIcon={{ 
                    type: 'material-community', 
                    name: showPassword ? 'eye-off-outline' : 'eye-outline',
                    color: '#c2c2c2',
                    onPress: () => onShowHidePassword()
                 }}
                 onChangeText={(text) => formik.setFieldValue('password', text)}
                 errorMessage={formik.errors.password}
            />
            <Button 
                title="Cambiar correo electrónico"
                containerStyle={styles.btnContainer} 
                buttonStyle={styles.btn} 
                onPress={formik.handleSubmit} 
                loading={formik.isSubmitting}
                />
        </View>
    )
}