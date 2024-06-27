import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './components/Main';
import ErrorPage from './components/ErrorPage';
import Home from './components/Home';
import Booking from './components/Booking';
import About from './components/About';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';
import Schedule from './components/Schedule';
import Login from './components/Login';
import Register from './components/Register';
import Events from './components/Events';
import EventDetails from './components/EventDetails';
import Shop from './components/Shop';
import CustomEvent from './components/CustomEvent';
import PaymentPage from './components/PaymentPage';
import PaymentSuccess from './components/PaymentSuccess';
import PaymentFail from './components/PaymentFail';
import RequestOrganizer from './components/RequestOrganizer';
import MyCart from './components/MyCart';
import PrivateRoute from './components/PrivateRoute';
import Dashboard from './components/Dashboard';
import DashboardHome from './components/DashboardHome';
import CustomEventBooking from './components/CustomEventBooking';
import AddEvent from './components/AddEvent';
import UpdateEvent from './components/UpdateEvent';
import Settings from './components/Settings';
import Profile from './components/Profile';
import OrganizerRequest from './components/OrganizerRequest';
import CustomEventDashboard from './components/CustomEventDashboard';
import DashboardAdminHome from './components/DashboardAdminHome';
import Wishlist from './components/Wishlist';
import CustomEventUser from './components/CustomEventUser';
import UserBookings from './components/UserBookings';
import PaymentHistory from './components/PaymentHistory';
import Cart from './components/Cart';
import AllUsers from './components/AllUsers';
import EditUser from './components/EditUser';
import AllEvents from './components/AllEvents';
import BookedTickets from './components/BookedTickets';
import AddProduct from './components/AddProduct';
import AllProducts from './components/AllProducts';
import ShopOrders from './components/ShopOrders';
import Mails from './components/Mails';
import AdminRouter from './components/AdminRouter';

const Dummy = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Main />} errorElement={<ErrorPage />}>
        <Route index element={<Home />} />
        <Route path="booking" element={<Booking />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="schedule" element={<Schedule />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="events" element={<Events />} />
        <Route path="event-details/:_id" element={<EventDetails />} />
        <Route path="shop" element={<Shop />} />
        <Route path="create-your-event" element={<CustomEvent />} />
        <Route path="payment/:_id" element={<PaymentPage />} />
        <Route path="payment/success/:tranId" element={<PaymentSuccess />} />
        <Route path="payment/fail/:transId" element={<PaymentFail />} />
        <Route path="request-organizer" element={<RequestOrganizer />} />
        <Route path="my-cart" element={<MyCart />} />
      </Route>

      <Route
        path="/dashboard"
        element={
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        }
      >
        <Route path="user" element={<PrivateRoute><DashboardHome /></PrivateRoute>} />
        <Route path="custom-event-booking" element={<PrivateRoute><CustomEventBooking /></PrivateRoute>} />
        <Route path="add-event" element={<PrivateRoute><AddEvent /></PrivateRoute>} />
        <Route
          path="edit-event/:id"
          element={<PrivateRoute><UpdateEvent /></PrivateRoute>}
          loader={({ params }) => fetch(`https://dream-craft-server.vercel.app/event/${params.id}`)}
        />
        <Route path="settings" element={<PrivateRoute><Settings /></PrivateRoute>} />
        <Route path="profile" element={<PrivateRoute><Profile /></PrivateRoute>} />
        <Route path="organizer-request" element={<PrivateRoute><OrganizerRequest /></PrivateRoute>} />
        <Route path="custom-event-request" element={<AdminRouter><CustomEventDashboard /></AdminRouter>} />
        <Route path="admin" element={<AdminRouter><DashboardAdminHome /></AdminRouter>} />
        <Route path="wishList" element={<PrivateRoute><Wishlist /></PrivateRoute>} />
        <Route path="customEvent" element={<PrivateRoute><CustomEventUser /></PrivateRoute>} />
        <Route path="my-bookings" element={<PrivateRoute><UserBookings /></PrivateRoute>} />
        <Route path="payment-history" element={<PrivateRoute><PaymentHistory /></PrivateRoute>} />
        <Route path="cart" element={<PrivateRoute><Cart /></PrivateRoute>} />
        <Route path="all-users" element={<AdminRouter><AllUsers /></AdminRouter>} />
        <Route
          path="edit-user/:id"
          element={<AdminRouter><EditUser /></AdminRouter>}
          loader={({ params }) => fetch(`https://dream-craft-server.vercel.app/user/${params.id}`, { method: 'POST' })}
        />
        <Route path="events" element={<AdminRouter><AllEvents /></AdminRouter>} />
        <Route path="booked-tickets" element={<AdminRouter><BookedTickets /></AdminRouter>} />
        <Route path="add-product" element={<AdminRouter><AddProduct /></AdminRouter>} />
        <Route path="products" element={<AdminRouter><AllProducts /></AdminRouter>} />
        <Route path="product-orders" element={<AdminRouter><ShopOrders /></AdminRouter>} />
        <Route path="all-mails" element={<AdminRouter><Mails /></AdminRouter>} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default Dummy;