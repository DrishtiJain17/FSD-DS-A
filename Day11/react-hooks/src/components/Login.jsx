import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';

const Login = ({regLogin}) => {
  const [email, setEmail]=useState();
  const [password, setPassword]=useState();
  const navigate = useNavigate();
  const handlelogin=(e)=>{
    e.preventDefault();
    if(regLogin.email === email && regLogin.password === password){
      alert("Login Successful");
      navigate("/dashboard");
    }
    else{
      alert("Login Failed");
    }
  }
  return (
    <div>
        <form >
    <div className="form-group">
    <label htmlFor="email">Email address:</label>
    <input type="email" onChange={(e)=>{setEmail(e.target.value)}} className="form-control" id="email"/>
    </div>
    <div className="form-group">
    <label htmlFor="pwd">Password:</label>
    <input type="password" onChange={(e)=>{setPassword(e.target.value)}} className="form-control" id="pwd"/>
    </div>
    <button type="submit" onClick={handlelogin} className="btn btn-success">Login</button>
    </form>
    </div>
  )
}

export default Login