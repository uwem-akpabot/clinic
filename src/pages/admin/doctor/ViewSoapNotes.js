import React, { useState, useEffect, useContext, useCallback } from 'react';
import AuthContext from '../../../context/AuthContext';
// import { Link } from 'react-router-dom';
import axios from 'axios';
import swal from 'sweetalert';
import Basic_RightBar from '../Basic_RightBar';

const ViewSoapNotes = ({host_url}) => {
  let [soapnotes, setSoapNotes] = useState([])
  let {authTokens, logoutUser} = useContext(AuthContext)
  
  let {user} = useContext(AuthContext);

  useEffect(() => {
    getSoapNotes()
  }, [])

  let getSoapNotes = async() => {
    let response = await fetch(`${host_url}/consultation/view-soapnotes/`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer '+ String(authTokens.access)
      }
    })
    let data = await response.json()

    if (response.status === 200){
      setSoapNotes(data)
    } else if (response.status === 'Unauthorized'){
      logoutUser()
    }
  }

  const successAlert = (response) => {
    return(
      swal({
          title: "Deleted successfully!",
          text: response.data.message,
          icon: "success"
      }).then(function () {
            getSoapNotes()
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
          getSoapNotes()
        })          
      )
  }

  const deleteBlog = useCallback( async (id)  => {
    if(window.confirm('Are you sure you want to delete this blog post?')){
      axios.delete(
        `${host_url}/patients/${id}/delete/`,{
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
    <div class="page-header">
      <div class="row align-items-end">
        <div class="col-lg-8">
          <div class="page-header-title">
            <i class="ik ik-file-text bg-blue"></i>
            <div class="d-inline">
              <h5>S.O.A.P. Notes</h5>
              <span>View Notes already saved</span>
            </div>
          </div>
        </div>
        <div class="col-lg-4">
          <nav class="breadcrumb-container" aria-label="breadcrumb">
            <ol class="breadcrumb">
              <li class="breadcrumb-item">
                <a href="../index.html"><i class="ik ik-home"></i></a>
              </li>
              <li class="breadcrumb-item"><a href="#">Forms</a></li>
              <li class="breadcrumb-item active" aria-current="page">Components</li>
            </ol>
          </nav>
        </div>
      </div>
    </div> 
        
    <div className="main-content-inner">
      <div className="row">
        <div className="col-12 col-md-8">
          <div className="card mt-0">
              {/* <div className="card-body"> */}
                <div className="single-table">
                    <div className="table-responsive">
                        <table className="table table-hover progress-table">
                            <thead>
                                <tr class="text-white">
                                    <th scope="col" className="text-dark">PatientID</th>
                                    <th scope="col" className="text-dark">Date Taken</th>
                                    <th scope="col" className="text-dark">Subjective</th>
                                    <th scope="col" className="text-dark">Action</th>
                                </tr>
                            </thead>
                            <tbody>

                            { soapnotes.map(soapnote => (
                              <tr key={soapnote.id}>
                                {/* <th scope="row">{patient.clinic_no}</th> */}
                                <th scope="row">{soapnote.patient}</th>
                                <td>{soapnote.date_of_visit}</td>
                                <td>{soapnote.subjective}</td>
                                {/* <span className="status-p bg-success">complate</span>
                                <span className="status-p bg-primary">complate</span>
                                <span className="status-p bg-danger">complate</span> */}

                                {/* <td> */}
                                  {/* <ul className="d-flex my-0">
                                    <li className="mr-3"><Link to={`http://localhost:8000/api/patients/${patient.id}/update/`} className="text-info" 
                                      title="Edit" alt="Edit"><i className="fa fa-edit"></i></Link></li>

                                    <li><button onClick={() => deleteBlog(patient.id)} value={patient.id} className="text-danger"
                                      title="Delete" alt="Delete"><i className="fa fa-trash"></i></button></li>
                                  </ul> */}
                                {/* </td> */}
                              </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                </div>
              {/* </div> */}
          </div>
        </div>

        <Basic_RightBar />

      </div>
    </div>
    </>
  )
}

export default ViewSoapNotes
