import React, { useState, useEffect } from "react";
import { PieChart } from "react-minimal-pie-chart";

const PATIENTS_URL = "http://localhost:3000/patients";

const PatientSummary = () => {
  const [patients, setPatients] = useState([]);
  const [wasFetch, setWasFetch] = useState(false);
  let malePatients = 0;
  let femalePatients = 0;
  let avgAge = 0;
  function getPatients() {
    fetch(PATIENTS_URL)
      .then((res) => res.json())
      .then((data) => {
        setPatients(data);
      });
  }

  if (patients.length != 0) {
    malePatients = patients
      .filter(({ gender }) => gender === "male")
    femalePatients = patients
      .filter(({ gender }) => gender === "female")
    avgAge = Math.floor((patients.map(({age})=>age).reduce((a,b)=>a+b,0))/(patients.length))
   
  }
  
  useEffect(() => {
    getPatients();
  }, []);
  return (
    <div>
      <h1>PatientSummary page</h1>
      <div>
        <p>Total Patient</p>
        <p>{patients.length}</p>
      </div>
      <div>
        <PieChart
          data={[
            { title: "male", value: malePatients.length, color: "#4FFFB0" },
            { title: "female", value: femalePatients.length, color: "#fd5c63" },
          ]}
          radius="30"
          viewBoxSize = "0"
        />
        ;
      </div>
      Average Age {avgAge} years old
    </div>
  );
};

export default PatientSummary;
