 import React from 'react';
 import { Routes, Route } from 'react-router-dom';
import Soglash from './Soglash.js';

const SnabzhRouter = () => {
   return (
     <Routes>
     <Route exact path="/Soglash" element={<Soglash/>} default />
      {/* <Route path="/Test" element={<Test/>} /> */}
    </Routes>
 );
};

export default SnabzhRouter;