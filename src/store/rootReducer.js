import { combineReducers } from 'redux';
import bannerReducer from './HeroBanner/herobannerReducer';
import MoviesReducer from './MovieSections/MovieSectionsreducer';
const rootReducer = combineReducers({
    banner: bannerReducer,
    movies : MoviesReducer
});
export default rootReducer;