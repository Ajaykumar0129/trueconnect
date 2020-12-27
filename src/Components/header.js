import React from 'react'
import {Navbar,Nav,Badge} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
const navbar=()=>{
    return(
<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">

  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#features"> <Badge variant="success">1</Badge>{' '}UserDetails</Nav.Link>
      <Nav.Link href="#pricing"> <Badge variant="success">2</Badge>{' '}CompanyDetails</Nav.Link>
      <Nav.Link href="#pricing"> <Badge variant="success">3</Badge>{' '}OTP</Nav.Link>
    </Nav>
   
  </Navbar.Collapse>
</Navbar>
    )
}
export default navbar