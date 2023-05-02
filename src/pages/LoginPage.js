import React, { useContext } from 'react';
import AuthContext from '../context/AuthContext';
import loginImg from '../assets_admin/img/med.jpg';
import logo from './../images/logo.png';

const LoginPage = (props) => {
  let {loginUser} = useContext(AuthContext)
  const pageTitle = 'Login';

  return (
    <>
    <div className="auth-wrapper">
            <div className="container-fluid h-100">
                <div className="row flex-row h-100 bg-white">
                    <div className="col-12 col-md-8 p-0 d-md-block d-lg-block d-sm-none d-none">
                        <div className="lavalite-bg" style={{backgroundImage:`url(${loginImg})`}}>
                            <div className=""></div>
                        </div>
                    </div>
                    <div className="col-12 col-md-4 my-auto p-0 mt-0" style={{ background:"purple"}}>
                        <div className="authentication-form mx-auto">
                            <div className="">
                                <img src={logo} alt="Logo" style={{width:"20%"}} />

                                {/* <div className="logo-img">
                               <img src={logo} className="header-brand-img" alt="lavalite" style={{width:"50px"}} /> 
                            </div>
                             */}
                            </div>
                            <h1 className="text-white"><strong>Beyond's 
          Healthcare and Fertility Center</strong></h1>
                            <h3 className="text-white">Login to your account</h3>
                            <form onSubmit={loginUser}>
                                <label className="text-white">Username *</label>
                                <div className="form-group">
                                    <input type="text" name="username" className="form-control" placeholder="Username" required />
                                    <i className="ik ik-user"></i>
                                </div>
                                <label className="text-white">Password *</label>
                                <div className="form-group">
                                    <input type="password" name="password" className="form-control" placeholder="Password" required />
                                    <i className="ik ik-lock"></i>
                                </div>
                                <div className="sign-btn">
                                    <button type="submit" className="btn btn-theme">Login</button>
                                </div>
                            </form>
                            <div className="register text-left">
                                <p className="text-white">Don't have an account? <a href="register.html">Create an account</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        
          
            {/* <h1><a href="#" style={{ color:"purple"}}><strong>Beyond's </strong>
          Healthcare</a></h1> */}
          
          {/* <form onSubmit={loginUser} classNameName="default-form contact-form"> */}
                {/* <label>Username *</label>
                <div classNameName="form-group">
                  <input type="text" name="username" classNameName="form-control" placeholder="Username" required />
                </div>
              </div>
            </div>
            <div classNameName="row">
              <div classNameName="col-12">
                <label>Password *</label>
                  <div classNameName="form-group">
                    <input type="password" name="password" classNameName="form-control" placeholder="Password" required />
                  </div>
                </div>
                <div classNameName="col-12">
                  <div classNameName="form-group text-center">
                    <button type="submit" classNameName="btn-style-one">Login</button>
                  </div>
                </div>
              <p classNameName="sign-up my-2">Don't have an Account? <a href="#"> Sign Up</a></p> */}
              
    </>
  )
}

export default LoginPage
