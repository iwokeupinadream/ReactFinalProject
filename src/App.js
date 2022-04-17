import { useState } from 'react';
import { ADOPTABLE_PETS } from './data';
import './App.css';
import NavBar from './Components/NavBar'

function App() {
  //state at the top of the flow in app.js
  //state for pets that can be adopted
  //state for appointments
  const [adoptablePets, setAdoptablePets] = useState(ADOPTABLE_PETS)
  const [appointments, setAppointments] = useState([])

  //function for adding an appointment. function is passed down as a prop all the way to adoptable pet card component
  const handleAddAppointment = (petId, date, time) => {
    //used to get the keys/id's of any apointments that might already be made
    let keyMap = appointments.map(pet => (pet.petId))
    //if statement to check if there is already an appointment for the pet
    if(!keyMap.includes(petId)) {
      
      setAppointments([...appointments, 

        {
        petId: petId,
        date: date,
        time: time
        }
      ])
    }
    //if statment for if there is already an appointment to alert user that this pet might no longer be avaliable
    if(keyMap.includes(petId)) {
      alert('Error the pet your trying to adopt already has a scheduled appointment')
      }
 }

  //function that was used to remove pet from adoption list but had an issue with state updating and moved on
  // const removePetFromAdoptionList = (petId) => {
  //   let petMap = adoptablePets.map(pet => (pet.id))
  //   let index = petMap.indexOf(petId)
  //     console.log(index + ' ' + petId)
  //     let arrayCopy = [...adoptablePets]
  //     arrayCopy.splice(index, 1)
  //     console.log(arrayCopy)
  //     setAdoptablePets(arrayCopy)

  // }

  //function used to delete an appointment. 
  //function gets passed down all the way to appointment card component
  const handleDeleteAppointment = (petId) => {
    let keyMap = appointments.map(pet => (pet.petId))
    let index = keyMap.indexOf(petId)
    let arrayCopy = [...appointments]
    arrayCopy.splice(index, 1)
    setAppointments(arrayCopy)
  }

  //function that gets passed down to appointment card component
  //used to handle rescheduling of an already created appointment
  const handleReschedule = (petId, date, time) => {
    let keyMap = appointments.map(pet => (pet.petId))
    let index = keyMap.indexOf(petId)
    let arrayCopy = [...appointments]
    arrayCopy[index].date = date
    arrayCopy[index].time = time
    setAppointments(arrayCopy)
  }

  return (
    <>
    <NavBar adoptablePets={adoptablePets} appointments={appointments} 
    handleAddAppointment={handleAddAppointment} 
    handleDeleteAppointment={handleDeleteAppointment}
    handleReschedule={handleReschedule}/>
    </>
  );
}

export default App;
