import React, { useEffect,useState } from 'react';

import Button from "react-bootstrap/Button";
import { useHistory } from "react-router-dom";


const PATIENTS_URL = "http://localhost:3000/patients"


const Home = ({session , setSession}) =>{
    const [patients,setPatients] = useState([]);
    const history = useHistory();
    function getPatients(){
        fetch(PATIENTS_URL)
         .then(res => res.json())
         .then(data =>setPatients(data));
    }

    useEffect(()=>{
        getPatients();
    },[])

    return (
        <div>
            <h1>Home page</h1>
            <div>
                <p>{patients.length}</p><p>patients left today</p>
            </div>
            <div>
               <Button onClick={()=>history.push("/home/profile")}>Profile</Button>
            </div>
        </div>
    )
}

export default Home;