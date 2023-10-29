const NewsAPI = require('newsapi');
const newsapi = new NewsAPI('0b897ecb342e419baac8c0c06503f9eb');

const asyncWrapper = require('../middleware/async')
// const { createCustomError } = require('../errors/custom-error')

const everything = asyncWrapper(async (req, res) =>{
  await newsapi.v2.everything({
      q: 'Technology',
      from: '2023-010-28',
      to: '2023-10-28',
      language: 'en',
      sortBy: 'relevancy',
      page: 2
    }).then(response => {
      console.log(response);
      res.status(200).json(response);
     
    });
})

const searchNews = asyncWrapper(async (req, res)=>{
  const { query: searchTopic } = req.params
  await newsapi.v2.topHeadlines({
      q: searchTopic,
      category: 'business',
      language: 'en',
      country: 'us'
    }).then(response => {
      console.log(response);
      res.status(200).json(response);
    });
})

module.exports = {
  everything,
  searchNews
}