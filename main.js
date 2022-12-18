const express = require("express");
const router = express.Router();

router.get('/jasa-coding', (req, res) => {
   const longUrl = 'https://wa.me/19292929999'
   res.redirect(longUrl)
})

app.use('/', router)
