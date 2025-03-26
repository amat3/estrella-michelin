import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        marginVertical: 10,
        marginHorizontal: 15,
        backgroundColor: '#fff',
    },
    image: {
        width: '100%',
        height: 150,
    },
    infoContent: {
        paddingHorizontal: 20,
        paddingTop: 15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    name: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    description: {
        fontSize: 12,
        color: '#828282',
        paddingHorizontal: 20,
        paddingBottom: 15,
        paddingTop: 5,
    },
    medal: {
        marginRight: 5,
    },
    nameContainer: {
        flexDirection: 'row',
        alignItems: 'center', 
    }
})