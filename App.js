import WelcomeScreen from './app/screens/WelcomeScreen';
import SecondScreen from './app/screens/SecondScreen';

import { NavigationContainer } from '@react-navigation/native';
 import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();


function App() {
  return (
    <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen name='WelcomeScreen' component={WelcomeScreen} />
        <Stack.Screen name='SecondScreen' component={SecondScreen} />
        </Stack.Navigator>
    </NavigationContainer>
    );
}

export default App;
