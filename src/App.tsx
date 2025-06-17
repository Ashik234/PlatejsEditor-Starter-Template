import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MyPlateEditor from './components/MyPlateEditor'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div style={{ padding: '20px' }}>
      <MyPlateEditor />
    </div>
  )
}

export default App
