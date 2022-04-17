import React from 'react'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { Route, Routes, Link } from 'react-router-dom'
import Footer from './Footer'
import HomePage from './HomePage'
import Page1 from './Page1'
import Page2 from './Page2'

export default function NavBar({ adoptablePets, appointments, handleAddAppointment, handleDeleteAppointment, handleReschedule }) {

  
  return (
<>
  <Navbar bg="dark" variant="dark" expand="md">
    <Container>
      <Navbar.Brand as={Link} to="/">Local Pet Adoption</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="NavBar">
          <Nav.Link as={Link} to="/page1">Pet's Avaliable for Adoption</Nav.Link>
          <Nav.Link as={Link} to="/page2">View Your Adoption Appointments</Nav.Link>
          <NavDropdown title="Extra Information" id="basic-nav-dropdown">
            <NavDropdown.Item >Coming Soon!</NavDropdown.Item>
          </NavDropdown>
      </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
<div className='container'>
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='page1' element={<Page1 adoptablePets={adoptablePets} handleAddAppointment={handleAddAppointment} />} />
      <Route path='page2' element={<Page2 handleReschedule={handleReschedule} 
      appointments={appointments} 
      adoptablePets={adoptablePets} 
      handleDeleteAppointment={handleDeleteAppointment} />} />
    </Routes>
</div>
<Footer> 

</Footer>
</>
  )
}
