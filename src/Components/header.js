import React from 'react'
import {Navbar,Nav,Badge} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
const navbar=({step})=>{
    return(
<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      {step=='1'?<Nav.Link href="#"> <Badge variant="success" style={{fontSize:15,borderRadius:15}}>1</Badge>{' '}UserDetails</Nav.Link>:null}
      {step=='2'?<Nav.Link href="#"> <Badge variant="success" style={{fontSize:15,borderRadius:15}}>2</Badge>{' '}CompanyDetails</Nav.Link>:null}
      {step=='3'?<Nav.Link href="#"> <Badge variant="success" style={{fontSize:15,borderRadius:15}}>3</Badge>{' '}OTP Verification</Nav.Link>:null}
      {step=='4'?<Nav.Link href="#">Login page</Nav.Link>:null}
    </Nav>
  </Navbar.Collapse>
</Navbar>
    )
}
export default navbar