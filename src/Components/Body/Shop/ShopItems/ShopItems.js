import React from 'react'
import { Link } from 'react-router-dom'
import './Shopitems.css'
import productImage from "../../../../Assets/1-scaled.jpg"

const ShopItems = () => {
    return (
        <div className="col s12 m6 l4 xl4">
            <div class="card">
              <div class="card-image waves-effect waves-block waves-light">
                <img class="activator" src={productImage} alt="Product"/>
              </div>
              <div class="card-content">
                <span class="card-title activator grey-text text-darken-4"><Link to="../shop/product">Shirt Title </Link><i class="material-icons right">bookmark_border</i><Link to="../cart"><i class="material-icons right">add_shopping_cart</i></Link></span>
                <span className="price"><i class="material-icons">attach_money</i><Link href="#">{"99"}</Link></span>
              </div>
              <div class="card-reveal">
                <span class="card-title grey-text text-darken-4"><Link to="../shop/product">Shirt Title </Link><i class="material-icons right">close</i></span>
                <p>Here is some more information about this product that is only revealed once clicked on.</p>
              </div>
            </div>
        </div>
    )
}

export default ShopItems
