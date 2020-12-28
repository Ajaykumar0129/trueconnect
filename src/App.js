import react from 'react'
import UserDetails from './Components/userdetails'
import CompanyDetails from './Components/companydetails'
import OTPVerify from './Components/otpauth'
import NotFound from './Components/notfound'
import Login from './Components/login'
import {BrowserRouter as Router,Switch,Route,Link } from 'react-router-dom'
const App=()=>{

 return(
   <>
  <Router>
         <Switch>
           <Route exact path="/" component={Login}></Route>
           <Route exact path="/UserDetails" component={UserDetails}></Route>
           <Route exact path="/CompanyDetails" component={CompanyDetails}></Route>
           <Route exact path="/OTP" component={OTPVerify}></Route>
           <Route component={NotFound} />
         </Switch>
       </Router>
   </>
 )

}

export default App;