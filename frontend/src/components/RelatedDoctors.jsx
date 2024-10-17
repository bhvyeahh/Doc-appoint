import React, { useContext, useEffect,useState } from 'react'
import { AppContext } from '../context/AppContext'
import { useNavigate } from 'react-router-dom'

const RelatedDoctors = ({speciality, docId}) => {
    const {doctors} = useContext(AppContext)
    const navigate = useNavigate()
    const [relDoc, setRelDoc] = useState([])

    useEffect(() => {
      if(doctors.length > 0 && speciality){
        const doctorsData = doctors.filter((doc)=> doc.speciality === speciality && doc._id !==  docId)
        setRelDoc(doctorsData)
      }
    }, [doctors, speciality,docId])
    
  return (
<div className="docbox">
      <div className="docboxcon">
        <h1>Related Doctors</h1>
      </div>
      <div className="doc-container">
        {relDoc.slice(0, 5).map((item, index) => (
          <div onClick={()=>{navigate(`/appointment/${item._id}`); scrollTo(0,0)}} className="cards" key = {index}>
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
      <button onClick={()=>navigate('/doctors')}>More</button>
    </div> 
  )
}

export default RelatedDoctors
