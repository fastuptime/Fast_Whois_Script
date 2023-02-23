const express = require('express');
const app = express();
const ejs = require('ejs');
const bodyParser = require('body-parser');
const colors = require('colors');
const whoiser = require('whoiser');

app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');
app.use('/main_page', express.static('./views/main_page'));

app.get('/', (req, res) => {
    res.render('index');
});

app.post('/', (req, res) => {
    let {
        domain
    } = req.body;

    whoiser(domain).then((data) => {
        res.json(data);
    }).catch((err) => {
        res.json(err);
    });
});

app.listen(80, () => {
    console.log('Fast Whios Aktif'.green);
});