import {SET_BANNER_DATA} from './herobannerActiontypes';
const initialState = {
    bannerData : []
}

const bannerReducer = (state = initialState,action) => {

    switch(action.type) {
      case SET_BANNER_DATA :
          return {...state,bannerData : action.payload}
       default :
       return {...state}   
    }
}

export default bannerReducer;