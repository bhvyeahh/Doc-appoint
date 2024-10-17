import React from 'react'
import "../styles/banner.css";
import {assets} from '../assets/assets'
import {useNavigate} from 'react-router-dom'
const Banner = () => {
const navigate = useNavigate()
  return (
    <div className='banner'>
      <div className="left-one">
            <h1>
            Book Appointment With 100+ Trusted Doctors
            </h1>  
            <button onClick={()=>navigate('/login')}><a id='btncss'>Create account</a></button>
      </div>
      <div className="right-one">
        <img className='banner-img' src={assets.appointment_img} alt="" />
      </div>
    </div>
  )
}

export default Banner
