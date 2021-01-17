import React, { useState } from "react";
import Button from "react-bootstrap/Button";

import LoginNurse from './LoginNurse'



const Login = ({session,setSession}) => {
  const [formvisible, setFormVisible] = useState(true);
  

  const handleClickNurse = () => {
    setFormVisible(true);
  };

  return (
    <div>
      <h1>Login</h1>
      {formvisible ? 
      (<div>
        {formvisible && <LoginNurse session={session} setSession={setSession}/>}
        <Button onClick={()=>{
          setFormVisible(false);
        }}>Back</Button>
      </div>)
      :(
        <div>
          <p>As</p>
          <Button onClick={handleClickNurse}>NURSE</Button>
        </div>
      )}

     

    </div>
  );
};

export default Login;
