import {GET_PARKINGS} from './types.js'

const fn = (state, action) => {
  const {payload,type} = action;

  switch(type){
    case GET_PARKINGS:
      return {
      ...state,
      parkings: payload,
    }
    default:
      return state;
  }
}
export default fn