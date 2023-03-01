import React, {useState} from 'react'
import  { Help } from '@material-ui/icons';
import { Modal, Box, Typography } from '@material-ui/core';
import useStyles from './css';

export default function SimpleModal() {
    const [open, setOpen] = useState(false);
    const classes = useStyles();
    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Help variant="contained" color="primary" onClick={handleOpen}/>

            <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            >
            <Box className={classes.modalContent}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                Information
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                This app is powered by Speechly, hold the button to add transactions verbally, eg "Add income for 50 pounds in category business for next friday"
                </Typography>
            </Box>
            </Modal>
        </div>
    );
}