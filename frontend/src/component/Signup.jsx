



// import React, { useEffect, useState } from 'react';
// import { Button, Form } from 'react-bootstrap';
// import axios from 'axios';
// import { Link, useNavigate } from 'react-router-dom';
// import './signup.css';

// function Signup() {
//     const navigate = useNavigate();
//     const [Name, setName] = useState('');
//     const [Email, setEmail] = useState('');
//     const [Phone, setPhone] = useState('');
//     const [Password, setPassword] = useState('');
//     const [error, setError] = useState('');

//     const handleName = (event) => {
//         setName(event.target.value);
//     };

//     const handleEmail = (event) => {
//         setEmail(event.target.value);
//     };

//     const handlePassword = (event) => {
//         setPassword(event.target.value);
//     };

//     const handlePhone = (event) => {
//         setPhone(event.target.value);
//     };

//     const handleSubmit = async (event) => {
//         event.preventDefault();
//         setError(''); // Clear previous error message

//         try {
//             const response = await axios.post('http://localhost:4000/Signupclient', { Name, Email, Password, Phone });
//             // const response = await axios.post('http://localhost:4000/Signupadmin', { Name, Email, Password, Phone });
//             console.log(response.data);
//             navigate(`/view/${Email}`);
//         } catch (error) {
//             if (error.response && error.response.data && error.response.data.error) {
//                 setError(error.response.data.error);
//             } else {
//                 setError('An unexpected error occurred.');
//             }
//         }
//     };
   
//     return (
       
//           <div className='sign'>
//             <div style={{margintop:'25%'}}>
//             <Form onSubmit={handleSubmit} style={{ padding: '2% 5%', margin: '1% 30%'}} className='shadow-lg p-3 mb-5 rounded'>
//                 <h5>Create your Account</h5>
//                 {error && <div style={{ color: 'red', marginBottom: '10px' }}>{error}</div>}
//                 <Form.Group className="mb-3" controlId="formBasicName">
//                     <Form.Label>Name</Form.Label>
//                     <Form.Control
//                         type="text"
//                         placeholder="Enter your name"
//                         value={Name}
//                         onChange={handleName}
//                         required
                        
//                     />
//                 </Form.Group>

//                 <Form.Group className="mb-3" controlId="formBasicEmail">
//                     <Form.Label>Email</Form.Label>
//                     <Form.Control
//                         type="email"
//                         placeholder="Enter your email"
//                         value={Email}
//                         onChange={handleEmail}
//                         required
//                     />
//                 </Form.Group>

//                 <Form.Group className="mb-3" controlId="formBasicPassword">
//                     <Form.Label>Password</Form.Label>
//                     <Form.Control
//                         type="password"
//                         placeholder="Enter password"
//                         value={Password}
//                         onChange={handlePassword}
//                         required
//                     />
//                 </Form.Group>

//                 <Form.Group className="mb-3" controlId="formBasicPhone">
//                     <Form.Label>Phone</Form.Label>
//                     <Form.Control
//                         type="text"
//                         placeholder="Enter your phone number"
//                         value={Phone}
//                         onChange={handlePhone}
//                         required
//                     />
//                 </Form.Group>
//                 <div style={{display:'flex'}}>
//                 <Button type="submit" variant="dark">Create</Button>
//                 <Link to="/adminsign" style={{textDecoration:'none',marginLeft:'70%',color:'black'}}><p >Admin</p></Link>
//                 </div>
//             </Form>
//             </div>
//             </div>
        
//     );
// }

// export default Signup;


import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
// import { useAuth } from '../context/AuthProvider'; // Adjust the path as needed
import './signup.css';
import useAuth from '../hooks/useAuth';
// import { useAuth } from '../Authprovider';

function Signup() {
    const navigate = useNavigate();
    const { signup } = useAuth();
    const [Name, setName] = useState('');
    const [Email, setEmail] = useState('');
    const [Phone, setPhone] = useState('');
    const [Password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleName = (event) => {
        setName(event.target.value);
    };

    const handleEmail = (event) => {
        setEmail(event.target.value);
    };

    const handlePassword = (event) => {
        setPassword(event.target.value);
    };

    const handlePhone = (event) => {
        setPhone(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setError(''); // Clear previous error message

        try {
            const response = await signup(Name, Email, Password, Phone);
            // console.log(response.data);
            navigate(`/home`);
        } catch (error) {
            if (error.response && error.response.data && error.response.data.error) {
                setError(error.response.data.error);
            } else {
                setError('An unexpected error occurred.');
            }
        }
    };

    return (
        <div className='sign'>
            <div style={{ marginTop: '25%' }}>
                <Form onSubmit={handleSubmit} style={{ padding: '2% 5%', margin: '1% 30%' }} className='shadow-lg p-3 mb-5 rounded'>
                    <h5>Create your Account</h5>
                    {error && <div style={{ color: 'red', marginBottom: '10px' }}>{error}</div>}
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter your name"
                            value={Name}
                            onChange={handleName}
                            required
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="Enter your email"
                            value={Email}
                            onChange={handleEmail}
                            required
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Enter password"
                            value={Password}
                            onChange={handlePassword}
                            required
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPhone">
                        <Form.Label>Phone</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter your phone number"
                            value={Phone}
                            onChange={handlePhone}
                            required
                        />
                    </Form.Group>
                    <div style={{ display: 'flex' }}>
                        <Button type="submit" variant="dark">Create</Button>
                        <Link to="/adminsign" style={{ textDecoration: 'none', marginLeft: '70%', color: 'black' }}>
                            <p>Admin</p>
                        </Link>
                    </div>
                </Form>
            </div>
        </div>
    );
}

export default Signup;