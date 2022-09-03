import {
  GET_INFO,

} from "../actions/index";

const inicialState = {
  info: [],
};

const rootReducer = (state = inicialState, action) => {
  switch (action.type) {
    case GET_INFO:
      return {
        ...state,
        info: action.payload
      }
    default:
      return state;

  }
};

export default rootReducer;
