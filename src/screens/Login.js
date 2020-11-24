import React from 'react';
import {View, Text, TextInput, ActivityIndicator} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {useDispatch, useSelector} from 'react-redux';
import {login} from '../store/auth';
import Snackbar from 'react-native-snackbar';
export const Login = (props) => {
  const dispatch = useDispatch();
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [loading,setloading]=React.useState(false)
  const _login = (props) => {
    if(email !=='' || password !== ''){
     
      dispatch(login(email, password))
      setloading(true)
    
      
    }else{
      Snackbar.show({
        text: 'All Details are Required',
        duration: Snackbar.LENGTH_LONG,
        backgroundColor: 'indianred',
      });
    }
   
  };




  return (
    <View style={{flex: 1,backgroundColor:'white', justifyContent: 'center', alignItems: 'center'}}>
      <View style={{}}>
        <Text style={{fontSize: 14}}> Comapny EMAIL</Text>
        <TextInput
          value={email}
          onChangeText={(data) => setEmail(data)}
          placeholder="yep@google.com"
          keyboardType="email-address"
          style={{
            padding: 10,
            height: hp('7%'),
            borderColor: 'gray',
            borderWidth: 0.5,
            borderRadius: 5,
            width: wp('87.5%'),
            marginTop: 8,
          }}
        />
      </View>
      <View style={{}}>
        <Text style={{fontSize: 14}}>Password</Text>
        <TextInput
          value={password}
          onChangeText={(data) => setPassword(data)}
          placeholder="yep@google.com"
          keyboardType="email-address"
          style={{
            padding: 10,
            height: hp('7%'),
            borderColor: 'gray',
            borderWidth: 0.5,
            borderRadius: 5,
            width: wp('87.5%'),
            marginTop: 8,
          }}
        />
        <TouchableOpacity
          onPress={_login}
          style={{
            width: 250,
            elevation:1,
            borderRadius:2,
            padding:10,
            backgroundColor: 'indianred',
            alignSelf: 'center',
            marginHorizontal: 20,
            marginVertical:8,
            justifyContent: 'center',
          }}>
            {
              loading ? (<ActivityIndicator size='small' color='black' />):(<Text style={{alignSelf:'center'}}>Login</Text>)

            }
         
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => props.navigation.navigate('register')}
          style={{
            width: 250,
            elevation:1,
            borderRadius:2,
            padding: 10,
            alignSelf: 'center',
            marginHorizontal: 20,
            justifyContent: 'center',
          }}>
          <Text style={{alignSelf:'center'}}>register</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
