import React from 'react';
import { Image, ImageBackground, StyleSheet, View, Text, Button, TouchableOpacity } from 'react-native';

function WelcomeScreen(props) {
  return (  
      <ImageBackground
        style={styles.background}
        source={require("../assets/pexels-elvis-2528116.jpg")}
        >
          <View style={styles.logoContainer}>
            <Image style={styles.logo} source={require("../assets/bird_2.png")} />
            <Text>My first React Native App</Text>
          </View>
          <View style={styles.loginButton}>
            <TouchableOpacity onPress={() => console.log("Image tapped")}>
              <Text style={styles.loginButtonTitle}>Login</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.registerButton}></View>
        </ImageBackground>   
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",

  },
  loginButton: {
    width: "100%",
    height: 70,
    backgroundColor: "#fc5c65",
  },
  loginButtonTitle: {
    color: "#fff",       
    textAlign: "center",
    paddingTop: 25,
    fontFamily: 'Cochin',
  },
  registerButton: {
    width: "100%",
    height: 70,
    backgroundColor: "#4ecdc4",
  },
  logo: {
    width: 100,
    height: 200,
  },
  logoContainer: {
    position: 'absolute',
    top: 10,    
    alignItems: "center",
  },
})

export default WelcomeScreen;