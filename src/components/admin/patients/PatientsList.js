import React, { useCallback } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import swal from 'sweetalert';

const PatientsList = (props, {host_url}) => {
    const successAlert = (response) => {
        return(
          swal({
              title: "Deleted successfully!",
              text: response.data.message,
              icon: "success"
          }).then(function () {
                props.getPatients()
          })
        )
      }

      const errorAlert = (error) => {
          return(
            swal({
                title: "Error!",
                text: error,
                icon: "error"
            }).then(function () {
              props.getPatients()
            })          
          )
      }
      
      const deletePatient = useCallback( async (id)  => {
        if(window.confirm('Are you sure you want to delete?')){
          axios.delete(
            `${host_url}/patients/${id}/delete/`, {
                method : 'DELETE',
                body : JSON.stringify({
                    id : id
                }),
                headers: {
                    'Content-type': 'application/json'
                }
            })
            .then(res => res)
            .then(data =>{
              successAlert(data)
            })
            .catch(err => errorAlert(err)
            )
        }
      }, []);
    
    return (
    <> 
    <div className="container-xxl flex-grow-1 container-p-y">
      {/* <h4 className="fw-bold py-3 mb-4"><span className="text-muted fw-light">Admin /</span> Register Patients</h4> */}

        <div className="row">
          <div className="col-xl">
            <div className="card">
              <h5 className="card-header">Manage Patients / <small className="text-primary text-normal">{props.company.substring(0, 19)}</small> </h5>
              <div className="table-responsive text-nowrap">

                { props.patients.map(patient => (
                <div key={patient.id}>
                  {patient.id}
                  {patient.fname} {patient.sname}
                  {patient.gender.substring(0,1)}
                  {patient.phone}
                </div>
                ))}
                    
                <table className="table table-striped">
                  <thead>
                    <tr>
                      <th>ClinicNo</th>
                      <th>Patients</th>
                      <th>Sex</th>
                      <th>Phone No.</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody className="table-border-bottom-0">

                    { props.patients.map(patient => (
                    <tr key={patient.id}>
                      <td><span className="badge bg-label-primary me-1">{patient.id}</span></td>
                      <td>{patient.fname} {patient.sname}</td>
                      <td>{patient.gender.substring(0,1)}</td>
                      <td>{patient.phone}</td>

                      <td>
                        <div className="dropdown">
                          <button type="button" className="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                            <i className="bx bx-dots-vertical-rounded"></i>
                          </button>
                          <div className="dropdown-menu">
                            {/* <Link to={`${host_url}/patients/${patient.id}/`} className="dropdown-item" 
                              title="Profile" alt="{Profile}"><i className="bx bx-edit-alt me-1"></i> Profile</Link>

                            <Link to={`${host_url}/patients/${patient.id}/update/`} className="dropdown-item" 
                              title="Edit" alt="Edit"><i className="bx bx-edit-alt me-1"></i> Edit</Link>

                            <button onClick={() => props.deletePatient(patient.id)} value={patient.id} className="dropdown-item"
                              title="Delete" alt="Delete"><i className="bx bx-trash me-1"></i> Delete</button> */}
                          </div>
                        </div>
                      </td>
                    </tr>
                    ))}

                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>     
    </>
  )
}

export default PatientsList
