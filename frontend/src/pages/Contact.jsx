import React from 'react'
import '../styles/contact.css'
import { assets } from "../assets/assets";
const Contact = () => {
  return (
    <>
    <div id='bold' className="contact-text">
      CONTACT US
    </div>
    <div className='contact-box'>
      <div className="contact-left">
        <img src= {assets.contact_image} alt="" />
      </div>
      <div className="contact-right">
      <p id='bold'>OUR OFFICE</p>
      <p>00000 Willms Station <br />
      Suite 000, Washington, USA</p>
      <p>Tel: (000) 000-0000 <br />
      Email: greatstackdev@gmail.com</p>
      <p id='bold'>CAREERS AT CLINICIN</p>
      <p>Learn more about our teams and job openings.</p>
      <button>Explore Jobs</button>
      </div>
    </div>
    </>
  )
}

export default Contact
