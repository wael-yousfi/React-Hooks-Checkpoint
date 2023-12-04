import Card from 'react-bootstrap/Card';
import React from 'react';



function TrailerAndDescription(props) {

  const movie= props.movies.find(el=>  el.id==props.match.params.id )
    return (
      <div className="Trailer">

  <Card>
  <iframe width="560" height="315" src={movie.trailer} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    <Card.Body>
      <Card.Text>
        {movie.title}
        {movie.description}
      </Card.Text>
    </Card.Body>
  </Card>
<button onClick= {()=> props.history.push('/')}>Home</button>
</div>
    );
  }
  
  export default TrailerAndDescription;