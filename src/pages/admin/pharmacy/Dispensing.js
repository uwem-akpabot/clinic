import React, { useState, useEffect, useContext } from 'react';
import { useForm } from 'react-hook-form';
import AuthContext from '../../../context/AuthContext';
import axios from 'axios';
import swal from 'sweetalert';
import Basic_RightBar from '../Basic_RightBar';

const Dispensing = ({host_url}) => {
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
        formData.append('diagnosis', data.diagnosis);
        formData.append('drug1', data.drug1);
        formData.append('dosage1', data.dosage1);
        formData.append('drug2', data.drug2);
        formData.append('dosage2', data.dosage2);
        formData.append('drug3', data.drug3);
        formData.append('dosage3', data.dosage3);
        formData.append('drug4', data.drug4);
        formData.append('dosage4', data.dosage4);
        formData.append('dispensedby', data.dispensedby);

        console.log('Getting set to post data')
        const requestOptions = {
            headers: {
                'Content-type': 'multipart/form-data'
            }
        }
        axios.post(
            `${host_url}/dispensing/create/`,
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
                <i class="fa fa-cross bg-blue"></i>
                <div class="d-inline">
                <h5>Drug Dispensing</h5>
                <span>Please fill out the form below</span>
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
                        <form className="needs-validation" novalidate="">
                            <div className="form-row">
                                <div className="col-12 col-md-7 mb-3">
                                    <label for="validationCustom01"><b>Patient *</b></label>
                                    <select name="patient" className="form-control form-control-primary form-txt-inverse" id="validationCustom02" 
                                        {...register("patient", { required: true })} required >
                                        
                                        <option>- Select a Patient</option>
                                        { patients.map(patient => (
                                            <option key={patient.id} value={patient.id}>{patient.fname} {patient.sname}</option>
                                        ))}
                                    </select>
                                    {errors.patient && <small className="text-danger text-xs font-italic">Patient Name is required</small>}
                                </div>
                                <div className="col-12 col-md-5 mb-3">
                                    <label for="validationCustom02"><b>Dispensed On *</b></label>
                                    <input type="date" name="date_of_visit" className="form-control form-control-primary form-txt-inverse" id="validationCustom02" placeholder="Date of Visit" 
                                        {...register("date_of_visit", { required: true })} maxLength="20" 
                                        required />
                                    {errors.date_of_visit && <small className="text-danger text-xs font-italic">Date of visit is required</small>}
                                </div>
                                <div className="col-12 mb-3">
                                    <label for="validationCustom04"><b>Diagnosis *</b></label>
                                    <textarea name="diagnosis" className="form-control form-control-primary form-txt-inverse" id="validationCustom04" placeholder="Diagnosis notes here ..." 
                                        {...register("diagnosis", { required: true })} required ></textarea>
                                    {errors.diagnosis && <small className="text-danger text-xs font-italic">Diagnosis is required</small>}
                                </div>

                                <div className="col-6 col-md-4 mb-3">
                                    <label for="validationCustom01"><b>Drug 1</b></label>
                                    <input type="text" name="drug1" className="form-control form-control-primary form-txt-inverse" id="validationCustom01" placeholder="e.g. Paracetamol ..." 
                                        {...register("drug1")} maxLength="40" />
                                </div>
                                <div className="col-6 col-md-2 mb-3">
                                    <label for="validationCustom01"><b>Dosage 1</b></label>
                                    <input type="text" name="dosage1" className="form-control form-control-primary form-txt-inverse" id="validationCustom01" placeholder="2x day ..." 
                                        {...register("dosage1")} maxLength="40" />
                                </div>

                                <div className="col-6 col-md-4 mb-3">
                                    <label for="validationCustom01"><b>Drug 2</b></label>
                                    <input type="text" name="drug2" className="form-control form-control-primary form-txt-inverse" id="validationCustom01"  
                                        {...register("drug2")} maxLength="40" />
                                </div>
                                <div className="col-6 col-md-2 mb-3">
                                    <label for="validationCustom01"><b>Dosage 2</b></label>
                                    <input type="text" name="dosage2" className="form-control form-control-primary form-txt-inverse" id="validationCustom01"  
                                        {...register("dosage2")} maxLength="40" />
                                </div>

                                <div className="col-6 col-md-4 mb-3">
                                    <label for="validationCustom01"><b>Drug 3</b></label>
                                    <input type="text" name="drug1" className="form-control form-control-primary form-txt-inverse" id="validationCustom01"  
                                        {...register("drug1")} maxLength="40" />
                                </div>
                                <div className="col-6 col-md-2 mb-3">
                                    <label for="validationCustom01"><b>Dosage 3</b></label>
                                    <input type="text" name="dosage1" className="form-control form-control-primary form-txt-inverse" id="validationCustom01" 
                                        {...register("dosage1")} maxLength="40" />
                                </div>

                                <div className="col-6 col-md-4 mb-3">
                                    <label for="validationCustom01"><b>Drug 4</b></label>
                                    <input type="text" name="drug2" className="form-control form-control-primary form-txt-inverse" id="validationCustom01"  
                                        {...register("drug2")} maxLength="40" />
                                </div>
                                <div className="col-6 col-md-2 mb-3">
                                    <label for="validationCustom01"><b>Dosage 4</b></label>
                                    <input type="text" name="dosage2" className="form-control form-control-primary form-txt-inverse" id="validationCustom01" 
                                        {...register("dosage2")} maxLength="40" />
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="col-12 col-md-6 mb-3">
                                    <label for="validationCustom01"><b>Dispensed By</b></label>
                                    <input type="text" name="dispensedby" className="form-control form-control-primary form-txt-inverse" id="validationCustom01" placeholder="Dispensed By ..." 
                                        {...register("dispensedby")} maxLength="40" />
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="col-12 col-md-6">
                                    <button onClick={handleSubmit(submitForm)} className="btn btn-primary mt-2">Save Record</button>
                                </div>
                            </div>
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
export default Dispensing;