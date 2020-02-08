import axios from "axios"
import React,{Component} from 'react'
class Player extends Component {
    constructor (props) {
        super (props) 
        this.state = 
         {
        nameInput : props.playerName,
        positionInput : props.id
        }
    }

    handleChange = (value) => {
        this.setState ({
            nameInput: value
        }) 
    }

    saveName = () =>
    { const id = this.state.positionInput
        const name = this.state.nameInput
        axios.put('http://localhost:4001/api/players/' + id, name).then(res => {this.setState ({ players: res.data})
        })
        .catch(err => console.log(err))
      }

        render () {
        return (
            <div>
                <input value = {this.state.nameInput} onChange = {e => this.handleChange(e.target.value)} />
                <input value = {this.state.positionInput} onChange = {e => this.handleChange(e.target.value)} />
                <button onClick = {this.props.saveName} />
            </div>
        )
    }
}

// this.props.newPlayer({ this.state.name , this.state.post})
// newPlayer(Player){Axios.post('/api/players',{Player})}.then
// this.setState ({Players : res.data})
// .catch (err => console.log(err))

export default Player