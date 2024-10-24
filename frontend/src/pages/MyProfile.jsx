import React, { useState } from "react";
import { assets } from "../assets/assets";
import '../styles/myprofile.css'
const MyProfile = () => {
  const [userData, setUserData] = useState({
    name: "Bhavya Rathore",
    image: assets.profile_pic,
    email: "bhavyarathore575@gmail.com",
    phone: "+91 12233445",
    address: {
      line1: "Ludhiana",
      line2: "Punjab",
    },
    gender: "Male",
    dob: "2003-07-12",
  });

  const [isEdit, setIsEdit] = useState(false);
  return (
    <div className="profile-cont">
      <div className="profile-img">
      <img src={userData.image} alt="" />
      </div>
      <div className="profile-name">
      {isEdit ? (
        <input
        type="text"
        value={userData.name}
        onChange={(e) =>
          setUserData((prev) => ({ ...prev, name: e.target.value }))
        }
        />
      ) : (
        <p>{userData.name}</p>
      )}
      </div>
      <div className="hr-tag">
      <hr/>
      </div>


      <p id="profile-heading">CONTACT INFORMATION</p>
      <div className="profile-contact">

        <div className="email headingcolor flex">
          <p id="contact-info">Email id:</p>
          <p className="email-data">{userData.email}</p>
        </div>


        <div className="phone headingcolor flex">
          <p id="contact-info">Phone:</p>
          {isEdit ? (
            <input
              type="text"
              value={userData.phone}
              onChange={(e) =>
                setUserData((prev) => ({ ...prev, phone: e.target.value }))
              }
            />
          ) : (
            <p>{userData.phone}</p>
          )}
          
        </div>

        <div className="address headingcolor flex">

          <p id="contact-info">Address:</p>
          {isEdit ? (
            <p>
              <input
                onChange={(e) =>
                  setUserData((prev) => ({
                    ...prev,
                    address: { ...prev.address, line1: e.target.value },
                  }))
                }
                value={userData.address.line1}
                type="text"
                />
              <br />
              <input
                onChange={(e) =>
                  setUserData((prev) => ({
                    ...prev,
                    address: { ...prev.address, line2: e.target.value },
                  }))
                }
                value={userData.address.line2}
                type="text"
                />
            </p>
          ) : (
            <p>
              {userData.address.line1}
              <br />
              {userData.address.line2}
            </p>
          )}
        
              </div>
      </div>
      <p id="profile-heading">
          BASIC INFORMATION
            </p>
      <div className="profile-information">
        <div className="gender flex">
           <p id="contact-info" >GENDER</p>
            {isEdit ? (
              <select
              onChange={(e) =>
                setUserData((prev) => ({ ...prev, gender: e.target.value }))
              }
              value={userData.gender}
              >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            ) : (
              <p>{userData.gender}</p>
            )}
            </div>

            <dov className="dob flex">
            <p id="contact-info">Birthday</p>
            {isEdit ? (
              <input
              type="date"
              onChange={(e) =>
                setUserData((prev) => ({ ...prev, dob: e.target.value }))
              }
              value={userData.dob}
              name=""
              id=""
              />
            ) : (
              <p>{userData.dob}</p>
            )}
            </dov>
      </div>
      <div className="profile-button">
        {
          isEdit
          ? <button onClick={()=>setIsEdit(false)}>Save information</button>
          : <button onClick={()=>setIsEdit(true)}>Edit</button>
        }
      </div>
    </div>
  );
};

export default MyProfile;
