import React from 'react'
import './Carousel.css'
import {Link} from 'react-router-dom'

const Carousel = () => {
    return (

        <section id="display-page ">
            <div className="row container">
            <div className="col s12 hide-on-med-and-up ">
                <div className="content">
                     <p className="title">The right choice for your style.  </p>
                     <p className="sub_content">Your style is the most expressive view of yourself Make your fashion never go out of style. Visit out store for more information.</p>
                     <div className ="visit-section">
                     <Link to ="/shop"><div className="visit-link">
                     Visit Site
                    </div></Link>
                    <Link to ="/shop"><div className="visit-link">
                     Visit Shop
                    </div></Link>
                     </div>
                     
                     
                </div>
            </div>
            <div className="col s6 hide-on-med-and-down">
                <div className="content">
                     <p className="title">The right choice for your style.  </p>
                     <p className="sub_content">Your style is the most expressive view of yourself Make your fashion never go out of style. Visit out store for more information.</p>
                     <div className ="visit-section">
                     <Link to ="/shop"><div className="visit-link">
                     Visit Site
                    </div></Link>
                    <Link to ="/shop"><div className="visit-link">
                     Visit Shop
                    </div></Link>
                     </div>
                     
                     
                </div>
            </div>
                <div className="col s6  hide-on-med-and-down">
                    <div className="image-content">
                    <img className="img1" src={"https://i.pinimg.com/originals/f5/a1/29/f5a129faa7b246ba9fcda5234975e3d0.jpg"} alt="Display Picture"/>
                    <img className="img2" src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxfeToFFhX6NRMdCgj64TuldPpE-pBiYiGIQ&usqp=CAU"} alt="Display Picture"/>
                    <img className="img3" src={"https://www.urby.in/blog/wp-content/uploads/2017/09/streetfashion-e1505890764149.jpg"} alt="Display Picture"/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Carousel
