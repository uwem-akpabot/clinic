// import React, { useContext } from 'react';
// import AuthContext from '../../context/AuthContext';
import { Outlet, Link } from 'react-router-dom';
import Navbar from "../../components/admin/Navbar";
import Footer from './Footer';
import logo from './../../images/logo.png'

const Sidebar = (props) => {
  // let {authTokens, user, logoutUser} = useContext(AuthContext)
  
  return (
    <>
    {/* Layout wrapper */}
    <div className="layout-wrapper layout-content-navbar">
      <div className="layout-container">

        {/* Menu */}    
        {/* <aside id="layout-menu" className="layout-menu menu-vertical menu bg-menu-theme"> */}
        <aside id="layout-menu" className="layout-menu menu-vertical menu bg-custom bg-map">
            <div className="app-brand demo">
            <a href="" className="app-brand-link">
              <span className="app-brand-logo demo">
              <img src={logo} className="header-brand-img" alt="lavalite" style={{width:"50px"}} /> 
              </span>
              <span className="app-brand-text demo menu-text fw-bolder ms-2 text-white text-capitalize">{props.company.substring(0, 8)}</span>
            </a>

            <a href="javascript:void(0);" className="layout-menu-toggle menu-link text-large ms-auto d-block d-xl-none">
              <i className="bx bx-chevron-left bx-sm align-middle"></i>
            </a>
          </div>

          <div className="menu-inner-shadow"></div>

          <ul className="menu-inner py-1">
            <li className="menu-item active">
              <Link to="/" className="menu-link">
                <i className="menu-icon tf-icons bx bx-home-circle"></i>
                <div data-i18n="Analytics">Dashboard</div>
              </Link>
            </li>
            <li className="menu-item">
              <a href="javascript:void(0);"  className="menu-link menu-toggle">
                <i className="menu-icon tf-icons bx bx-layout"></i>
                <div data-i18n="Layouts">Admin</div>
              </a>

              <ul className="menu-sub">
                <li className="menu-item">
                  <Link to="/add-patient" className="menu-link">
                    <div data-i18n="Without menu">Register Patients</div>
                  </Link>
                </li>
                <li className="menu-item">
                  <Link to="/manage-patients" className="menu-link">
                    <div data-i18n="Without menu">Manage Patients</div>
                  </Link>
                </li>
              </ul>
            </li>

            <li className="menu-header small text-uppercase">
              <span className="menu-header-text">Users</span>
            </li>
            <li className="menu-item">
              <a href="javascript:void(0);" className="menu-link menu-toggle">
                <i className="menu-icon tf-icons bx bx-dock-top"></i>
                <div data-i18n="Account Settings">Doctor</div>
              </a>
              <ul className="menu-sub">
                <li className="menu-item">
                  <a href="pages-account-settings-account.html" className="menu-link">
                    <div data-i18n="Account">Account</div>
                  </a>
                </li>
                <li className="menu-item">
                  <a href="pages-account-settings-notifications.html" className="menu-link">
                    <div data-i18n="Notifications">Notifications</div>
                  </a>
                </li>
                <li className="menu-item">
                  <a href="pages-account-settings-connections.html" className="menu-link">
                    <div data-i18n="Connections">Connections</div>
                  </a>
                </li>
              </ul>
            </li>
            <li className="menu-item">
              <a href="javascript:void(0);" className="menu-link menu-toggle">
                <i className="menu-icon tf-icons bx bx-lock-open-alt"></i>
                <div data-i18n="Authentications">Lab. Scientist</div>
              </a>
              <ul className="menu-sub">
                <li className="menu-item">
                  <a href="auth-login-basic.html" className="menu-link" target="_blank">
                    <div data-i18n="Basic">Login</div>
                  </a>
                </li>
                <li className="menu-item">
                  <a href="auth-register-basic.html" className="menu-link" target="_blank">
                    <div data-i18n="Basic">Register</div>
                  </a>
                </li>
                <li className="menu-item">
                  <a href="auth-forgot-password-basic.html" className="menu-link" target="_blank">
                    <div data-i18n="Basic">Forgot Password</div>
                  </a>
                </li>
              </ul>
            </li>
            <li className="menu-item">
              <a href="javascript:void(0);" className="menu-link menu-toggle">
                <i className="menu-icon tf-icons bx bx-cube-alt"></i>
                <div data-i18n="Misc">Nurse</div>
              </a>
              <ul className="menu-sub">
                <li className="menu-item">
                  <a href="pages-misc-error.html" className="menu-link">
                    <div data-i18n="Error">Error</div>
                  </a>
                </li>
                <li className="menu-item">
                  <a href="pages-misc-under-maintenance.html" className="menu-link">
                    <div data-i18n="Under Maintenance">Under Maintenance</div>
                  </a>
                </li>
              </ul>
            </li>
            <li className="menu-item">
              <a href="javascript:void(0)" className="menu-link menu-toggle">
                <i className="menu-icon tf-icons bx bx-box"></i>
                <div data-i18n="User interface">Pharmacist</div>
              </a>
              <ul className="menu-sub">
                <li className="menu-item">
                  <a href="ui-accordion.html" className="menu-link">
                    <div data-i18n="Accordion">Accordion</div>
                  </a>
                </li>
                <li className="menu-item">
                  <a href="ui-alerts.html" className="menu-link">
                    <div data-i18n="Alerts">Alerts</div>
                  </a>
                </li>
                <li className="menu-item">
                  <a href="ui-badges.html" className="menu-link">
                    <div data-i18n="Badges">Badges</div>
                  </a>
                </li>
                <li className="menu-item">
                  <a href="ui-buttons.html" className="menu-link">
                    <div data-i18n="Buttons">Buttons</div>
                  </a>
                </li>
                <li className="menu-item">
                  <a href="ui-carousel.html" className="menu-link">
                    <div data-i18n="Carousel">Carousel</div>
                  </a>
                </li>
                <li className="menu-item">
                  <a href="ui-collapse.html" className="menu-link">
                    <div data-i18n="Collapse">Collapse</div>
                  </a>
                </li>
                <li className="menu-item">
                  <a href="ui-dropdowns.html" className="menu-link">
                    <div data-i18n="Dropdowns">Dropdowns</div>
                  </a>
                </li>
                <li className="menu-item">
                  <a href="ui-footer.html" className="menu-link">
                    <div data-i18n="Footer">Footer</div>
                  </a>
                </li>
                <li className="menu-item">
                  <a href="ui-list-groups.html" className="menu-link">
                    <div data-i18n="List Groups">List groups</div>
                  </a>
                </li>
                <li className="menu-item">
                  <a href="ui-modals.html" className="menu-link">
                    <div data-i18n="Modals">Modals</div>
                  </a>
                </li>
                <li className="menu-item">
                  <a href="ui-navbar.html" className="menu-link">
                    <div data-i18n="Navbar">Navbar</div>
                  </a>
                </li>
                <li className="menu-item">
                  <a href="ui-offcanvas.html" className="menu-link">
                    <div data-i18n="Offcanvas">Offcanvas</div>
                  </a>
                </li>
                <li className="menu-item">
                  <a href="ui-pagination-breadcrumbs.html" className="menu-link">
                    <div data-i18n="Pagination &amp; Breadcrumbs">Pagination &amp; Breadcrumbs</div>
                  </a>
                </li>
                <li className="menu-item">
                  <a href="ui-progress.html" className="menu-link">
                    <div data-i18n="Progress">Progress</div>
                  </a>
                </li>
                <li className="menu-item">
                  <a href="ui-spinners.html" className="menu-link">
                    <div data-i18n="Spinners">Spinners</div>
                  </a>
                </li>
                <li className="menu-item">
                  <a href="ui-tabs-pills.html" className="menu-link">
                    <div data-i18n="Tabs &amp; Pills">Tabs &amp; Pills</div>
                  </a>
                </li>
                <li className="menu-item">
                  <a href="ui-toasts.html" className="menu-link">
                    <div data-i18n="Toasts">Toasts</div>
                  </a>
                </li>
                <li className="menu-item">
                  <a href="ui-tooltips-popovers.html" className="menu-link">
                    <div data-i18n="Tooltips & Popovers">Tooltips &amp; popovers</div>
                  </a>
                </li>
                <li className="menu-item">
                  <a href="ui-typography.html" className="menu-link">
                    <div data-i18n="Typography">Typography</div>
                  </a>
                </li>
              </ul>
            </li>
            <li className="menu-header small text-uppercase"><span className="menu-header-text">Components</span></li>
            
            <li className="menu-item">
              <a href="cards-basic.html" className="menu-link">
                <i className="menu-icon tf-icons bx bx-collection"></i>
                <div data-i18n="Basic">Cards</div>
              </a>
            </li>
            <li className="menu-item">
              <a href="javascript:void(0)" className="menu-link menu-toggle">
                <i className="menu-icon tf-icons bx bx-box"></i>
                <div data-i18n="User interface">User interface</div>
              </a>
              <ul className="menu-sub">
                <li className="menu-item">
                  <a href="ui-accordion.html" className="menu-link">
                    <div data-i18n="Accordion">Accordion</div>
                  </a>
                </li>
                <li className="menu-item">
                  <a href="ui-alerts.html" className="menu-link">
                    <div data-i18n="Alerts">Alerts</div>
                  </a>
                </li>
                <li className="menu-item">
                  <a href="ui-badges.html" className="menu-link">
                    <div data-i18n="Badges">Badges</div>
                  </a>
                </li>
                <li className="menu-item">
                  <a href="ui-buttons.html" className="menu-link">
                    <div data-i18n="Buttons">Buttons</div>
                  </a>
                </li>
                <li className="menu-item">
                  <a href="ui-carousel.html" className="menu-link">
                    <div data-i18n="Carousel">Carousel</div>
                  </a>
                </li>
                <li className="menu-item">
                  <a href="ui-collapse.html" className="menu-link">
                    <div data-i18n="Collapse">Collapse</div>
                  </a>
                </li>
                <li className="menu-item">
                  <a href="ui-dropdowns.html" className="menu-link">
                    <div data-i18n="Dropdowns">Dropdowns</div>
                  </a>
                </li>
                <li className="menu-item">
                  <a href="ui-footer.html" className="menu-link">
                    <div data-i18n="Footer">Footer</div>
                  </a>
                </li>
                <li className="menu-item">
                  <a href="ui-list-groups.html" className="menu-link">
                    <div data-i18n="List Groups">List groups</div>
                  </a>
                </li>
                <li className="menu-item">
                  <a href="ui-modals.html" className="menu-link">
                    <div data-i18n="Modals">Modals</div>
                  </a>
                </li>
                <li className="menu-item">
                  <a href="ui-navbar.html" className="menu-link">
                    <div data-i18n="Navbar">Navbar</div>
                  </a>
                </li>
                <li className="menu-item">
                  <a href="ui-offcanvas.html" className="menu-link">
                    <div data-i18n="Offcanvas">Offcanvas</div>
                  </a>
                </li>
                <li className="menu-item">
                  <a href="ui-pagination-breadcrumbs.html" className="menu-link">
                    <div data-i18n="Pagination &amp; Breadcrumbs">Pagination &amp; Breadcrumbs</div>
                  </a>
                </li>
                <li className="menu-item">
                  <a href="ui-progress.html" className="menu-link">
                    <div data-i18n="Progress">Progress</div>
                  </a>
                </li>
                <li className="menu-item">
                  <a href="ui-spinners.html" className="menu-link">
                    <div data-i18n="Spinners">Spinners</div>
                  </a>
                </li>
                <li className="menu-item">
                  <a href="ui-tabs-pills.html" className="menu-link">
                    <div data-i18n="Tabs &amp; Pills">Tabs &amp; Pills</div>
                  </a>
                </li>
                <li className="menu-item">
                  <a href="ui-toasts.html" className="menu-link">
                    <div data-i18n="Toasts">Toasts</div>
                  </a>
                </li>
                <li className="menu-item">
                  <a href="ui-tooltips-popovers.html" className="menu-link">
                    <div data-i18n="Tooltips & Popovers">Tooltips &amp; popovers</div>
                  </a>
                </li>
                <li className="menu-item">
                  <a href="ui-typography.html" className="menu-link">
                    <div data-i18n="Typography">Typography</div>
                  </a>
                </li>
              </ul>
            </li>

            <li className="menu-item">
              <a href="javascript:void(0)" className="menu-link menu-toggle">
                <i className="menu-icon tf-icons bx bx-copy"></i>
                <div data-i18n="Extended UI">Extended UI</div>
              </a>
              <ul className="menu-sub">
                <li className="menu-item">
                  <a href="extended-ui-perfect-scrollbar.html" className="menu-link">
                    <div data-i18n="Perfect Scrollbar">Perfect scrollbar</div>
                  </a>
                </li>
                <li className="menu-item">
                  <a href="extended-ui-text-divider.html" className="menu-link">
                    <div data-i18n="Text Divider">Text Divider</div>
                  </a>
                </li>
              </ul>
            </li>

            <li className="menu-item">
              <a href="icons-boxicons.html" className="menu-link">
                <i className="menu-icon tf-icons bx bx-crown"></i>
                <div data-i18n="Boxicons">Boxicons</div>
              </a>
            </li>

            <li className="menu-header small text-uppercase"><span className="menu-header-text">Setting</span></li>
            
            <li className="menu-item">
              <a href="cards-basic.html" className="menu-link">
                <i className="menu-icon tf-icons bx bx-collection"></i>
                <div data-i18n="Basic">Password</div>
              </a>
            </li>
            <li className="menu-item">
              <a href="javascript:void(0)" className="menu-link menu-toggle">
                <i className="menu-icon tf-icons bx bx-box"></i>
                <div data-i18n="User interface">Logout</div>
              </a>
              <ul className="menu-sub">
                <li className="menu-item">
                  <a href="ui-accordion.html" className="menu-link">
                    <div data-i18n="Accordion">Accordion</div>
                  </a>
                </li>
                <li className="menu-item">
                  <a href="ui-alerts.html" className="menu-link">
                    <div data-i18n="Alerts">Alerts</div>
                  </a>
                </li>
                <li className="menu-item">
                  <a href="ui-badges.html" className="menu-link">
                    <div data-i18n="Badges">Badges</div>
                  </a>
                </li>
                <li className="menu-item">
                  <a href="ui-buttons.html" className="menu-link">
                    <div data-i18n="Buttons">Buttons</div>
                  </a>
                </li>
                <li className="menu-item">
                  <a href="ui-carousel.html" className="menu-link">
                    <div data-i18n="Carousel">Carousel</div>
                  </a>
                </li>
                <li className="menu-item">
                  <a href="ui-collapse.html" className="menu-link">
                    <div data-i18n="Collapse">Collapse</div>
                  </a>
                </li>
                <li className="menu-item">
                  <a href="ui-dropdowns.html" className="menu-link">
                    <div data-i18n="Dropdowns">Dropdowns</div>
                  </a>
                </li>
                <li className="menu-item">
                  <a href="ui-footer.html" className="menu-link">
                    <div data-i18n="Footer">Footer</div>
                  </a>
                </li>
                <li className="menu-item">
                  <a href="ui-list-groups.html" className="menu-link">
                    <div data-i18n="List Groups">List groups</div>
                  </a>
                </li>
                <li className="menu-item">
                  <a href="ui-modals.html" className="menu-link">
                    <div data-i18n="Modals">Modals</div>
                  </a>
                </li>
                <li className="menu-item">
                  <a href="ui-navbar.html" className="menu-link">
                    <div data-i18n="Navbar">Navbar</div>
                  </a>
                </li>
                <li className="menu-item">
                  <a href="ui-offcanvas.html" className="menu-link">
                    <div data-i18n="Offcanvas">Offcanvas</div>
                  </a>
                </li>
                <li className="menu-item">
                  <a href="ui-pagination-breadcrumbs.html" className="menu-link">
                    <div data-i18n="Pagination &amp; Breadcrumbs">Pagination &amp; Breadcrumbs</div>
                  </a>
                </li>
                <li className="menu-item">
                  <a href="ui-progress.html" className="menu-link">
                    <div data-i18n="Progress">Progress</div>
                  </a>
                </li>
                <li className="menu-item">
                  <a href="ui-spinners.html" className="menu-link">
                    <div data-i18n="Spinners">Spinners</div>
                  </a>
                </li>
                <li className="menu-item">
                  <a href="ui-tabs-pills.html" className="menu-link">
                    <div data-i18n="Tabs &amp; Pills">Tabs &amp; Pills</div>
                  </a>
                </li>
                <li className="menu-item">
                  <a href="ui-toasts.html" className="menu-link">
                    <div data-i18n="Toasts">Toasts</div>
                  </a>
                </li>
                <li className="menu-item">
                  <a href="ui-tooltips-popovers.html" className="menu-link">
                    <div data-i18n="Tooltips & Popovers">Tooltips &amp; popovers</div>
                  </a>
                </li>
                <li className="menu-item">
                  <a href="ui-typography.html" className="menu-link">
                    <div data-i18n="Typography">Typography</div>
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </aside>

        {/* Layout container */}
        <div className="layout-page">
          {/* Navbar */}
          <Navbar />
            {/* Content wrapper */}
            <div className="content-wrapper">
              {/* Content */}

              <Outlet />

              <Footer company={props.company} />

            <div className="content-backdrop fade"></div>
          </div>
        </div>
      </div>

      <div className="layout-overlay layout-menu-toggle"></div>
    </div>
        
        {/* <div className="page-wrap">
                <div className="app-sidebar colored">
                    <div className="sidebar-header" style={{background:"purple"}}>
                        <Link to="/dash" className="header-brand">
                            <div className="logo-img">
                               <img src={logo} className="header-brand-img" alt="lavalite" style={{width:"50px"}} /> 
                            </div>
                            <span className="text"> &nbsp; Beyond's</span>
                        </Link>
                        <button type="button" className="nav-toggle"><i data-toggle="expanded" className="ik ik-toggle-right toggle-icon"></i></button>
                        <button id="sidebarClose" className="nav-close"><i className="ik ik-x"></i></button>
                    </div>
                    
                    <div className="sidebar-content">
                        <div className="nav-container">
                            <nav id="main-menu-navigation" className="navigation-main">
                                <div className="nav-item active">
                                    <Link to="/dash"><i className="ik ik-bar-chart-2"></i><span>Dashboard</span></Link>
                                </div>
                                <div className="nav-lavel">Admin</div>
                                <div className="nav-item">
                                    <Link to="/add-patient"><i className="ik ik-user-plus"></i><span>Add Patients</span> </Link>
                                </div>
                                <div className="nav-item">
                                    <Link to="/manage-patients"><i className="fa fa-ambulance"></i><span>View Patients</span> </Link>
                                </div>

                                <div className="nav-lavel">Consultation</div>
                                <div className="nav-item">
                                    <Link to="/add-soapnotes"><i className="fa fa-stethoscope"></i><span>Add S.O.A.P. Note</span></Link>
                                </div>
                                <div className="nav-item">
                                    <Link to="/view-soapnotes"><i className="ik ik-file-text"></i><span>View S.O.A.P. Notes</span></Link>
                                </div>
                                <div className="nav-item">
                                    <Link to="/send-labtest-request"><i className="fa fa-syringe"></i><span>Send Lab-test Request</span></Link>
                                </div>
                                <div className="nav-item">
                                    <Link to="/soapnotes"><i className="ik ik-file-text"></i><span>View Lab-test Result</span></Link>
                                </div>
                                <div className="nav-item">
                                    <Link to="/lab-req-form-doctor"><i className="ik ik-watch"></i><span>View Triage Result</span></Link>
                                </div>
                                <div className="nav-item">
                                    <Link to="/lab-req-form-doctor"><i className="ik ik-edit"></i><span>Send Drug Request</span></Link>
                                </div>

                                <div className="nav-lavel">Laboratory</div>
                                <div className="nav-item">
                                    <Link to="/labtest-result"><i className="fa fa-flask"></i><span>Lab-test Result</span></Link>
                                </div>

                                <div className="nav-lavel">Nursing</div>
                                <div className="nav-item">
                                    <Link to="/nursing-triage"><i className="ik ik-activity"></i><span>Nursing Triage</span></Link>
                                </div>

                                <div className="nav-lavel">Pharmacy</div>
                                <div className="nav-item">
                                    <Link to="/dispensing"><i className="fa fa-cross"></i><span>Drug Dispensing</span></Link>
                                </div>

                                <div className="nav-lavel">More</div>
                                {user ? (
                                    <div className="nav-item">
                                        <button onClick={logoutUser} style={{ background:"transparent", border:"none", color:"white", fontSize:"14px", marginLeft:"14px", marginTop:"10px" }}>
                                        <i className="ik ik-lock" style={{ fontSize:"18px", marginLeft:"0px" }}></i><span> &nbsp; Logout</span></button>
                                    </div>
                                ) : (
                                    <div className="nav-item">
                                        <Link to="/login" className="sidebar-link">
                                            <i className="ik ik-lock"></i> Login
                                        </Link>
                                    </div>
                                )}
                                <br /><br />
                            </nav>
                        </div>
                    </div>
                </div>

                <div className="main-content" style={{ background:"#efddff"}}>
                    <div className="container-fluid">

                        <Outlet />
                    
                    </div>
                </div>

            <Footer />
        </div> */}
    {/* </div> */}
    </>
  )
}

export default Sidebar
