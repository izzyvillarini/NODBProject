import axios from "axios"
import React,{Component} from 'react'
class Player extends Component {
    constructor (props) {
        super (props) 
        this.state = 
         {
            nameInput : '',
            positionInput: '',
            isEditing: false,
        }
        this.saveName = this.saveName.bind(this)
        this.deleteName = this.deleteName.bind(this)
    }

    handleChange = (value) => {
        this.setState ({
            nameInput: value
        }) 
    }

    handlePosition = (value) => {
        this.setState ({
            positionInput: value
        })
    }

    saveName = () =>
    { 
        const newName = this.state.nameInput || this.props.player.player
        const newPosition = this.state.positionInput || this.props.player.position
        this.props.updatePlayerFn(this.props.player.id, newName, newPosition)
        this.isEditing()
      }

      deleteName(id) {
          this.props.deletePlayerFn(id)
    }

    isEditing = () => {
        this.setState({isEditing: !this.state.isEditing})
    }

        render () {
        return (
            <div className="row">
                { this.state.isEditing ? 
                <div className="playersHeader" >
                    <input placeholder = {this.props.player.player} onChange = {e => this.handleChange(e.target.value)} />
                    <input placeholder = {this.props.player.position} onChange = {e => this.handlePosition(e.target.value)} />
                </div>
                :
                <div className="playersHeader">
                    <p onDoubleClick={this.isEditing}>{this.props.player.player}</p>
                    <p onDoubleClick={this.isEditing}>{this.props.player.position}</p>
                </div>
                }
                <button onClick = {this.saveName}>save</button>
                <button onClick = {() => this.deleteName(this.props.player.id)}>delete</button>
            </div>
        )
    }
}

// this.props.newPlayer({ this.state.name , this.state.post})
// newPlayer(Player){Axios.post('/api/players',{Player})}.then
// this.setState ({Players : res.data})
// .catch (err => console.log(err))

export default Player