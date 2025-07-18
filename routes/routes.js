const express = require("express");

const router = express.Router();

router.get('/', (req, res) => {
    res.render('index');
});

router.get('/about', (req, res) => {
    res.render('about');
});

router.get('/contact-me', (req, res) => {
    res.render('contact-me');
});

router.get('/{*splat}', (req, res) => {
    res.render('404');
});

module.exports = router;