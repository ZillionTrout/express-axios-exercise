const express = require('express');
const axios = require('axios');
const app = express();

// Iteration 1
app.get('/pikachu', (req, res, next) => {
  axios.get('https://pokeapi.co/api/v2/pokemon/pikachu')
  .then(response => {
    res.status(200).json(response.data);
  })
  .catch(err => console.log(err))
});

// Iteration 2
app.get('/rockets', async (req, res, next) => {
  try {
    const response = await axios.get('https://api.spacexdata.com/v4/rockets');
    res.json(response.data);
  } catch (error) {
    console.log(error)
  }
})

// Iteration 3
app.get('/randomuser', async (req, res, next) => {
  try {
    const respo = await axios.get('https://randomuser.me/api/');
    res.json(respo.data);
  } catch (error) {
    console.log(error)
  }
});

// Iteration 4
app.get('/', (req, res) => {
  res.send("<a href = '/pikachu'</a> pikachu <a href = '/rockets'</a>rockets <a href='/randomuser'</a> Randomuser")
})

app.listen(3000, () => { console.log('Server running on port 3000 🛫') })