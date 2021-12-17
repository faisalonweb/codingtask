import React , {useState,useEffect} from 'react'
import { useSelector } from 'react-redux'
import MovieSection from '../MovieSection/MovieSection';
import InfiniteScroll from "react-infinite-scroll-component";
const MoviesCategories = () => {
    const moviesCategories = useSelector((state)=>state.movies.moviesSections);
    const [slicePointer,setSlicePointer] = useState(0);
    const [hasMore,setHasMore] = useState(true);
    const [moviesSections,setMoviesSections] = useState([]);
     
    const fetchMoreSection = () => {
        setSlicePointer((prevState)=>prevState + 2);
         if(slicePointer + 2 >= moviesCategories.length) {
             setHasMore(false);
         }

         setTimeout(() => {
            setMoviesSections((prevState)=>[...prevState.concat([...moviesCategories.slice(slicePointer,slicePointer+2)])]);
          }, 500);
    }
    useEffect(()=>{
      setMoviesSections([...moviesCategories.slice(slicePointer,slicePointer + 2)]);
    },[moviesCategories])
    
    return (
        <div> 
            {    moviesSections && moviesSections.length ?
                <InfiniteScroll
          dataLength={moviesSections.length}
          next={fetchMoreSection}
          hasMore={hasMore}
          loader={<h4>Loading...</h4>}
           >
            {
                moviesSections.map((section,key)=>(
                  <MovieSection key={key} title={section.title} movieTitles={section.layoutTitles.titles} />
                ))
            }
            </InfiniteScroll>
            : ""
         }
        </div>
    )
}

export default MoviesCategories
