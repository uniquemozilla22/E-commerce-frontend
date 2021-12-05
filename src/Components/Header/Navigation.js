import React from 'react'
import TopBar from './NavigationItems/TopBar'
import './Navigation.css'

const Navigation = () => {
    return (
        <>
            <nav class="nav-extended">
                <TopBar title={"FeXal"} sideItems ={"Google Login"}/>
            </nav>
        </>


    )
}

export default Navigation

