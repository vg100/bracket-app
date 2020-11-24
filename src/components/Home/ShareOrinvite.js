import React from "react";
import { View, Text, ImageBackground, Image } from "react-native";
import { Button } from "react-native-elements";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
const ShareOrinvite = () => {
  return (
    <View style={{paddingHorizontal:wp(2.5),paddingVertical:hp(2)}}>
      <ImageBackground
        source={require("../../assets/drawable-mdpi/Rectangle-26.png")}
        style={{}}
        imageStyle={{ borderRadius: 8 }}
      >
        <View style={{}}>
          <View style={{paddingHorizontal:wp(6),paddingVertical:hp(3),flexDirection:'row'}}>
            <View>
            <Text style={{ fontWeight: "bold", fontSize: 20 }}>
          Invite Your Friends
        </Text>
        <Text style={{ }}>
          Get existing order after each friends{" "}
        </Text>
        <Text style={{  }}>first order</Text>
        <View style={{flexDirection:"row" }} >
          <Button
            buttonStyle={{
              marginTop: hp(2),
              backgroundColor: "#00008b",
              borderRadius: 10,
              
              
              width: wp(25),
              height: hp(7),
            }}
            title="Share"
          />
         
        </View>
            </View>
            <Image

            source={require("../../assets/images/profile.png")}
            style={{ height: hp(15.5), width: wp(28) ,marginTop:hp(7) }}
          />
        
        
        </View>
        </View>
      
      </ImageBackground>
    </View>
  );
};

export default ShareOrinvite;
