import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {AsyncStorageService} from './AsyncStorage';
const API_URL = 'http://nb-45-79-246-17.newark.nodebalancer.linode.com';

const register = (data) => {
  console.log(data, 'datatdtafxg');
  return axios({
    method: 'POST',
    url: API_URL + '/user-auth/register',
    headers: {
      'Content-type': 'multipart/form-data; ',
    },
    data: data,
  });
};

const login = (username, password) => {
  return axios
    .post(
      'http://nb-45-79-246-17.newark.nodebalancer.linode.com/user-auth/login',
      {
        company_email: username,
        password: password,
      },
    )
    .then(async (response) => {
      console.log(response, 'resshhv');

      if (response.data) {
        await AsyncStorageService.setUser({
          email: username,
          accessToken: response.data.access_token,
        });
      }
      return response.data;
    });
};

const logout = async () => {
  await AsyncStorageService.clearUser();
};
export default {
  register,
  login,
  logout,
};
