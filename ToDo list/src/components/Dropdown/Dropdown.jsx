import React from 'react';

const Dropdown = () => {
  return (
    <div className="Body-head">
      <h3>My ToDos</h3>
      <h3>Status Filter : <span>
        <Dropdown className="d-inline mx-2">
          <Dropdown.Toggle id="dropdown-autoclose-true">
            Default Dropdown
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#">Completed</Dropdown.Item>
            <Dropdown.Item href="#">Not Completed</Dropdown.Item>
            <Dropdown.Item href="#">All</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </span></h3>
    </div>
  )
}

export default Dropdown;
