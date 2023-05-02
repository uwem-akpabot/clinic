import React, { useState, useEffect, useContext } from 'react';
import AuthContext from '../../../context/AuthContext';
import Basic_RightBar from '../Basic_RightBar';
import PatientsList from '../../../components/admin/patients/PatientsList';

const ManagePatients = ({host_url}) => {
  let [patients, setPatients] = useState([])
  let {authTokens, logoutUser} = useContext(AuthContext)
  
  let {user} = useContext(AuthContext);

  useEffect(() => {
    getPatients()
  }, [])

  let getPatients = async() => {
    let response = await fetch(`${host_url}/patients/`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer '+ String(authTokens.access)
      }
    })
    let data = await response.json()

    if (response.status === 200){
      setPatients(data)
    } else if (response.status === 'Unauthorized'){
      logoutUser()
    }
  }
  
  return (
    <>
    <div class="page-header">
      <div class="row align-items-end">
        <div class="col-lg-8">
          <div class="page-header-title">
            <i class="fa fa-ambulance bg-blue"></i>
            <div class="d-inline">
                <h5>Browse Patients</h5>
                <span>List of all patients. You can click the icons on the right to view specific patient profile, edit, or delete</span>
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
            <PatientsList patients={patients} getPatients={getPatients} />
          </div>
        </div>

        <Basic_RightBar />
      </div>
    </div>
    </>
  )
}

export default ManagePatients
