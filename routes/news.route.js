const express = require('express');
const router = express.Router();
const axios = require('axios')

//BUSINESS
router.get('/business', async (req, res, next) => {
  await axios.get('http://newsapi.org/v2/top-headlines?country=us&category=business&pageSize=50&apiKey=')
  .then(response => {
    //res.json(response.data.articles)
    
      res.render('news', {
      title: "Business Headlines in the US",
      News: response.data.articles
    })
  
  })
})

//TECHNOLOGY
router.get('/technology', async (req, res, next) => {
  await axios.get('http://newsapi.org/v2/top-headlines?country=us&category=technology&pageSize=50&apiKey=')
  .then(response => {
    //res.json(response.data.articles)
    
      res.render('news', {
      title: "Technology Headlines in the US",
      News: response.data.articles
    })
  
  })
})

//HEALTH
router.get('/health', async (req, res, next) => {
  await axios.get('http://newsapi.org/v2/top-headlines?country=us&category=health&pageSize=50&apiKey=')
  .then(response => {
    //res.json(response.data.articles)
    
      res.render('news', {
      title: "Health Headlines in the US",
      News: response.data.articles
    })
  
  })
})

//SCIENCE
router.get('/science', async (req, res, next) => {
  await axios.get('http://newsapi.org/v2/top-headlines?country=us&category=science&pageSize=50&apiKey=')
  .then(response => {
    //res.json(response.data.articles)
    
      res.render('news', {
      title: "Science Headlines in the US",
      News: response.data.articles
    })
  
  })
})

//ENTERTAINMENT
router.get('/entertainment', async (req, res, next) => {
  await axios.get('http://newsapi.org/v2/top-headlines?country=us&category=entertainment&pageSize=50&apiKey=')
  .then(response => {
    //res.json(response.data.articles)
    
      res.render('news', {
      title: "Entertainment Headlines in the US",
      News: response.data.articles
    })
  
  })
})

//SPORTS
router.get('/sports', async (req, res, next) => {
  await axios.get('http://newsapi.org/v2/top-headlines?country=us&category=sports&pageSize=50&apiKey=')
  .then(response => {
    //res.json(response.data.articles)
    
      res.render('news', {
      title: "Sports Headlines in the US",
      News: response.data.articles
    })
  
  })
})

//GENERAL
router.get('/', async (req, res, next) => {
  await axios.get('http://newsapi.org/v2/top-headlines?country=us&pageSize=50&apiKey=')
  .then(response => {
    //res.json(response.data.articles)
    
      res.render('news', {
      title: "Top headlines in the US",
      News: response.data.articles
    })
  
  })
})


module.exports = router;
