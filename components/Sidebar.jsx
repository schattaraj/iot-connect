import Link from 'next/link'
import React from 'react'

export default function Sidebar() {
  return (
    <div className='sidebar'>
        <h3>Logo</h3>
        <ul>
            <li>
                <Link href={"/"}>Devices</Link>
            </li>
        </ul>
    </div>
  )
}
