import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


import "./Body.css"

const Body = () => {
  return (
    <div className='parent-container' >
      <Card style={{ width: '18rem' }} className='card-parent'>
        <Card.Body>
          <Card.Title>Name : </Card.Title>
          <Card.Text>
            Description :
          </Card.Text>
          <Button variant="success">Edit</Button>{' '}
          <Button variant="danger">Delete</Button>{' '}

        </Card.Body>
      </Card >
    </div>

  )

}

export default Body;
