import React from "react";
import "../styles/footer.css";
import { assets } from "../assets/assets";
import {useNavigate} from 'react-router-dom'

const Footer = () => {
  const navigate = useNavigate()
    
  return (
    <div>
      <div className="footerbox">
        <div className="footer-text">
          <div>
            <img src={assets.logo} alt="" />
          </div>
          <div className="text">
            At ClinicIn, we make healthcare accessible and convenient. Book
            appointments with trusted doctors easily through our platform, and
            get the care you need, when you need it. Your health is our
            priority, and we’re here to support you every step of the way. Stay
            connected with ClinicIn for reliable healthcare solutions.
          </div>
        </div>
        <div className="footer-company">
          <div>
            <h1>COMPANY</h1>
            <ul>
              <li>Home</li>
              <li onClick={()=>navigate('./about')}>About us</li>
              <li>Delivery</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
          <div>
            <h1>GET IN TOUCH</h1>
            <ul>
              <li>+1-1223-2223</li>
              <li>bhavyarathore575@gmail.com</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="downfooter">Copyright 2024 - All Right Reserved.</div>
    </div>
  );
};

export default Footer;
