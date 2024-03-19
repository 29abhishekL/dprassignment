import { Box } from '@mui/material'
import React from 'react'

const ShowProject = ({ projectName, projectId, }) => {
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 300,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };
    return (
        <div>
            <Box sx={style} >
                <p>Project Name:- {projectName}</p>
                <p>Project ID:- {projectId}</p>
            </Box>
        </div>
    )
}

export default ShowProject
