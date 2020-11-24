import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {View,ActivityIndicator} from 'react-native'
import {AuthStacks, AppStack} from './Stack';
import {useDispatch, useSelector} from 'react-redux';
import { AsyncStorageService } from '../services/AsyncStorage';

export const Navigator = (props) => {
  const user = useSelector((state) => state.auth.isLoggedIn);
  // const users = useSelector((state) => state.auth.user);

const [isLoggedIn,setisLoggedIn]=React.useState(false)
async function getSate(){
  const usesr=await AsyncStorageService.getUser()
  setisLoggedIn(usesr?true:false)
}
React.useEffect( async()=>{
  getSate()

},[])

// if(!user || !isLoggedIn){
//   return (
//     <View style={{flex:1}}>
//  <ActivityIndicator size='large' color="red"/>
//     </View>
//   )
// }

  return (

    <NavigationContainer>
      {user || isLoggedIn?AppStack():AuthStacks() }
    </NavigationContainer>
  );
};
