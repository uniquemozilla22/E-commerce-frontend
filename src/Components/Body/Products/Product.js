import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import './Product.css'
import image1 from './pexels-photo-983564.jpeg'
import image2 from '../../../Assets/f5a129faa7b246ba9fcda5234975e3d0.jpg'

const Product = () => {

    let [quantity,setQuantity]=useState(9)
    let [productPrice,setproductPrice]=useState(99)  
    let [productImages,setProductImage]= useState([image1,image2,image1])
    let [displayImage,setDisplayImage]=useState(productImages[0])

    const changePrice=()=>{
        setproductPrice(quantity.default*99)
    }

    let imageGallery= productImages.map((keys,index)=>
         <div onClick={()=>setDisplayImage(productImages[index])}><img  className="image col" src={productImages[index]} alt="Product Display " /></div>
    )



    return (
        <section id="display-page ">
        <div className="row container">
        <div className="col s6 xl6 m6 l6 ">
            <div className="product_content">
                 <p className="product_title">Product Shirt</p>
                 <p className="product_title">${productPrice}</p>

                 <p className="product_sub_content">Your style is the most expressive view of yourself Make your fashion never go out of style. Visit out store for more information.</p>
                 <div className ="product_visit-section">
                     <form className=" col s6 l6 xl6 value">
                         <button className="product_visit-link" onClick={(e)=>{e.preventDefault()
                            setQuantity(quantity+1)
                            changePrice()
                            }}><i className="material-icons">arrow_drop_up</i></button>
                         <label >{quantity}</label>
                         <button className="product_visit-link" onClick={(e)=>{e.preventDefault()
                            setQuantity(quantity-1)}}><i className="material-icons">arrow_drop_down</i></button>
                     </form>
                     <br/>
                     <div className=" row">
                 <div className=" col product_visit-link">
                 <Link to ="/"><i className="material-icons">add_shopping_cart</i></Link>
                </div>
                <div className=" col product_visit-link">
                 <Link to ="/"><i className="material-icons">bookmark_border</i></Link>
                </div>
                 </div>
                 </div>

                 <div className="image-gallery">
                     <div className="row">
                    {imageGallery}
                     </div>
                
                 </div>
                 
                 
            </div>
        </div>
            <div className="col s6 xl6 m6 l6">
                <div className="product_image-content">\
                <img className="product_img1" src={displayImage} alt="Product 1 shirt 1 Display"/>

                </div>
            </div>
        </div>
    </section>

    )
}

export default Product
