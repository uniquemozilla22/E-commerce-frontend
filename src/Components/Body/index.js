import React from 'react'
import { Route, Switch } from 'react-router'
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
            </Switch>
        </>
    )
}

export default Index
