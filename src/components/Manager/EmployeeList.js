import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap'; // Import Modal and Button components from react-bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

function EmployeeList() {
  const [showModal, setShowModal] = useState(false); // State variable for controlling modal visibility
  const [taskDescription, setTaskDescription] = useState(""); // State variable to store task description

  const handleAssignTask = (userId) => {
    // Handle task assignment for the specific user
    console.log(`Assign task for user with ID: ${userId}`);
    setShowModal(true); // Show the modal when the button is clicked
  };

  return (
    <div className='waseem'>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Position</th>
            <th scope="col">Email</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>
              <button onClick={() => handleAssignTask(1)} className="btn btn-primary">Assign Task</button>
            </td>
          </tr>
        
        </tbody>

        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>
              <button onClick={() => handleAssignTask(1)} className="btn btn-primary">Assign Task</button>
            </td>
          </tr>
        
        </tbody>
      </table>

      
      
      {/* Modal */}
      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Assign Task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <textarea
            className="form-control"
            value={taskDescription}
            onChange={(e) => setTaskDescription(e.target.value)}
            rows={5}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>Close</Button>
          <Button variant="primary" onClick={() => setShowModal(false)}>submit</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default EmployeeList;
