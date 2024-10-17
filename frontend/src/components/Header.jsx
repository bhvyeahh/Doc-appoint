import React from 'react'
import { assets } from '../assets/assets'
import "../styles/header.css";
const Header = () => {
    // const navigate = useNavigate()
  return (
    <div className='headerbox'>
            {/* for left */}
        <div className='left'> 
            <div className="left-one"> 
                <h1>Book Appointment with our Trusted Doctors</h1>
            </div>
            <div className='left-two'>
                <img src={assets.group_profiles} alt="" />
                <p>Browse through our list of trusted doctors</p>
            </div>
            <div className="left-three">
                <a href = "#speciality">
                    Book appointment
                    <img src={assets.arrow_icon} alt="" />
                </a>
            </div>
        </div>

            {/* for right */}
            <div className='right'> <img src={assets.header_img} alt="" />  </div>
    </div>
  )
}

export default Header
