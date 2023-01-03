import {CLEAR_DATA} from './actionTypes';
const InitialTempState = {
  baseUrl: 'https://dummyjson.com',
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
