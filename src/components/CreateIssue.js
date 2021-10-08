import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

export default class CreateIssue extends React.Component {
	render() {
		return (
			<div>
				<Dialog
					open={this.props.createIssueDialogOpen}
					aria-labelledby="form-dialog-title"
				>
					<DialogTitle id="form-dialog-title">Создать задачу</DialogTitle>
					<DialogContent>
						<TextField
							autoFocus
							margin="dense"
							id="issueTitle"
							label="Название задачи"
							type="text"
							fullWidth
							onChange={this.props.handleIssueTitleInputChange}
						/>
					</DialogContent>
					<DialogActions>
						<Button onClick={this.props.handleClose} color="primary">
							Отменить
            </Button>
						<Button onClick={this.props.handleCreateIssue} color="primary">
							Создать
            </Button>
						<Button
							variant="contained"
							color="primary"
							style={{ float: "right" }}
							onClick={this.handleClickOpenUpdateIssueDialog}
							>Загрузить из JIRA</Button>
					</DialogActions>
				</Dialog>
			</div>
		);
	}
}