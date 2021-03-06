import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
//import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import { joinRoom } from '../services/api';
import toastr from 'toastr';

const styles = theme => ({
  main: {
    width: 'auto',
    display: 'block', // Fix IE 11 issue.
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 400,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing.unit * 8,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
  },
  avatar: {
    margin: theme.spacing.unit,
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing.unit,
  },
  submit: {
    marginTop: theme.spacing.unit * 3,
  },
});

export class JoinRoom extends Component {

  state = {
    roomUid: "",
    participantName: ""
  }
  
  joinRoomOnClick = (event) => {
    event.preventDefault(); 
    joinRoom(
      this.state.roomUid,
      this.state.participantName
    )
      .then(data => {
        if (data) {
          localStorage.setItem("accessToken", data.access_token);
          localStorage.setItem("userUid", data.uid);
          this.props.history.push("/rooms/" + this.state.roomUid);
        } else {
          toastr.error("Something went wrong!");
        }
      })
      .catch(error => console.log(error));
  }
  
  handleInputChange = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }

  render() {
    return (
      <main className={this.props.classes.main}>
        {/*<CssBaseline />*/}
        <Paper className={this.props.classes.paper}>
          <Typography component="h1" variant="h5">
            ?????????? ?? ??????????????
        </Typography>
          <form className={this.props.classes.form}>
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="title">ID ??????????????</InputLabel>
              <Input id="roomUid" name="roomUid" autoFocus
								value={this.state.roomUid}
								onChange={this.handleInputChange} />
            </FormControl>
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="name">???????? ??????</InputLabel>
              <Input name="participantName" id="participantName"
								value={this.state.participantName}
								onChange={this.handleInputChange} />
            </FormControl>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={this.props.classes.submit}
							onClick={this.joinRoomOnClick}
            >
              ??????????
          </Button>
          </form>
        </Paper>
      </main>
    );
  }
}

JoinRoom.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRouter(withStyles(styles)(JoinRoom))