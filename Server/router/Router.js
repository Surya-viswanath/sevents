const express = require('express');

const {clientSignup,getclient,deleteclient} = require('../controller/Clientsignup');
const jwttoken = require('../Token/token');
const protect = require('../Middlewear/Tocken');
const login = require('../controller/Login');

const { getevents, Createvents, deleteevent } = require('../controller/Eventss');
const { adminSignup } = require('../controller/Adminsignup');
const adminlogin = require('../controller/Adminlogin');

const managerlogin = require('../controller/Managerlogin');
const { managerSignup, getmanager, deletemanager } = require('../controller/Managersign');
const { addEvent, Getevent, singleEvent } = require('../controller/event/eventControll');
// const { userSignUp } = require('../controller/user/userSignUpp');
const userSignIn = require('../controller/user/userSignIn');
const { authVerify } = require('../controller/auth/authVerify');
const payment = require('../controller/payment/getPayment');
// const { payment } = require('../controller/payment/getPayment');
// const payment = require('../controller/payment/getPayment');

// const { userSignIn } = require('../controller/user/userSignIn');
const userSignUp = require('../controller/user/userSignUpp');
const CustomEvents = require('../event/events/customEventPost');
const inboxByUser = require('../event/events/inboxByUser');
const findCustomEvent = require('../event/events/findCustomEvent');
const updatePendingStatus = require('../event/events/updatePendingStatus');




const router = express.Router();
const middleware=[protect]

// router.route('/Signupclient').post(clientSignup)
router.route('/Signupadmin').post(adminSignup)
// router.route('/verify').get(middleware,clientSignup)
router.route('/Signupclient').post(userSignUp)
router.route('/login').post(userSignIn)
router.route('/token-verify').post(authVerify)

router.route('/order').post(payment)

router.route('/adminlogin').post(adminlogin)
router.route('/managerlogin').post(managerlogin)
router.route('/Signupmanager').post(managerSignup)

router.route('/getclient').get(getclient)  
router.route('/getmanager').get(getmanager)  
router.route('/deletemanager/:id').delete(deletemanager)
router.route('/delete/:id').delete(deleteclient)
router.route('/eventcreate').post(Createvents)
router.route('/getevent').get(getevents)  
router.route('/deleteevent/:id').delete(deleteevent)
router.route('/custom-event').post(CustomEvents)
router.route('/custom-event/inbox').get(inboxByUser)

router.route('/add-event').post(addEvent);
router.route('/events').get(Getevent);
router.route('/event/:id').get(singleEvent);
//admin//
router.route('/custom-event').get(findCustomEvent)
router.route('/custom-event/:id').patch(updatePendingStatus)


module.exports =router