'use client';

import { useSession } from 'next-auth/react';
import React from 'react'

export default function Page() {
  const m = useSession();
  console.log(m);
  // const session = await getServerSession(option);

  // if (!session) {
  //   redirect('/');
  // }
  return (
    <div>
      <h1>This is post page</h1>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus sequi praesentium provident at animi itaque nobis esse, eaque totam optio fugit, aspernatur aliquid libero, suscipit error laudantium perferendis possimus! Illum?</p>

    </div>
  )
}
