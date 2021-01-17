import React from 'react';

const PatientProfile = ({patient}) =>{

    console.log(patient)
    return (
        <div>
            <h1>{patient.firstName}</h1>
            <h1>PatientProfile page</h1>
        </div>
    )
}

export default PatientProfile;