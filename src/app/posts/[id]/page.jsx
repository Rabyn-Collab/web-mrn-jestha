import React from 'react'

export default async function Page({ params, searchParams }) {

  const { id } = await params;

  const m = await searchParams;

  console.log(m);
  return (
    <div>
      <h1>This is Detail</h1>

    </div>
  )
}
