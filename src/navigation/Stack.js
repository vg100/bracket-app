import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import Register from '../screens/Register';
import Home from '../screens/Home';
import UploadDoc from '../screens/UploadDoc';
import AddLocation from '../screens/AddLocation';
import SearchLocation from '../screens/SearchLocation';
import {Login} from '../screens/Login';

const Stack = createStackNavigator();

export const AuthStacks = (props) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="login" component={Login} />
      <Stack.Screen name="register" component={Register} />
      <Stack.Screen name="uplaoddoc" component={UploadDoc} />
      <Stack.Screen name="addlocation" component={AddLocation} />
      <Stack.Screen name="searchlocation" component={SearchLocation} />
    </Stack.Navigator>
  );
};

export const AppStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="home" component={Home} />
    </Stack.Navigator>
  );
};

