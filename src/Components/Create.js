import React,{Component} from 'react'
import axios from 'axios'
class Create extends Component {
    constructor (props) {
        super (props) 
        this.state = {
        nameInput : '',
        positionInput : ''
        }
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
        const player = this.state.nameInput 
      console.log(player)
      axios.post('http://localhost:4001/api/players', { player }).then(res => {
    this.setState({ player : res.data})
      })
      .catch(err => console.log(err))
    }
        render () {
        return (
            <div>
                <input value = {this.state.nameInput} onChange = {e => this.handleChange(e.target.value)} />
                <input value = {this.state.positionInput} onChange = {e => this.handleIdChange(e.target.value)} />
                <button onClick = {this.newPlayer} />
            </div>
        )
    }
}

// this.props.newPlayer({ this.state.name , this.state.post})
// newPlayer(Player){Axios.post('/api/players',{Player})}.then
// this.setState ({Players : res.data})
// .catch (err => console.log(err))

export default Create
