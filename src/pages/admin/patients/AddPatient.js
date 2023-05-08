import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import swal from 'sweetalert';

const AddPatient = (props, {host_url}) => {
    const {register, handleSubmit, reset, formState: { errors } } = useForm();
    let formData = new FormData();

    const submitForm = (data) => {
        formData.append('fname', data.fname)
        formData.append('sname', data.sname)
        formData.append('gender', data.gender);
        formData.append('address', data.address);
        formData.append('phone', data.phone);
        formData.append('email', data.email);
        formData.append('contact_person', data.contact_person);
        formData.append('contact_person_phone', data.contact_person_phone);

        console.log('Getting set to post data')
        const requestOptions = {
            headers: {
                'Content-type': 'multipart/form-data'
            }
        }
        axios.post(
            `${host_url}/patients/create/`,
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
          swal({ title: "Saved successfully!", text: response.data.message, icon: "success"})
          .then(function() { reset()})           
        )
    }
    const errorAlert = (error) => {
        return( swal({ title: "Error!", text: error.message, icon: "error" }) )
    }

    return (
        <>
        <div className="container-xxl flex-grow-1 container-p-y">
            {/* <h4 className="fw-bold py-3 mb-4"><span className="text-muted fw-light">Admin /</span> Register Patients</h4> */}

            <div className="row">
            <div className="col-xl">
                <div className="card mb-4">
                <div className="card-header d-flex justify-content-between align-items-center">
                    <h5 className="mb-0">Register Patients / <small className="text-primary text-normal">{props.company.substring(0, 19)}</small> </h5>
                    <small className="text-muted float-end">
                    Compulsory fields marked <span className="asterisk">*</span></small>
                </div>
                
                <div className="card-body">
                    <form id="formAccountSettings">
                    <div className="row">
                        <div className="mb-3 col-md-6">
                        <label for="firstName" className="form-label">First Name <span className="asterisk">*</span></label>
                        <input className="form-control" type="text" name="fname" placeholder="John" 
                            {...register("fname", { required: true })} maxLength="40" 
                            required />
                            {errors.fname && <small className="text-danger text-xs font-italic">First Name is required</small>}
                        </div>

                        <div className="mb-3 col-md-6">
                        <label for="lastName" className="form-label">Surname <span className="asterisk">*</span></label>
                        <input className="form-control" type="text" name="sname" placeholder="Doe" 
                            {...register("sname", { required: true })} maxLength="20" 
                            required />
                            {errors.sname && <small className="text-danger text-xs font-italic">Surname is required</small>}
                        </div>

                        <div className="mb-3 col-md-6">
                        <label for="lastName" className="form-label">Gender <span className="asterisk">*</span></label>
                        <select className="select2 form-select" name="gender" 
                            {...register("gender", { required: true })} required >
                            <option value="">- Choose -</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                        </select>
                        {errors.gender && <small className="text-danger text-xs font-italic">Gender is required</small>}
                        </div>
                        
                        <div className="mb-3 col-md-6">
                        <label for="organization" className="form-label">Address</label>
                        <input type="text" className="form-control" name="address" placeholder="123 Sample Street, Allen Avenue, Ikeja, Lagos" 
                            {...register("address")} />
                        </div>

                        <div className="mb-3 col-md-6">
                        <label className="form-label" for="phoneNumber">Phone Number</label>
                        <div className="input-group input-group-merge">
                            <span className="input-group-text">NG (+234)</span>
                            <input type="text" name="phone" className="form-control" placeholder="803 456 7890"
                            {...register("phone")} maxLength="12" />
                        </div>
                        </div>

                        <div className="mb-3 col-md-6">
                        <label for="email" className="form-label">E-mail</label>
                        <input className="form-control" type="email" name="email" placeholder="john.doe@example.com"
                            {...register("email")} maxLength="40" />
                        </div>

                        <div className="mb-3 col-md-6">
                        <label for="lastName" className="form-label">Contact Person's Name</label>
                        <input className="form-control" type="text" name="contact_person" placeholder="e.g. Brother's name ..." 
                            {...register("contact_person", { required: true })} maxLength="40" />
                        </div>

                        <div className="mb-3 col-md-6">
                        <label for="lastName" className="form-label">Contact Person's Phone</label>
                        <input className="form-control" type="text" name="contact_person_phone" placeholder="e.g. Brother's phone no. ..." 
                            {...register("contact_person_phone")} maxLength="30" />
                        </div>
                        
                    </div>
                    <div className="mt-2">
                        <button onClick={handleSubmit(submitForm)} className="btn btn-primary me-2">Save Record</button>
                        <button type="reset" className="btn btn-outline-secondary">Cancel</button>
                    </div>
                    </form>
                </div>

                </div>
            </div>
            </div>
        </div> 
    </>
    )
}
export default AddPatient;