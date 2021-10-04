const path = require('path');

const express = require('express');

const app = express();

// Define paths for Express Config
const publicDirectoryPath = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../templates');

// Setup handlebars engine and views location
app.set('view engine', 'hbs');
app.set('views', viewsPath);

// Setup static directory to serve
app.use(express.static(publicDirectoryPath));

app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather App',
        name: 'Jessica Moody'
    });
});

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About Me',
        name: 'Jessica Moody'
    });
});

app.get('/help', (req, res) => {
    res.render('help', {
        message: 'This is the help page'
    })
})
// app.com/weather
app.get('/weather', (req, res) => {
    res.send({
        forecast: 'forecast',
        location: 'location'
    });
});

app.listen(3000, () => {
    console.log('Server is up on port 3000');
});
