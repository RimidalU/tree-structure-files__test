export function getTree(items, parentId = null) {
  return items
    .filter((item) => item.parent_id === parentId)
    .reduce(
      (drawTree, item) => [
        ...drawTree,
        {
          ...item,
          children: getTree(items, item.id),
        },
      ],
      [],
    )
}

export function parseData(data) {

  const items = data.map(item => {
    const name = Array.from(item.name.split(' in '))[0]
    let type = name.split(' ').slice(0, 1).join(' ')

    return {
      ...item,
      "type": name === 'root' ? type = 'folder' : type,
    }
  })
  return items
}
