import ShopItems from '../ShopItems/ShopItems'
import React from 'react'

const ProductSection = () => {
    return (
        <>
             <div className="container">
                <div className="row">
                    
                    <ShopItems />
                    <ShopItems />
                    <ShopItems />
                    <ShopItems />
                    <ShopItems />
                    <ShopItems />
                </div>
            </div>
        </>
    )
}

export default ProductSection
