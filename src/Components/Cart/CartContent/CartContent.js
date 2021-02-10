import React from 'react'
import CartItem from '../CartItem/CartItem'
import './CartContent.css'

const CartContent = () => {
    return (
        <div className="container">
               
  <ul class="collection">
    <CartItem/>
    <CartItem/>
    <CartItem/>
    <CartItem/>
    <CartItem/>
  </ul>
         
        </div>
    )
}

export default CartContent
