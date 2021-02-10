import React from 'react'
import Navigation from './Header/Navigation'

const layout = (props) => {
    console.log(window.location.pathname)

    let nav = window.location.pathname==="/shop"?<Navigation enableSection/>:<Navigation/>
    return (
        <>
            {nav}
            {props.children}
        </>
    )
}

export default layout
