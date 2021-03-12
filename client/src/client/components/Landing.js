import React, { Component } from "react";
import MainLanding from "./MainLanding";
import Places from "./pages/Places";
import Search from "./Search";


export default class Landing extends Component {
  render() {
    const style = {
      backgroundImage: "url('img/slide1.jpg')",
    };
    return (
      <>
          <MainLanding />
          <Search />
          <Places />

        {/*
         <div className="most_popular__section mainpage-slider">
           <div className="wrap">
               <div className="wrap_float">
                   <div className="top_part">
                       <div className="top_part_left">
                           <p className="section_subtitle">POPULARLY</p>
                           <h2 className="section_title">
                               Most popular <br /> holiday destinations
                           </h2>
                       </div>
                       <div className="top_part_right">
                           <a href="tour-list.html" className="btn">
                               <span>View all tours</span>
                           </a>
                           <div className="controls" id="most_popular__arrows">
                               <div className="arrow prev"></div>
                               <div className="arrow next"></div>
                           </div>
                       </div>
                   </div>
                   <div className="most_popular__section__slider" id="most_popular__slider">
                       <a href="single.html" className="slider_item" style={{backgroundImage:"`url(${ img/prevput1.jpg})`"}}>
                           <div className="slider_item__content">
                               <div className="rating">
                                   <div className="stars">
                                       <div className="star active"></div>
                                       <div className="star active"></div>
                                       <div className="star active"></div>
                                       <div className="star active"></div>
                                       <div className="star"></div>
                                   </div>
                                   <div className="reviews_count">
                                       (2 Reviews)
                                   </div>
                               </div>
                               <h3 className="title">
                                   Autumn in Japan | $3,500 $3,880 
                               </h3>
                               <p className="description">
                                   6 excursions to the main cities of the country, admire the beautiful autumn gardens
                               </p>
                               <div className="days">
                                   <span>7 days</span>
                               </div>
                           </div>
                       </a>
                       
                       <a href="single.html" className="slider_item" style={{backgroundImage: "`url(${ img/prevput2.jpg})`"}}>
                           <div className="slider_item__tags">
                               <div className="tag discount">20% off</div>
                           </div>
                           <div className="slider_item__content">
                               <h3 className="title">
                                   A tour of the Islands | $3,500 $3,880 
                               </h3>
                               <p className="description">
                                   6 excursions to the main cities of the country, admire the beautiful autumn gardens
                               </p>
                               <div className="days">
                                   <span>23 days</span>
                               </div>
                           </div>
                       </a>
                       
                       <a href="single.html" className="slider_item" style={{backgroundImage: "`url(${ img/prevput3.jpg})`"}} >
                           <div className="slider_item__tags">
                               <div className="tag discount">20% off</div>
                           </div>
                           <div className="slider_item__content">
                               <div className="rating">
                                   <div className="stars">
                                       <div className="star active"></div>
                                       <div className="star active"></div>
                                       <div className="star active"></div>
                                       <div className="star active"></div>
                                       <div className="star"></div>
                                   </div>
                                   <div className="reviews_count">
                                       (2 Reviews)
                                   </div>
                               </div>
                               <h3 className="title">
                                   Seychelles | from $300
                               </h3>
                               <p className="description">
                                   6 excursions to the main cities of the country, admire the beautiful autumn gardens
                               </p>
                               <div className="days">
                                   <span>7 days</span>
                               </div>
                           </div>
                       </a>
                       <a href="single.html" className="slider_item" style={{backgroundImage: "`url(${ img/prevput4.jpg})`"}}> 
                           <div className="slider_item__tags">
                               <div className="tag discount">20% off</div>
                           </div>
                           <div className="slider_item__content">
                               <div className="rating">
                                   <div className="stars">
                                       <div className="star active"></div>
                                       <div className="star active"></div>
                                       <div className="star active"></div>
                                       <div className="star active"></div>
                                       <div className="star"></div>
                                   </div>
                                   <div className="reviews_count">
                                       (2 Reviews)
                                   </div>
                               </div>
                               <h3 className="title">
                                   Autumn in Japan | $3,500 $3,880
                               </h3>
                               <p className="description">
                                   6 excursions to the main cities of the country, admire the beautiful autumn gardens
                               </p>
                               <div className="days">
                                   <span>7 days</span>
                               </div>
                           </div>
                       </a>
                       <a href="single.html" className="slider_item" style={{backgroundImage: "`url(${ img/prevput5.jpg})`"}}>
                           <div className="slider_item__tags">                                     
                               <div className="tag discount">20% off</div>
                               <div className="tag new">New</div>
                           </div>
                           <div className="slider_item__content">
                               <div className="rating">
                                   <div className="stars">
                                       <div className="star active"></div>
                                       <div className="star active"></div>
                                       <div className="star active"></div>
                                       <div className="star active"></div>
                                       <div className="star"></div>
                                   </div>
                                   <div className="reviews_count">
                                       (2 Reviews)
                                   </div>
                               </div>
                               <h3 className="title">
                                   A tour of the Islands | $3,500 $3,880
                               </h3>
                               <p className="description">
                                   6 excursions to the main cities of the country, admire the beautiful autumn gardens
                               </p>
                               <div className="days">
                                   <span>7 days</span>
                               </div>
                           </div>
                       </a>
                   </div>
               </div>
           </div>
       </div>
         */}
      </>
    );
  }
}
