import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css';
import PersonPicker from './components/Person-picker';
import PersonProfile from './components/Person-profile';
function App() {
  
    const [personsArr, setPersonsArr] = useState([]);
    
    
    async function getUser(){
        try{
          const response = await fetch("https://randomuser.me/api/")
          const data = await response.json()
          setPersonsArr(prev => [...prev, data.results[0]]);       
        } catch (error){
          console.error(error)
        }
    }
    useEffect(() => {
        
        for (let i = 0; i < 9; i++) {
            getUser(); 
        }
          
    }, []);
  

  return (
    <div className='w-screen h-screen bg-gradient-to-tr from-sky-500 to-indigo-500 flex flex-col  justify-start items-center p-5'>
      <h1 className='text-6xl'>Missing Persons</h1>
      <PersonPicker 
        personsArr={personsArr}
      />
      <PersonProfile 
      
      />
    </div>
      
  )
}

export default App
