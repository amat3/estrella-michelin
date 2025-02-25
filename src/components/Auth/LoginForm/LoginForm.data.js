import * as Yup from "yup"

export function initialValues() {
    return {
        email: '',
        password: '',
    }
}

export function validationSchema() {
    return Yup.object({
        email: Yup.string().email('El correo no es válido').required('El email es obligatorio'),
        password: Yup.string().min(6, 'La contraseña debe tener al menos 6 caracteres').required('La contraseña es obligatoria'),
    })
}