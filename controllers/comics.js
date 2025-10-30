const comicsController = {}
const axios = require('axios')

comicsController.getComics = async (req, res) => {
    const POKEMON_API = process.env.POKEMON_API

    axios.get(POKEMON_API+'/pokemon')
        .then(resp => res.json(resp.data.results))
}

module.exports = comicsController