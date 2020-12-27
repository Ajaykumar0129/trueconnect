import React, { useState } from 'react'
import {Form,Button,InputGroup,Image} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useHistory } from "react-router-dom";
const CompanyDetails=()=>{
    let history = useHistory();
    const [name,setName]=useState('')
    const [email,setEmail]=useState('')
    const [jobtitle,setJobTitle]=useState('')
    const [yearofexpe,setYearOfExpe]=useState(0)
    const [validated, setValidated] = useState(false);
    const [tc,setTC]=useState(false)
    const emailregx=/^[a-z0-9][a-z0-9-_\.]+@([a-z]|[a-z0-9]?[a-z0-9-]+[a-z0-9])\.[a-z0-9]{2,10}(?:\.[a-z]{2,10})?$/;

    const handleSubmit = (event) => {
      const form = event.currentTarget;
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      }
      setValidated(true);
    
      

      if(name.length!=0 && emailregx.test(email)==true && jobtitle.length!==0 && tc==true)
      {
        event.preventDefault();
        event.stopPropagation();
      }
     
    }

    return(
        <> 
        <div style={{display:'flex',justifyContent:'center',alignItems:'center',marginTop:50}}>
        <Form noValidate validated={validated} onSubmit={handleSubmit} style={{width:400}}>
            <h3> Add your company details</h3>
         <Form.Group>
           <Form.Label>Company Name</Form.Label>
           <Form.Control type="text" placeholder="Enter CompanyName" value={name}   required onChange={(e)=>setName(e.target.value)}/>
           <Form.Control.Feedback type="invalid">
              Please Enter a CompanyName.
            </Form.Control.Feedback>
         </Form.Group>

         <Form.Group>
           <Form.Label>Email id Name</Form.Label>
           <Form.Control type="email" placeholder="Enter Email id" value={email}   required onChange={(e)=>setEmail(e.target.value)}/>
           <Form.Control.Feedback type="invalid">
              Please Enter a Email id.
            </Form.Control.Feedback>
         </Form.Group>

         <Form.Group>
           <Form.Label>Enter Job Title</Form.Label>
           <Form.Control type="text" placeholder="Enter Job title" value={jobtitle}   required onChange={(e)=>setJobTitle(e.target.value)}/>
           <Form.Control.Feedback type="invalid">
              Please Enter a jobtitle
            </Form.Control.Feedback>
         </Form.Group>

         <Form.Group>
           <Form.Label>Enter year of experience</Form.Label>
           <Form.Control type="number" placeholder="Enter year of experience" value={yearofexpe}   required onChange={(e)=>Math.abs(setYearOfExpe(e.target.value))}/>
           <Form.Control.Feedback type="invalid">
              Please Enter a year of experience
            </Form.Control.Feedback>
         </Form.Group>
       
         <Form.Group>
        <Form.Check
          required
          label="I accept Terms and Conditions"
          feedback="You must agree before submitting."
          style={{fontSize:14}}
          onChange={()=>setTC(!tc)}
        />
      </Form.Group>

         <Button variant="secondary" style={{width:100}}>Back</Button> <Button variant="success" style={{width:250}} type="submit">Next</Button>
       <ToastContainer/>
        <Form.Group>
           <Form.Label style={{marginTop:25,fontSize:15,display:'flex',justifyContent:'center',alignContent:'center'}}>Already have account?   <Button variant="link" style={{fontSize:15,marginTop:-7,marginLeft:-5}}>Login</Button></Form.Label> 
         
        </Form.Group>
        </Form>
       
        </div>
        </>
    )

}
export default CompanyDetails;