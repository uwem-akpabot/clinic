import React, { useState, useEffect, useContext } from 'react';
import { useForm } from 'react-hook-form';
import AuthContext from '../../../context/AuthContext';
import axios from 'axios';
import swal from 'sweetalert';
import Basic_RightBar from '../Basic_RightBar';

const Triage = ({host_url}) => {
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
        formData.append('temp', data.temp);
        formData.append('bp', data.bp);
        formData.append('pulse', data.pulse);
        formData.append('respiration', data.respiration);
        formData.append('spo2', data.spo2);
        formData.append('lmp', data.lmp);
        formData.append('weight', data.weight);
        formData.append('height', data.height);
        formData.append('bmi', data.bmi);
        formData.append('medication', data.medication);
        formData.append('nurse_report', data.nurse_report);

        console.log('Getting set to post data')
        const requestOptions = {
            headers: {
                'Content-type': 'multipart/form-data'
            }
        }
        axios.post(
            `${host_url}/triage/create/`,
            // `https://beyondhealthcare.com.ng/api/triage/create/`,
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
                <i class="ik ik-activity bg-blue"></i>
                <div class="d-inline">
                <h5>Nursing Triage</h5>
                <span>Fill out the form and submit</span>
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
                    
                <form className="needs-validation" novalidate="">

                    <div className="card">
                        <div className="card-body">
                            <div className="form-row">
                                <div className="col-12 col-md-7 mb-3">
                                    <label for="validationCustom01"><b>Patient *</b></label>
                                    <select name="patient" className="form-control form-control-primary form-txt-inverse" id="validationCustom02" 
                                        {...register("patient", { required: true })} required >
                                        
                                        <option>- Select a Patient -</option>
                                        { patients.map(patient => (
                                            <option key={patient.id} value={patient.id}>{patient.fname} {patient.sname}</option>
                                        ))}
                                    </select>
                                    {errors.patient && <small className="text-danger text-xs font-italic">Patient Name is required</small>}
                                </div>
                                <div className="col-12 col-md-5 mb-3">
                                    <label for="validationCustom02"><b>Date of Visit *</b></label>
                                    <input type="date" name="date_of_visit" className="form-control form-control-primary form-txt-inverse" id="validationCustom02" placeholder="Date of Visit" 
                                        {...register("date_of_visit", { required: true })} maxLength="20" 
                                        required />
                                    {errors.date_of_visit && <small className="text-danger text-xs font-italic">Date of visit is required</small>}
                                </div>
                            </div>
                            <p className="text-primary mb-2"><b>Vital Signs</b></p> 

                            <div className="form-row">
                                <div className="col-12 col-md-4 mb-3">
                                    <label for="validationCustom04"><b>Temperature</b></label>
                                    <input type="number" name="temp" className="form-control form-control-primary form-txt-inverse" id="validationCustom04" placeholder="" 
                                    {...register("temp")} maxLength="12" />
                                </div>
                                <div className="col-12 col-md-4 mb-3">
                                    <label for="validationCustom01"><b>Blood Pressure </b></label>
                                    <input type="number" name="bp" className="form-control form-control-primary form-txt-inverse" id="validationCustom01" placeholder="" 
                                        {...register("bp")} maxLength="40" />
                                </div>
                                <div className="col-12 col-md-4 mb-3">
                                    <label for="validationCustom01"><b>Pulse</b></label>
                                    <input type="number" name="pulse" className="form-control form-control-primary form-txt-inverse" id="validationCustom01" placeholder="" 
                                        {...register("pulse")} maxLength="40" />
                                </div>

                                <div className="col-12 col-md-4 mb-3">
                                    <label for="validationCustom04"><b>Respiration</b></label>
                                    <input type="number" name="respiration" className="form-control form-control-primary form-txt-inverse" id="validationCustom04" placeholder="" 
                                    {...register("respiration")} maxLength="12" />
                                </div>
                                <div className="col-12 col-md-4 mb-3">
                                    <label for="validationCustom01"><b>SPO2</b></label>
                                    <input type="number" name="spo2" className="form-control form-control-primary form-txt-inverse" id="validationCustom01" placeholder="" 
                                        {...register("spo2")} maxLength="40" />
                                </div>
                                <div className="col-12 col-md-4 mb-3">
                                    <label for="validationCustom01"><b>L.M.P.</b></label>
                                    <input type="number" name="lmp" className="form-control form-control-primary form-txt-inverse" id="validationCustom01" placeholder="" 
                                        {...register("lmp")} maxLength="40" />
                                </div>
                            </div>

                            <div className="form-row">
                                <div className="col-6 col-md-3 mb-3">
                                    <label for="validationCustom04"><b>Weight (w)</b></label>
                                    <input type="number" name="weight" className="form-control form-control-primary form-txt-inverse" id="validationCustom04" placeholder="" 
                                    {...register("weight")} maxLength="12" />
                                </div>

                                <div className="col-6 col-md-3 mb-3">
                                    <label for="validationCustom01"><b>Height (h) </b></label>
                                    <input type="number" name="height" className="form-control form-control-primary form-txt-inverse" id="validationCustom01" placeholder="" 
                                        {...register("height")} maxLength="40" />
                                </div>
                                <div className="col-6 col-md-3 mb-3">
                                    <label for="validationCustom01"><b>BMI (w/h2)</b></label>
                                    <input type="number" name="bmi" className="form-control form-control-primary form-txt-inverse" id="validationCustom01" placeholder="" 
                                        {...register("bmi")} maxLength="40" />
                                </div>
                            </div>

                            <div className="form-row">
                                <div className="col-12 mb-3">
                                    <label for="validationCustom04"><b>Medication</b></label>
                                    <textarea name="medication" className="form-control form-control-primary form-txt-inverse" rows="1"  placeholder="" 
                                    {...register("medication")}></textarea>
                                </div>
                                <div className="col-12 mb-3">
                                    <label for="validationCustom01"><b>Nurse Report </b></label>
                                    <textarea name="nurse_report" className="form-control form-control-primary form-txt-inverse" rows="1" id="validationCustom01" placeholder="" 
                                        {...register("nurse_report")}></textarea>
                                </div>
                                <div className="col-6 col-md-12">
                                    <button onClick={handleSubmit(submitForm)} className="btn btn-primary mt-2">Save Record</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    </form>
                </div>

                <Basic_RightBar />

            </div>
        </div>
        </>
    )
}
export default Triage;