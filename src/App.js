import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Form from './components/Form';
import ShowProject from './components/ShowProject';
import PermanentDrawerLeft from "./components/Drawer";
import LandingPage from './components/LandingPage';
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
      <BrowserRouter>
        <Header toggleDrawer={toggleDrawer} />
        <PermanentDrawerLeft open={open} />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/Dashboard' element={<LandingPage />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
