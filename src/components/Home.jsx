import React from 'react'
import Form from './Form'
import ShowProject from './ShowProject'
import { useState } from 'react'
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';

const Home = () => {
  const [projectDetails, setProjectDetails] = useState(null);
  const handleSubmit = (data) => {
    setProjectDetails(data)
  };
  return (
    <div>
      {/* <Breadcrumbs aria-label="breadcrumb" sx={{marginLeft: 30}}>
        <Link underline="hover" color="text.primary" href="/">
          Home
        </Link>
        <Link underline="hover" href="/dashboard" color="inherit">
          dashboard
        </Link>
      </Breadcrumbs> */}
      <Form onSubmit={handleSubmit} />
      {projectDetails && (<ShowProject projectName={projectDetails.projectName} projectId={projectDetails.projectId} />)}
      
    </div>
  )
}

export default Home
