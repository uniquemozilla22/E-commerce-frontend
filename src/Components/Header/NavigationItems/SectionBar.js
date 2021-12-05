import React from 'react'
import {Link} from 'react-router-dom'
import './SectionBar.css'
import PropTypes from 'prop-types'


const SectionBar = ({tag , links}) => {

   let sectionitems= links.map((keys,index)=><li key = {index} className="tab "><Link to={"../"+tag+"/"+links[index]} activeClassName="active" className="black-text">{links[index]}</Link></li>)
    
   return (
        <>
            <div className="container nav-content">
      <ul className="tabs center-align">
     {sectionitems}
      </ul>
            </div>
        </>
    )
}
SectionBar.propTypes = {
    tag:PropTypes.string,
    links:PropTypes.array

}
export default SectionBar
