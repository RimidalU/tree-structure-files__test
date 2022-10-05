import React from 'react'

export default function Folder({ item }) {
  return (
    <>
      <span role="img" aria-label="file">&#128196;</span>
      {item.name}
    </>
  )
}
