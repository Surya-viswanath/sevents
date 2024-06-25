import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Signup from '../component/Signup'
// import Login from './component/Login'
import Menu from '../component/Menu'
import EventList from '../component/EventList'
import ViewClient from '../component/ViewClient'
import Banner from '../component/Banner'
import Menu1 from '../component/Menu1'
import Myevent from '../component/Myevent'
import Events from '../component/Events'
import Adminlogin from '../Admin/Adminlogin'
import Adminmenu from '../Admin/Adminmenu'
import User from '../Admin/User'
import Adminbanner from '../Admin/Adminbanner'
import Managermenu from '../Manager/Managermenu'
import Managerlogin from '../Manager/Managerlogin'
import Managersignup from '../Manager/Managersignup'
import Managers from '../Admin/Managers'
import Addevent from '../Events/Addevent'
import Eventadd from '../Manager/Eventadd'
import Allevents from '../Manager/Allevents'
import Displayevents from '../Common/Displayevents'
import Eventdetails from '../Common/Eventdetails'
import Paymentpage from '../Common/Payment/Paymentpage'
import About from '../component/About'
// import Login from './auth/Login'
import Register from '../auth/Register'
import Dashboard from '../Common/Dashboard'
import PaymentSuccess from '../Common/Payment/PaymentSuccess'
import UserBookings from '../Common/Payment/userBookings/UserBookings'
import Login from '../auth/Login'
import PaymentFail from '../Common/Payment/PaymentFail'
import Booking from '../Common/booking/Booking'
import CustomEventUser from '../Common/dashboard/CustomEventUser'
import CustomEventDashboard from '../Common/dashboard/CustomEventDashboard'
import DashboardAdminHome from '../Admin/dashboard/DashboardAdminHome'
import PrivateRouter from './PrivateRoute'


function Routerc() {
  return (
   
<BrowserRouter>
<Routes>
<Route path='/' element={<><Menu/><Banner/></>}></Route>
{/* <Route path='/signup' element={<><Menu/><Signup/></>}></Route> */}
<Route path='/login' element={<><Menu/><Login/></>}></Route>
<Route path='/signup' element={<><Menu/><Register/></>}></Route>
{/* <Route path='/login' element={<><Menu/><Login/></>}></Route> */}
<Route path='/admin' element={<><Menu/><Adminlogin/></>}></Route>
<Route path='/adminop' element={<><Adminmenu/><Adminbanner/></>}></Route>
{/* <Route path='/users' element={<><Adminmenu/><User/></>}></Route>
<Route path='/admins' element={<><Adminmenu/><Managers/></>}></Route>
<Route path='/adminlogin' element={<><Menu/><Managerlogin/></>}></Route>
<Route path='/adminsign' element={<><Menu/><Managersignup/></>}></Route> */}
{/* <Route path='/event/:email' element={<><Managermenu/></>}></Route>
<Route path='/viewevent' element={<><Menu/><Events/></>}></Route>
<Route path='/event' element={<><Menu1/><EventList/></>}></Route>
<Route path='/myeve/:email' element={<><Menu1/><Myevent/></>}></Route> */}
<Route path='/home' element={<><Menu1/><Banner/></>}></Route>
<Route path='/eventadd' element={<><Addevent/></>}></Route>
<Route path='/add' element={<><Eventadd/></>}></Route>

<Route path='/eve' element={<><Displayevents/></>}></Route>
<Route path='/event-details/:_id' element={<><Eventdetails/></>}></Route>
<Route path='/payment/:_id' element={<><Paymentpage/></>}></Route>
<Route path='/payment/success/:tranId' element={<><PaymentSuccess/></>}></Route>
<Route path='/payment/fail/:transId' element={<><PaymentFail/></>}></Route>
<Route path='/my-bookings' element={<><UserBookings/></>}></Route>
<Route path='/dashboard/customEvent' element={<><CustomEventUser/></>}></Route>

{/* bookings */}

<Route path='/booking' element={<><Booking/></>}></Route>
<Route path='/about' element={<><About/></>}></Route>
{/* <Route path='/dashboard' element={<><Dashboard/></>}></Route> */}
{/* admin*/}

<Route path='/custom-event-request' element={<><CustomEventDashboard/></>}></Route>
<Route path='/adminh' element={<><DashboardAdminHome/></>}></Route>

<Route path='/events' element={<><Allevents/></>}></Route>



</Routes>
</BrowserRouter>  

  );
}

export default Routerc
