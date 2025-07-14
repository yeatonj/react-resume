import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import PersonalInfo from './components/PersonalInfo'
import Dropdown from './components/Dropdown'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Dropdown
      icon={"icon"}
      description={"Personal Information"}
    >
      <PersonalInfo />
    </Dropdown>
  )
}

export default App
