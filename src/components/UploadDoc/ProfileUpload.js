import React from "react";
import { View, Text, Image, ImageBackground,TouchableOpacity  } from "react-native";
import { Icon } from "react-native-elements";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
const ProfileUpload = (props) => {
  return (
<View style={{marginTop:hp('5%'),backgroundColor:'white'}}>
      <Text style={{fontWeight:'bold'}}>
        PROFILE
      </Text>
      <View
        style={{
          backgroundColor: "white",
          elevation:3,
          paddingHorizontal:wp('4%'),
          paddingVertical:hp('0.5%'),
          
          borderRadius: 10,
          flexDirection: "row",
          marginTop:hp('2%'),
         
        }}
      >
        <View
          style={{
            elevation:1,
            backgroundColor: "white",
            flexDirection:'row',
          borderRadius:50,
            
            alignSelf: "center",
          }}
        >
          <ImageBackground
            source={require("../../assets/drawable-mdpi/google.png")}
            style={{ height: hp('4%'), width: wp('6.5%'), marginHorizontal:wp('4%'),marginVertical:wp('4%')}}
          >
            
        {/* <Text style={{}}>helo</Text> */}
          </ImageBackground>
        </View>

        <View style={{marginVertical:hp('4%'), marginHorizontal:wp('2%')}}>
          <Text>Gooogle LLC</Text>
          <Text>JPG, GIF or PNG</Text>
        </View>

  {
    props.profileFile === null ?(
      <TouchableOpacity onPress={props.onPress}>
    <View
      style={{
      
        borderStyle: "dashed",
        borderColor: "#EF8666",
        borderWidth: 1.5,
      paddingHorizontal:wp('4%'),
      paddingVertical:wp('2%'), 
        marginVertical:hp('5%'),
        marginHorizontal:wp('4%'),
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#ffefd5',
        borderRadius:5
      }}
    >
      <Text style={{alignSelf:"center" , color:"#EF8666"}}>Upload</Text>
    </View>
    </TouchableOpacity>
    ):(
      <View style={{marginVertical:28,marginHorizontal:15}}>

<Image style={{height:45,width:45}} source={{uri:'https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Yes_Check_Circle.svg/1024px-Yes_Check_Circle.svg.png'}}/>


      </View>
      
    )
  }
        
         
      </View>
      
    </View>
  );
};

export default ProfileUpload;
