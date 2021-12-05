import React, { useState,useEffect } from 'react'
import Navigation from './Header/Navigation'
import './layout.css'
import Toasts from './Toasts/Toasts.js'
import Axios from 'axios'
import Mongoose from '../../../node_modules/mongoose'

const Layout = (props) => {

    let [Messages,setMessages] = useState(["Logged in !","Logged out!"])
    
    let toastsDisplay=[]
    

    let dismiss=(index)=>{
        console.log(Messages[index])
        let newmessages = Messages;
        newmessages.splice(index,1);
        setMessages(newmessages)
        
    }

    useEffect(()=>{
        Axios.post("http://localhost:4000/api/users", { test: 'test'})
        .then((response)=>
        {
            console.log(response.data)
        })
        .catch((err)=>console.log(err))
    })


    if(window.location.search)
    {
        const sucess= new URLSearchParams(window.location.search).get("sucessid")

        Messages.map((keys,index)=>{
            return toastsDisplay[index]= <Toasts key = {index} dismiss={()=>dismiss} message={Messages[index]+sucess}/>
         
        })
        
       
    }

    

    let nav = window.location.pathname==="/shop"?<Navigation enableSection/>:<Navigation/>
    return (
        <>
            {nav}
            {props.children}
            <div className="toasts_container">
            {toastsDisplay}
            </div>
            
        </>
    )
}

export default Layout
