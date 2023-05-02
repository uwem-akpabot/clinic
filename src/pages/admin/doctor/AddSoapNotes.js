import React, { useState, useEffect, useContext } from 'react';
import { useForm } from 'react-hook-form';
import AuthContext from '../../../context/AuthContext';
import axios from 'axios';
import swal from 'sweetalert';
import Basic_RightBar from '../Basic_RightBar';

const AddSoapNotes = ({host_url}) => {
    const {register, handleSubmit, reset, formState: { errors } } = useForm();
    let formData = new FormData();

    let [patients, setPatients] = useState([]) 
    let {authTokens, logoutUser} = useContext(AuthContext)
    
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

    const submitForm = (data) => {
        formData.append('patient', data.patient)
        formData.append('date_of_visit', data.date_of_visit)
        formData.append('subjective', data.subjective);
        formData.append('objective', data.objective);
        formData.append('assessment', data.assessment);
        formData.append('plan', data.plan);
        formData.append('comment', data.comment);

        console.log('Getting set to post data')
        const requestOptions = {
            headers: {
                'Content-type': 'multipart/form-data'
            }
        }
        axios.post(
            `${host_url}/consultation/add-soapnotes/`,
            formData,
            requestOptions
        ).then(res => res)
        .then(data =>{
            successAlert(data)
        })
        .catch(err => errorAlert(err))
    }
    
    const successAlert = (response) => {
        return(
          swal({
              title: "Saved successfully!",
              text: response.data.message,
              icon: "success"
          }).then(function() {
            reset()
          })           
        )
    }

    const errorAlert = (error) => {
        return(
          swal({
              title: "Error!",
              text: error.message,
              icon: "error"
          })              
        )
    }

    useEffect(() => {
        // setStateLst(stateList)
     },[])

    return (
        <>
        <div class="page-header">
            <div class="row align-items-end">
                <div class="col-lg-8">
                    <div class="page-header-title">
                        <i class="fa fa-stethoscope bg-blue"></i>
                        <div class="d-inline">
                            <h5>Add S.O.A.P. Notes</h5>
                            <span>Fill in the Notes here. Longer texts can scroll into multiple lines</span>
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
                    <div className="card">
                        <div className="card-body">
                            {/* <h4 className="header-title">Add Patient</h4> */}
                            <form className="needs-validation" novalidate="">
                                <div className="form-row">
                                    <div className="col-12 col-md-6 mb-3">
                                        <label for="validationCustom01">Select Patient *</label>
                                        <select name="patient" className="form-control form-control-primary form-txt-inverse" id="validationCustom02" 
                                            {...register("patient", { required: true })} required >
                                            
                                            <option>- Select a Patient</option>
                                            { patients.map(patient => (
                                                <option key={patient.id} value={patient.id}>{patient.fname} {patient.sname}</option>
                                            ))}
                                        </select>
                                        {errors.patient && <small className="text-danger text-xs font-italic">Patient Name is required</small>}
                                    </div> 

                                    <div className="col-12 col-md-6 mb-3">
                                        <label for="validationCustom02">Date of Visit *</label>
                                        <input type="date" name="date_of_visit" className="form-control form-control-primary form-txt-inverse" id="validationCustom02" placeholder="date_of_visit" 
                                            {...register("date_of_visit", { required: true })} required />
                                        {errors.date_of_visit && <small className="text-danger text-xs font-italic">Date of visit is required</small>}
                                    </div>

                                    <div className="col-12 mb-3">
                                        <label for="validationCustom01">Subjective *</label>
                                        <textarea name="subjective" className="form-control form-control-primary form-txt-inverse" id="validationCustom01" 
                                        placeholder="" 
                                            {...register("subjective", { required: true })} rows="1"
                                            required ></textarea>
                                            {errors.subjective && <small className="text-danger text-xs font-italic">Subjective is required</small>}
                                    </div>

                                    <div className="col-12 mb-3">
                                        <label for="validationCustom01">Objective *</label>
                                        <textarea name="objective" className="form-control form-control-primary form-txt-inverse" id="validationCustom01" 
                                        placeholder="" 
                                            {...register("objective", { required: true })} rows="1"
                                            required ></textarea>
                                            {errors.objective && <small className="text-danger text-xs font-italic">Objective is required</small>}
                                    </div>

                                    <div className="col-12 mb-3">
                                        <label for="validationCustom01">Assessment *</label>
                                        <textarea name="assessment" className="form-control form-control-primary form-txt-inverse" id="validationCustom01" 
                                        placeholder="" 
                                            {...register("assessment", { required: true })} rows="1"
                                            required ></textarea>
                                            {errors.assessment && <small className="text-danger text-xs font-italic">Assessment is required</small>}
                                    </div>
                                    <div className="col-12 mb-3">
                                        <label for="validationCustom01">Plan *</label>
                                        <textarea name="plan" className="form-control form-control-primary form-txt-inverse" id="validationCustom01" 
                                        placeholder="" 
                                            {...register("plan", { required: true })} rows="1"
                                            required ></textarea>
                                            {errors.plan && <small className="text-danger text-xs font-italic">Plan is required</small>}
                                    </div>
                                    <div className="col-12 col-md-9 mb-3">
                                        <label for="validationCustom01">Other Comments</label>
                                        <textarea name="comment" className="form-control form-control-primary form-txt-inverse" id="validationCustom01" placeholder="" 
                                            {...register("comment")} rows="1"></textarea>
                                    </div>
                                </div>
                                <button onClick={handleSubmit(submitForm)} className="btn btn-primary mt-2">Save Note</button>
                            </form>
                        </div>
                    </div>
                </div>

                <Basic_RightBar />

            </div>
        </div>
        </>
    )
}
export default AddSoapNotes;