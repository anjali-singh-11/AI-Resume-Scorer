import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from './assets/vite.svg';
import './App.css';
import SideBar from './component/SideBar/SideBar.jsx';
import { Routes, Route } from 'react-router-dom';
import Dashboard from '../Dashboard/Dashboard.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <SideBar />
      <Routes>
        <Route path='/dashboard' element={<Dashboard/>} />
        <Route path='/history' element={<History />} />
        <Route path='/admin' element={<Admin />} />
      </Routes>
    </div>
  )
}

export default App
