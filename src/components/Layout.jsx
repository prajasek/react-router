import React, { useContext } from 'react'
import { Navigate, Outlet, useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'

const Layout = () => {

    const [isLoggedIn, setIsLoggedIn] = useContext(AuthContext);
    const navigate = useNavigate();
    console.log("Layout called")

    function Login() {
        console.log("Setting True")
        setIsLoggedIn(true);
        navigate("/blog");
        console.log("End Login Function")

    }
    
    if (!isLoggedIn) {
        return (
        <>
        <h1> You are not LoggedIn </h1> 
        <button onClick={Login}> Login </button>
        </>
        )
    }

  return (
    <div>
        <Outlet />
    </div>
  )
}

export default Layout