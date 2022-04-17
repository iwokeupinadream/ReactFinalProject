import React, { useState } from 'react'
import { Button, Card } from 'react-bootstrap'

export default function AdoptablePetCard( {pet, handleAddAppointment} ) {
    //state being used to keep track of date and time being changed for creating an appointment
    const [date, setDate] = useState([])
    const [time, setTime] = useState([])

    const onButtonClick = (id, date, time) => {
    handleAddAppointment(id, date, time)
    }

  return (
    <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={pet.img} />
          <Card.Body>
          <Card.Title>{pet.name}</Card.Title>
          <Card.Text>
            {pet.description}
          </Card.Text>
          <input type="time" value={time} onChange={ (e) => setTime(e.target.value)} id="appt" name="appt"
            min="09:00" max="18:00" required></input>
          <input type='date' value={date} onChange={ (e) => setDate(e.target.value)}></input>
          <br></br>
          <br></br>
          <Button variant="primary" onClick={ () => onButtonClick(pet.id, date, time) }>Schedule Adoption Appointment</Button>
          </Card.Body>
        </Card>
  )
}
