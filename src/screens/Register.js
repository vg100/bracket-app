import React, {useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  ScrollView,
  Picker,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';

import { create } from 'apisauce'
import Feather from 'react-native-vector-icons/Feather';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Button} from 'react-native-elements';
import DropDownPicker from 'react-native-dropdown-picker';
import Snackbar from 'react-native-snackbar';
import axios from 'axios';

const Register = (props) => {
  const [selectedcat, setselectedcat] = React.useState('Select....');
  const [companyName, setCompanyName] = React.useState('');
  const [list, setList] = React.useState([]);
  const [email, setEmail] = React.useState('');
  const [companyAndIndustry, setCompanyAndIndustry] = React.useState(null);
  const [phoneNumber, setPhoneNumber] = React.useState(null);
  const [password, setPassword] = React.useState(null);
  const [visiable, setvisiable] = React.useState(true);
const [loading,setloading]=React.useState(false)
 
  useEffect(() => {
    const getList=()=>{
       axios({
              method: 'GET',
              url:
                'http://nb-45-79-246-17.newark.nodebalancer.linode.com/utility/industries',
              headers: {
                'content-type': 'application/json',
              },
            })
              .then((data) => {
                console.log(data,'hjbhj')
                setList(data.data.industries);
                setloading(true)
              })
              .catch((err) => {
                console.log(err);
              });
    }
    getList()
return ()=>{

}
  },[])


  // if(!loading){
  //   return (
  //     <View style={{flex:1}}>
  //       <ActivityIndicator style={{marginTop:10}} color='green' size='large' />
  //     </View>
  //   )
  // }

  const _registerHandler = () => {
    if (
      companyName === '' ||
      email === '' ||
      companyAndIndustry === null ||
      phoneNumber === null ||
      password === null
    ) {
      Snackbar.show({
        text: 'All Details are Required',
        duration: Snackbar.LENGTH_LONG,
        backgroundColor: 'indianred',
      });
    } else {
      var formData = new FormData();
      formData.append('company_name', companyName);
      formData.append('password', password);
      formData.append('company_email', email);
      formData.append('phone_number_1', phoneNumber);
      formData.append('company_industry', companyAndIndustry);
      props.navigation.navigate('uplaoddoc', {formData});
    }
  };

  return (
    <ScrollView style={{backgroundColor: 'white', paddingHorizontal: wp('1%')}}>
    
      <View style={{marginTop: 20}}>
        <View
          style={{
            elevation: 5,
            width: wp('7%'),
            marginLeft: wp('5%'),
            backgroundColor: 'white',
            height: hp('5%'),
            borderRadius: 5,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <TouchableOpacity onPress={() => props.navigation.goBack()}>
            <Image
              source={require('../assets/drawable-mdpi/backarrow.png')}
              style={{height: hp('2%'), width: wp('2%')}}
            />
          </TouchableOpacity>
        </View>
        <View style={{marginHorizontal: wp('5%'), marginTop: hp('1%')}}>
          <Text style={{fontWeight: 'bold', fontSize: wp('7%')}}>
            Register to logo
          </Text>
          <Text style={{fontSize: wp('4%')}}>
            Lets start with creating your acoount.
          </Text>
        </View>

        <View style={{marginHorizontal: wp('5%'), marginVertical: hp('2%')}}>
          <Text style={{fontSize: 14}}>COMPANY NAME</Text>
          <TextInput
            onChangeText={(data) => setCompanyName(data)}
            value={companyName}
            placeholder="Google LLC"
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
        <View style={{marginLeft: 18}}>
          <Text style={{fontSize: 14}}>EMAIL</Text>
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
        {loading && (
 <View style={{margin: 17}}>
 <Text style={{fontSize: 14}}>COMPANY AND INDUSTRY </Text>
 {/* <DropDownPicker
items={[
{label: 'USA', value: 'usa', hidden: true},
{label: 'UK', value: 'uk'},
{label: 'France', value: 'france'},
]}
defaultValue={''}

containerStyle={{height: 40}}
style={{backgroundColor: 'white',}}
itemStyle={{
justifyContent: 'flex-start'
}}
dropDownStyle={{backgroundColor: 'white'}}
onChangeItem={item => setCompanyAndIndustry(item.value)}
/> */}
 <View
   style={{
     marginTop: 5,
     borderColor: 'gray',
     borderWidth: 0.5,
     borderRadius: 5,
     height: hp('7%'),
     width: wp('87.5%'),
   }}>
   <View style={{}}>
     <Picker
       itemStyle={{
         backgroundColor: 'grey',
         color: 'blue',
         
         fontFamily: 'Ebrima',
         fontSize: 17,
       }}
       mode="dialog"
       style={{
         width: '100%',

        
         color: 'black',
         fontSize: 14,
         fontFamily: 'Roboto-Regular',
       }}
       selectedValue={companyAndIndustry}
       onValueChange={(data) => setCompanyAndIndustry(data)}>
       {list &&
         list.map((item, index) => (
           <Picker.Item
             key={index}
             color="black"
             label={item}
             value={item}
             index={index}
           />
         ))}
     </Picker>
   </View>
 </View>
</View>

        )}
       
        <View style={{marginLeft: 18}}>
          <Text style={{fontSize: 14}}>PHONE NUMBER</Text>
          <View style={{flexDirection: 'row', margin: 5}}>
            <View
              style={{
                flexDirection: 'row',
                padding: 5,
                borderColor: 'gray',
                borderWidth: 0.5,
                borderRadius: 5,
                width: wp('20%'),
                height: hp('7%'),
                alignSelf: 'center',
                marginLeft: -5,
              }}>
              <Image
                source={{
                  uri: 'https://pngimg.com/uploads/flags/flags_PNG14592.png',
                }}
                style={{
                  height: 24,
                  width: 32,
                  borderRadius: 5,
                  alignSelf: 'center',
                }}
              />
              <Text style={{fontWeight: 'bold', alignSelf: 'center'}}>+1</Text>
            </View>

            <TextInput
              value={phoneNumber}
              onChangeText={(item) => setPhoneNumber(item)}
              keyboardType="phone-pad"
              placeholder="(+__) 824 454 5548"
              style={{
                padding: 10,
                height: hp('7%'),
                borderColor: 'gray',
                borderWidth: 0.5,
                borderRadius: 5,
                width: wp('63%'),
                marginTop: 4,
                marginLeft: 18,
              }}
            />
          </View>
        </View>

        <View style={{marginLeft: 20, marginTop: 10}}>
          <Text style={{fontSize: 14}}>CREATE PASSWORD</Text>
          <View style={{flexDirection: 'row'}}>
            <TextInput
              value={password}
              secureTextEntry={visiable}
              onChangeText={(item) => setPassword(item)}
              placeholder="*******************"
              style={{
                padding: 10,
                height: hp('7%'),
                borderColor: 'gray',
                borderWidth: 0.5,
                borderRadius: 5,
                width: wp('87%'),
                marginTop: 8,
              }}
            />
            <TouchableOpacity onPress={() => setvisiable(!visiable)}>
              <Image
                source={require('../assets/drawable-mdpi/hidepassword.png')}
                style={{marginTop: 20, marginLeft: -35}}
              />
            </TouchableOpacity>
          </View>
        </View>

        <Button
          onPress={_registerHandler}
          buttonStyle={{
            marginTop: 20,
            backgroundColor: '#6365bf',
            borderRadius: 10,
            alignSelf: 'center',
            paddingHorizontal: 20,
          }}
          title="COUNTINUE"
        />
        <View
          
          style={{flexDirection: 'row', marginTop: 8, alignSelf: 'center'}}>
          <Text>Already have an account.</Text>
          <TouchableOpacity onPress={() => props.navigation.goBack()}>
          <Text style={{color: 'red'}}>LOGIN</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            backgroundColor: 'black',
            marginVertical: 4,
            borderRadius: 10,
            height: 5,
            width: 100,

            alignSelf: 'center',
          }}></View>
      </View>
    </ScrollView>
  );
};

export default Register;
