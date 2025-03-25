import { StyleSheet, Dimensions } from 'react-native';

const widthScreen = Dimensions.get('window').width;

export const styles = StyleSheet.create({
    container: {
        marginBottom: 20,
    },
    imageStyle: {
        height: 200,
        width: widthScreen,
    }
})