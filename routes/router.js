const express = require('express')
const router = express.Router()

// static files
router.use(express.static('public'))

const characterRoutes = require('./api/characterRoutes')
const episodeRoutes = require('./api/episodeRoutes')

router.use('/characters', characterRoutes)
router.use('/episodes', episodeRoutes)

//  Home Page => localhost:3000
router.get('/', (req, res)=> {
    res.render('pages/home', {
        title: "Rick and Morty's evil web page",
        name: "Rick and Morty's evil web page"
    })
})

// Error Page
router.get('*', (req, res)=> {
    if(req.url == '/favicon.ico/') {
        res.end()
    } else {
        res.render('pages/404', {
            title: '404 Error',
            name: 'Ricks 404'
        })
    }
})

module.exports = router