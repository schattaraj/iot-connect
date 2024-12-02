import Link from 'next/link'
import React from 'react'

export default function Sidebar() {
  return (
    <div className='sidebar'>
        <h3>Logo</h3>
        <ul>
            <li><Link href={"/"} className='active'><i data-feather="cpu"></i><span>Devices</span></Link></li>
            <li><Link href={"/"}><i data-feather="users"></i><span>Users</span></Link></li>
        </ul>
    </div>
  )
}
