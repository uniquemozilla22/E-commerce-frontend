import React from 'react'
import { Route, Switch } from 'react-router'
import Cart from '../Cart/Cart.js'
import Carousel from './Carousel/Carousel.js'
import Product from './Products/Product.js'
import Shop from './Shop/Shop.js'
import Admin from './Admin/Components/AdminLayout.js'

const Index = () => {
    return (
        <>
            <Switch>
                <Route path="/" exact component={Carousel}/>
                <Route path="/shop" exact component={Shop}/>
                <Route path="/shop/product" component={Product}/>
                <Route path="/cart" component={Cart}/>
                <Route path="/wishlist" component={Cart}/>
                <Route path="/admin" component={Admin}/>
            </Switch>
        </>
    )
}

export default Index
