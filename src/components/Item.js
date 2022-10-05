import React from 'react'

import Folder from './Folder'
import File from './File'

export default function Item({ drawData }) {
  return (
    <ul>
      {drawData && drawData.map(item => (
        <li key={item.id} >
          {item.type === 'folder' ? <Folder item={item} /> : <File item={item} />}
        </li>
      ))}
    </ul>
  )
}
