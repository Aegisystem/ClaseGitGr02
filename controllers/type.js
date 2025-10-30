const typeController = {}
const axios = require('axios')

typeController.getTypes = async (req, res) => {
    const POKEMON_API = process.env.POKEMON_API

    axios.get(POKEMON_API+'/type')
        .then(resp => res.json(resp.data.results))
}

module.exports = typeController