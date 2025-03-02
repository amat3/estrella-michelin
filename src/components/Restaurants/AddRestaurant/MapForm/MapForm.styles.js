import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        marginHorizontal: 10,
    },
    mapStyle: {
        height: 550,
        width: '100%',
    },
    mapActions: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
    },
    btnMapContainerSave: {
        paddingRight: 5,
        width: '50%',
    },
    btnMapSave: {
        backgroundColor: '#00a680',
    },
    btnMapContainerCancel: {
        paddingLeft: 5,
        width: '50%',
    },
    btnMapCancel: {
        backgroundColor: '#a60d0d',
    }
})