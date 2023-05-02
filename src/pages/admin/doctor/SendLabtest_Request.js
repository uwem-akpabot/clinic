import React, { useState, useEffect, useContext } from 'react';
import { useForm } from 'react-hook-form';
import AuthContext from '../../../context/AuthContext';
import axios from 'axios';
import swal from 'sweetalert';
import Basic_RightBar from '../Basic_RightBar';

const SendLabtest_Request = ({host_url}) => {
    const [biochemistry, setBiochemistry] = useState([])
    const [haematology, setHaematology] = useState([])
    const [microbiology, setMicrobiology] = useState([])
    const handleChange = (e) => {
        const value = e.target.value;
        const checked = e.target.checked;
        console.log(value, checked)

        if (checked == true){
            setBiochemistry([
                ...biochemistry, value
            ])
            setHaematology([
                ...haematology, value
            ])
            setMicrobiology([
                ...microbiology, value
            ])
        } else {
            setBiochemistry(biochemistry.filter((e) => (e !== value)))
            setHaematology(haematology.filter((e) => (e !== value)))
            setMicrobiology(microbiology.filter((e) => (e !== value)))
        }
    }

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     console.log(biochemistry);
    // }

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
        formData.append('biochemistry', data.biochemistry)
        formData.append('haematology', data.haematology)
        formData.append('microbiology', data.microbiology)
        // formData.append('sname', data.sname)

        console.log('Getting set to post data')
        const requestOptions = {
            headers: {
                'Content-type': 'multipart/form-data'
            }
        }
        axios.post(
            `${host_url}/consultation/send-labtest-request/`,
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
                <i class="fa fa-hospital bg-blue"></i>
                <div class="d-inline">
                <h5>Send Lab-Test Request</h5>
                <span>A Doctor can check the tests he/she requires, then sends the form to laboratory</span>
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
                            <form> 
                                <div className="form-row">
                                    <div className="col-12 col-md-8 mb-3">
                                        <label for="validationCustom02">Patient *</label>
                                        <select name="patient" className="form-control form-control-primary form-txt-inverse" id="validationCustom02" 
                                        {...register("patient", { required: true })} required >
                                        
                                        <option>- Select a Patient -</option>
                                        { patients.map(patient => (
                                            <option key={patient.id} value={patient.id}>{patient.fname} {patient.sname}</option>
                                        ))}
                                    </select>
                                    {errors.patient && <small className="text-danger text-xs font-italic">Patient Name is required</small>}
                                
                                    </div>
                                </div><hr />
                                
                                <div className="form-row"> 
                                    <div className="col-12 mb-3">
                                        <br /><h6 className="seofct-icon pb-0 mb-0"><i className="fa fa-flask"></i> <b>Biochemistry</b></h6>
                                    </div>
                                    <div className="row custom-checkboxes px-2 text-dark">
                                        <div className="col-6 col-md-3">
                                            <input type="checkbox" name="biochemistry" value="CEA" onChange={handleChange} 
                                            {...register("biochemistry")} />
                                            <label htmlFor=""> &nbsp; CEA</label>
                                        </div>
                                        <div className="col-6 col-md-3">
                                            <input type="checkbox" name="biochemistry" value="CA 1" onChange={handleChange} 
                                            {...register("biochemistry")} />
                                            <label htmlFor=""> &nbsp; CA 1</label>
                                        </div>
                                        <div className="col-6 col-md-3">
                                            <input type="checkbox" name="biochemistry" value="CA 5" onChange={handleChange} 
                                            {...register("biochemistry")} />
                                            <label htmlFor=""> &nbsp; CA 5</label>
                                        </div>
                                        <div className="col-6 col-md-3">
                                            <input type="checkbox" name="biochemistry" value="HIV 1" onChange={handleChange} 
                                            {...register("biochemistry")} />
                                            <label htmlFor=""> &nbsp; HIV 1 &amp; 2</label>
                                        </div>
                                        <div className="col-6 col-md-3">
                                            <input type="checkbox" name="biochemistry" value="Uric Acid" onChange={handleChange} 
                                            {...register("biochemistry")} />
                                            <label htmlFor=""> &nbsp; Uric Acid</label>
                                        </div>
                                        <div className="col-6 col-md-3">
                                            <input type="checkbox" name="biochemistry" value="Glucose" onChange={handleChange} 
                                            {...register("biochemistry")} />
                                            <label htmlFor=""> &nbsp; Glucose</label>
                                        </div>
                                        <div className="col-6 col-md-3">
                                            <input type="checkbox" name="biochemistry" value="Free T4" onChange={handleChange} 
                                            {...register("biochemistry")} />
                                            <label htmlFor=""> &nbsp; Free T4</label>
                                        </div>
                                        <div className="col-6 col-md-3">
                                            <input type="checkbox" name="biochemistry" value="PSA" onChange={handleChange} 
                                            {...register("biochemistry")} />
                                            <label htmlFor=""> &nbsp; PSA</label>
                                        </div>
                                        <div className="col-6 col-md-3">
                                            <input type="checkbox" name="biochemistry" value="CA 9" onChange={handleChange} 
                                            {...register("biochemistry")} />
                                            <label htmlFor=""> &nbsp; CA 9</label>
                                        </div>
                                        <div className="col-6 col-md-3">
                                            <input type="checkbox" name="biochemistry" value="HBA1c" onChange={handleChange} 
                                            {...register("biochemistry")} />
                                            <label htmlFor=""> &nbsp; HBA1c</label>
                                        </div>
                                        <div className="col-6 col-md-3">
                                            <input type="checkbox" name="biochemistry" value="HBSAc" onChange={handleChange} 
                                            {...register("biochemistry")} />
                                            <label htmlFor=""> &nbsp; HBSAc</label>
                                        </div>
                                        <div className="col-6 col-md-3">
                                            <input type="checkbox" name="biochemistry" value="H. Pylari" onChange={handleChange} 
                                            {...register("biochemistry")} />
                                            <label htmlFor=""> &nbsp; H. Pylari</label>
                                        </div>
                                    </div>
                                </div><hr />

                                <div className="form-row"> 
                                    <div className="col-12 mb-3">
                                        <br /><h6 className="seofct-icon pb-0 mb-0"><i className="fa fa-stethoscope"></i> <b>Haematology</b></h6>
                                    </div>
                                    <div className="row custom-checkboxes px-2 text-dark">
                                        <div className="col-6 col-md-3">
                                            <input type="checkbox" name="haematology" value="FBE" onChange={handleChange} 
                                            {...register("haematology")} />
                                            <label htmlFor=""> &nbsp; FBE</label>
                                        </div>
                                        <div className="col-6 col-md-3">
                                            <input type="checkbox" name="haematology" value="FBC" onChange={handleChange} 
                                            {...register("haematology")} />
                                            <label htmlFor=""> &nbsp; FBC</label>
                                        </div>
                                        <div className="col-6 col-md-3">
                                            <input type="checkbox" name="haematology" value="HB" onChange={handleChange} 
                                            {...register("haematology")} />
                                            <label htmlFor=""> &nbsp; HB</label>
                                        </div>
                                        <div className="col-6 col-md-3">
                                            <input type="checkbox" name="haematology" value="TWDC" onChange={handleChange} 
                                            {...register("haematology")} />
                                            <label htmlFor=""> &nbsp; TWDC</label>
                                        </div>
                                        <div className="col-6 col-md-3">
                                            <input type="checkbox" name="haematology" value="Platelets" onChange={handleChange} 
                                            {...register("haematology")} />
                                            <label htmlFor=""> &nbsp; Platelets</label>
                                        </div>
                                        <div className="col-6 col-md-3">
                                            <input type="checkbox" name="haematology" value="ABO and RH (D)" onChange={handleChange} 
                                            {...register("haematology")} />
                                            <label htmlFor=""> &nbsp; ABO and RH (D)</label>
                                        </div>
                                        <div className="col-6 col-md-3">
                                            <input type="checkbox" name="haematology" value="Malaria Parasites" onChange={handleChange} 
                                            {...register("haematology")} />
                                            <label htmlFor=""> &nbsp; Malaria Parasites</label>
                                        </div>
                                    </div>
                                </div><hr />

                                <div className="form-row"> 
                                    <div className="col-12 mb-3">
                                        <br /><h6 className="seofct-icon pb-0 mb-0"><i className="fa fa-microscope"></i> <b>Microbiology</b></h6>
                                    </div>
                                    <div className="row custom-checkboxes px-2 text-dark">
                                        <div className="col-12 col-md-3">
                                            <input type="checkbox" name="microbiology" value="Urine" onChange={handleChange} 
                                            {...register("microbiology")} />
                                            <label htmlFor=""> &nbsp; Urine</label>
                                        </div>
                                        <div className="col-12 col-md-3">
                                            <input type="checkbox" name="microbiology" value="Microscopy" onChange={handleChange} 
                                            {...register("microbiology")} />
                                            <label htmlFor=""> &nbsp; Microscopy</label>
                                        </div>
                                        <div className="col-12 col-md-3">
                                            <input type="checkbox" name="microbiology" value="RPR (VDRL)" onChange={handleChange} 
                                            {...register("microbiology")} />
                                            <label htmlFor=""> &nbsp; RPR (VDRL)</label>
                                        </div>
                                        <div className="col-12 col-md-3">
                                            <input type="checkbox" name="microbiology" value="AFB (Smear)" onChange={handleChange} 
                                            {...register("microbiology")} />
                                            <label htmlFor=""> &nbsp; AFB (Smear)</label>
                                        </div>
                                        <div className="col-12 col-md-3">
                                            <input type="checkbox" name="microbiology" value="AFB (Smear+Culture)" onChange={handleChange} 
                                            {...register("microbiology")} />
                                            <label htmlFor=""> &nbsp; AFB(Smear/Culture)</label>
                                        </div>
                                        <div className="col-12 col-md-3">
                                            <input type="checkbox" name="microbiology" value="G2000" onChange={handleChange} 
                                            {...register("microbiology")} />
                                            <label htmlFor=""> &nbsp; G2000</label>
                                        </div>
                                    </div>
                                </div><hr />
                                <button onClick={handleSubmit(submitForm)} className="btn btn-primary">Send Request</button>
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
export default SendLabtest_Request;