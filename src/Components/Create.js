import React,{Component} from 'react'
import axios from 'axios'
class Create extends Component {
    constructor (props) {
        super (props) 
        this.state = {
        nameInput : '',
        positionInput : ''
        }
        this.newPlayer = this.newPlayer.bind(this)
    }

    handleChange = (value) => {
        this.setState ({
            nameInput: value
        }) 
    }
    handleIdChange = (value) => {
        this.setState ({
            positionInput: value
        }) 
    }

    newPlayer = () =>
    { 
        let newPlayer = {
            player: this.state.nameInput,
            position: this.state.positionInput
        }

        this.props.newPlayerFn(newPlayer)
    }
        render () {
        return (
            <div>
                <input value = {this.state.nameInput} onChange = {e => this.handleChange(e.target.value)} />
                <input value = {this.state.positionInput} onChange = {e => this.handleIdChange(e.target.value)} />
                <button onClick = {this.newPlayer}>add</button>
            </div>
        )
    }
}

// this.props.newPlayer({ this.state.name , this.state.post})
// newPlayer(Player){Axios.post('/api/players',{Player})}.then
// this.setState ({Players : res.data})
// .catch (err => console.log(err))

export default Create
