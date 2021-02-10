import React from 'react'
import { Route, Switch } from 'react-router'
import Cart from '../Cart/Cart'
import Carousel from './Carousel/Carousel'
import Product from './Products/Product'
import Shop from './Shop/Shop'

const Index = () => {
    return (
        <>
            <Switch>
                <Route path="/" exact component={Carousel}/>
                <Route path="/shop" exact component={Shop}/>
                <Route path="/shop/product" component={Product}/>
                <Route path="/cart" component={Cart}/>
            </Switch>
        </>
    )
}

export default Index
