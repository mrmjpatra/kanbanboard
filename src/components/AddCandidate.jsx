import { Add } from '@mui/icons-material'
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, IconButton, TextField } from '@mui/material'
import React, { useState } from 'react'

const AddCandidate = ({ list, setList, stage }) => {
    const [open, setOpen] = useState(false);
    const [name, setName] = useState('');
    const [url, setUrl] = useState('https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2');
    const [location, setLocation] = useState('');

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleAddCandidate = () => {
        const d = new Date();
        const format_date = `${d.getFullYear()}-${d.getMonth()}-${d.getDate()}`;
        const details = {
            name,
            photo: url,
            location,
            date_applied: format_date,
            stage
        }
        const newList = { ...list };
        const fromlistupdate = newList[stage];
        fromlistupdate.push(details);
        setList(({ ...list, fromlistupdate }));
    }
    return (
        <div>
            <IconButton onClick={() => handleClickOpen()} >
                <Add fontSize='large' color='primary' />
            </IconButton>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Add Candidate</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Add Details of the Candidate
                    </DialogContentText>
                    <form>
                        <TextField
                            autoFocus
                            label="Name"
                            fullWidth
                            variant="standard"
                            onChange={(e) => setName(e.target.value)}
                        />
                        <TextField
                            autoFocus
                            label="URL of Photo"
                            fullWidth
                            variant="standard"
                            onChange={(e) => setUrl(e.target.value)}
                        />
                        <TextField
                            autoFocus
                            label="Location"
                            fullWidth
                            variant="standard"
                            onChange={(e) => setLocation(e.target.value)}
                        />
                    </form>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={() => {
                        handleClose();
                        handleAddCandidate();
                    }}>Add
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}

export default AddCandidate