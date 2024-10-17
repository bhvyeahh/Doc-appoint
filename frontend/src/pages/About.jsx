import React from "react";
import { assets } from "../assets/assets";
import "../styles/about.css";
const About = () => {
  return (
    <>
    <div className="about-text">
      <p>ABOUT US</p>
    </div>
      <div className="about-cont">
        <div className="about-box1-left">
          <img src={assets.about_image} alt="" />
        </div>
        <div className="about-box1-right">
          <p>
            Welcome to ClinicIn, your trusted partner in managing your
            healthcare needs conveniently and efficiently. At Prescripto, we
            understand the challenges individuals face when it comes to
            scheduling doctor appointments and managing their health records.
          </p>
          <p>
          ClinicIn is committed to excellence in healthcare technology. We
            continuously strive to enhance our platform, integrating the latest
            advancements to improve user experience and deliver superior
            service. Whether you're booking your first appointment or managing
            ongoing care, ClinicIn is here to support you every step of the
            way.
          </p>
          <p id="bold">Our Vision</p>
          <p>
            Our vision at ClinicIn is to create a seamless healthcare
            experience for every user. We aim to bridge the gap between patients
            and healthcare providers, making it easier for you to access the
            care you need, when you need it.
          </p>
        </div>
      </div>

<div className="about-text">
        <p>
          WHY CHOOSE US
        </p>
</div>
      <div className="about-choose">
          <div className="aboutweb">
            <p id="bold">EFFICENCY:</p>
            <p>
              Streamlined appointment scheduling that fits into your busy
              lifestyle.
            </p>
            
          </div>

          <div className="aboutweb">
            <p id="bold">CONVENIENCE:</p>
            <p>
            Access to a network of trusted healthcare professionals in your area.
            </p>
          </div>
          <div className="aboutweb">
            <p id="bold">PERSONALIZATION:</p>
            <p>
            Tailored recommendations and reminders to help you stay on top of your health.
            </p>
          </div>
      </div>
    </>
  );
};

export default About;
