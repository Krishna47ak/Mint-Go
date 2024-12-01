import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home';
import Profile from '../screens/Profile';
import Auth from '../screens/Auth';

export default function Root() {
    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator initialRouteName='HomeScreen'>
            <Stack.Screen name="Auth" component={Auth} options={{ headerShown: false }} />
            <Stack.Screen name="HomeScreen" component={Home} options={{ headerShown: false }} />
            <Stack.Screen name="Profile" component={Profile} options={{ headerShown: false }} />
        </Stack.Navigator>
    )
}