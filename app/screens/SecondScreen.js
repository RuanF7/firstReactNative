import React from 'react'
import { View, Text, Button } from 'react-native';


export default function SecondScreens({navigation}) {
  return (
      <View>
        <Text>Hello World!</Text>
        <Button title='Ir para WelcomeScreen' onPress={() => navigation.navigate('WelcomeScreen')} />
      </View>
  )
};




