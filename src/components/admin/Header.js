import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
// import AuthContext from '../../context/AuthContext';
import userimg from '../../assets_admin/img/user.jpg';

const Header = () => {
//   let {user, logoutUser} = useContext(AuthContext);

  return (
    <>
    <header className="header-top" header-theme="purple">
        <div className="container-fluid">
            <div className="d-flex justify-content-between">
                <div className="top-menu d-flex align-items-center text-white">
                    <h6 className="py-1 pb-0 mb-0 px-3">Beyond's Healthcare and Fertility Center</h6> 
                </div>
                <div className="top-menu d-flex align-items-center">
                    
                <div className="dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="notiDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="ik ik-bell"></i><span className="badge bg-danger">3</span></a>
                        <div className="dropdown-menu dropdown-menu-right notification-dropdown" aria-labelledby="notiDropdown">
                            <h4 className="header">Notifications</h4>
                            <div className="notifications-wrap">
                                <a href="#" className="media">
                                    <span className="d-flex">
                                        <i className="ik ik-check"></i> 
                                    </span>
                                    <span className="media-body">
                                        <span className="heading-font-family media-heading">Invitation accepted</span> 
                                        <span className="media-content">Your have been Invited ...</span>
                                    </span>
                                </a>
                            </div>
                            <div className="footer"><a href="javascript:void(0);">See all activity</a></div>
                        </div>
                    </div>
                    
                    {/* {user && <h6 className="text-capitalize text-white py-1 pb-0 mb-0 px-3">
                        <b>Hello, {user.username}!</b></h6>}

                    <div className="dropdown">
                        <a className="dropdown-toggle" href="#" id="userDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><img className="avatar" src={userimg} alt="" /></a>
                        <div className="dropdown-menu dropdown-menu-right" aria-labelledby="userDropdown">
                            <Link to="/settings" className="dropdown-item"><i className="ik ik-user"></i><span>Profile</span></Link>
                            <Link to="/settings" className="dropdown-item"><i className="ik ik-settings"></i><span>Settings</span></Link>
                            {user ? (
                                <div className="nav-item">
                                    <button onClick={logoutUser} className="dropdown-item">
                                    <i className="ik ik-lock"></i><span> Logout</span></button>
                                </div>
                            ) : (
                                <div className="nav-item">
                                    <Link to="/login" className="sidebar-link">
                                        <i className="ik ik-lock"></i> Login
                                    </Link>
                                </div>
                            )}
                        </div>
                    </div> */}

                </div>
            </div>
        </div>
    </header>
  </>
  )
}

export default Header
