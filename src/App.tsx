import React, { useState } from 'react';
import logo from './logo.svg';
import { Box } from "@chakra-ui/react";
import { Auth, Messenger } from "../src/containers/index";
import { Routes, Route } from "react-router-dom";
// import './App.css';

function App() {
  const [isSignedUp, setIsSignedUp] = useState<boolean>(false)
  const [userId, setUserId] = useState<number>(0)

  return (
    <Box sx={{ backgroundColor: '#000'}}>
      <Routes>
        <Route path="/" caseSensitive={false} element={<Auth isSignedUp={isSignedUp} setUserId={setUserId} setIsSignedUp={setIsSignedUp}/>} />
        <Route path="/messenger/:user" caseSensitive={false} element={<Messenger userId={userId}/>} />            
      </Routes>
    </Box>
  );
}

export default App;
