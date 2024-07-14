import React, { useState, useEffect } from 'react';
import '../assets/css/DropdownMenu.css';
function DropdownMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = (e) => {
    e.stopPropagation();
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const closeDropdown = (e) => {
      if (!e.target.matches('.user-profile, .user-profile *')) {
        setIsOpen(false);
      }
    };
    window.addEventListener('click', closeDropdown);
    return () => {
      window.removeEventListener('click', closeDropdown);
    };
  }, []);

  return (
    <div className="user-profile" onClick={toggleDropdown}>
      <i className="fa fa-user" aria-hidden="true"></i>
      {isOpen && (
        <div id="dropdownContent" className="dropdown-content show">
          <a href="/profile">Profile</a>
          <a href="/settings">Settings</a>
          <a href="/logout">Logout</a>
        </div>
      )}
    </div>
  );
}

export default DropdownMenu;
