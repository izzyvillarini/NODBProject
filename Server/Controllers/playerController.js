const playerList = []

let id = 1

module.exports = {
    getPlayers: (req, res) => {
        res.status(200).send(playerList)
    },
    postPlayers: (req, res) => {

        const {player} = req.body

        const newPlayer = {
            name: player,
            id: id++
        }

        playerList.push(newPlayer)
        res.status(200).send(playerList)
    },
    putPlayers: (req, res) => {
        const {id} = req.params
        const {name}= req.body

        const index = playerList.findIndex(element => {
            return element.id === +id
        })

        playerList[index].name = name
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