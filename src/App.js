import { BrowserRouter, Routes, Route } from "react-router-dom";
// import PrivateRoutes from './utils/PrivateRoutes';
// import { AuthProvider } from './context/AuthContext';
// import LoginPage from './pages/LoginPage';
// import RegisterPage from './pages/RegisterPage';
import Sidebar from "./components/admin/Sidebar";
import Dashboard from "./pages/admin/Dashboard";
import Dash from "./pages/admin/Dash";
import AddPatient from "./pages/admin/patients/AddPatient";
import ManagePatients from "./pages/admin/patients/ManagePatients";
// import AddSoapNotes from "./pages/admin/doctor/AddSoapNotes";
// import SendLabtest_Request from "./pages/admin/doctor/SendLabtest_Request";
// import ViewSoapNotes from "./pages/admin/doctor/ViewSoapNotes";
// import LabTest_Result from "./pages/admin/laboratory/LabTest_Result";
// import Triage from "./pages/admin/nursing/Triage";
// import Dispensing from "./pages/admin/pharmacy/Dispensing";
// import Settings from "./pages/admin/other/Settings";

function App() {
  const host_url = "http://localhost:8000/api";
  // const host_url = "http://localhost:8000/api";
  // const host_url = "https://beyondhealthcare.com.ng/api 
  
  const company = "Beyond's Healthcare and Fertility Center"

  return (
    <>
    <BrowserRouter>
      {/* <AuthProvider> */}
        <Routes>
          {/* <Route exact path="/" element={<LoginPage />} />
          <Route path="/login" element={<LoginPage company={company} />} />
          <Route path="/register" element={<RegisterPage />} /> */}

          <Route path="*" element={<main style={{ padding:"1rem", textAlign:"center", minHeight:"100vh", background:"#edf" }}>
            <br />
            <h1 style={{ fontSize:"50px"}}><b>Oops! Error 404! </b></h1>
            <h3>Sorry, you landed on a page that does not exist. </h3>
            <h3>The URL of this page seems to be broken or invalid. </h3><br />
            <h5>Please check again or <a href="/" style={{color:"blue", textDecoration:"underline"}}>Return to Homepage</a></h5></main>}
          />
          
          {/* <Route element={<PrivateRoutes />}> */}
            {/* <Route path="/dashboard" element={<Dashboard />} />   */}
            {/* <Route path="/" element={<Dashboard />} />  will be login page */}
            <Route element={<Sidebar company={company} />}> 
              {/* Patient */}
              <Route path="/" element={<Dash host_url={host_url} />} /> 
              <Route path="/add-patient" element={<AddPatient host_url={host_url} company={company} />} /> 
              <Route path="/manage-patients" element={<ManagePatients host_url={host_url} company={company} />} />
              {/* <Route path="/patient-profile" element={<PatientProfile />} />  */}

              {/* Consultation */}
              {/* <Route path="/add-soapnotes" element={<AddSoapNotes host_url={host_url} />} /> 
              <Route path="/view-soapnotes" element={<ViewSoapNotes host_url={host_url} />} /> 
              <Route path="/send-labtest-request" element={<SendLabtest_Request host_url={host_url} />} />  */}

              {/* Laboratory */}
              {/* <Route path="/labtest-result" element={<LabTest_Result host_url={host_url} />} />  */}

              {/* Nursing */}
              {/* <Route path="/nursing-triage" element={<Triage host_url={host_url} />} /> 
              <Route path="/dispensing" element={<Dispensing host_url={host_url} />} />
              <Route path="/settings" element={<Settings host_url={host_url} />} /> */} 
            </Route>
          {/* </Route> */}
        </Routes>
      {/* </AuthProvider> */}
    </BrowserRouter>
    </>
  );
}
export default App;