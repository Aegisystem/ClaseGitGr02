const express = require("express")
const comicsRouter = require("./routes/comics")
const typeRouter = require("./routes/type")
const abilityRouter = require("./routes/ability")
const app = express()

process.loadEnvFile()

const port = 3000

app.use(express.json())

app.use("/comics", comicsRouter)

app.use ("/type", typeRouter )
app.use("/ability", abilityRouter)

app.listen(port, () => {
    console.log("Server running port: ", port)
})

