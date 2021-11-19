import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export const WelcomeScreen = () =>(
    <View style={styles.container}>
    <View style={styles.flexOne}>
      <Text style={styles.title}>Welcome to Life Full Of Zest!</Text>
    </View>
    <View style={styles.flexTwo} >
      <Image source={require('../../assets/Life_Full_of_Zest.jpg')} style={{height:'150%', width:'100%'}} />
      {/* <Image source={{uri: 'assets:/Life_Full_of_Zest.jpg'}} style={{height: 400, width: 400}}/> */}
    </View>
    <View style={styles.flexThree} >
      <View style={styles.buttonPadding}>
        <TouchableOpacity key={"Login"} onPress={null} style={styles.button}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonPadding}>
        <TouchableOpacity key={"Create Account"} onPress={null} style={styles.button}>
          <Text style={styles.buttonText}>Create Account</Text>
        </TouchableOpacity>
      </View>
    </View>
  </View>
)

const styles = StyleSheet.create({
    button:{
      alignItems: 'center',
      backgroundColor: '#ff7f50',
      height: 60,
      width: 154,
    },
    buttonPadding:{
      margin: 20,
      marginTop: 150,
    },
    buttonText: {
      alignItems: 'center',
      color: 'white',
      fontSize: 20,
      fontWeight: 'bold',
      padding: 20
    },
    container: {
      backgroundColor: "#ffdab9",
      flex: 1,
      flexDirection: 'column',
      padding: 20
    },
    flexOne:{
      flex: 1,
      marginTop: 20,
    },
    flexTwo: {
      flex: 2,
    },
    flexThree: {
      alignItems: 'center',
      flex: 3,
      flexDirection: 'row',
      justifyContent: 'center',
    },
    title: {
      color: '#ff7f50',
      fontSize: 29,
      fontWeight: 'bold',
      padding: 30,
    },
  });