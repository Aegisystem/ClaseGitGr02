const comicsController = {}

comicsController.getComics = (req, res) => {
    res.json({mensaje: "Hola munde!"})
}

module.exports = comicsController