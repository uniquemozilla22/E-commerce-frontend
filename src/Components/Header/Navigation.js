import React from 'react'
import SectionBar from './NavigationItems/SectionBar'
import TopBar from './NavigationItems/TopBar'
import './Navigation.css'

export default ({enableSection}) => {
    return (
        <>
         <nav class="nav-extended white black-text">
    <TopBar title={"Fexal"} sideItems ={"Google Login"}/>
    {enableSection?<SectionBar />:null}
    
  </nav>

  
        </>


    )
}
