import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './doctorsList.css';







function DoctorList({ category,onBack }) {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/doctors/${category}`);
        setDoctors(response.data);
      } catch (error) {
        console.error("Error fetching doctors", error);
      }
    };

    fetchDoctors();
  }, [category]);

  return (
    <div>
      <button onClick={onBack} class="back-button">Back to Categories</button>
      <h1 style={{color: 'green'}}>Doctors in {category} Category</h1>
      <div className="doctors-list">
        {doctors.map((doctor, index) => (
          <div key={index} className="doctor-item">
            <div class="image-wrapper">
            <img src={`http://localhost:3001/${doctor.image}`} alt={doctor.name} className="doctor-image" />
            <i className="fas fa-check-circle verification-tick"></i> {/* This is the Font Awesome tick icon */}
            </div>
            <div className="doctor-details">
              <h2>{doctor.name}</h2>
              <div class="specialize-experience">
              <p className="specialization"> {doctor.specialization}</p>
              <p className="experience">{doctor.experience}</p>
              </div>
              <div class="bottom-text-container-two-rows">
                <p><strong> {doctor.location}</strong> <span>•</span> {doctor.clinic}</p>
              <p> ₹{doctor.consultationFee}</p>
              </div>
              <div className="rating-stories-container">
              <button className="like-button">
                  <i className="fa fa-thumbs-up" aria-hidden="true"></i>
                  <span className="rating-text">{doctor.rating}</span>
              </button>

              <p className="patient-stories" style={{color: 'darkgreen',  textDecoration: 'underline', fontSize: 'small', marginLeft: '1em'}}>
                {doctor.patientStories}
            
            </p>
            </div>
            <div class="appointment-section">
            <div className="availability">
            <i className="fa fa-calendar" aria-hidden="true"></i>
              <span className="availability-text">Available today</span>
              </div>
              <div className="booking">
                <span className="book-text">Book Appointment Now</span>
                  <span className="no-fee-text">No booking fee</span>
                </div>


            </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DoctorList;
