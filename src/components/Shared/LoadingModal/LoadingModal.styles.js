import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  overlay: {
    height: 100,
    width: 250,
    backgroundColor: "#fff",
    borderColor: "#00a680",
    borderWidth: 2,
    borderRadius: 10,
  },
  view: {
     flex: 1,
     justifyContent: 'center',
     alignItems: 'center',
   },
   text: {
    fontSize: 20,
    color: '#00a680',
    fontWeight: 'semibold',
    marginTop: 10,
  },
}
);