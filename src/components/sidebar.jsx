import React from 'react';
import '../assets/css/Sidebar.css';

const Sidebar = ({ navVisible, closeNav }) => {
  return (
    <div id="sidebar" className={`sidebar ${navVisible ? 'open' : ''}`}>
      <a href="javascript:void(0)" className="closebtn" onClick={closeNav}>
        &times;
      </a>
      <a href="./">Home</a>
      <a href="./">Notes</a>
      <a href="./">Upload</a>
      <a href="./">Profile</a>
    </div>
  );
};

export default Sidebar;