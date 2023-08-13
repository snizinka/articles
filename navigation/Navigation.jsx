import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { NavigationContainer } from "@react-navigation/native"
import { HomeScreen } from "../screens/Home"
import { PostScreen } from "../screens/Post"

const Stack = createNativeStackNavigator()

export const Navigation = () => {
    return (
        <NavigationContainer independent={true}>
            <Stack.Navigator>
                <Stack.Screen name='HomeScreen' component={HomeScreen} options={{ title: 'Music' }} />
                <Stack.Screen name='PostScreen' component={PostScreen} options={{ title: 'Song' }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}