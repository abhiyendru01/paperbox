import React from 'react';
import '../assets/css/Sidebar.css';

function Sidebar({ closeNav }) {
  return (
    <div id="sidebar" className="sidebar">
      <button type="button" className="close-button" onClick={closeNav}>
        <i className="fa fa-times" aria-hidden="true"></i>
      </button>
      <a href="/">Home</a>
      <a href="/notes">Notes</a>
      <a href="/upload">Upload</a>
      <a href="/profile">Profile</a>
    </div>
  );
}

export default Sidebar;