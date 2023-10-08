import React, { useContext } from 'react'
import "./NavBar.module.css"
import {Link, useNavigate} from "react-router-dom"
import logo from "../../Assets/images/freshcart-logo.svg"
import { userContext } from '../../Context/UserContext'
// import jwt_decode from "jwt-decode";



export default function NavBar() {

  // let encodedToken = localStorage.getItem("userToken")
  // let decodedToken = jwt_decode(encodedToken)


let {userToken , setUserToken} = useContext(userContext)
let navigate = useNavigate()

function logOut() {
  localStorage.removeItem('userToken')
  setUserToken(null)
  navigate("/login")
}

  return <>
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">
      <img src={logo} alt="FreshCart"  />
    </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        
        {userToken !== null?
        <>
        <li className="nav-item">
          <Link className="nav-link" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/brands">Brands</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/categories">Categories</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/cart">Cart</Link>
        </li>
        
        </>: ""}
        
        

        
        </ul>
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
      <li className="nav-item d-flex align-items-center cursor-pointer ">
        {/* <strong className='bolder text-main me-4 font '><i class="fa-solid fa-user fa-fade fa-lg" style={{color: "#4be713" , marginRight:"5px"}}></i> Hi, {decodedToken.name}</strong> */}
        <i className="fa-brands fa-facebook fa-lg me-2" style={{color: "#0b51cb"}}></i>
        <i className="fa-brands fa-instagram fa-lg me-2" style={{color: "#c97d13"}}></i>
        <i className="fa-brands fa-x-twitter fa-lg me-2" style={{color: "#000000"}}></i>
          <i className=' tiktok fab fa-tiktok fa-lg me-2 '></i>
          <i className="fa-brands fa-youtube fa-lg me-2" style={{color: "#ff0000"}}></i>
        </li>

        {userToken !== null ?<>
          <li className="nav-item">
          <span className="nav-link cursor-pointer" onClick={()=> logOut()}>LogOut</span>
        </li>
        </>:
        <>
        
        <li className="nav-item">
          <Link className="nav-link" to="/login">LogIn</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/register">Register</Link>
        </li>
        
        </>}
       
        
        
        
        

        
        </ul>
      
    </div>
  </div>
</nav>
  </>
}
