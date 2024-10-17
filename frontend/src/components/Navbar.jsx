import React from "react";
import "../styles/navbar.css";
import { useState } from "react";
import { assets } from "../assets/assets";
import { NavLink, useNavigate } from "react-router-dom";
const Navbar = () => {
    const navigate = useNavigate()
    const [showMenu, setshowMenu] = useState(false)
    const [token, settoken] = useState(true)

  return (
    <div className="navbar">
      <img onClick={()=>navigate('/')} src={assets.logo} alt="" />
      <ul>
        <NavLink to="/">
          <li>HOME</li>
            <hr />
        </NavLink>
        <NavLink to = '/doctors'>
          <li>ALL DOCTORS</li>
          <hr />
        </NavLink>

        <NavLink to = '/about'>
          <li>ABOUT</li>
          <hr />
        </NavLink>

        <NavLink to = '/contact'>
          <li>CONTACT</li>
          <hr />
        </NavLink>

      </ul>
      <div className="">
        {token
            ? <div className="pfp">
                <img src={assets.profile_pic} alt="" />
                <img id="dropdown" src={assets.dropdown_icon} alt="" />
                <div className="dropdown">
                    <div>
                    <ul>
                        <li onClick={()=>navigate('/my-profile')}>My Profile</li>
                        <li onClick={()=>navigate('/my-appointment')}>My Appointments</li>
                        <li  onClick={()=>settoken(false)}>Logout</li>
                    </ul>
                    </div>
                </div>
            </div>:
            <button className="btn" onClick={()=>navigate('/login')}>Create Account</button>
        }
      </div>
    </div>
  );
};

export default Navbar;
