import React, { Component, useState } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import { createRoom } from '../services/api';
import toastr from 'toastr';
import {stylesCreateRoom} from '../themes/mui';
import { LiveTvOutlined } from '@material-ui/icons';


function CreateRoom(props) {

	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");
	const [creator, setCreator] = useState("");	

	const createRoomOnClick = (event) => {
		event.preventDefault();
		
		createRoom(
			title,
			description,
			creator
		)
			.then(data => {
				if (data) {
					console.log(data.status);
					localStorage.setItem("accessToken", data.creator.access_token);
					localStorage.setItem("userUid", data.creator.uid);
					props.history.push("/rooms/" + data.uid);
				} else {					
					toastr.error(data.title);
				}
			})
			.catch(error => console.log(error));
	}
		
	return (
		<main className={props.classes.main} >
			{/*{<CssBaseline />}*/}
			<Paper className={props.classes.paper}>
				<Typography component="h1" variant="h5">
					Создать комнату
				</Typography>
				<form className={props.classes.form}>
					<FormControl margin="normal" required fullWidth>
						<InputLabel htmlFor="title">Имя комнаты</InputLabel>
						<Input id="title" name="title"
							autoFocus value={title}
							onChange={(e) => setTitle(e.target.value)} />
					</FormControl>
					<FormControl margin="normal" fullWidth>
						<InputLabel htmlFor="description">Описание комнаты</InputLabel>
						<Input name="description" id="description"
							value={description}
							onChange={(e) => setDescription(e.target.value)} />
					</FormControl>
					<FormControl margin="normal" required fullWidth>
						<InputLabel htmlFor="creator">Имя владельца</InputLabel>
						<Input name="creator" id="creator"
							value={creator}
							onChange={(e) => setCreator(e.target.value)} />
					</FormControl>
					<Button
						type="submit"
						fullWidth
						variant="contained"
						color="secondary"
						className={props.classes.submit}
						onClick={(e) => createRoomOnClick(e)}
					>
						Создать
					</Button>
				</form>
			</Paper>
		</main>
	);
	}


CreateRoom.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withRouter(withStyles(stylesCreateRoom)(CreateRoom))