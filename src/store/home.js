import AuthService from '../services/auth.services';
import HomeService from '../services/home.services';

const actionTypes = {
  isloding: 'app/isloding',
  fetch_data_success: 'app/fetch_data_success',
  fetch_data_failed: 'app/fetch_data_failed',
};

//action hai
export const homecall = () => (dispatch) => {
  return HomeService.getData().then(
    (response) => {
      if (response) {
        dispatch({
          type: actionTypes.isloding,
          isLoading: bool,
          
        });
      }
      dispatch({
        type: actionTypes.fetch_data_success,
        response,
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
        type: actionTypes.fetch_data_failed,
        message,
      });
      return Promise.reject();
    },
  );
};


const initialState = {isLoading: false,
    data: [],
    error: undefined,};

export default (state = initialState, action) => {
    if (action.type === actionTypes.isloding) {
        return {
          ...state,
          isLoading: true,
        };
      } else if (action.type === actionTypes.fetch_data_success) {
       
        return {
          ...state,
          isLoading: false,
          data: action.data,
        };
      } else if (action.type === actionTypes.fetch_data_failed) {
        return {
          isLoading: false,
          error: action.error,
        };
      }
    
      return state;
};
