import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StackActions } from "@react-navigation/native";
import { AppStack, AuthStacks } from "./Stack";
import { View } from "react-native";
import UploadDoc from "../screens/UploadDoc";
import Register from "../screens/Register";

const Tab = createBottomTabNavigator();

export const TabButtom = () => {
  console.log('taabs');
  // return (
   
  //    <Tab.Navigator>
  //     <Tab.Screen name="Home" component={AppStack} />
  //     <Tab.Screen name="Booking" component={UploadDoc} />
  //     <Tab.Screen name="Profile" component={Register} />
  //   </Tab.Navigator>
   
  // );
};
