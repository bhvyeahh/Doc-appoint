import React, { useEffect, useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { assets } from "../assets/assets";
import "../styles/appointment.css";
import RelatedDoctors from "../components/RelatedDoctors";

const Appointment = () => {
  const { docId } = useParams();
  const { doctors } = useContext(AppContext);
  const daysOfWeek = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

  const [docInfo, setDocInfo] = useState(null);
  const [docSlots, setDocSlots] = useState([]);
  const [slotIndex, setSlotIndex] = useState(0);
  const [slotTime, setSlotTime] = useState("");

  const fetchDocInfo = async () => {
    const docInfo = doctors.find((doc) => doc._id === docId);
    setDocInfo(docInfo);
  };

  const getAvailableSlots = async () => {
    setDocSlots([]);
    let today = new Date();
    let currentHour = today.getHours();
    let currentMinutes = today.getMinutes();

    for (let i = 0; i < 7; i++) {
      let currentDate = new Date(today);
      currentDate.setDate(today.getDate() + i);

      let endTime = new Date();
      endTime.setDate(today.getDate() + i);
      endTime.setHours(21, 0, 0, 0); // End time is 9:00 PM

      // Skip today's date if it's past the available appointment time
      if (i === 0 && currentHour >= 21) {
        continue; // Skip rendering today's slots
      }

      if (i === 0) {
        // If it's today, set the start time based on the current time
        currentDate.setHours(currentHour > 10 ? currentHour + 1 : 10);
        currentDate.setMinutes(currentMinutes > 30 ? 30 : 0);
      } else {
        // Otherwise, set the start time to 10:00 AM
        currentDate.setHours(10);
        currentDate.setMinutes(0);
      }

      let timeSlots = [];
      while (currentDate < endTime) {
        let formattedTime = currentDate.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        });

        // Add slot to array
        timeSlots.push({
          datetime: new Date(currentDate),
          time: formattedTime,
        });

        // Increment time by 30 minutes
        currentDate.setMinutes(currentDate.getMinutes() + 30);
      }

      // Add the generated time slots for this day to the state
      setDocSlots((prev) => [...prev, timeSlots]);
    }
  };

  useEffect(() => {
    fetchDocInfo();
  }, [doctors, docId]);

  useEffect(() => {
    if (docInfo) {
      getAvailableSlots();
    }
  }, [docInfo]);

  useEffect(() => {
    console.log(docSlots);
  }, [docSlots]);

  return (
    docInfo && (
      <>
        <div className="box">
          <div className="doc-img">
            <img src={docInfo.image} alt="" />
          </div>

          <div className="doc-info">
            <div className="doc-name">
              {docInfo.name}
              <img src={assets.verified_icon} alt="" />
            </div>

            <div className="deg">
              {docInfo.degree} - {docInfo.speciality}
              <button className="exp">{docInfo.experience}</button>
            </div>

            <div className="doc-detail">
              About <img src={assets.info_icon} alt="" />
            </div>

            <div className="docAbout">{docInfo.about}</div>

            <div className="fees">Appointment fee: ${docInfo.fees}</div>
          </div>
        </div>

        <div className="date-slots">
          Booking Slots
          <div className="head-slots">
            {docSlots.length > 0 &&
              docSlots.map((item, index) => (
                <div
                  onClick={() =>
                    setSlotIndex(slotIndex === index ? null : index) // Toggle selection
                  }
                  className={`slots ${slotIndex === index ? "selected" : ""}`}
                  key={index}
                >
                  <p>{item[0] && daysOfWeek[item[0].datetime.getDay()]}</p>
                  <p>{item[0] && item[0].datetime.getDate()}</p>
                </div>
              ))}
          </div>
        </div>

        <div className="time-slots">
          <div className="time">
            {docSlots.length > 0 &&
              docSlots[slotIndex]?.map((item, index) => (
                <p
                  onClick={() =>
                    setSlotTime(slotTime === index ? null : index) // Toggle selection
                  }
                  className={`timeslots ${slotTime === index ? "selected" : ""}`}
                  key={index}
                >
                  {item.time.toLowerCase()}
                </p>
              ))}
          </div>
        </div>

        <div className="appointbutton">
          <button>Book an appointment</button>
        </div>

        <RelatedDoctors docId={docId} speciality={docInfo.speciality} />
      </>
    )
  );
};

export default Appointment;
