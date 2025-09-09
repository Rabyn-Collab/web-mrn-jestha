import React from 'react'

export default async function Page({ params }) {

  const { id } = await params;
  console.log(id);
  return (
    <div>
      <h1>This is Detail</h1>

    </div>
  )
}
