import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';


import { useSelector } from 'react-redux';


const getConfigurableProps = () => ({
    showArrows:  true,
    showStatus: true,
    showIndicators: false,
    infiniteLoop: true,
    showThumbs: false,
    useKeyboardArrows: true,
    autoPlay: true,
    stopOnHover: false,
    swipeable: true,
    dynamicHeight: true,
    emulateTouch: true,
    autoFocus: false,
    thumbWidth: 100,
    selectedItem: 0,
    interval: 2000,
    transitionTime: 500,
    swipeScrollTolerance: 5,
    ariaLabel: 'arialabel',
});


const HeroBanner = () => {
    const moviesTitles = useSelector((state)=>state.banner.bannerData);
    return (
        <div style={{marginBottom:"0px", backgroundColor:"black"}}>
        <Carousel
        infiniteLoop
        centerMode
        centerSlidePercentage={80}
        {...getConfigurableProps()}
    >
        {
            moviesTitles.length ? 
                moviesTitles.map((item)=> <img src={item.thumbnails["thumb-613x1536"].url}/>)
                : ""
        }
    </Carousel>
    </div>
    )
}

export default HeroBanner
