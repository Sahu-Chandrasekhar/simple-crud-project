import React from 'react';
//Sidebar Routing start
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// import Sidebar from '../src/components/sidebar';
// import Dashboard from '../components/dashboard';
import Segment from '../components/segment';
import Subject from '../components/Subject';
import MasterData from '../components/MasterData';
import User from '../components/User';
import Main from './main';
//Sidebar Routing end



function Routing() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route index element={<Segment />} />
        {/* <Route path="/dashboard" element={<Dashboard />} /> */}
        <Route path="/Subject" element={<Subject />} />
        <Route path="/Master-Data" element={<MasterData />} />
        <Route path="/User-Data" element={<User />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Routing;
