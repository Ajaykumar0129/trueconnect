import React, {useState } from 'react'
import {Form,Button} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useHistory } from "react-router-dom";
import Navbar from '../Components/header'
const Login=()=>{
    let history = useHistory();
    const [name,setName]=useState('')
    const [email,setEmail]=useState('')
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
      const form = event.currentTarget;
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      }
      setValidated(true);

      if(email.length!==0 && name.length!==0)
      {
         const checkuser=localStorage.getItem("SessionData")
         checkuser.indexOf(email)
         console.log( checkuser.indexOf(email))
      }

    }

    return(
        <> 
        <Navbar step={4}/>
           <div style={{display:"flex",justifyContent:'center',alignItems:'center',marginTop:80}}>
              <h3> Login Page</h3>
           </div>
        <div style={{display:"flex",justifyContent:'center',alignItems:'center',marginTop:20}}>
          
            <div style={{ border: "1px solid black",width:550,display:"flex",justifyContent:'center',alignItems:'center',borderRadius:10}}>
            <Form noValidate validated={validated} onSubmit={handleSubmit} style={{width:400}}>
          
         <Form.Group>
           <Form.Label style={{marginTop:10}}>Email id</Form.Label>
           <Form.Control type="email" placeholder="Enter Email" value={email}   required onChange={(e)=>setEmail(e.target.value)}/>
           <Form.Control.Feedback type="invalid">
              Please Enter a Email.
            </Form.Control.Feedback>
         </Form.Group>

         <Form.Group>
           <Form.Label>Name</Form.Label>
           <Form.Control type="text" placeholder="Enter FullName" value={name}   required onChange={(e)=>setName(e.target.value)}/>
           <Form.Control.Feedback type="invalid">
              Please Enter a Name.
            </Form.Control.Feedback>
         </Form.Group>

        <Button variant="success" size="lg" block type="submit" onChange={()=>{}}>Login</Button>
       <ToastContainer/>
       <Form.Group>
           <Form.Label style={{marginTop:25,fontSize:15,display:'flex',justifyContent:'center',alignContent:'center'}}>Didn't have a account?<Button variant="link" onClick={()=>{history.push("/UserDetails")}} style={{fontSize:15,marginTop:-7,marginLeft:-5}}>Signup</Button></Form.Label> 
        </Form.Group>
        </Form>
            </div>
       
        </div>
        </>
    )
}
export default Login;
