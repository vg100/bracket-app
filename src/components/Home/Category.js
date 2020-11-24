import React from 'react'
import {Image, View,Text} from "react-native"
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const Category = (props) => {

  console.log(props)
    return (
      <View style={{marginHorizontal:wp('2'),marginTop:hp('2')}}>
      <Image
          source={require('../../assets/images/chef.png')}
            style={{ aspectRatio:1}}
          />
          <Text style={{alignSelf:'center',fontSize:12,marginVertical:hp('0.5')}}>chef</Text>
      </View>
    )
}

export default Category
