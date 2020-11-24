import React from 'react';
import {
  Image,
  ImageBackground,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import Snackbar from 'react-native-snackbar';
import {Button} from 'react-native-elements';
import Geolocation from '@react-native-community/geolocation';
import Geocoder from 'react-native-geocoder';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import {register} from '../store/auth';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
const AddLocation = (props) => {
  const dispatch = useDispatch();
  const {formData} = props.route.params;
  const [latitude, setlatitude] = React.useState(37.78825);
  const [longitude, setlongitude] = React.useState(-122.4324);
  const [address, setaddress] = React.useState('');
  const [add, setadd] = React.useState('');
  const [city, setcity] = React.useState('');
  const [state, setstate] = React.useState('');
console.log(formData)
  const getlocation = () => {
    return new Promise((resolve, reject) => {
      Geolocation.getCurrentPosition((info) => {
        if (info) {
          setlatitude(info.coords.latitude);
          setlongitude(info.coords.longitude);
          resolve();
        } else {
          reject();
        }
      });
    });
  };

  React.useEffect(() => {
    getlocation()
      .then()
      .catch(() => {
        console.log('got some error');
      });
  }, []);

  function goToHome() {
    formData.append('address_1', address);
    formData.append('city', city);
    formData.append('state', state);
    formData.append('zipcode', '147201');
    dispatch(register(formData))
      .then((data) => {
          props.navigation.navigate('login');
      })
      .catch((err) => {
        Snackbar.show({
          text: 'SomeThing went wrong! Please Try Again!',
          duration: Snackbar.LENGTH_LONG,
          backgroundColor: 'indianred',
        });
      });
  }

  return (
    <ScrollView style={{flex: 1}}>
      <View style={{flex: 1, backgroundColor: 'white'}}>
        <View
          style={{
            elevation: 3,
            paddingHorizontal: wp('8%px'),
            paddingTop: hp('5%'),
            levation: 4,
            backgroundColor: 'white',
            height: hp('29%'),
            borderBottomStartRadius: 15,
            borderBottomEndRadius: 15,
          }}>
          <View
            style={{
              elevation: 5,
              width: wp('7%'),
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
          <View style={{marginTop: hp('4%')}}>
            <Text style={{fontSize: 11}}>STEP 2 OF 2</Text>
            <Text
              style={{fontWeight: 'bold', fontSize: 16, marginTop: hp('1%')}}>
              Add Location
            </Text>

            <ImageBackground
              source={require('../assets/drawable-mdpi/Rectangle-12.png')}
              style={{
                height: hp('4%'),
                width: wp('90%'),
                marginTop: 10,
                alignSelf: 'center',
                justifyContent: 'center',
                paddingHorizontal: wp('4%'),
              }}
              imageStyle={{borderRadius: 10}}>
              <View
                style={{
                  height: hp('1.5%'),
                  width: wp('86%'),
                  borderRadius: 100,
                  backgroundColor: 'white',
                  alignSelf: 'center',
                }}></View>
            </ImageBackground>
          </View>
        </View>
        <View
          style={{
            height: 235,
            width: '100%',
          }}>
          <MapView
            provider={PROVIDER_GOOGLE}
            style={{
              position: 'absolute',
              top: -8,
              left: 0,
              right: 0,

              bottom: -8,
              margin: 0.3,
            }}
            zoomEnabled={true}
            initialRegion={{
              latitude: latitude,
              longitude: longitude,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
            onRegionChangeComplete={(data) => {
              Geocoder.geocodePosition({
                lat: data.latitude,
                lng: data.longitude,
              }).then((res) => {
                console.log(res);
                setadd(res);
                setaddress(res[2].formattedAddress);
                setcity(res[2].subAdminArea);
                setstate(res[2].adminArea);
              });
            }}
            showsCompass={true}
            showsMyLocationButton={true}
            showsUserLocation={true}
            onMapReady={() => {}}
            //   customMapStyle={mapStyle}
          ></MapView>
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              top: -30,
            }}>
            <Text style={{color: 'indianred'}}>{'You are here!'}</Text>
            <Image
              resizeMode="contain"
              style={{height: 55, width: 50}}
              source={require('../assets/images/pin.png')}
            />
          </View>
        </View>
        <View style={{}}>
          <View
            style={{
              elevation: 4,
              backgroundColor: 'white',
              borderTopStartRadius: 15,
              borderTopEndRadius: 15,
              flex: 1,
            }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingTop: 20,
                paddingHorizontal: 20,
              }}>
              <Text style={{fontWeight: 'bold', fontSize: 14}}>
                SET YOUR LOCATION
              </Text>
              <TouchableOpacity
                onPress={() =>
                  props.navigation.navigate('searchlocation', {
                    add,
                    latitude,
                    longitude,
                    onReturn: (item) => {
                      setaddress(item);
                    },
                  })
                }>
                <Text style={{color: 'orange', fontWeight: 'bold'}}>
                  CHANGE
                </Text>
              </TouchableOpacity>
            </View>
            <View style={{paddingHorizontal: 20}}>
              <View
                style={{
                  flexDirection: 'row',
                  backgroundColor: 'white',
                  marginTop: hp('1%'),
                  borderRadius: 10,
                  paddingHorizontal: wp('3%'),
                  borderWidth: 1,
                }}>
                <View>
                  <Image
                    source={require('../assets/images/googlemarker.png')}
                    style={{height: hp('9%'), width: wp('6%')}}
                  />
                </View>

                <View
                  style={{
                    marginHorizontal: wp('6%'),
                    justifyContent: 'center',
                  }}>
                  <Text>{address}</Text>
                </View>
              </View>
            </View>
            <Button
              buttonStyle={{
                marginTop: hp('4%'),
                backgroundColor: '#6365bf',
                borderRadius: 5,
                alignSelf: 'center',
                paddingHorizontal: wp('33%'),
              }}
              title="COUNTINUE"
              onPress={goToHome}
            />
            <View
              style={{
                backgroundColor: 'black',
                marginHorizontal: wp('3%'),
                borderRadius: 10,
                marginVertical: wp('3%'),
                height: hp('1%'),
                width: wp('40%'),
                alignSelf: 'center',
              }}></View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default AddLocation;
