import React from 'react'
import './Tags.css'

const Tags = ({values,removeTag}) => {

    let chips = []
    values.map((keys,index)=>{
        chips[index] =<li key={index} ><div class="col close chip left" ><span> {values[index].toUpperCase()}</span><i class="close material-icons" onClick={()=>removeTag(index)}>close</i></div></li>
    })
    return (
        <div className="row">
            <ul className="tags">
                {chips}
            </ul>
    </div>
    )
}

export default Tags
