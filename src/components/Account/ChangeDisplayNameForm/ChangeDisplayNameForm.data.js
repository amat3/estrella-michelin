import * as yup from 'yup';

export function initialValues() {
    return {
        displayName: '',
    }
}

export function validationSchema() {
    return yup.object({
        displayName: yup.string().required('Nombre y apellidos son campos obligatorios'),
    })
}