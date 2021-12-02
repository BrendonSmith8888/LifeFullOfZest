import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

function WelcomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.flexOne}>
        <Text style={styles.title}>Welcome to Life Full Of Zest!</Text>
      </View>
      <View style={styles.flexTwo}>
        <Image
          source={require("./assets/Life_Full_of_Zest.jpg")}
          style={{ height: "150%", width: "100%" }}
        />
        {/* <Image source={{uri: 'assets:/Life_Full_of_Zest.jpg'}} style={{height: 400, width: 400}}/> */}
      </View>
      <View style={styles.flexThree}>
        <View style={styles.buttonPadding}>
          <TouchableOpacity
            title={"Login"}
            onPress={() => navigation.navigate("Login")}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonPadding}>
          <TouchableOpacity
            title={"Create Account"}
            onPress={() => navigation.navigate("Create Account")}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Create Account</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <View style={styles.container}>
      <View style={styles.flexOne}>
        <Text style={styles.title}>Login</Text>
      </View>
      <View style={styles.flexTwo}>
        <SafeAreaView>
          <TextInput
            autoCapitalize="none"
            backgroundColor="white"
            label="Email"
            onChangeText={(u)=>setEmail(u)}
            placeholder="Insert Email Address"
            style={styles.insertUserText}
            textContentType="emailAddress"
            value={email}
          />
          <TextInput
            autoCapitalize="none"
            backgroundColor="white"
            label="Password"
            onChangeText={(p)=>setPassword(p)}
            placeholder="Insert Password"
            secureTextEntry
            style={styles.insertUserText}
            textContentType="password"
            value={password}
          />
        </SafeAreaView>
      </View>
      <View style={styles.flexThree}>
        <View style={styles.buttonPadding}>
          <TouchableOpacity
            title={"Home"}
            onPress={() => navigation.navigate("Home")}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonPadding}>
          <TouchableOpacity
            title={"Welcome"}
            onPress={() => navigation.navigate("Welcome")}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Back</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

function CreateAccountScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  return (
    <View style={styles.container}>
      <View style={styles.flexOne}>
        <Text style={styles.title}>Login</Text>
      </View>
      <View style={styles.flexTwo}>
        <SafeAreaView>
          <TextInput
            autoCapitalize="none"
            backgroundColor="white"
            label="Email"
            onChangeText={(u)=>setEmail(u)}
            placeholder="Insert Email Address"
            style={styles.insertUserText}
            textContentType="emailAddress"
            value={email}
          />
          <TextInput
            autoCapitalize="none"
            backgroundColor="white"
            label="Password"
            onChangeText={(p)=>setPassword(p)}
            placeholder="Insert Password"
            secureTextEntry
            style={styles.insertUserText}
            textContentType="password"
            value={password}
          />
          <TextInput
            autoCapitalize="none"
            backgroundColor="white"
            label="Repeat Password"
            onChangeText={(p)=>setRepeatPassword(p)}
            placeholder="Repeat Password"
            secureTextEntry
            style={styles.insertUserText}
            textContentType="password"
            value={repeatPassword}
          />
        </SafeAreaView>
      </View>
      <View style={styles.flexThree}>
        <View style={styles.buttonPadding}>
          <TouchableOpacity
            title={"Home"}
            onPress={() => navigation.navigate("Home")}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Create Account</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonPadding}>
          <TouchableOpacity
            title={"Welcome"}
            onPress={() => navigation.navigate("Welcome")}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Back</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.flexOne}>
        <Text style={styles.title}>Home</Text>
      </View>
      <TouchableOpacity
        title={"Welcome"}
        onPress={() => navigation.navigate("Welcome")}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Log Out</Text>
      </TouchableOpacity>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Welcome"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Create Account" component={CreateAccountScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    backgroundColor: "#ff7f50",
    height: 60,
    width: 154,
  },
  buttonPadding: {
    margin: 20,
    marginTop: 150,
  },
  buttonText: {
    alignItems: "center",
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    padding: 20,
  },
  container: {
    backgroundColor: "#ffdab9",
    flex: 1,
    flexDirection: "column",
    padding: 20,
  },
  flexOne: {
    alignItems: "center",
    flex: 1,
    marginTop: 20,
  },
  flexTwo: {
    alignItems: "center",
    flex: 2,
  },
  flexThree: {
    alignItems: "center",
    flex: 3,
    flexDirection: "row",
    justifyContent: "center",
  },
  insertUserText: {
    color: "black",
    fontSize: 17,
    fontWeight: "bold",
    height: 50,
    margin: 20,
    padding: 10,
    width: 150,
  },
  title: {
    color: "#ff7f50",
    fontSize: 29,
    fontWeight: "bold",
    padding: 30,
  },
});

export default App;
