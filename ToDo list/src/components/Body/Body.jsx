import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import "./Body.css";

const Body = ({ tasks, onEditTask, onDeleteTask }) => {
  const [selectedItem, setSelectedItem] = useState('Not Completed');
  const [editIndex, setEditIndex] = useState(null);
  const [editTaskName, setEditTaskName] = useState('');
  const [editDescription, setEditDescription] = useState('');

  const handleSelect = (selectedItem) => {
    setSelectedItem(selectedItem);
  };

  const handleEdit = (index) => {
    setEditIndex(index);
    setEditTaskName(tasks[index].todoName);
    setEditDescription(tasks[index].description);
  };

  const handleSubmitEdit = () => {
    const updatedTasks = tasks.map((task, index) => {
      if (index === editIndex) {
        return {
          ...task,
          todoName: editTaskName,
          description: editDescription,
          status: selectedItem
        };
      }
      return task;
    });

    onEditTask(updatedTasks);

    setEditIndex(null);
    setEditTaskName('');
    setEditDescription('');
  };

  const handleDelete = (index) => {
    onDeleteTask(index);
  };

  return (
    <div className='parent-container'>
      {tasks.map((task, index) => (
        <Card key={index} style={{ width: '25rem', height: '20rem' }} className='card-parent'>
          <Card.Body className='body-container'>
            <Card.Title>Name : {editIndex === index ? <input type="text" value={editTaskName} onChange={(e) => setEditTaskName(e.target.value)} /> : task.todoName}</Card.Title>
            <Card.Text>
              <span>Description : {editIndex === index ? <input type="text" value={editDescription} onChange={(e) => setEditDescription(e.target.value)} /> : task.description}</span>
            </Card.Text>
            <div className='Dorpdwn-container'>
              <span>Status :</span> <span>
                <DropdownButton id={`dropdown-basic-button-${index}`} title={selectedItem}>
                  <Dropdown.Item eventKey="Completed" onSelect={() => handleSelect("Completed")}>Completed</Dropdown.Item>
                  <Dropdown.Item eventKey="Not Completed" onSelect={() => handleSelect("Not Completed")}>Not Completed</Dropdown.Item>
                </DropdownButton>
              </span>
            </div>
            <div className='btn-container'>
              {editIndex === index ? (
                <Button variant="primary" onClick={handleSubmitEdit}>Save</Button>
              ) : (
                <Button variant="success" onClick={() => handleEdit(index)}>Edit</Button>
              )}
              {' '}
              <Button variant="danger" onClick={() => handleDelete(index)}>Delete</Button>{' '}
            </div>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default Body;