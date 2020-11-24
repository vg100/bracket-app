import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  View,
  Text,
  Image,
  ImageBackground,
  FlatList,
  Alert,
} from 'react-native';
import {
  Card,
  ListItem,
  Button,
  Icon,
  SearchBar,
  Rating as Rate,
  AirbnbRating,
} from 'react-native-elements';
import {
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native-gesture-handler';
import Category from '../components/Home/Category';
import {useDispatch, useSelector} from 'react-redux';
import Rating from '../components/Home/Rating';
import ShareOrinvite from '../components/Home/ShareOrinvite';
import SliderOne from '../components/Home/SliderOne';
import TopOrderService from '../components/Home/TopOrderService';
import {FlatListSlider} from 'react-native-flatlist-slider';
import Carousel from 'react-native-snap-carousel';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Axios from 'axios';
import {logout} from '../store/auth';
import {Navigator} from '../navigation/Navigator';
import { useStoreState } from 'easy-peasy';

const Home = (props) => {
  

  const dispatch = useDispatch();
  const [header, setheader] = React.useState([]);
  const [category, setcategory] = React.useState([]);
  const [review, setreview] = React.useState([]);

  React.useEffect(() => {
    Axios({
      url:
        'http://nb-45-79-246-17.newark.nodebalancer.linode.com/utility/landing',
      method: 'GET',
    }).then((data) => {
      setheader(data.data.header);
      setcategory(data.data.services);
      setreview(data.data.review);
    });
  }, []);

  const _logout = () => {
    dispatch(logout());
  };



  return (
    <>
      <TouchableOpacity onPress={_logout}>
        <Text>LogOUT</Text>
      </TouchableOpacity>
      <ScrollView style={{flex: 1, backgroundColor: '#4b439b'}}>
        <View
          style={{
            paddingHorizontal: wp('5%'),
            paddingVertical: hp('6%'),
          }}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={{fontSize: 16, color: 'white'}}>LOGO</Text>

            <View
              style={{
                elevation: 1,
                backgroundColor: 'white',
                paddingHorizontal: wp('1'),
                paddingVertical: hp('0.5'),
                borderRadius: 8,
              }}>
              <Image
                source={require('../assets/drawable-mdpi/google.png')}
                style={{aspectRatio: 1}}
              />
            </View>
          </View>
          <View style={{}}>
            <Text style={{fontSize: 20, color: 'white'}}>Find the</Text>
            <Text style={{fontSize: 20, color: 'white'}}>
              bet service you need.
            </Text>
          </View>
          <View
            style={{
              marginTop: hp('3'),
              height: 40,
              elevation: 2,
              backgroundColor: '#5D56A5',

              justifyContent: 'center',
              borderRadius: 5,
            }}>
            <TextInput
              placeholder="Search for Services.."
              placeholderTextColor="white"
              style={{marginLeft: wp('10'), color: 'white'}}
            />
            <Image
              source={require('../assets/drawable-mdpi/search.png')}
              style={{
                height: hp('3'),
                width: wp('5'),
                position: 'absolute',

                marginHorizontal: wp('4'),
              }}
            />
          </View>
        </View>

        <View
          style={{
            flex: 1,
            backgroundColor: 'white',
            elevation: 1,
            borderTopEndRadius: 10,
            borderTopStartRadius: 10,
          }}>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              paddingVertical: hp('4'),
            }}>
            <Carousel
              // ref={(c) => {
              //   _carousel = c;
              // }}
              data={[...header,...header]}
              renderItem={({item}) => {
                return <SliderOne item={item} />;
              }}
              sliderWidth={360}
              itemWidth={300}
              layout={'default'}
              firstItem={1}
            />
          </View>

          <View
            className={'category'}
            style={{
              flexDirection: 'row',
              marginHorizontal: wp('4'),
              marginVertical: wp('1'),
              alignItems: 'center',
            }}>
            <Image
              source={require('../assets/drawable-mdpi/asset-1.png')}
              style={{aspectRatio: 1}}
            />
            <Text
              style={{fontWeight: 'bold', fontSize: 16, marginLeft: wp('1')}}>
              CATEGORIES
            </Text>
          </View>
          <View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Category />
              <Category />
              <Category />
              <Category />
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                padding: -3,
              }}>
              <Category />
              <Category />
              <Category />
              <Category />
            </View>
            <View
              style={{flexDirection: 'row', margin: 15, alignItems: 'center'}}>
              <Image
                source={require('../assets/drawable-mdpi/top.png')}
                style={{aspectRatio: 1}}
              />
              <Text
                style={{fontWeight: 'bold', fontSize: 16, marginLeft: wp('1')}}>
                TOP ORDERED SERVICES
              </Text>
            </View>
            <FlatList
              showsHorizontalScrollIndicator={false}
              horizontal
              data={category}
              renderItem={({item}) => {
                return <TopOrderService item={item} />;
              }}
            />
            <View style={{marginHorizontal: wp('6'), marginVertical: hp('3')}}>
              <Text style={{fontSize: 18, fontWeight: 'bold'}}>
                CUSTOMER`S REVIEWS
              </Text>
              <Text>what customers are saying about servies</Text>
            </View>
            <FlatList
              showsHorizontalScrollIndicator={false}
              scrollEnabled={true}
              horizontal
              data={review}
              renderItem={({item, index}) => (
                <View
                  style={{
                    width: wp('88'),
                    paddingHorizontal: wp('6'),
                    paddingVertical: hp('4'),
                    marginHorizontal: wp('3'),
                    borderRadius: 9,
                    borderWidth: 5,
                    borderColor: 'gray',
                  }}>
                  <View style={{flexDirection: 'row'}}>
                    <View
                      style={{
                        height: hp('1.8'),
                        width: wp('2.9'),
                        backgroundColor: 'indianred',
                        borderRadius: 50,
                        marginRight: wp('1'),
                        marginBottom: hp('1'),
                      }}></View>
                    <View
                      style={{
                        height: hp('1.8'),
                        width: wp('2.9'),
                        backgroundColor: 'indianred',
                        borderRadius: 50,
                        marginRight: wp('1'),
                        marginBottom: hp('1'),
                      }}></View>
                    <View
                      style={{
                        height: hp('1.8'),
                        width: wp('2.9'),
                        backgroundColor: 'indianred',
                        borderRadius: 50,
                        marginRight: wp('1'),
                        marginBottom: hp('1'),
                      }}></View>
                    <View
                      style={{
                        height: hp('1.8'),
                        width: wp('2.9'),
                        backgroundColor: 'indianred',
                        borderRadius: 50,
                        marginRight: wp('1'),
                        marginBottom: hp('1'),
                      }}></View>
                    <View
                      style={{
                        height: hp('1.8'),
                        width: wp('2.9'),
                        backgroundColor: 'indianred',
                        borderRadius: 50,
                        marginRight: wp('1'),
                        marginBottom: hp('1'),
                      }}></View>
                  </View>
                  <View>
                    <Text
                      style={{
                        fontWeight: 'bold',
                        fontSize: 15,
                      }}>
                      {item.name}
                    </Text>
                    <Text style={{}}>{item.review}</Text>
                  </View>
                </View>
              )}
            />
            <ShareOrinvite />
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default Home;
