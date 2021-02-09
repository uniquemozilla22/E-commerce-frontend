import React from 'react'
import './Shopitems.css'

const ShopItems = () => {
    return (
        <div className="col s4">
            <div class="card">
    <div class="card-image waves-effect waves-block waves-light">
      <img class="activator" src="https://brandhub.pk/wp-content/uploads/2020/07/1-scaled.jpg"/>
    </div>
    <div class="card-content">
      <span class="card-title activator grey-text text-darken-4">Shirt Title<i class="material-icons right">bookmark_border</i><i class="material-icons right">add_shopping_cart</i></span>
      <span className="price"><i class="material-icons">attach_money</i><a href="#">{"99"}</a></span>
    </div>
    <div class="card-reveal">
      <span class="card-title grey-text text-darken-4">Card Title<i class="material-icons right">close</i></span>
      <p>Here is some more information about this product that is only revealed once clicked on.</p>
    </div>
  </div>
        </div>
    )
}

export default ShopItems
