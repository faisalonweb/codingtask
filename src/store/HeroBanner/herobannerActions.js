import {SET_BANNER_DATA} from './herobannerActiontypes';

export const setBannerData = (payload) => {
    
    return {
        type : SET_BANNER_DATA,
        payload
    }
}
