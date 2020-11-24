import React from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  ImageBackground,
  TouchableOpacity,
  Platform,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import DocumetsUpload from '../components/UploadDoc/DocumetsUpload';
import ProfileUpload from '../components/UploadDoc/ProfileUpload';
import DocumentPicker from 'react-native-document-picker';
const UploadDoc = (props) => {
  const [profileFile, setProfileFile] = React.useState(null);
  const [panFile, setPanFile] = React.useState(null);
  const [gstFile, setGstFile] = React.useState(null);
  var {formData} = props.route.params;

  // const base64 = (file) => {
  //   console.log(file);
  //   return new Promise((resolve, reject) => {
  //     const fileReader = new FileReader();

  //     fileReader.readAsDataURL(file);
  //     fileReader.onload = () => {
  //       resolve(fileReader.result);
  //     };
  //     fileReader.onerror = (err) => {
  //       reject(err);
  //     };
  //   });
  // };

  const select_document = async (cb) => {
    try {
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.allFiles],
      });

      cb(res);
    } catch (err) {
      cb(null);

      if (DocumentPicker.isCancel(err)) {
        alert('Canceled');
      } else {
        alert('Unknown Error: ' + JSON.stringify(err));
        throw err;
      }
    }
  };
  const selectProfile = async () => {
    select_document(setProfileFile);
  };

  const selectPanCard = async () => {
    select_document(setPanFile);
  };

  const selectGst = async () => {
    select_document(setGstFile);
  };

  const continuehandler = async () => {
    if (profileFile || panFile || gstFile) {
      if (profileFile) {
        formData.append('profile', profileFile);
      }
      if (panFile) {
        formData.append('pan', panFile);
      }
      if (gstFile) {
        formData.append('gst', gstFile);
      }
    }
    props.navigation.navigate('addlocation', {formData});
  };

  const skiphandler = () => {
    props.navigation.navigate('addlocation', {formData});
  };
  return (
    <ScrollView>
      <View style={{flex: 1, backgroundColor: 'white'}}>
        <View
          style={{
            elevation: 3,
            paddingHorizontal: wp('8%px'),
            paddingTop: wp('10%'),
            levation: 4,
            backgroundColor: 'white',
            height: wp('57%'),
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
                style={{height: 11, width: 5}}
              />
            </TouchableOpacity>
          </View>
          <View style={{marginTop: hp('4%')}}>
            <Text style={{fontSize: 11}}>STEP 1 OF 2</Text>
            <Text style={{fontWeight: 'bold', fontSize: 16, marginTop: 10}}>
              Upload Docs
            </Text>
            <Text style={{fontSize: 12}}>.jpg .docx .pdf or png</Text>

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
                  width: wp('30%'),
                  borderRadius: 100,
                  backgroundColor: 'white',
                }}></View>
            </ImageBackground>
          </View>
        </View>
        <View style={{paddingHorizontal: wp('8%')}}>
          <ProfileUpload onPress={selectProfile} profileFile={profileFile} />

          <DocumetsUpload
            pan={selectPanCard}
            gst={selectGst}
            navigation={props.navigation}
            panFile={panFile}
            gstFile={gstFile}
          />
        </View>
        <TouchableOpacity
          onPress={profileFile ? continuehandler : skiphandler}
          style={{alignSelf: 'center', marginTop: hp('5%')}}>
          <Text style={{fontSize: wp('5%'), fontWeight: 'bold'}}>
            {profileFile ? 'CONTINUE' : 'SKIP FOR NOW'}
          </Text>
        </TouchableOpacity>

        <View
          style={{
            backgroundColor: 'black',

            borderRadius: 10,
            height: hp('0.6%'),
            width: wp('20%'),
            marginVertical: hp('0.9%'),

            alignSelf: 'center',
          }}></View>
      </View>
    </ScrollView>
  );
};

export default UploadDoc;
