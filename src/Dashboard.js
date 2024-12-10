// src/Dashboard.js
import React, { useState } from 'react';
import './Dashboard.css'; // Ensure this path is correct
import Header from './Header'; // Ensure these paths are correct
import Sidebar from './Sidebar';
import Home from './Home';

function Dashboard() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };

  return (
    <div className='grid-container'>
      <Header OpenSidebar={OpenSidebar} />
      <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar} />
      <Home />
    </div>
  );
}

export default Dashboard;
