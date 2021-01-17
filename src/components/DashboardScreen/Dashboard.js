import React from 'react';

import PatientSummary from './PatientSummary'
import LabSummary from './LabSummary'
import Benchmarking from './Benchmarking/Benchmarking'
import Bottom from '../Bottom';


const Dashboard = () =>{
    return (
        <div>
            <p>PATIENT CHARACTERISTICS SUMMARY</p>
            <PatientSummary/>
            <p>LABORATORY SUMMARY</p>
            <LabSummary />
            <p>BENCHMARKING</p>
            <Benchmarking />
            <Bottom/>
        </div>
    )
}

export default Dashboard;