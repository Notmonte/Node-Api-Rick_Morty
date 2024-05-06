const express = require('express')
const router = express.Router()
const axios = require('axios')

// localhost:3000/characters
router.get('/', (req, res)=> {
    const url = 'https://api.sampleapis.com/rickandmorty/episodes'

    axios.get(url).then(resp => {
        res.render('pages/episode', {
            title: 'Rick and Morty Episodes',
            name: 'Rick and Morty Episodes',
            data: resp.data
        })
    })
})

router.get('/:id', (req, res)=> {
        
    const id = req.params.id
    const url = `https://api.sampleapis.com/rickandmorty/episodes/${id}`

    axios.get(url).then(resp => {
        const data = resp.data
        res.render('pages/episode_single', {
            title:  `${data.name}`,
            name:   `${data.name}`,
            data
        })
    })
})



module.exports = router