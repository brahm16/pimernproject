import React, { Component } from 'react'

class  PlaceDetails extends Component {

      render(){
        const { name,image } = this.props;

        const style2 = {
            backgroundImage: "url('img/zagh/0.jpg')",
          };
        return (
            <>
        
        <div class="image_bg--single" style={style2}></div>
        

        <div class="page_content single-page blog-single">
        <div class="content-head">
            <div class="wrap">
                <div class="wrap_float">
                    <div class="main">
                        <div class="title">
                            {name}
                        </div>
                        <div class="date">
                            JUNE 6/2019 | UNCATEGORIZED
                        </div>
                       <div class="description">
                           <p>
                               A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created
                           </p>
                           <p>
                               for the bliss of souls like mine. I am so happy, my dear friend, so absorbed in the exquisite sense of mere tranquil existence, that I neglect my talents. I should be incapable of drawing a single stroke at the present moment; and yet I feel that I never was a greater artist than now.
                           </p>
                       </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="content-body">
            <div class="wrap">
                <div class="wrap_float">
                    <div class="details">
                        <div class="_title">
                            When, while the lovely valley teems with
                        </div>
                        <div class="text">
                            <p>
                                vapour around me, and the meridian sun strikes the upper surface of the impenetrable foliage of my trees, and but a few stray gleams steal into the inner sanctuary, I throw myself down among the tall grass by the trickling stream; and, as I lie close to the earth, a thousand unknown plants are noticed by me: when I hear the buzz of the little world among the stalks, and grow familiar with the countless
                            </p>
                        </div>
                    </div>
                    <div class="page--content">
                        <div class="quote">
                            <div class="quote_top">
                                <div class="photo">
                                    <img src="img/vblog1.jpg" alt="" />
                                </div>
                                <div class="text">
                                    I sink under the weight of the splendour of these visions!A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which
                                </div>
                            </div>
                            <div class="quote_bottom">
                                <div class="name">- John Smith</div>
                            </div>
                        </div>
                        <h2>h2, while the lovely valley teems with</h2>
                        <p>
                            vapour around me, and the meridian sun strikes the upper surface of the impenetrable foliage of my trees, and but a few stray gleams steal into the inner sanctuary, I throw myself down among the tall grass by the trickling stream; and, as I lie close to the earth, a thousand unknown plants are noticed by me:
                        </p>
                        <img src="img/vblog2.jpg" alt="" />
                        <p>
                            vapour around me, and the meridian sun strikes the upper surface of the impenetrable foliage of my trees, and but a few stray gleams steal into the inner sanctuary, I throw myself down among the tall grass by the trickling stream; and, as I lie close to the earth, a thousand unknown plants are noticed by me:
                        </p>
                        <h3>h3, while the lovely valley teems with</h3>
                        <p>
                            vapour around me, and the meridian sun strikes the upper surface of the impenetrable foliage of my trees, and but a few stray gleams steal into the inner sanctuary, I throw myself down among the tall grass by the trickling stream; and, as I lie close to the earth, a thousand unknown plants are noticed by me:
                        </p>
                        <h4>h4, while the lovely valley teems with</h4>
                        <p>
                            vapour around me, and the meridian sun strikes the upper surface of the impenetrable foliage of my trees, and but a few stray gleams steal into the inner sanctuary, I throw myself down among the tall grass by the trickling stream; and, as I lie close to the earth, a thousand unknown plants are noticed by me:
                        </p>
                        <div class="video_block">
                            <div class="video">
                                <iframe src="https://www.youtube.com/embed/v_C7OXbvuD8?rel=0" allowfullscreen></iframe>
                            </div>
                        </div>
                        <h5>h5, while the lovely valley teems with</h5>
                        <p>
                            vapour around me, and the meridian sun strikes the upper surface of the impenetrable foliage of my trees, and but a few stray gleams steal into the inner sanctuary, I throw myself down among the tall grass by the trickling stream; and, as I lie close to the earth, a thousand unknown plants are noticed by me:
                        </p>
                    </div>
                    <div class="recent_articles">
                        <div class="title">
                            Recent Articles
                        </div>
                        <div class="items">
                            <a class="blog_item">
                               <div class="blog_item_img">
                                   <img src="img/recent-1.jpg" alt="" />
                               </div>
                               <div class="blog_item_date">
                                   JUNE 6/2019 | UNCATEGORIZED
                               </div>
                               <div class="blog_item_title">
                                   Pack wisely before traveling
                               </div>
                               <div class="blog_item_text">
                                   A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart.
                               </div>
                           </a>
                           <a class="blog_item">
                               <div class="blog_item_img">
                                   <img src="img/recent-2.jpg" alt="" />
                               </div>
                               <div class="blog_item_date">
                                   JUNE 6/2019 | UNCATEGORIZED
                               </div>
                               <div class="blog_item_title">
                                   Pack wisely before traveling
                               </div>
                               <div class="blog_item_text">
                                   A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart.
                               </div>
                           </a>
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
export default PlaceDetails;
