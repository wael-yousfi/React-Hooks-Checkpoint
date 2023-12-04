import {Navbar, Container, Nav, Form, FormControl, Button} from 'react-bootstrap';
import ReactStars from "react-rating-stars-component";
import { Link } from 'react-router-dom';
import React from 'react';


function Navigation({setSearch, setRating}) {
  const ratingChanged = (newRating) => {
        setRating(newRating);
      };

    return (
      
    <Navbar bg="light" expand="lg" sticky="top">
    <Container fluid>
    <Navbar.Brand href="#">James Bond Collection</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        
        <Nav.Link  as={Link}   to='/'   >Home</Nav.Link> 
         <Nav.Link  as={Link}   to='/007Collection'   >Movies</Nav.Link>
        {/* <Nav.Link  as={Link}   to='/Trailer' >Trailers</Nav.Link> */}
      </Nav>
      <Form className="d-flex">
        <FormControl
        onChange= {(e)=> setSearch(e.target.value)}
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
          
          
        />
        <ReactStars count={5} onChange={ratingChanged} size={24} activeColor="#ffd700" />
        <Button variant="outline-success">Search</Button>
      </Form>
    </Navbar.Collapse>
  </Container>
</Navbar>

    )
  }
  
  export default Navigation;