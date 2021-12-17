import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 8
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 7
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 5
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 4
    }
  };
const MovieSection = ({title ,movieTitles}) => {
    return (
        <div style={{padding:"10px", backgroundColor: "black"}}>
            <h3 style={{marginBottom:"20px",marginTop:"30px",color:"white" ,fontFamily:"sans-serif",fontSize:"16px"}}>{title}</h3>
            <Carousel
                swipeable={false}
                draggable={false}
                showDots={false}
                responsive={responsive} // means to render carousel on server-side.
                infinite={true}
                autoPlay={ false}
                keyBoardControl={true}
                transitionDuration={500}
                containerClass="carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile"]}
                itemClass="carousel-item-padding-40-px"
             >
                 {
                     movieTitles.map((item,key)=>(
                         <img style={{width:"200px" , height:"200px" , objectFit:"cover"}} src={item.thumbnails['thumb-677x474']?.url} key={key} />
                     ))
                 }
                  </Carousel>
        </div>
    )
}

export default MovieSection
