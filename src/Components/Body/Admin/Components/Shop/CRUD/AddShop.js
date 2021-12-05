 import React , {useState,useEffect} from 'react'
 import Axios from 'axios'

const AddShop = () => {

    let [FormsState,setFormsState] = useState({
      name:{
        content:'',
        required:true
      },
      description:{
        content:'',
        required:false
      },
      discount:{
        content:0,
        required:true
      },
      contactNumber:{
        content:'',
        required:true
      },
      email:{
        content:'',
        required:false
      },
      products:{
        content:[],
        required:false
      }
    })

  
    let [Name , setName ]= useState("")
    let [Description , setDescription ]= useState("")
    let [ContactNumber , setContactNumber ]= useState("")
    let [Email , setEmail ]= useState("")
    let [Discount , setDiscount ]= useState(0)

  
    let Submithandler=(e)=>{
      console.log(Name)
  
      e.preventDefault();
      
      setFormsState({
        ...FormsState,
        name:{
          ...FormsState.name,
          content:Name,
        },
        description:{
          ...FormsState.description,
          content:Description,
        },
        discount:{
          ...FormsState.discount,
          content:Discount,
        },
        contactNumber:{
          ...FormsState.contactNumber,
          content:ContactNumber,
        },
        email:{
          ...FormsState.email,
          content:Email,
        }
      })

      Axios.post('http://localhost:4000/insert/shop/',{FormsData:FormsState})
   
    }

    return (
          <>
              <form className="container" onSubmit={(e)=>Submithandler(e)}>
              <h1>Add Shop</h1>
  
  
              <div class="row">
      <div class="col s12">
        <div class="row">
          <div class="input-field col s12">
            <input onChange={(e)=>setName(e.target.value)} type="text" id="autocomplete-input" class="autocomplete-input" required={FormsState.name.required}  />
            <label for="autocomplete-input">Name</label>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col s12">
        <div class="row">
          <div class="input-field col s12">
            <textarea id="textarea2" class="materialize-textarea" data-length="500" required={FormsState.description.required}  onChange={(e)=>setDescription(e.target.value)} ></textarea>
            <label for="textarea2">Description</label>
          </div>
        </div>
      </div>
    </div>
  
    <div class="row">
      <div class="col s12">
        <div class="row">
        <div class="input-field col s12 m4 l4 xl4">
            <input type="number" id="autocomplete-input" class="autocomplete"  required={FormsState.description.discount} onChange={(e)=>setDiscount(e.target.value)}/>
            <label for="autocomplete-input">Discount (%)</label>
          </div>
          <div class="input-field col s12 m4 l4 xl4">
            <input type="number" id="autocomplete-input" class="autocomplete"  required={FormsState.contactNumber.required}  onChange={(e)=>setContactNumber(e.target.value)}/>
            <label for="autocomplete-input">Contact Number</label>
          </div>
          <div class="input-field col s12 m4 l4 xl4">
            <input type="email" id="autocomplete-input" class="autocomplete"  required={FormsState.email.required}  onChange={(e)=>setEmail(e.target.value)}/>
            <label for="autocomplete-input">Email</label>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col s12">
        <div class="row">
          <div class="input-field col s12">
            <input type="submit" id="autocomplete-input" class="autocomplete"/>
          </div>
        </div>
      </div>
    </div>
        
              </form>
          </>
      )
  }

  export default AddShop
  