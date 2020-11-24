import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  TextInput,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Geolocation from '@react-native-community/geolocation';
import Geocoder from 'react-native-geocoder';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import {Button} from 'react-native-elements';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
const SearchLocation = (props) => {
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <View style={{backgroundColor: 'white'}}>
        
        <View
          style={{
            height: 280,
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
              latitude: props.route.params.latitude,
              longitude: props.route.params.longitude,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
            onRegionChangeComplete={(data) => {
              // alert(JSON.stringify(data))
              Geocoder.geocodePosition({
                lat: data.latitude,
                lng: data.longitude,
              }).then((res) => {
                // setadd(res)
                //  setaddress(res[2].formattedAddress)
              });
              // setlatitude(data.latitude);
              //             setlongitude(data.longitude);
            }}
            showsCompass={true}
            showsMyLocationButton={true}
            showsUserLocation={true}
            onMapReady={() => {}}
            //   customMapStyle={mapStyle}
          ></MapView>
          {/* <View style={{flex: 1,justifyContent:'center',alignItems:'center',top:-30}}>
        <Text style={{color:'indianred'}}>{"You are here!"}</Text>
      <Image resizeMode="contain" style={{height:55,width:50}} source={require('../assets/images/pin.png')}/>
        </View> */}
        </View>
        <View
          style={{
            position: 'absolute',
            flexDirection: 'row',
            marginTop: hp('2%'),
          }}>
          <TouchableOpacity
            onPress={() => {
              props.navigation.goBack();
            }}>
            <Image
              source={require('../assets/images/cross.png')}
              style={{
                height: hp('15%'),
                width: wp('25%'),
              }}
            />
          </TouchableOpacity>

          <Text
            style={{
              fontWeight: 'bold',
              alignSelf: 'center',
              marginHorizontal: wp('-4'),
              marginTop: hp('-2'),
            }}>
            Search your Location
          </Text>
        </View>
      </View>
      <View
        style={{
          backgroundColor: 'white',
          elevation: 3,
          flex: 1,
          borderTopRightRadius: 10,
          borderTopLeftRadius: 10,
          paddingTop: hp('2'),
          paddingHorizontal: wp('7%'),
        }}>
        <View
          style={{
            elevation: 1,
            paddingHorizontal: wp('2'),

            borderRadius: 7,
          }}>
          <TextInput
            placeholder="Type here "
            style={{color: 'black', marginHorizontal: wp('7')}}
          />

          <Image
            source={require('../assets/drawable-mdpi/search.png')}
            style={{
              aspectRatio: 1,
              position: 'absolute',
              marginVertical: hp('2.8'),
              marginHorizontal: wp('4'),
            }}
          />
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{}}>
            {props.route.params.add.map((data, index) => {
              return (
                <TouchableOpacity
                  key={index}
                  style={{
                    flexDirection: 'row',
                    // backgroundColor: 'red',
                    marginVertical: hp('0.1%'),

                    paddingHorizontal: wp('3%'),
                  }}
                  onPress={() => {
                    props.route.params.onReturn(data.formattedAddress);
                    props.navigation.goBack();

                    // console.log(props.route.params)
                    //
                  }}>
                  <Image
                    source={require('../assets/images/googlemarker.png')}
                    style={{height: hp('9%'), width: wp('6%')}}
                  />

                  <View
                    style={{
                      marginHorizontal: wp('6%'),
                      marginVertical: hp('1%'),
                      justifyContent: 'center',
                    }}>
                    <Text style={{fontSize: 13}}>{data.formattedAddress}</Text>
                  </View>
                </TouchableOpacity>
              );
            })}
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default SearchLocation;
