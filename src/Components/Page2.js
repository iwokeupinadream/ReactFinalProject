import React from 'react'
import AppointmentCard from './AppointmentCard'

export default function Page2( {adoptablePets, appointments, handleDeleteAppointment, handleReschedule} ) {
  
  return (
    <>

    <div className='container page2-container'>

    <div className='page2-title-div row'>Your Adoption Appointments</div>
    
    <div className='appointment-list row'>
      {appointments.map(appointment => (
      
        <AppointmentCard key={appointment.petId} handleReschedule={handleReschedule} appointment={appointment} 
        handleDeleteAppointment={handleDeleteAppointment} adoptablePets={adoptablePets}/>
     ))}
    </div>
    </div>
    </>
  )
}
