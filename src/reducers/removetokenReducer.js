import { REMOVETOKEN } from '../actions/types';

const initialState = {
  token:'',
};

const removetokenReducer = (state = initialState, action) => {
  switch(action.type) {
    case REMOVETOKEN:
      return {
        ...state,
        token: action.payload,
        
      };
    default:
      return state;
  }
}

export default removetokenReducer;