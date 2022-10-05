import Item from './components/Item'
import { drawData } from './utils/dataParser'

import './App.css'

function App() {
  return (
    <div className="App">
      <Item drawData={drawData} />
    </div>
  )
}

export default App