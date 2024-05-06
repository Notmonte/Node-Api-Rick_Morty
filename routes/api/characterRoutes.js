const express = require('express')
const router = express.Router()
const axios = require('axios')

// localhost:3000/characters
router.get('/', (req, res)=> {
    const url = 'https://api.sampleapis.com/rickandmorty/characters'

    axios.get(url).then(resp => {
        res.render('pages/chara', {
            title: 'Rick and Morty Characters',
            name: 'Rick and Morty Characters',
            data: resp.data
        })
    })
})

router.get('/:id', (req, res)=> {
        
    const id = req.params.id
    const url = `https://api.sampleapis.com/rickandmorty/characters/${id}`

    axios.get(url).then(resp => {
        const data = resp.data
        res.render('pages/chara_single', {
            title:  `${data.name}`,
            name:   `${data.name}`,
            data
        })
    })
})


module.exports = router