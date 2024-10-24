import React from "react";
import "../styles/myappointments.css";
import { useContext } from "react";
import {AppContext} from '../context/AppContext'
const MyAppointments = () => {
  const { doctors } = useContext(AppContext);
  return (
    <>
    <div className="appointments-text">
      My appointments
    </div>
    <div className="appoint-cont">
        {doctors.slice(0, 4).map((item, index) => (
          <div key={index}>
            <div className="app-cont-box">
            <div className="appoint-img">
              <img src={item.image} alt="" />
            </div>
            <div className="app-doc-detail">
            <p id="app-name">{item.name}</p>
            <p id="app-doc-detail">{item.speciality}</p>
            <p id="app-subhead">Address:</p>
            <p id="app-doc-detail">{item.address.line1}</p>
            <p id="app-doc-detail">{item.address.line2}</p>
            <p><span id="app-subhead">Date & Time: </span><span id="app-doc-detail">25th july</span></p>
            </div>

            <div></div>

            <div className="appointments-btns">
              <button id="pay-online">Pay Online</button>
              <button id="can-appoint">Cancel Appointment</button>
            </div>
          </div>
        </div>
        ))}
    </div>
    </>
  );
};

export default MyAppointments;
