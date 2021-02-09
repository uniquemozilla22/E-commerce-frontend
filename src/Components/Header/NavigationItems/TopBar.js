import React from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {Link} from "react-router-dom"
import './TopBar.css'

const Logo = ({title,sideItems}) => {
    sideItems = <Link to="/">{sideItems}</Link>
    return (
        <>
        <div className="container nav-wrapper ">
            <a href="#" className={"brand-logo left black-text"}><b>{title}</b></a>
             <a href="#" data-target="mobile-demo" className="right sidenav-trigger"><FontAwesomeIcon icon="bars" size="xs"/></a>
             
            <ul class="right">
                <li><a href=""><i class="material-icons black-text">exit_to_app</i></a></li>
            </ul>
        </div>

      </>
    )
}

export default Logo
