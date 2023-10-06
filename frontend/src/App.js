import React, { useState } from 'react';
import CategoryList from './CategoryList';
import DoctorList from './DoctorList';

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category.name);
  };

  const handleBackClick = () => {
    console.log("Back button clicked!");
    setSelectedCategory(null);
  };

  return (
    <div>
      <h1 style= {{color:'green'}}>Medical Directory</h1>
      {selectedCategory ? (
        <DoctorList category={selectedCategory} onBack={handleBackClick}/>
      ) : (
        <CategoryList onCategoryClick={handleCategoryClick} />
      )}
    </div>
  );
}

export default App;
