import React from 'react'
import './Carousel.css'
import {Link} from 'react-router-dom'
import Banner from '../../../Assets/f49b1827466f1d57b9e9b3cebdf955ae.png'

const Carousel = () => {
    return (

        <section id="display-page ">
            <div className="banner">
                <div className="row">
                    <div className =" banner-image ">
                        <img src={Banner} alt="Video"/>
                    </div>
                </div>
                <div className="row">
                    <div className ="center Fexal_banner-content ">
                        <div className="Content">
                            <div className="fexal_title">
                                <h3>The right choice for your style</h3>
                            </div>
                            <div className=" center fexal_content ">
                                <p>When your clothing partner has the best selection the more you can show and express yourselves to the outerworld. Give it a go.</p>
                            </div>
                            <div className="fexal_banner_link center">
                            <Link to="/shop" > <div className="btn_visit">Visit Shop</div></Link>
                            <Link to="" >   <div className="btn_watch">Watch Demo</div></Link>
                            </div>
                        </div>
                    </div>
                </div>  

            </div>
        </section>
    )
}

export default Carousel
