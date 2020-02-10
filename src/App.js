import React from 'react';
import './App.css';
import axios from 'axios'
import Create from './Components/Create'
import Player from './Components/Players'
class App extends React.Component{
  constructor () {
    super ()
    this.state = {
      players : []
    }
    this.newPlayer = this.newPlayer.bind(this)
    this.saveName = this.saveName.bind (this)
    this.deleteName = this.deleteName.bind(this)
  }

  componentDidMount() {
    axios.get('http://localhost:4001/api/players').then(res => {
      this.setState
       ({ players : res.data})
  })
  .catch (err => console.log (err))
    }
    
    newPlayer (player)
    {
      axios.post('http://localhost:4001/api/players', player ).then(res => {
    this.setState({ player : res.data})
      })
      .catch(err => console.log(err))
    }
    
    saveName(id,newName, newPosition){
      axios.put(`http://localhost:4001/api/players/${id}`,{ player: newName, position: newPosition }).then(res => {this.setState ({ players: res.data})
      })
      .catch(err => console.log(err))
    }
    
    deleteName(id) {axios.delete(`http://localhost:4001/api/players/${id}`).then(res =>{
      this.setState ({ players :res.data}) 
    })
    .catch(err => console.log(err))
  }
    

  render() {
    // const players = this.state.players'

    this.state.players.map(player => console.log(player.player))
    
  return (
    <div className="App">
      <header className="App-header">
      Batting Line Up
      <Create newPlayerFn={this.newPlayer} />
      {
            this.state.players.map(player => ( 
              <Player
                key={player.id}
                player={player}
                updatePlayerFn={this.saveName}
                deletePlayerFn={this.deleteName}
                 /> 
            ))
          }
      </header>
    </div>
  );
  }
}

export default App;
