import Button from "react-bootstrap/Button";
import React from 'react';
import { useHistory } from "react-router-dom";

const Profile = ({session,setSession}) =>{
    const history=useHistory();
    const handleLogout = () =>{
        setSession({
            ...session,
            user:{},
            isLoggedIn:false
        })

        history.go(-(history.length-1))
    }

    return (
        <div>
            <h1>Profile page</h1>
            <Button onClick={handleLogout}>LOG OUT</Button>
        </div>
    )
}

export default Profile;