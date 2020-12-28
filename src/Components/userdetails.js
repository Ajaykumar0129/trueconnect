import React, { useEffect, useState } from 'react'
import {Form,Button,InputGroup,Image} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import Indiaflag from '../Asset/ind.png'
import USflag from '../Asset/us.png'
import Chinflag from '../Asset/china.png'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useHistory } from "react-router-dom";
import Navbar from '../Components/header'
const UserDetails=()=>{
    let history = useHistory();
    const [name,setName]=useState('')
    const [gender,setGender]=useState('')
    const [country,setCountry]=useState("India")
    const [state,setState]=useState('')
    const [phonenumber,setPhoneNumber]=useState('')
    const indstate=['TamilNadu','kerala','Maharashtra'];
    const US_state=['California','Texas','Washington'];
    const China_state=['Beijing','Yunnan','Hubei']

    const [validated, setValidated] = useState(false);

  

    const handleSubmit = (event) => {
      const form = event.currentTarget;
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
       
      }
      setValidated(true);
      if(gender.length===0)
      {
          return toast.error('Choose any one gender', {
            position: "bottom-right",
            autoClose: 1200,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
      }
      if(country==="India" && phonenumber.length==10 && ((/^[0]?[6789]\d{9}$/).test(phonenumber)==false) || phonenumber.length!=10)
      {
        event.preventDefault();
        event.stopPropagation();
        return toast.error('Invalid PhoneNumber', {
            position: "bottom-right",
            autoClose: 1200,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
      }


       if(name.length!=0 && gender.length!=0 && phonenumber.length==10)
       {
        history.push({
            pathname: '/CompanyDetails',
            state:{userdetails:{
                name:name,
                gender:gender,
                country:country,
                state:state
            }}
       })
       }
    }

    return(
        <> 
        <Navbar step={1}/>

        <div style={{display:"flex",justifyContent:'center',alignItems:'center',marginTop:5}}>
            <h3> Add your personal details</h3>
           </div>

        <div style={{display:'flex',justifyContent:'center',alignItems:'center',marginTop:10}}>
          
        <div style={{ border: "1px solid black",width:550,display:"flex",justifyContent:'center',alignItems:'center',borderRadius:10}}>
          
        <Form noValidate validated={validated} onSubmit={handleSubmit} style={{width:400}}>
         
         <Form.Group>
           <Form.Label>Full Name</Form.Label>
           <Form.Control type="text" placeholder="Enter FullName" value={name}   required onChange={(e)=>setName(e.target.value)}/>
           <Form.Control.Feedback type="invalid">
              Please Enter a Username.
            </Form.Control.Feedback>
         </Form.Group>

         <Form.Label>Gender</Form.Label>
         <Form.Group>
         <Button variant={gender==='Male'?"success":"outline-info"} onClick={()=>setGender('Male')} >Male</Button>   <Button variant={gender==='Female'?"success":"outline-info"} onClick={()=>setGender('Female')} >Female</Button> <Button variant={gender==='Others'?"success":"outline-info"} onClick={()=>setGender('Others')} >Others</Button>
         </Form.Group>
       
         <Form.Group>
         <Form.Label>Country</Form.Label>
         <Form.Control as="select" onChange={(e)=>setCountry(e.target.value)}>
         <option>India</option>
         <option>U.S</option>
         <option>China</option>
         </Form.Control>
         </Form.Group>
 
         <Form.Group>
         <Form.Label>State</Form.Label>
         <Form.Control as="select" onChange={(e)=>setState(e.target.value)}>
            {country==='India'? indstate.map((state)=>{
              return <option key={state}>{state}</option>
            }): null }
            {country==='U.S'? US_state.map((state)=>{
              return <option key={state} >{state}</option>
            }): null }
            {country==='China'? China_state.map((state)=>{
              return <option key={state}>{state}</option>
            }): null }
         </Form.Control>
         </Form.Group>

         <Form.Group>
          <Form.Label>PhoneNumber</Form.Label>
          <InputGroup>
            <InputGroup.Prepend>
              <InputGroup.Text id="inputGroupPrepend"><Image src={country==="India"?Indiaflag:country==="U.S"?USflag:Chinflag} width="25" height="15"></Image></InputGroup.Text>
            </InputGroup.Prepend>
            <Form.Control
              type="number"
              placeholder={country==="India"?"+91":country==="U.S"?"+1":"+86"}
              aria-describedby="inputGroupPrepend"
              required
              value={phonenumber}
              onChange={(e)=>setPhoneNumber(e.target.value)}
            />
             <Form.Control.Feedback type="invalid">
              Please Enter a PhoneNumber.
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
        <Button variant="success" size="lg" block type="submit">Next</Button>
       <ToastContainer/>
       <Form.Group>
           <Form.Label style={{marginTop:25,fontSize:15,display:'flex',justifyContent:'center',alignContent:'center'}}>Already have account?   <Button variant="link" onClick={()=>{history.push("/")}} style={{fontSize:15,marginTop:-7,marginLeft:-5}}>Login</Button></Form.Label> 
        </Form.Group>
        </Form>
       </div>
        </div>
        </>
    )

}
export default UserDetails;