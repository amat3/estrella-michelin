import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { AddRestaurantScreen } from '../screens/Restaurants/AddRestaurantScreen/AddRestaurantScreen';
import { RestaurantsScreen } from '../screens/Restaurants/RestaurantsScreen';
import { screen } from '../utils';

const Stack = createNativeStackNavigator();

export function RestaurantStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name={screen.restaurant.restaurants} component={RestaurantsScreen} options={{ title: 'Restaurantes' }} />
      <Stack.Screen name={screen.restaurant.AddRestaurant} component={AddRestaurantScreen} options={{ title: 'Nuevo restaurante' }} />
    </Stack.Navigator>
  );
}