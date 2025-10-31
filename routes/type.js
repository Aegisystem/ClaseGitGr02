const typeController = require("../controllers/type")

const typeRouter = require("express").Router()

typeRouter.get("/", typeController.getTypes)

module.exports = typeRouter