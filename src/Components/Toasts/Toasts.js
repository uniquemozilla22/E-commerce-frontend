import React from 'react'

const Toasts = ({key,dismiss,message}) => {
    return (
        <div  onClick={()=>dismiss(key)} className="toasts row "> 
            <div className="message col"> <p>{message}</p></div>
            <div className="button col" > X</div>
            </div>
    )
}

export default Toasts
