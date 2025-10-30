const abilityController = require("../controllers/ability")

const abilityRouter = require("express").Router()

abilityRouter.get("/", abilityController.getAbility)

module.exports = abilityRouter