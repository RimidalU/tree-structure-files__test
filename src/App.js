import Item from './components/Item'
import './App.css'

import { getTree, parseData } from './utils/dataParser'

import data from './constants/data.json'

const items = parseData(data)
const drawData = getTree(items)

function App() {
  return (
    <div className="App">
      <Item drawData={drawData} />
    </div>
  )
}

export default App