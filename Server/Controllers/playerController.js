const playerList = []

let id = 1

module.exports = {
    getPlayers: (req, res) => {
        res.status(200).send(playerList)
    },
    postPlayers: (req, res) => {

        const {player, position} = req.body

        playerList.push({player, position, id})
        id++
        res.status(200).send(playerList)
    },
    putPlayers: (req, res) => {
        const {id} = req.params
        const {player, position}= req.body

        const index = playerList.findIndex(element => {
            return element.id === +id
        })

        playerList[index].player = player
        playerList[index].position = position

        res.status(200).send(playerList)
    },
    deletePlayers: (req, res) => {
        const {id} = req.params
    
        const index = playerList.findIndex(element => {
            return element.id === +id
        })
        playerList.splice(index, 1)

        res.status(200).send(playerList)
    }
}