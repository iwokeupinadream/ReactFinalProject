import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function Page1Button() {
  return (
    <>
    <div className='page-buttons'>
    <Button variant="outline-primary" className='btn page1-btn'><Link as={Link} to="/page1">Pet's Avaliable for Adoption</Link></Button>
    <Button variant="outline-primary" className='btn  page1-btn'><Link as={Link} to="/page2">View Your Adoption Apointments</Link></Button>
    </div>
    </>
  )
}
