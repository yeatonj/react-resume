import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import PersonalInfo from './components/PersonalInfo'
import Dropdown from './components/Dropdown'
import './App.css'
import Resume from './components/Resume'

function App() {
  const [firstName, setFirstName] = useState("John");
  const [lastName, setLastName] = useState("Doe");
  const [email, setEmail] = useState("test_email@notasite.com");

  return (
    <>
      <Dropdown
        icon={"icon"}
        description={"Personal Information"}
      >
        <PersonalInfo 
          firstNameSetter={setFirstName}
          lastNameSetter={setLastName}
          emailSetter={setEmail}
        />
      </Dropdown>
      <Resume 
        firstName={firstName}
        lastName={lastName}
        email={email}
      />
    </>
  )
}

export default App
