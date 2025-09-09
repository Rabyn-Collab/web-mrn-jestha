import React from 'react'

export default function Layout({ children }) {
  return (
    <div>

      <h1>This one is parent this will not be hide</h1>
      {children}
    </div>
  )
}
