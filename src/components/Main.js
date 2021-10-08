import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import CreateRoom from './CreateRoom';
import JoinRoom from './JoinRoom';
import '../App.css';
import withStyles from '@material-ui/core/styles/withStyles';
import { stylesMain } from '../themes/mui';

function Main(props) {

    const [action, setAction] = useState("join"); 

    const getActionComponent = () => {
      if (action === "create") {
        return (<CreateRoom />);
      } else if (action === "join") {
        return (<JoinRoom />);
      } else {
        return null;
      }
    }

    return (
      <div className="App">
      <header className="App-header">
        <p>Покер планирования</p>
        <div>
          <Button
            variant="contained"
            color="secondary" 
            className={props.classes.button}
            onClick={() => setAction("join")}
          >
            Зайти в комнату
          </Button>
          <Button
            //className= {props.classes.button}
            onClick={() => setAction("create")}
          >
            Создать комнату
          </Button>
        </div>
        {getActionComponent()}
      </header>
    </div>
    )
  }

  export default withStyles(stylesMain)(Main);
  
