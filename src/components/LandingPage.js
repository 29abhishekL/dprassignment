import React from 'react';
import Hello from "../img.jpg";
import { Box, Button } from '@mui/material';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';

const LandingPage = () => {
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        // border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };
    return (
        <>
            <Box sx={style}>
                <center>
                    <h1 >
                        UNDER CONSTRUCTION
                    </h1><br />

                    <h6>SITE NEARLY READY</h6>
                    <LinearProgress variant="determinate" value={70} />
                    <Button variant='contained' sx={{ marginTop: 3 }} href=''>Notify ME!</Button>
                </center>
            </Box>
            <Breadcrumbs aria-label="breadcrumb" sx={{ marginLeft: 30 }}>
                <Link underline="hover" color="inherit" href="/">
                    Home
                </Link>
                <Link underline="hover" href="/dashboard" color="text.primary">
                    dashboard
                </Link>
            </Breadcrumbs>


        </>
    )
}

export default LandingPage
