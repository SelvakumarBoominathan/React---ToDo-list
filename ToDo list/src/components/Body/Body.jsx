// import React, { useState } from 'react';
// import Card from 'react-bootstrap/Card';
// import Button from 'react-bootstrap/Button';
// import Dropdown from 'react-bootstrap/Dropdown';
// import DropdownButton from 'react-bootstrap/DropdownButton';
// import "./Body.css"

// const Body = (tasks) => {

//   const [selectedItem, setSelectedItem] = useState('Not Completed');


//   const handleSelect = (eventKey) => {
//     setSelectedItem(eventKey);
//   }


//   return (
//     <div className='parent-container' >
//       <Card style={{ width: '25rem', height: '20rem' }} className='card-parent'>
//         <Card.Body className='body-container' >
//           <Card.Title>Name : {tasks.todoName}</Card.Title>
//           <Card.Text>
//             <span>Description : {tasks.description}</span>
//           </Card.Text>
//           <div className='Dorpdwn-container'>
//             <span>Status :</span> <span>
//               <DropdownButton id="dropdown-basic-button" title={selectedItem}>
//                 <Dropdown.Item eventKey="Completed" onSelect={handleSelect}>Completed</Dropdown.Item>
//                 <Dropdown.Item eventKey="Not Completed" onSelect={handleSelect}>Not Completed</Dropdown.Item>
//               </DropdownButton>
//             </span>
//           </div>
//           <div className='btn-container'>
//             <Button variant="success">Edit</Button>{' '}
//             <Button variant="danger">Delete</Button>{' '}
//           </div>
//         </Card.Body>
//       </Card >
//     </div>
//   )

// }

// export default Body;



import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import "./Body.css";

const Body = ({ tasks }) => {
  const [selectedItem, setSelectedItem] = useState('Not Completed');

  const handleSelect = (eventKey) => {
    setSelectedItem(eventKey);
  };

  return (
    <div className='parent-container'>
      {tasks.map((task, index) => (
        <Card key={index} style={{ width: '25rem', height: '20rem' }} className='card-parent'>
          <Card.Body className='body-container'>
            <Card.Title>Name : {task.todoName}</Card.Title>
            <Card.Text>
              <span>Description : {task.description}</span>
            </Card.Text>
            <div className='Dorpdwn-container'>
              <span>Status :</span> <span>
                <DropdownButton id={`dropdown-basic-button-${index}`} title={selectedItem}>
                  <Dropdown.Item eventKey="Completed" onSelect={handleSelect}>Completed</Dropdown.Item>
                  <Dropdown.Item eventKey="Not Completed" onSelect={handleSelect}>Not Completed</Dropdown.Item>
                </DropdownButton>
              </span>
            </div>
            <div className='btn-container'>
              <Button variant="success">Edit</Button>{' '}
              <Button variant="danger">Delete</Button>{' '}
            </div>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default Body;
