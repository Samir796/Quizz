import 'react-native-gesture-handler';
import React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Hi from '../screens/HiScreen/HiScreen';
import Login from '../screens/LoginScreen/LoginScreen';
import SignUp from '../screens/SignUpScreen/SignUpScreen';
import Home from '../screens/HomeScreen/Home';
import ForgotScreen from '../screens/ForgotScreen/ForgotScreen';

const Stack = createStackNavigator();

const Root = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Hi" component={Hi} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Sign Up" component={SignUp} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Forgot" component={ForgotScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Root;
