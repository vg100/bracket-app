/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {Animated,View,Text,TouchableOpacity} from 'react-native'
import { Navigator } from "./navigation/Navigator";
import { Provider } from "react-redux";
import { StoreProvider } from 'easy-peasy'
import {store} from './store'
import AsyncStorage from '@react-native-async-storage/async-storage';
// import NetInfo from "@react-native-community/netinfo";
import { AsyncStorageService } from './services/AsyncStorage';

console.log(store.getState())




// const CheckConnectivity = () => {
//   // For Android devices
//   if (Platform.OS === "android") {

//     NetInfo.fetch().then(isConnected => {
//       if (isConnected) {
//         alert("You are online!");
//       } else {
//         alert("You are offline!");
//       }
//     });
//   } else {
//     // For iOS devices
//     NetInfo.isConnected.addEventListener(
//       "connectionChange",
//       handleFirstConnectivityChange
//     );
//   }
// };

// const handleFirstConnectivityChange = isConnected => {
//   NetInfo.isConnected.removeEventListener(
//     "connectionChange",
//     this.handleFirstConnectivityChange
//   );

//   if (isConnected === false) {
//     Alert.alert("You are offline!");
//   } else {
//     Alert.alert("You are online!");
//   }
// };

// CheckConnectivity()
// AsyncStorage.setItem('@users', 'vijay').then((res)=>{
//   console.log(res);
// }).catch((err)=>{
//   console.log(err);
// })

// AsyncStorage.getItem('').then((res)=>{
//   console.log(res,'storage1');
// }).catch((err)=>{
//   console.log(err);
// })



AsyncStorageService.getUser().then((data)=>{
  console.log(data,'storage2');
})






export default function App() {

  
  
  return (
    <Provider store={store}>
      {/* <StoreProvider store={store1}> */}
      <Navigator />
      {/* </StoreProvider> */}

  </Provider>
  // <View>
  //   {
  //     _gettoken() !== null ?(
  //       <View><Text>Home</Text>
  //       <TouchableOpacity onPress={_removetoken}>
  //        <Text>logout</Text>
  //       </TouchableOpacity>
  //       </View>
        
  //     ):(
  //       <TouchableOpacity onPress={_savetoken}>
  //  <View>
  //   <Text>LOgin</Text>
  // </View>
  // </TouchableOpacity>
  //     )
  //   }
  //   {

  //   }
  // </View>
  
  
  )

  
}
