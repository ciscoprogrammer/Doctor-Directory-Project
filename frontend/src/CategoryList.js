import React, { useEffect, useState } from 'react';
import axios from 'axios';
import dentistImage from './image/dentistImage.jfif';
import dieticianImage from './image/dieticianImage.jfif';
import gynecologistImage from './image/gynecologistImage.jfif';
import './CategoryList.css';
import Navbar from './Navbar';


function CategoryList({onCategoryClick}) {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get('http://localhost:3001/categories');
        setCategories(response.data);
      } catch (error) {
        console.error("Error fetching categories", error);
      }
    }

    fetchCategories();
  }, []);

  const categoryImages = {
    Dentist: dentistImage,
    Dietician: dieticianImage,
    Gynecologist: gynecologistImage,
    
  };

  return (
    <div className="category-list">
      <Navbar/>
      <h1 style={{color: 'orange' }}>Book an Appointment for an in-clinic consultation</h1>
      <p>Find experienced doctors across all specialities</p>
      <div className="categories">
        {categories.map((category, index) => (
          <div key={index} className="category" onClick={() => onCategoryClick(category)}>
            <img src={categoryImages[category.name]} alt={category.name} className="category-image" />
            <h2 style={{color: 'blue' }}>{category.name}</h2>
            <p>{category.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CategoryList;
