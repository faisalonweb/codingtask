import React , {useEffect} from 'react';
import Header from './components/common/Smart/Header/Header'
import db from './db/homepage.json';
import {useDispatch} from 'react-redux';
import {setBannerData} from './store/HeroBanner/herobannerActions';
import HeroBanner from './components/common/Presentational/HeroBanner/HeroBanner';
import { SetMovies } from './store/MovieSections/MovieSectionsActions';
import MoviesCategories from './components/common/Presentational/MoviesCategories/MoviesCategories';
function App() {
  const dispatch = useDispatch();
  const {titles : MoviesTitles} = db;
  const {layoutTitles : {titles}} = MoviesTitles[0];
  const MoviesSections = MoviesTitles.slice(1);
  
  useEffect(()=>{
   dispatch(setBannerData(titles));
   dispatch(SetMovies(MoviesSections));
  },[])
  return (
    <div className="App">
       <Header />
       <HeroBanner/>
       <MoviesCategories />
    </div>
    
  );
}

export default App;
