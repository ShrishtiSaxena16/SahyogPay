import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
//import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import login from '../assets/logIn.jpg';

const SignIn = () => {
    const [email, setEmail]= useState('');
    const [password, setPassword]= useState('');
    const navigate= useNavigate();
  
  const handleSignIn = async(e)=> {
    e.preventDefault();
    try{
      console.log('Sending:', { email, password });
      const response= await axios.post('http://localhost:5000/api/users/login', {
        email,
        password,
      });
      console.log(response.data);
      if(response.data.token){
        const token= response.data.token;
        const userRole= response.data.role;
        // toast.success("Registration successful", {
        //   position: toast.POSITION.TOP.RIGHT
        // )
        // }
        //Redirected to dashboard
        localStorage.setItem('token', token); 
        if(userRole=== 'lender') navigate ('/lender/dashboard');
        else if(userRole=== 'admin') navigate ('/admin/dashboard');
        else navigate('/borrower/dashboard');
      }
    }catch(error){
      console.error('SignIn Failed!', error.response ? error.response.data : error.message);
      alert(error.response ? error.response.data.message : 'SignIn failed! Please try again.');
    }
  };
  return (
    <div className="flex h-screen">
      <div className="w- 1/2 bg-grey-100">
        <img src= {login} alt= "Register" className="object-cover w-full h-full" />
      </div>
      <div className="w-1/2 flex flex-col justify-center px-16 bg-white">
      <h2 className="text-3xl font-bold mb-6 ">Create an Account</h2>
        <form onSubmit={handleSignIn}>      
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
              placeholder="name@mail.com"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
              placeholder="********"
            />
          </div>
          <button className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition duration-200">
            SignIn
          </button>
        </form>
        <Link to="/register" className="text-indigo-600 hover:underline">Don't have an account? Register Now</Link>
      </div>
    </div>
  )
}

export default SignIn;