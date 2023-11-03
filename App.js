import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import WelcomeScreen from './app/screens/WelcomeScreen';
import SecondScreen from './app/screens/SecondScreen';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();

export default function App() {
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen component={WelcomeScreen} name="Welcome Screen" />
        <Stack.Screen component={SecondScreen} name="Home2" />
        <Stack.Screen component={Home} name="Home" />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


const Home = () => {
  return(
    <View>
      <Text>Home Screen</Text>
    </View>
  )
}

