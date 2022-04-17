import React from 'react'
import AdoptablePetCard from './AdoptablePetCard'

export default function Page1( {adoptablePets, handleAddAppointment} ) {
  
  return (
    <>
    <div className='container page1-container'>
    <div className='page1-title-div'>Avaliable pets for Adoption</div>

    <div className='adoptable-pets row'>
      {adoptablePets.map(pet => (
        
        <AdoptablePetCard key={pet.id} pet={pet} handleAddAppointment={handleAddAppointment}/>
         
         ))}

    </div>
    </div>
   
    </>
  )
}
