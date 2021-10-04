const path = require('path');

const express = require('express');

const app = express();

app.set('view engine', 'hbs');

const publicDirectoryPath = path.join(__dirname, '../public');
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
