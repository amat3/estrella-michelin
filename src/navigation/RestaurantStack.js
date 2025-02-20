import { createNativeStackNavigator } from '@react-navigation/native-stack'
import RestaurantsScreen from '../screens/Restaurants/RestaurantsScreen';
import AddRestaurantScreen from '../screens/Restaurants/AddRestaurantScreen';
import { screen } from '../utils';

const Stack = createNativeStackNavigator();

export function RestaurantStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name={screen.restaurants.restaurants} component={RestaurantsScreen} options={{ title: 'Restaurantes' }} />
      <Stack.Screen name={screen.restaurants.AddRestaurant} component={AddRestaurantScreen} options={{ title: 'Nuevo restaurante' }} />
    </Stack.Navigator>
  );
}