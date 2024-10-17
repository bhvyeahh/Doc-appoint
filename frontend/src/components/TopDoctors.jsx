import React, { useContext } from "react";
import "../styles/topdoctors.css";
import {useNavigate} from 'react-router-dom'
import { AppContext } from "../context/AppContext";
const TopDoctors = () => {
    const navigate = useNavigate()
    const {doctors} = useContext(AppContext)
  return ( 
    <div className="docbox">
      <div className="docboxcon">
        <h1>Our Top Doctors</h1>
        <p>Simply browse through our extensive list of trusted doctors.</p>
      </div>
      <div className="doc-container">
        {doctors.slice(0, 10).map((item, index) => (
          <div onClick={()=>navigate(`/appointment/${item._id}`)} className="cards" key = {index}>
            <img src={item.image} alt="" />
            <div className="cardinfo">
              <div className="available">
                <p className="online-dot"></p>
                <p>Available</p>
              </div>
              <p id="topdocname">{item.name}</p>
              <p>{item.speciality}</p>
            </div>
          </div>
        ))}
      </div>
      <button onClick={()=>{navigate('/doctors'); scrollTo(0,0)}}>More</button>
    </div>
  );
};

export default TopDoctors;
