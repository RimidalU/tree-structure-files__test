import React, { useState } from 'react'

import Item from './Item'

export default function Folder({ item }) {
  const [open, setOpen] = useState(true)

  return (
    <>
      <div onClick={() => setOpen(prev => !prev)}>
        {open ? <span role="img" aria-label="close folder">&#10134;</span> : <span role="img" aria-label="open folder">&#10133;</span>}
        <span role="img" aria-label="folder">&#128194;</span>
        {item.name}
      </div>
      <ul>
        {open && item.children && <Item drawData={item.children} />}
      </ul>
    </>
  )
}
