import React from "react";
import { Text, View, Image, ImageBackground } from "react-native";

const Rating = () => {
  return (
    <ImageBackground
    source={require("../../assets/images/bgractangle.png")}
      style={{
        padding: 20,

        height: 150,
        width: 300,
        alignSelf: "center",
        borderRadius: 20,
      }}
    >
     
      <Image
        source={require("../../assets/images/rating.png")}
        style={{ height: 6, width: 40 }}
      />
      <Text
        style={{
          fontWeight: "bold",
          fontSize: 18,
          margin:10
        }}
      >
        Andrew Hilton
      </Text>
      <Text style={{}}>bla bla blabblabab balab</Text>
    </ImageBackground>
  );
};

export default Rating;
