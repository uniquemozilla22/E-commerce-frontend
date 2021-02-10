import React from 'react'
import TopBar from './NavigationItems/TopBar'
import './Navigation.css'

const Navigation = () => {
    return (
        <>
            <nav class="nav-extended white black-text">
                <TopBar title={"Fexal"} sideItems ={"Google Login"}/>
            </nav>
        </>


    )
}

export default Navigation

