const express = require('express');
const app = express();
const feed = require('./routes/feed');

app.use(express.json());

// app.use('/api/v1/feed', feed);

app.use('/api/v1/search', feed);


const start = ()=>{
    app.listen(3000, ()=>{
        console.log("Server is listening on port 3000...");
    });
}

start();

