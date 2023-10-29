const express = require('express')
const router = express.Router();


const {
    everything,
    searchNews
} = require('../controllers/feed');

// console.log(getEverything);

router.route('/').get(everything);
router.route('/:query').get(searchNews);

module.exports = router
