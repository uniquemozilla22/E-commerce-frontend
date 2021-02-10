import React,{useState} from 'react'
import ProductSection from './ProductsSection/ProductSection'
import './Shop.css'
import Tags from './Tags/Tags'

const Shop = () => {
    const [tagarray, settagarray] = useState(["shirt", "pants","price"])
    const [tag, setTag] = useState("")


    let message = " "

    let tagSetter=(e)=>{
        let userTag = e.target.value;
        setTag(userTag)
    }

    let submitHandler =(e) =>{
        e.preventDefault();
        settagarray([...tagarray,tag])
    }
    
    let deleteTag =(index)=>{
        let newarray = tagarray;
        newarray.splice(index,1);
        settagarray(newarray)
        console.log(newarray)
    }


    return (
        <section id="shop">
            <div className="filter">
                <div className ="container">
                    <form onSubmit={e=>tagSetter(e)}>
                    <div class="row">
                        <div class="col s12 center">
                            <div class="input-field">
                                        <i class="material-icons prefix">search</i>
                                        <input type="text" id="autocomplete-input" onChange={(e)=>tagSetter(e)} class="autocomplete"/>
                                        <label for="autocomplete-input">Search Shop</label>
                                        <button type="submit" onClick={(e)=>submitHandler(e)} style={{"display":'none'}}/>
                            </div>
                        </div>
                    </div>
                    </form>
                     <Tags values={tagarray} removeTag={deleteTag}></Tags>
                </div>
            </div>
    
           <ProductSection/>
        </section>
    )
}

export default Shop
