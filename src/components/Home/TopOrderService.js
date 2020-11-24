import React from "react";
import { View, Text, ImageBackground, Image } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
const TopOrderService = (props) => {
  return (
    <View>
      <ImageBackground
        source={{uri:props.item.image}}
        style={{ height: hp(28), width: wp(85), marginHorizontal: 10 }}
        imageStyle={{ borderRadius: 6 }}
      >
        <View style={{paddingVertical:hp(2),paddingHorizontal:wp(3),backgroundColor:'rgba(0,0,0,0.4)',}}>
        <View style={{ paddingHorizontal:wp(2),paddingVertical:hp(0.5),alignSelf:'flex-end', backgroundColor:"white",  borderRadius:8, }}>
          
          <Text style={{color:"#A4C38A"}}>2.5k plus Order </Text>
        </View>
        <View style={{marginTop:hp(12)}}>
  <Text style={{ fontSize: 24 ,color: "white", fontWeight: "bold"}} >{props.item.name}</Text>
        <Text style={{color:"white" }} >  Order accoroding to your locality.</Text>  
        </View>
        </View>
        
       
      </ImageBackground>
    </View>
  );
};

export default TopOrderService;
