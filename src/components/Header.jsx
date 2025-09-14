import Link from 'next/link'
import React from 'react'

export default function Header() {
  return (
    <div className='flex bg-gray-100 gap-5 py-2'>

      <h1>Next Js</h1>

      <nav className='flex gap-5'>
        <Link href={'/form/add'}>Add Emplyoee</Link>
        <Link href={'/posts'}>Posts</Link>

      </nav>

    </div>
  )
}
