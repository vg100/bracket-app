import AuthService from '../services/auth.services';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {AsyncStorageService} from '../services/AsyncStorage';
const actionTypes = {
  loading: 'app/loading',

  register_success: 'app/register_success',
  register_fail: 'app/register_fail',

  login_success: 'app/login_success',
  login_fail: 'app/login_fail',

  logout: 'app/logout',
};

//action hai
export const register = (data) => (dispatch) => {
  return AuthService.register(data).then(
    (response) => {
      dispatch({
        type: actionTypes.register_success,
      });

      return Promise.resolve();
    },
    (error) => {
      console.log(error);
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      dispatch({
        type: actionTypes.register_fail,
      });
      return Promise.reject();
    },
  );
};

export const login = (username, password) => (dispatch) => {
  return AuthService.login(username, password).then(
    (data) => {
      dispatch({
        type: actionTypes.login_success,
        payload: {user: data},
      });

      return Promise.resolve();
    },
    (error) => {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      dispatch({
        type: actionTypes.login_fail,
      });
      return Promise.reject();
    },
  );
};

export const logout = () => (dispatch) => {
  AuthService.logout();
  dispatch({
    type: actionTypes.logout,

    
  });
};


// const user=AsyncStorageService.getUser()
// const initialState = user
//   ? { isLoggedIn: true, user } //
//   : { isLoggedIn: false, user: null };

 const initialState ={isLoggedIn: false, user: null };

export default (state = initialState, action) => {
  console.log(action);
  const {type, payload} = action;
  if (type === actionTypes.register_success) {
    return {
      ...state,
      isLoggedIn: false,
    };
  } else if (type === actionTypes.register_fail) {
    return {
      ...state,
      isLoggedIn: false,
    };
  } else if (type === actionTypes.login_success) {
    return {
      ...state,
      isLoggedIn: true,
      user: payload.user,
    };
  } else if (type === actionTypes.login_fail) {
    return {
      ...state,
      isLoggedIn: false,
      user: null,
    };
  } else if (type === actionTypes.logout) {
    return {
      ...state,
      isLoggedIn: false,
      user: null,
    };
  } else {
    return state;
  }
};
