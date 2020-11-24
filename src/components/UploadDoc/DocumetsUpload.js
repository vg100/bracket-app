import React from "react";
import { View, Text, Image, Button, ImageBackground } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
const DocumetsUpload = (props) => {
  return (
    <View>
      <Text style={{ marginTop: 15, fontSize: 12, fontWeight: "bold" }}>
        DOCUMETS
      </Text>
      <View
        style={{
          elevation:3,
          backgroundColor: "white",
          justifyContent:'center',alignContent:'center',
          borderRadius: 10,
          
          flexDirection: "row",
          marginTop: hp('1.5%'),
        }}
      >
        <View style={{padding:wp('5%'),}}>
        <Text  style={{ fontWeight: "bold", fontSize: 12, }}>COMPANY PANCARD</Text>
        {
          props.panFile === null ?(<TouchableOpacity onPress={props.pan}>
            <View
              style={{
                backgroundColor:'red',
               
              
                borderStyle: "dashed",
                borderColor: "#EF8666",
                borderWidth: 1.5,
                backgroundColor:'#ffefd5',
               paddingHorizontal:wp('25%'),
               paddingVertical:wp('4%'),
               marginVertical:wp('2%'),
               
               
                borderRadius:5
              }}
            >
               <Text style={{alignSelf:"center" , color:"#EF8666"}}>Upload</Text>
            </View>
            </TouchableOpacity>):(
               <View style={{marginVertical:20,alignSelf:'center',marginHorizontal:90}}>

               <Image style={{height:40,width:40}} source={{uri:'https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Yes_Check_Circle.svg/1024px-Yes_Check_Circle.svg.png'}}/>
               
               
                     </View>
            )
        }
      
          <Text  style={{ fontWeight: "bold", fontSize: 12}}>GST</Text>
          {
          props.gstFile === null ?(
          <TouchableOpacity onPress={props.gst}>
          <View
            style={{
              alignSelf: "center",
              justifyContent: "center",
              borderStyle: "dashed",
              borderColor: "#EF8666",
              borderWidth: 1.5,
              backgroundColor:'#ffefd5',
             paddingHorizontal:wp('25%'),
             paddingVertical:wp('4%'),
             marginVertical:wp('2%'),
             borderRadius:5
            }}
          >
            <Text style={{alignSelf:"center" , color:"#EF8666"}}>Upload</Text>
          </View>
        </TouchableOpacity>
          ):(
            <View style={{alignSelf:'center'}}>

            <Image style={{height:40,width:40}} source={{uri:'https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Yes_Check_Circle.svg/1024px-Yes_Check_Circle.svg.png'}}/>
            
            
                  </View>
          )
}
        </View>
      </View>

      
    </View>
  );
};

export default DocumetsUpload;
