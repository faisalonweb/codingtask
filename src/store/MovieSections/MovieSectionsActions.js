import { SET_MOVIES_SECTIONS } from "./MovieSectionsActionTypes";

export const SetMovies = (payload)=> {
    return {
        type : SET_MOVIES_SECTIONS,
        payload
    }
}