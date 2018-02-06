const express = require('express');
const router = express.Router();
const axios = require('axios');


router.get('/:search', (req, res) => {
    
    const url ='https://api.giphy.com/v1/gifs/search?'; 
    const config = {
      params: {
          api_key: 'Hkf2R5G3Dll5kXe6b8b6JXcsrWK0zokF',
          q: req.params.search 
      }
    }
    console.log(url);
    
      axios.get(url, config).then(response => {
        console.log(response.data)
        res.send(response.data)
      }).catch(err => {
        console.log(err);
        res.sendStatus(500)
      })
    });

module.exports = router;