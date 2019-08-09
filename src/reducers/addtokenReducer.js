import { ADDTOKEN } from '../actions/types';

const initialState = {
  token:'',
};

const addtokenReducer = (state = initialState, action) => {
  switch(action.type) {
    case ADDTOKEN:
      return {
        ...state,
        token: action.payload,
        
      };
    default:
      return state;
  }
}

export default addtokenReducer;