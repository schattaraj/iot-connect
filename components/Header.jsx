import React, { useEffect, useState } from 'react'
import feather from 'feather-icons';
export default function Header() {
  const [showLogout, setShowLogout] = useState(false);

  const handleUserClick = () => {
    setShowLogout((prev) => !prev);
  };
  const handleLogout = () => {
    // Add your logout logic here
    console.log('User logged out');
    // Optionally, hide the logout button after logging out
    setShowLogout(false);
  };

  useEffect(() => {
    feather.replace();
  }, []);
  return (
    <div className='header'>
      <button className='user-action' type='button' onClick={handleUserClick}><i data-feather="user"></i></button>
      {showLogout && (
        <div className='dropdown-container'>
          <button className='logout-action btn btn-primary' type='button' onClick={handleLogout}>
            <i data-feather="log-out"></i> Logout
          </button>
        </div>
      )}
    </div>
  )
}
