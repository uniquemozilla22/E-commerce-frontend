import React from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import './TopBar.css'
import {Link} from 'react-router-dom'
const Logo = ({title,sideItems}) => {
    return (
        <>
        <div className="container nav-wrapper ">
            <Link to="/" className={"brand-logo left black-text"}><b>{title}</b></Link>
             <a href="#" data-target="mobile-demo" className="right sidenav-trigger"><FontAwesomeIcon icon="bars" size="xs"/></a>
             
            <ul class="right">

                <li><Link to="/shop"><i class="material-icons black-text">exit_to_app</i></Link></li>
            </ul>
        </div>

      </>
    )
}

export default Logo
