const playerList = []

let id = 1

module.exports = {
    getPlayers: (req, res) => {
        res.status(200).send(playerList)
    },
    postPlayers: (req, res) => {

        const {player} = req.body

        playerList.push({player, id})
        id++
        res.status(200).send(playerList)
    },
    putPlayers: (req, res) => {
        const {id} = req.params
        const {player}= req.body

        const index = playerList.findIndex(element => {
            return element.id === +id
        })

        playerList[index].player = player
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