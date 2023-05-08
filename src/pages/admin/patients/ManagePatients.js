import React, { useState, useEffect } from 'react';
// import AuthContext from '../../../context/AuthContext';
// import Basic_RightBar from '../Basic_RightBar';
import PatientsList from '../../../components/admin/patients/PatientsList';

const ManagePatients = (props, {host_url}) => {
  let [patients, setPatients] = useState([])

  useEffect(() => {
    getPatients()
  }, [])

  let getPatients = async() => {
    console.log("A B C")
    console.log(props.host_url)
    
    let response = await fetch(`${props.host_url}/patients/`, {
      method: 'GET',
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Headers": "*",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "*"
        // 'Authorization': 'Bearer '+ String(authTokens.access)
      }
    })
    let data = await response.json()

    if (response.status === 200){
      setPatients(data)
      console.log(response.status)
    } else if (response.status === 'Unauthorized'){
    //   logoutUser()
    }
  }
  // let [patients, setPatients] = useState([])
  // // let {authTokens, logoutUser} = useContext(AuthContext)
  // // let {user} = useContext(AuthContext);

  // useEffect(() => {
  //   getPatients()
  // }, [])

  // let getPatients = async() => {
  //   let response = await fetch(`${host_url}/patients/`, {
  //     method: 'GET',
  //     headers: {
  //       'Content-Type': 'application/json',
  //       // 'Authorization': 'Bearer '+ String(authTokens.access)
  //     }
  //   })
  //   let data = await response.json()

  //   if (response.status === 200){
  //     setPatients(data)
  //   } else if (response.status === 'Unauthorized'){
  //     // logoutUser()
  //   }
  // }
  
  return (
    <>
      <PatientsList patients={patients} getPatients={getPatients} company={props.company} />
    </>
  )
}

export default ManagePatients
