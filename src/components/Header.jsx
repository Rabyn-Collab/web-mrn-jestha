import { getServerSession } from 'next-auth';
import Link from 'next/link'
import React from 'react'
import { option } from '../app/api/auth/[...nextauth]/option';
import { signOut } from 'next-auth/react';
import SignOutButton from './SignOutButton';

export default async function Header() {
  const session = await getServerSession(option);
  console.log(session);
  return (
    <div className='flex bg-gray-100 gap-5 py-2'>

      <h1>Next Js</h1>

      <nav className='flex gap-5 justify-between'>
        <div className='flex gap-5'>
          <Link href={'/form/add'}>Add Emplyoee</Link>
          <Link href={'/posts'}>Posts</Link>
        </div>
        <div className='flex gap-5'>
          {session ? <h1>{session?.user.email}</h1> : <Link href={'/form/login'}>Login</Link>}
          {
            session && <SignOutButton />
          }

        </div>


      </nav>

    </div>
  )
}
