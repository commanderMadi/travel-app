const express = require('express');
require('dotenv').config();
const bodyParser = require('body-parser');
const app = express();
//body parser setup
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//CORS
const cors = require('cors');
app.use(cors());

app.use(express.static('dist'));

const port = 3000;

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});

// the main endpoint
let projectData = {};

// app.get('/', (req, res) => {
//     res.sendFile('dist/index.html');
// });
app.get('/all', (req, res) => {
    res.send(projectData);
});

app.post('/add', (req, res) => {
    projectData.lat = req.body.lat;
    projectData.lng = req.body.lng;
    projectData.date = req.body.date;
    projectData.userResponse = req.body.userResponse;
});
