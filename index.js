const express = require("express")
const comicsRouter = require("./routes/comics")
const typeRouter = require("./routes/type")
const app = express()

process.loadEnvFile()

const port = 3000

app.use(express.json())

app.use("/comics", comicsRouter)

app.use ("/type", typeRouter )

app.listen(port, () => {
    console.log("Server running port: ", port)
})

