import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import CreateRoom from './CreateRoom';
import JoinRoom from './JoinRoom';
import '../App.css';

export class Main extends Component {

  state = {
    action: undefined
  }

  createRoomOnClick = (event) => {
    this.setState({ action: "create" });
  }

  joinRoomOnClick = (event) => {
    this.setState({ action: "join" });
  }

  getActionComponent = () => {
    if (this.state.action === "create") {
      return (<CreateRoom />);
    } else if (this.state.action === "join") {
      return (<JoinRoom />);
    } else {
      return null;
    }
  }

  render() {
    return (
      <div className="App">
      <header style={{backgroundColor:"green"}} className="App-header">
        <p>Покер планирования</p>
        <div>
          <Button
            variant="contained"
            color="primary" 
            style={{
              marginRight: "20px", 
              backgroundColor:"orange",
              height: "100px"
            }}
            onClick={this.joinRoomOnClick}
          >
            Зайти в комнату
          </Button>
          <Button
            variant="contained"
            color="secondary" 
            style={{
              marginRight: "20px", 
              backgroundColor:"orange",
              height: "100px"
            }}
            onClick={this.createRoomOnClick}

          >
          Создать комнату
          </Button>
        </div>
        {this.getActionComponent()}
      </header>
    </div>
    )
  }
}

export default Main