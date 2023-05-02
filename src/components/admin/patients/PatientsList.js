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
    <div className="single-table">
        <div className="table-responsive">
            <table className="table table-hover progress-table">
                <thead>
                    <tr className="text-dark">
                        <th scope="col" className="text-dark">ClinicNo</th>
                        <th scope="col" className="text-dark w-30">Patients</th>
                        <th scope="col" className="text-dark">Sex</th>
                        <th scope="col" className="text-dark">Phone No.</th>
                        <th scope="col" className="text-dark text-center">Action</th>
                    </tr>
                </thead>
                <tbody>

                { props.patients.map(patient => (
                <tr key={patient.id}>
                    <th scope="row">{patient.id}</th>
                    <td>{patient.fname} {patient.sname}</td>
                    <td>{patient.gender.substring(0,1)}</td>
                    <td>{patient.phone}</td>
                    {/* <span className="status-p bg-success">complate</span>
                    <span className="status-p bg-primary">complate</span>
                    <span className="status-p bg-danger">complate</span> */}

                    <td>
                    <ul className="d-flex my-0" style={{ listStyleType:"none"}}>
                        <li className="mr-3"><Link to={`${host_url}/patients/${patient.id}/`} className="text-primary" 
                        title="Profile" alt="{Profile}"><i className="fa fa-user"></i></Link></li>
                        {/* <li className="mr-3"><Link to={`http://localhost:8000/api/patients/${patient.id}/`} className="text-primary" 
                        title="Profile" alt="{Profile}"><i className="fa fa-user"></i></Link></li> */}

                        <li className="mr-3"><Link to={`${host_url}/patients/${patient.id}/update/`} className="text-info" 
                        title="Edit" alt="Edit"><i className="fa fa-edit"></i></Link></li>

                        <li><button onClick={() => props.deletePatient(patient.id)} value={patient.id} className="text-danger"
                        title="Delete" alt="Delete"><i className="fa fa-trash"></i></button></li>
                    </ul>
                    </td>
                </tr>
                ))}

                </tbody>
            </table>
        </div>
    </div>
    </>
  )
}

export default PatientsList
