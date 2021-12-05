import React,{useEffect, useState,Component} from 'react'
import SectionBar from '../../../Header/NavigationItems/SectionBar'
import AdminShop from './Shop/Shop'
import { Route, Switch } from 'react-router'
import Products from './Products/products'
import Profile from './Profile/Profile'
import axios from 'axios'


 class AdminLayout extends Component {
    constructor(props){
        super(props)
        this.state={
            user:{},
            contentShow:false
        }
    
    }

    async componentDidMount() {

        try{
        let response = await axios.get("http://localhost:4000/api/users")
        if(response)
            {
                this.setState({
                    user:response.data
                })
                this.setState({contentShow:true})
            }
        }
        catch (e){
            console.log(e)
            return this.setState({contentShow:false})
        }
    }

    

    render() {
    const sectionLink = ["shop","products","profile"]

    let Display = this.state.contentShow?<>
    <SectionBar tag ="admin" links={sectionLink}/>
    <Switch>
        <Route path="/admin/shop" exact component={AdminShop}/>
        <Route path="/admin/products" exact component={Products}/>
        <Route path="/admin/profile" exact component={Profile}/>
    </Switch>
    </>:<p>Nothing to display</p>;

        return (
            <>
                {Display}   
            </>
        )
    }
    
}

export default AdminLayout
