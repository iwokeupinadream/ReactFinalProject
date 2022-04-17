import React, { useState } from 'react'
import { Button, Card } from 'react-bootstrap'

export default function AppointmentCard( {handleDeleteAppointment, appointment, adoptablePets, handleReschedule} ) {
    //state being used to keep track of date and time for the handling of a reschedule
    const [date, setDate] = useState([])
    const [time, setTime] = useState([])

    const onButtonClick = (id) => {
        handleDeleteAppointment(id)
      }

    const onButtonClick1 = (id, date, time) => {
        handleReschedule(id, date, time)
    }

  return (
    <>
    <Card style={{ width: '30rem' }}>
    <Card.Img variant="top" src={adoptablePets[appointment.petId].img} />
    <Card.Body>
    <Card.Title>{adoptablePets[appointment.petId].name}</Card.Title>
    <Card.Text>
      <span> Appoitnment Date: {appointment.date} Appointment Time: {appointment.time} </span> 
    </Card.Text>
        <input type='date' value={date} onChange={ (e) => setDate(e.target.value)}></input>
        <input type="time" value={time} onChange={ (e) => setTime(e.target.value)} id="appt" name="appt"
            min="09:00" max="18:00" required></input> 
    <Button variant="primary" onClick={ () => onButtonClick1(appointment.petId, date, time)}>Rescedule Appointment</Button>
    <Button variant="danger" onClick={ () => onButtonClick(appointment.petId)}>Cancel Appointment</Button>
    </Card.Body>
    </Card>
    </>
  )
}
