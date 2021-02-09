import React from 'react'
import Navigation from './Header/Navigation'

const layout = (props) => {
    return (
        <>
            <Navigation/>
            {props.children}
        </>
    )
}

export default layout
