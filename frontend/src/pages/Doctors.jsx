// import React, { useContext, useState, useEffect } from "react";
// import { useNavigate, useParams } from "react-router-dom";
// import "../styles/doctors.css";
// import { AppContext } from "../context/AppContext";

// const Doctors = () => {
//   const { speciality } = useParams();
//   const [filterDoc, setFilterDoc] = useState([]);
//   const navigate = useNavigate()

//   const { doctors } = useContext(AppContext);

//   const applyFilter = () => {
//     if (speciality) {
//       setFilterDoc(doctors.filter((doc) => doc.speciality === speciality));
//     } else {
//       setFilterDoc(doctors);
//     }
//   };
//   useEffect(() => {
//     applyFilter();
//   }, [doctors, speciality]);

//   return (
//     <>
//         <div className="para">
//         <p>Browse through the doctors category</p>
//         </div>
//       <div className="fullbox">
//         <div className="left-container">
//         <div className="doc-list">
//             <p onClick={()=>speciality === 'General physician' ? navigate('/doctors'): navigate('/doctors/General physician')} className={`${speciality === "" ? "color": ""}`}>General physician</p>
//             <p onClick={()=>speciality === 'Gynecologist' ? navigate('/doctors'): navigate('/doctors/Gynecologist')}>Gynecologist</p>
//             <p onClick={()=>speciality === 'Dermatologist' ? navigate('/doctors'): navigate('/doctors/Dermatologist')}>Dermatologist</p>
//             <p onClick={()=>speciality === 'Pediatricians' ? navigate('/doctors'): navigate('/doctors/Pediatricians')}>Pediatricians</p>
//             <p onClick={()=>speciality === 'Neurologist' ? navigate('/doctors'): navigate('/doctors/Neurologist')}>Neurologist</p>
//             <p onClick={()=>speciality === 'Gastroenterologist' ? navigate('/doctors'): navigate('/doctors/Gastroenterologist')}>Gastroenterologist</p>
//         </div>
//         </div>
//         <div className="doc-container">
//           {filterDoc.map((item, index) => (
//             <div
//               onClick={() => navigate(`/appointment/${item._id}`)}
//               className="cards"
//               key={index}>
//               <img src={item.image} alt="" />
//               <div className="cardinfo">
//                 <div className="available">
//                   <p className="online-dot"></p>
//                   <p>Available</p>
//                 </div>
//                 <p id="topdocname">{item.name}</p>
//                 <p>{item.speciality}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </>
//   );
// };

// export default Doctors;



import React, { useContext, useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "../styles/doctors.css";
import { AppContext } from "../context/AppContext";

const Doctors = () => {
  const { speciality } = useParams();
  const [filterDoc, setFilterDoc] = useState([]);
  const [activeSpeciality, setActiveSpeciality] = useState(speciality || ""); // Tracks the active specialty
  const navigate = useNavigate();
  const { doctors } = useContext(AppContext);

  const applyFilter = () => {
    if (speciality) {
      setFilterDoc(doctors.filter((doc) => doc.speciality === speciality));
    } else {
      setFilterDoc(doctors);
    }
  };

  useEffect(() => {
    applyFilter();
  }, [doctors, speciality]);

  const handleSpecialityClick = (spec) => {
    // Toggle navigation and active state
    if (speciality === spec) {
      navigate("/doctors");
      setActiveSpeciality("");
    } else {
      navigate(`/doctors/${spec}`);
      setActiveSpeciality(spec); // Set the active specialty
    }
  };

  return (
    <>
      <div className="para">
        <p>Browse through the doctors category</p>
      </div>
      <div className="fullbox">
        <div className="left-container">
          <div className="doc-list">
            {["General physician", "Gynecologist", "Dermatologist", "Pediatricians", "Neurologist", "Gastroenterologist"].map((spec, index) => (
              <p
                key={index}
                onClick={() => handleSpecialityClick(spec)}
                style={{
                  backgroundColor: activeSpeciality === spec ? "rgb(234 239 255)" : "transparent", // Change bg color based on active state
                  color: activeSpeciality === spec ? "black" : "black", // Adjust text color for better visibility
                  cursor: "pointer",
                  padding: "10px",
                  borderRadius: "5px",
                }}
              >
                {spec}
              </p>
            ))}
          </div>
        </div>
        <div className="doc-container">
          {filterDoc.map((item, index) => (
            <div
              onClick={() => navigate(`/appointment/${item._id}`)}
              className="cards"
              key={index}
            >
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
      </div>
    </>
  );
};

export default Doctors;
