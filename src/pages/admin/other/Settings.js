import React, { useEffect} from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import swal from 'sweetalert';
import Basic_RightBar from '../Basic_RightBar';

const Settings = ({host_url}) => {
    const {register, handleSubmit, reset, formState: { errors } } = useForm();
    let formData = new FormData();

    const submitForm = (data) => {
        formData.append('fname', data.fname)
        formData.append('sname', data.sname)
        formData.append('clinic_no', data.clinic_no);
        formData.append('address', data.address);
        formData.append('phone', data.phone);
        formData.append('gender', data.gender);
        formData.append('email', data.email);
        formData.append('nextkin', data.nextkin);

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
                <i class="ik ik-settings bg-blue"></i>
                <div class="d-inline">
                <h5>Settings</h5>
                <span>lorem ipsum dolor sit amet, consectetur adipisicing elit</span>
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
                <div className="col-12 col-md-9">
                    <div className="card">
                        <div className="card-body">
                            {/* <h4 className="header-title">Add Patient</h4> */}
                            No data available
                        </div>
                    </div>
                </div>

                <Basic_RightBar />

            </div>
        </div>
        </>
    )
}
export default Settings;