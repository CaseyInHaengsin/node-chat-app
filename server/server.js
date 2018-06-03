const path = require('path');
const express = require('express');

const publicPath = path.join(__dirname, '../public'); 
var app = express();

app.use(express.static(publicPath));

const port = process.env.PORT || 3000;
//setup express app
//configure middleware to serve up public folder
//start server and listen on port 3000
// console.log(__dirname + '/../public');
// console.log(publicPath);

app.get('/', (req, res) => {
    res.send('index.html'); 
})


app.listen(port, () => {
    console.log(`Started up on port ${port}`);
});