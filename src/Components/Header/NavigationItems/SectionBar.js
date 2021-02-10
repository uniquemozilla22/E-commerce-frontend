import React from 'react'
import {Link} from 'react-router-dom'
import './SectionBar.css'

const SectionBar = () => {
    return (
        <>
            <div className="container nav-content">
      <ul className="tabs center-align">
        <li className="tab "><Link to="../shop/men" activeClassName="active" className="black-text">Men</Link></li>
        <li className="tab black-text"><Link to="../shop/women" activeClassName="active" className=" black-text" href="#test2">Women</Link></li>
        <li className="tab black-text"><Link to="../shop/kids" activeClassName="active" className="black-text" href="#test4">Kids</Link></li>
      </ul>
            </div>
        </>
    )
}

export default SectionBar
