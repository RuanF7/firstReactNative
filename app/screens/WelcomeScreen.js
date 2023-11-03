import React from 'react';
import { Image, ImageBackground, StyleSheet, View, Text, Button, TouchableOpacity, SafeAreaView } from 'react-native';


import MaterialIcons from 'react-native-vector-icons/MaterialIcons';


function WelcomeScreen(props) {
  return (
    
      <ImageBackground
        style={styles.background}
        source={require("../assets/background_image.jpg")}
      >
        <SafeAreaView style={styles.container}>
          <View style={styles.logoContainer}>
            <Image style={styles.logo} source={require("../assets/react-native-logo.png")} />
            <Text style={styles.firstText}>My first React Native App</Text>
          </View>
          <TouchableOpacity 
            onPress={() => props.navigation.navigate("Home")} style={styles.loginButton}>
            <Text style={styles.loginButtonTitle}>Login</Text>
            <MaterialIcons name="arrow-forward-ios" size={22} color="#fff" />
          </TouchableOpacity>
        </SafeAreaView>
      </ImageBackground>
    
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    width: '100%',
    height: '100%',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  loginButtonTitle: {
    color: "#fff",
    fontWeight: 'bold',
    fontSize: 18,
  },
  loginButton: {
    backgroundColor: "#da4526",
    padding: 20,   
    width: "95%",
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 5,
    marginTop: 620,

  },
  logo: {
    width: 120,
    height: 120,
    marginTop: 20,
  },
  logoContainer: {
    position: 'absolute',
    top: 1,
    alignItems: "center",
    padding: 20,    
    paddingRight: 10,
  },
  firstText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#da4526',
    textShadowColor: '#fff', textShadowOffset: { width: 0.75, height: 0.75 }, textShadowRadius: 1

  },
})

export default WelcomeScreen;
