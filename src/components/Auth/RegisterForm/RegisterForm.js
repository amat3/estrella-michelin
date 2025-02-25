import React, { useState } from "react";
import { View } from "react-native";
import { Input, Icon, Button } from "@rneui/themed";
import { useFormik } from "formik";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigation } from "@react-navigation/native";
import Toast from 'react-native-toast-message';
import { screen } from "../../../utils";
import { initialValues, validationSchema } from "./RegisterForm.data";
import { styles } from "./RegisterForm.styles";

export function RegisterForm() {
    const [showPassword, setShowPassword] = useState(false)
    const [showRepeatPassword, setShowRepeatPassword] = useState(false)
    const navigation = useNavigation()

    const formik = useFormik({
        initialValues: initialValues(),
        validationSchema: validationSchema(),
        validateOnChange: false,
        onSubmit: async(formValue) => {
            try {
                const auth = getAuth()
                await createUserWithEmailAndPassword(auth, formValue.email, formValue.password)
                navigation.navigate(screen.account.account)
            } catch (error) {
                Toast.show({
                    type: 'error',
                    text1: 'Error al crear tu cuenta, intentalo más tarde',
                    position: 'bottom',
                });
                console.log(error);
            }
        },
    });

    const showHidenPassword = () => {
        setShowPassword(!showPassword)
    }

    const showHidenRepeatPassword = () => {
        setShowRepeatPassword(!showRepeatPassword)
    }

  return (
    <View style={styles.container}>
      <Input 
        placeholder="Correo electrónico" 
        containerStyle={styles.input} 
        rightIcon={<Icon type="material-community" name="email-outline" iconStyle={styles.icon} /> }
        onChangeText={(text) => formik.setFieldValue('email', text)}
        errorMessage={formik.errors.email}
        />

      <Input 
        placeholder="Contraseña" 
        containerStyle={styles.input} 
        secureTextEntry={showPassword ? false : true} 
        rightIcon={
        <Icon 
            type="material-community" 
            name={showPassword ? "eye-off-outline" : "eye-outline"} 
            iconStyle={styles.icon} 
            onPress={showHidenPassword}
            />
        } 
        onChangeText={(text) => formik.setFieldValue('password', text)}
        errorMessage={formik.errors.password}
        />

      <Input 
        placeholder="Repetir contraseña"  
        containerStyle={styles.input} 
         name={showRepeatPassword ? "eye-off-outline" : "eye-outline"}
        secureTextEntry={showRepeatPassword ? false : true} 
        rightIcon={
        <Icon 
            type="material-community" 
            name={showRepeatPassword ? "eye-off-outline" : "eye-outline"} 
            iconStyle={styles.icon} 
            onPress={showHidenRepeatPassword}
            />
        } 
        onChangeText={(text) => formik.setFieldValue('repeatPassword', text)}
        errorMessage={formik.errors.repeatPassword}
        />

      <Button 
        title="Unirse" 
        containerStyle={styles.btnContainer} 
        buttonStyle={styles.btn} 
        onPress={formik.handleSubmit} 
        loading={formik.isSubmitting}
        />
    </View>
  );
}

