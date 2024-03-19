import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

const Form = ({ onSubmit }) => {
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };

    //snackbar state
    const [openn, setOpenn] = React.useState(false);
    const handleOpenn = () => setOpenn(true);
    const handleClosee = () => setOpenn(false);
    

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);


    const [projectName, setProjectName] = useState('');
    const [projectId, setProjectId] = useState('');

    const handleProjectNameChange = (event) => {
        setProjectName(event.target.value);
    };

    const handleProjectIdChange = (event) => {
        setProjectId(event.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!projectName || !projectId) {
            alert("don't provide empty data")
        }
        onSubmit({ projectName, projectId });
        // Handle form submission logic here, for example, sending data to a server
        console.log('Project Name:', projectName);
        console.log('Project ID:', projectId);

        setProjectName("");
        setProjectId("");
        setOpen(false);

        //snackbar
        setOpenn(true)
    };

    const action = (
        <React.Fragment>
          <IconButton
            size="small"
            aria-label="close"
            color="inherit"
            onClick={handleClosee}
          >
            <CloseIcon fontSize="small" />
          </IconButton>
        </React.Fragment>
      );

    return (
        <>
            <center>
                <Button
                    onClick={handleOpen}
                    variant='contained'
                    sx={{ marginTop: 5 }}>
                    Add Project
                </Button>
            </center>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <form onSubmit={handleSubmit}>
                        <TextField
                            label="Project Name"
                            variant="outlined"
                            value={projectName}
                            onChange={handleProjectNameChange}
                            fullWidth
                            margin="normal"
                        />
                        <TextField
                            label="Project ID"
                            variant="outlined"
                            value={projectId}
                            onChange={handleProjectIdChange}
                            fullWidth
                            margin="normal"
                        />
                        <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                            fullWidth
                            size="large"
                            style={{ marginTop: '20px' }}
                        // onClick={handleSubmit}
                        >
                            Submit
                        </Button>
                    </form>

                </Box>
            </Modal>
            <Snackbar
                open={openn}
                autoHideDuration={6000}
                onClose={handleClosee}
                message="Details Submitted"
                action={action}
            />
        </>
    );
};

export default Form;
