import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home';

export default function Root() {
    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator initialRouteName='HomeScreen'>
            <Stack.Screen name="HomeScreen" component={Home} options={{ headerShown: false }} />
        </Stack.Navigator>
    )
}