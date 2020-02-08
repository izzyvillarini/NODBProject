const express = require('express')
const cors = require('cors')

const playerController = require ('./Controllers/playerController')

const app = express()
const PORT = 4001

app.use(express.json())
app.use(cors())

app.get('/api/players', playerController.getPlayers)

app.put('/api/players/:id',playerController.putPlayers)

app.post('/api/players',playerController.postPlayers)

app.delete('/api/players/:id',playerController.deletePlayers)


app.listen(PORT, () => console.log(`Listening on port ${PORT}`))
