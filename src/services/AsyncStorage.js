import AsyncStorage from '@react-native-async-storage/async-storage';
export class AsyncStorageService {
  static setUser(data) {

    return AsyncStorage.setItem('@user', JSON.stringify(data));
  }
  static async getUser() {
    try {
      const response = await AsyncStorage.getItem('@user');

      return JSON.parse(response);
    } catch (e) {
      return Promise.reject(e);
    }
  }
  static clearUser() {
    return AsyncStorage.removeItem('@user');
  }
}