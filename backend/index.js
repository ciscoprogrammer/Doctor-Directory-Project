const express = require('express');
const cors = require('cors');
const axios = require('axios');
const doctorsData = require('./doctorsData.js');
const path = require('path');



const app = express();

app.use(cors());
app.use(express.json());
const imagePath = path.join(__dirname, '..', 'frontend', 'src', 'image');
app.use('/image', express.static(imagePath));



app.get('/', (req, res) => {
    res.send('Server is running!');
  });
  
app.get('/categories', (req, res) => {
  
  res.json([
    {name: 'Dentist'}, 
    {name: 'Gynecologist'},
    {name: 'Dietician'}
]);
});

app.get('/doctors/:category', async (req, res) => {
  // Using Faker API to get random user data as doctor
  const category = req.params.category;
  if (doctorsData[category]) {
    res.json(doctorsData[category]);
  } else {
    res.status(404).send('Category not found');
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
