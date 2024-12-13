import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
const Logout = ({regLog}) => {
  const navigate = useNavigate();
  useEffect(()=>{
    regLog(null);
    navigate("/");
  },[]);
  return (
    <div>Logout</div>
  )
}

export default Logout