import { useState } from 'react'
import PersonalInfo from './components/PersonalInfo'
import Dropdown from './components/Dropdown'
import './App.css'
import Resume from './components/Resume'
import Summary from './components/Summary'
import Education from './components/Education'
import Work from './components/Work'

function App() {
  const [firstName, setFirstName] = useState("John");
  const [lastName, setLastName] = useState("Doe");
  const [email, setEmail] = useState("test_email@notasite.com");
  const [phone, setPhone] = useState("(123) 123-1234");
  const [summary, setSummary] = useState("This is an example summary. Use this section to talk a little bit about yourself and give an overview of your skills and areas of expertise");
  const [edFormData, setEdFormData] = useState([]);
  const [workFormData, setWorkFormData] = useState([]);
  const [edInfo, setEdInfo] = useState([
    {
      name:"Test Univ",
      city:"Ex City",
      state:"Ex State",
      start:"Jan 2020",
      end:"Aug 2024",
      degree:"BS Example Subject",
      notes:["Dean's list", "Did a pretty cool project"]
    },
    {
      name:"Other Univ",
      city:"Other city",
      state:"Other state",
      start:"Jan 2025",
      end:"Aug 2025",
      degree:"MS Example Subject",
      notes:["4.0 GPA", "Was Awesome"]
    }
  ]);
  const [workInfo, setWorkInfo] = useState([
    {
      company:"Test Company",
      city:"Ex City",
      state:"Ex State",
      start:"Jan 2020",
      end:"Aug 2024",
      title:"CEO",
      notes:["Worked on some fun stuff", "Did a cool demo", "Won employee of the month"]
    },
    {
      company:"Other company",
      city:"Other city",
      state:"Other state",
      start:"Jan 2023",
      end:"Sept 2025",
      title:"",
      notes:["Nice project"]
    }
  ])

  return (
    <>
      <section className="data-entry">
        <Dropdown
          icon={"icon"}
          description={"Personal Information"}
        >
          <PersonalInfo
            firstNameSetter={setFirstName}
            lastNameSetter={setLastName}
            emailSetter={setEmail}
            phoneSetter={setPhone}
          />
        </Dropdown>
        <Dropdown
          icon={"icon"}
          description={"Summary"}
        >
          <Summary
            summarySetter={setSummary}
          />
        </Dropdown>
        <Dropdown
          icon={"icon"}
          description={"Education"}
          clickHandler={() => setEdFormData([
            {
              name:"",
              city:"",
              state:"",
              start:"",
              end:"",
              degree:"",
              notes:[""]
            }
          ])}
        >
          <Education
            edSetter={setEdInfo}
            edFormData={edFormData}
            edFormSetter={setEdFormData}
          />
        </Dropdown>
        <Dropdown
          icon={"icon"}
          description={"Work History"}
          clickHandler={() => setWorkFormData([
            {
              company:"",
              city:"",
              state:"",
              start:"",
              end:"",
              title:"",
              notes:[""]
            }
          ])}
        >
          <Work
            workSetter={setWorkInfo}
            workFormData={workFormData}
            workFormSetter={setWorkFormData}
          />
        </Dropdown>
      </section>
      

      <Resume 
        firstName={firstName}
        lastName={lastName}
        email={email}
        phone={phone}
        summary={summary}
        educationInfo={edInfo}
        workInfo={workInfo}
      />
    </>
  )
}

export default App
