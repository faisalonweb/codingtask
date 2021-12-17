import { SET_MOVIES_SECTIONS } from "./MovieSectionsActionTypes";

const initialState = {
    moviesSections : []
}

const MoviesReducer = (state = initialState , action) => {

    switch(action.type) {
        case SET_MOVIES_SECTIONS : 
        return {
            ...state,moviesSections : action.payload
        }
        default : 
        return {...state}
    }
}

export default MoviesReducer;