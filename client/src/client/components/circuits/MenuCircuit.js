import React, { Component } from 'react'

export default class MenuCircuit extends Component {
    render() {
        const style2 = {
            backgroundImage: "url('img/prevnap2.jpg')",
          };
        return (
            <>
            <div className="breadcrumbs">
    <div className="wrap">
        <div className="wrap_float">
            <a href="#">Home</a>
            <span className="separator">/</span>
            <a href="#" className="current">Circuits</a>
        </div>
    </div>
</div>
<div className="page_head" style={style2}>
    <div className="wrap">
        <div className="wrap_float">
            <div className="title">Search Tours</div>
            <div className="search_tour">
               <div className="search_tour_form">
                   <div className="fields__block">
                       <div className="fields">
                           <div className="field">
                               <div className="label">Keywords</div>
                               <div className="field_wrap keywords">
                                   <input type="text" className="input" />
                               </div>
                           </div>
                           <div className="field">
                               <div className="label">Activity</div>
                               <div className="field_wrap select_field">
                                   <select name="tour-activity">
                                    <option value="">Any</option>
                                    <option value="city-tours">City Tours</option>
                                    <option value="cultural-thematic-tours">Cultural &amp; Thematic Tours</option>
                                    <option value="family-friendly-tours">Family Friendly Tours</option>
                                    <option value="holiday-seasonal-tours">Holiday &amp; Seasonal Tours</option>
                                    <option value="indulgence-luxury-tours">Indulgence &amp; Luxury Tours</option>
                                    <option value="outdoor-activites">Outdoor Activites</option>
                                    <option value="relaxation-tours">Relaxation Tours</option>
                                    <option value="wild-adventure-tours">Wild &amp; Adventure Tours</option>
                                </select>
                               </div>
                           </div>
                           <div className="field">
                               <div className="label">Destination</div>
                               <div className="field_wrap select_field">
                                   <select name="tour-activity">
                                    <option value="">Any</option>
                                    <option value="city-tours">City Tours</option>
                                    <option value="cultural-thematic-tours">Cultural &amp; Thematic Tours</option>
                                    <option value="family-friendly-tours">Family Friendly Tours</option>
                                    <option value="holiday-seasonal-tours">Holiday &amp; Seasonal Tours</option>
                                    <option value="indulgence-luxury-tours">Indulgence &amp; Luxury Tours</option>
                                    <option value="outdoor-activites">Outdoor Activites</option>
                                    <option value="relaxation-tours">Relaxation Tours</option>
                                    <option value="wild-adventure-tours">Wild &amp; Adventure Tours</option>
                                </select>
                               </div>
                           </div>
                           <div className="field">
                               <div className="label">Duration</div>
                               <div className="field_wrap select_field">
                                   <select name="tour-activity">
                                    <option value="">Any</option>
                                    <option value="city-tours">City Tours</option>
                                    <option value="cultural-thematic-tours">Cultural &amp; Thematic Tours</option>
                                    <option value="family-friendly-tours">Family Friendly Tours</option>
                                    <option value="holiday-seasonal-tours">Holiday &amp; Seasonal Tours</option>
                                    <option value="indulgence-luxury-tours">Indulgence &amp; Luxury Tours</option>
                                    <option value="outdoor-activites">Outdoor Activites</option>
                                    <option value="relaxation-tours">Relaxation Tours</option>
                                    <option value="wild-adventure-tours">Wild &amp; Adventure Tours</option>
                                </select>
                               </div>
                           </div>
                           <div className="field">
                               <div className="label">Date</div>
                               <div className="field_wrap calendar_field">
                                   <input type="text" className="calendar js_calendar" />
                               </div>
                           </div>
                       </div>
                       <button className="submit"></button>
                   </div>
               </div>
           </div>
        </div>
    </div>
    <div className="top_destination">
       <div className="section_content popular_destination__content">
           <div className="wrap">
               <div className="wrap_float">
                   <a href="single.html" className="item">
                           <div className="sq_parent">
                               <div className="sq_wrap">
                                   <div className="sq_content image" style={style2}></div>
                                   <span>Greece</span>
                               </div>
                            </div>
                       </a>
                       <a href="single.html" className="item">
                           <div className="sq_parent">
                               <div className="sq_wrap">
                                   <div className="sq_content image" style={style2}></div>
                                   <span>Crimea</span>
                               </div>
                            </div>
                       </a>
                       <a href="single.html" className="item">
                           <div className="sq_parent">
                               <div className="sq_wrap">
                                   <div className="sq_content image" style={style2}></div>
                                   <span>Turkey</span>
                               </div>
                            </div>
                       </a>
                       <a href="single.html" className="item">
                           <div className="sq_parent">
                               <div className="sq_wrap">
                                   <div className="sq_content image" style={style2}></div>
                                   <span>Ireland</span>
                               </div>
                            </div>
                       </a>
                       <a href="single.html" className="item">
                           <div className="sq_parent">
                               <div className="sq_wrap">
                                   <div className="sq_content image" style={style2}></div>
                                   <span>Cyprus</span>
                               </div>
                            </div>
                       </a>
                       <a href="single.html" className="item">
                           <div className="sq_parent">
                               <div className="sq_wrap">
                                   <div className="sq_content image" style={style2}></div>
                                   <span>Thailand</span>
                               </div>
                            </div>
                       </a>
                       <a href="single.html" className="item">
                           <div className="sq_parent">
                               <div className="sq_wrap">
                                   <div className="sq_content image" style={style2}></div>
                                   <span>Brazil</span>
                               </div>
                            </div>
                       </a>
                       <a href="single.html" className="item">
                           <div className="sq_parent">
                               <div className="sq_wrap">
                                   <div className="sq_content image" style={style2}></div>
                                   <span>Maldives</span>
                               </div>
                            </div>
                       </a>
                       <a href="single.html" className="item">
                           <div className="sq_parent">
                               <div className="sq_wrap">
                                   <div className="sq_content image" style={style2}></div>
                                   <span>Egypt</span>
                               </div>
                            </div>
                       </a>
                       <a href="single.html" className="item">
                           <div className="sq_parent">
                               <div className="sq_wrap">
                                   <div className="sq_content image" style={style2}></div>
                                   <span>Tunisia</span>
                               </div>
                            </div>
                       </a>
               </div>
           </div>
       </div>
   </div>
</div>
<div className="page_content">
    <div className="wrap">
        <div className="wrap_float">
            <div className="main">
                <div className="most_popular__section">
                    <a href="single.html" className="slider_item" style={style2}>
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

                   <a href="single.html" className="slider_item" style={style2}>
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
                               Autumn in Japan | $3,500
                           </h3>
                           <p className="description">
                               6 excursions to the main cities of the country, admire the beautiful autumn gardens
                           </p>
                           <div className="days">
                               <span>7 days</span>
                           </div>
                       </div>
                   </a>

                   <a href="single.html" className="slider_item" style={style2}>
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
                   <a href="single.html" className="slider_item" style={style2}>
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
                               Paris | $3,500
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
                <div className="pagination">
                    <ul>
                        <li className="prev"><a href="#"></a></li>
                        <li className="current"><a href="#">1</a></li>
                        <li><a href="#">2</a></li>
                        <li><a href="#">3</a></li>
                        <li><a href="#">4</a></li>
                        <li className="next"><a href="#"></a></li>
                    </ul>
                </div>
            </div>
            <div className="sidebar">
                <div className="latest_tours">
                    <div className="block-title">
                        Latest Tours
                    </div>
                    <div className="list">
                        <a href="single.html" className="_item">
                            <div className="left">
                                <div className="img" style={style2}></div>
                            </div>
                            <div className="right">
                                <div className="_title">A tour of the Islands</div>
                                <div className="cost">
                                    <b>$3,500</b>
                                    <span className="old_cost">$3,880</span>
                                </div>
                                <div className="time">7 days</div>
                            </div>
                        </a>

                        <a href="single.html" className="_item">
                            <div className="left">
                                <div className="img" style={style2}></div>
                                <div className="tag new">new</div>
                            </div>
                            <div className="right">
                                <div className="_title">America</div>
                                <div className="cost">
                                    <b>$3,500</b>
                                </div>
                                <div className="time">7 days</div>
                            </div>
                        </a>

                        <a href="single.html" className="_item">
                            <div className="left">
                                <div className="img" style={style2}></div>
                            </div>
                            <div className="right">
                                <div className="_title">Seychelles</div>
                                <div className="cost">
                                    <b>$3,500</b>
                                    <span className="old_cost">$3,880</span>
                                </div>
                                <div className="time">7 days</div>
                            </div>
                        </a>

                        <a href="single.html" className="_item">
                            <div className="left">
                                <div className="img" style={style2}></div>
                                <div className="tag discount">20% off</div>
                            </div>
                            <div className="right">
                                <div className="_title">Autumn in Japan</div>
                                <div className="cost">
                                    <b>$3,500</b>
                                    <span className="old_cost">$3,880</span>
                                </div>
                                <div className="time">7 days</div>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="tour_category">
                    <div className="block-title">
                        Tour Category
                    </div>
                    <ul>
                        <li><a href="#">Outdoor Activites</a></li>
                        <li><a href="#">City Tours</a></li>
                        <li><a href="#">Cultural & Thematic Tours</a></li>
                        <li><a href="#">Indulgence & Luxury Tours</a></li>
                        <li><a href="#">Family Friendly Tours</a></li>
                        <li><a href="#">Holiday & Seasonal Tours</a></li>
                    </ul>
                </div>
                <div className="recent_articles">
                    <div className="block-title">
                        Recent Articles
                    </div>
                    <div className="list">
                        <a href="blog-single.html" className="_item">
                            <div className="img" style={style2}></div>
                            <div className="info">
                                <div className="_title">
                                    Pack wisely before traveling
                                </div>
                                <div className="date">JUNE 6/2019</div>
                            </div>
                        </a>
                        <a href="blog-single.html" className="_item">
                            <div className="img" style={style2}></div>
                            <div className="info">
                                <div className="_title">
                                    Pack wisely before traveling
                                </div>
                                <div className="date">JUNE 6/2019</div>
                            </div>
                        </a>
                        <a href="blog-single.html" className="_item">
                            <div className="img" style={style2}></div>
                            <div className="info">
                                <div className="_title">
                                    Pack wisely before traveling
                                </div>
                                <div className="date">JUNE 6/2019</div>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="question-block">
                    <div className="_title">Get a Question?</div>
                    <div className="_text">
                        Do not hesitage to give us a call. We are an expert team and we are happy to talk to you.
                    </div>
                    <div className="tel">
                        <a href="#">+1 1235 6789 10</a>
                    </div>
                    <div className="email">
                        <a href="#">info@hellodigi.ru</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
            </>
        )
    }

}
