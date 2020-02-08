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
    this.saveName = this.saveName.bind (this)
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
      console.log(player)
      axios.post('http://localhost:4001/api/players', { player }).then(res => {
    this.setState({ player : res.data})
      })
      .catch(err => console.log(err))
    }
    
    saveName(id,newName){
      axios.put('http://localhost:4001/api/players/${id}',{name : newName}).then(res => {this.setState ({ players: res.data})
      })
      .catch(err => console.log(err))
    }
    
    deleteName(id) {axios.delete('http://localhost:4001/api/players/${id}').then(res =>{
      this.setState ({ players :res.data}) 
    })
    .catch(err => console.log(err))
  }
    

  render() {
    const players = this.state.players
  return (
    <div className="App">
      <header className="App-header">
      Batting Line Up
      <Create />
      {
            players.map(player => (
              <Player id = {player.id}
              key = {player.id}
                playerName={player.name}
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
