import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import "./Body.css";

const Body = ({ tasks, onEditTask, onDeleteTask }) => {
  const [editIndex, setEditIndex] = useState(null);
  const [editTaskName, setEditTaskName] = useState('');
  const [editDescription, setEditDescription] = useState('');
  const [taskStatuses, setTaskStatuses] = useState({});
  const [filterOption, setFilterOption] = useState('All');

  useEffect(() => {
    // Initialize task statuses
    const initialStatuses = {};
    tasks.forEach((task, index) => {
      initialStatuses[index] = task.status || 'Not Completed';
    });
    setTaskStatuses(initialStatuses);
  }, [tasks]);

  const handleEdit = (index) => {
    setEditIndex(index);
    setEditTaskName(tasks[index].todoName);
    setEditDescription(tasks[index].description);
  };

  const handleSaveEdit = () => {
    const updatedTasks = tasks.map((task, index) => {
      if (index === editIndex) {
        return {
          ...task,
          todoName: editTaskName,
          description: editDescription,
          status: taskStatuses[index]
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

  const handleStatusChange = (index, status) => {
    setTaskStatuses(prevStatuses => ({
      ...prevStatuses,
      [index]: status
    }));
  };

  const handleFilterChange = (filter) => {
    setFilterOption(filter);
  };

  const filteredTasks = tasks.filter((task, index) => {
    if (filterOption === 'All') {
      return true;
    } else {
      return taskStatuses[index] === filterOption;
    }
  });

  return (

    <>
      <div className="filter-dropdown">
        <label className='Filter-select' htmlFor="filter-select" style={{ fontFamily: 'Oswald, sans-serif' }} >Filter:  </label>
        <select className="drop-Down" id="filter-select" value={filterOption} onChange={(e) => handleFilterChange(e.target.value)}>
          <option style={{ fontSize: '0.7rem' }} className="drop-Down" value="All"  >All</option>
          <option style={{ fontSize: '0.7rem' }} className="drop-Down" value="Completed"  >Completed</option>
          <option style={{ fontSize: '0.7rem' }} className="drop-Down" value="Not Completed"  >Not Completed</option>
        </select>
      </div>
      <div className='parent-container'>
        {filteredTasks.map((task, index) => (
          <Card key={index} id='card-parent'>
            <Card.Body className='body-container'>
              <Card.Title  >Name : {editIndex === index ? <input type="text" value={editTaskName} onChange={(e) => setEditTaskName(e.target.value)} /> : task.todoName}</Card.Title>
              <Card.Text>
                <span  >Description : {editIndex === index ? <input type="text" value={editDescription} onChange={(e) => setEditDescription(e.target.value)} /> : task.description}</span>
              </Card.Text>
              <div className='Dorpdwn-container'>
                <span  >Status :</span> <span>
                  <select style={{ fontFamily: 'Oswald, sans-serif', backgroundColor: 'lightblue' }} value={taskStatuses[index] || 'Not Completed'} onChange={(e) => handleStatusChange(index, e.target.value)}>
                    <option style={{ fontSize: '0.7rem' }} className="drop-Down" value="Completed"  >Completed</option>
                    <option style={{ fontSize: '0.7rem' }} className="drop-Down" value="Not Completed"  >Not Completed</option>
                  </select>
                </span>
              </div>
              <div className='btn-container'>
                {editIndex === index ? (
                  <Button variant="primary" onClick={handleSaveEdit}>Save</Button>
                ) : (
                  <Button variant="success" onClick={() => handleEdit(index)}  >Edit</Button>
                )}
                {' '}
                <Button variant="danger" onClick={() => handleDelete(index)} >Delete</Button>{' '}
              </div>
            </Card.Body>
          </Card>
        ))}
      </div>
    </>
  );
};

export default Body;