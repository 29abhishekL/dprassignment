import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Form from './components/Form';
import ShowProject from './components/ShowProject';
import PermanentDrawerLeft from "./components/Drawer";
import React, { useState } from 'react';
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import Home from './components/Home';

function App() {
  //hook for Left NavBar
  const [open, setOpen] = useState(false);

  const toggleDrawer = () => {
    setOpen(!open);
  };
  
  return (
    <>
      {/* <Header/>
      <PermanentDrawerLeft/>
      <Form onSubmit={handleSubmit}/>
      {projectDetails && (<ShowProject projectName={projectDetails.projectName} projectId={projectDetails.projectId}/>)} */}
      
      <BrowserRouter>
      <Header toggleDrawer={toggleDrawer}/>
      <PermanentDrawerLeft open={open}/>
      {/* <PermanentDrawerLeft open={open}/> */}
      <Routes>
      <Route path='/' element = {<Home/>}></Route>
        {/* <Route path='/dashboard' element = {<PermanentDrawerLeft open={open}/>}></Route> */}
       </Routes>   
    </BrowserRouter>
    </>
  );
}

export default App;
