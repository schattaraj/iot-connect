import React, { useEffect } from 'react'
import feather from 'feather-icons';
export default function Header() {
  useEffect(() => {
    feather.replace();
  }, []);
  return (
    <div className='header'>
      <button className='user-action' type='button'><i data-feather="user"></i></button>
    </div>
  )
}
