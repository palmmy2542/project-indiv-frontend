import React, { useState,useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Login from "./components/LoginScreen/Login";
import Profile from "./components/Profile";
import FirstPage from "./components/FirstPage";
import Dashboard from "./components/DashboardScreen/Dashboard";
import PatientProfile from "./components/PatientProfile";

const PATIENTS_URL = "http://localhost:3000/patients"


function App() {
  const [session, setSession] = useState({
    user: {},
    isLoggedIn: false,
  });
  const [patients,setPatients] = useState([]);
  function getPatients() {
    fetch(PATIENTS_URL)
      .then((res) => res.json())
      .then((data) => setPatients(data));
  }

  useEffect(() => {
    getPatients();
  }, []);
  const patientProfile = patients.map(patient =>
  (<Route path={`/home/dashboard/patient/:${patient.id}`}>
    <PatientProfile patient={patient}/>
  </Route>))
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">FirstPage</Link>
          </li>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/home/dashboard">Dashboard</Link>
          </li>
        </ul>
      </nav>
      <div>
        <Switch>
          <Route path="/about">
            <About session={session} setSession={setSession} />
          </Route>
          <Route path="/home/profile">
            <Profile session={session} setSession={setSession} />
          </Route>
          {patientProfile}
          {console.log(patients)}
        
          <Route path="/home">
            <Home session={session} setSession={setSession} />
          </Route>
          <Route path="/login">
            <Login session={session} setSession={setSession} />
          </Route>
          <Route path="/">
            <FirstPage session={session} setSession={setSession} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
