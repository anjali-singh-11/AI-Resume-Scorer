import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import SideBar from './component/Sidebar/sideBar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <SideBar />
    </div>
  )
}

export default App
