import {ListGroup, ListGroupItem,Card, Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ReactStars from "react-rating-stars-component";
import React from "react";


function MovieCard({el}) {

    return (
      <div className="MyMovieCard" style={{display:'inline', justifyContent:'space-around'}}>
        

<Card style={{ width: '250px' }}>
  <Card.Img variant="top" src= {el.posterURL} />
  <Card.Body>
    <Card.Title>{el.title}</Card.Title>
  </Card.Body>
  <ListGroup className="list-group-flush">
    <ListGroupItem>Director_ {el.director}</ListGroupItem>
    <ListGroupItem>Runtime_ {el.runtime}</ListGroupItem>
    <ListGroupItem>Year_ {el.year}</ListGroupItem>
  </ListGroup>
  <Card.Body>
  <ReactStars
    count={5}
value={el.rate}
    size={24}
    activeColor="#ffd700"
  />
   <Link  to={`/Trailers/${el.id}`}  >   <Button variant="primary">Trailer And Description</Button> </Link>
  </Card.Body>

</Card>


</div>
    );
  }
  
  export default MovieCard;