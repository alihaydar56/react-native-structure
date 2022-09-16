import {
  CLEAR_DATA,
  SET_BASE_URL,

} from './actionTypes';
const InitialTempState = {
  baseUrl: 'http://134.122.50.175:8089/api/v1',
};

const tempReducer = (state = InitialTempState, action: any) => {
  switch (action.type) {
  
    case CLEAR_DATA:
      return InitialTempState;
    default:
      return state;
  }
};

export default tempReducer;
