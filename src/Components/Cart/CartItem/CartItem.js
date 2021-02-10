import React, { useState } from 'react'
import image1 from '../../../Assets/1-scaled.jpg'

const CartItem = () => {
    let [quantity,setQuantity]= useState(1)

    const buttonHandler =(e,number)=>{
        e.preventDefault()
        setQuantity(quantity+number)
    }

    return (
    <>
    <li class="collection-item avatar row">
        
      <img src={image1} alt="" class="col circles"/>
      <span class=" col titles">T-shirt and Pants</span>
      <p className=" col quantity">
         Price : $99
         </p>
      <p className=" col quantity">Qty:</p>

      <form className=" col">

        <button  className="button "  onClick={(e)=>buttonHandler(e,1)}><i className="material-icons">arrow_drop_up</i></button>
            <label class="cart_quantity">{quantity}</label>
        <button className="button" onClick={(e)=>buttonHandler(e,-1)}><i className="material-icons">arrow_drop_down</i></button>
         
        </form>    
      
      
      <a href="/" class="secondary-content"><i class="material-icons black-text">delete</i></a>
    </li>
    </>
    )
}

export default CartItem
