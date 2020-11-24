import React from 'react'
import { View, Text, Image, ImageBackground } from "react-native";
import { Card, ListItem, Button, Icon, SearchBar } from "react-native-elements";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {FlatListSlider} from 'react-native-flatlist-slider';
const SliderOne = (props) => {
    return (
      <View style={{justifyContent:'center',alignItems:'center',}}>
<View>



<ImageBackground

 source={{uri:props.item.image}}
  style={{ height: hp('21'), width: wp('85')}}
  imageStyle={{ borderRadius: 8}}
>
  <View style={{paddingHorizontal:wp('5'),paddingVertical:hp('1.8')}}>
  <Text
    style={{
     
      backgroundColor: "white",
      width:wp('16'),
      borderRadius: 5,
      height: hp('3.5'),
      paddingHorizontal:wp('1'),
      paddingVertical:wp('0.5'),
      color: "red",
     
    }}
  >
    50% off
  </Text>
  <Text style={{ fontSize: 20, fontWeight: "bold", }}>
    Sanitizer
  </Text>
  <Text style={{ fontSize: 12, }}>
    on prepaid bookings.
  </Text>
  <Button
    buttonStyle={{
      marginTop: hp('1'),
      backgroundColor: "#00008b",
      borderRadius: 10,
     
      
      width: 100,
      height: 30,
    }}
    title={props.item.button}
  />
  </View>
  
</ImageBackground>
</View>
</View>
)
    
        
}

export default SliderOne
