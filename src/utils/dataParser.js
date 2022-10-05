import data from '../constants/data.json'

function parseData(data) {

  const items = data.map(item => {

    const split = Array.from(item.name.split(' in '))
    const name = split[0]
    let parent = split[1]
    let type = name.split(' ').slice(0, 1).join(' ')

    return {
      "name": name,
      "type": name === 'root' ? type = 'folder' : type,
      "id": split[0] + Date.now(),
      "parent": parent || "root",
      "children": []
    }
  })

  items[0].parent = null
  return items
}

const items = parseData(data)

function getTree(items) {
  let data = []

  items.forEach(item => {
    const childrenItems = items.filter(el => el.parent === item.name)
    item.children.push(...childrenItems)
    if (!data.includes(item)) {
      data.push(item)
    }
  })
  return data
}

export const drawData = getTree(items).slice(0, 1)