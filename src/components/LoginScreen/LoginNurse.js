import React,{useEffect, useState} from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import Button from "react-bootstrap/Button";
import { useHistory } from "react-router-dom";


const NURSES_URL = "http://localhost:3000/nurse"

const LoginNurse = ({session,setSession}) => {
    const [loginErrorMessage,setLoginErrorMessage] = useState('');
    const history = useHistory();
    const [nurses,setNurses] = useState([]);

    function getNurses(){
        fetch(NURSES_URL)
         .then(res => res.json())
         .then(data => setNurses(data))
    }
    useEffect(()=>{
        getNurses();
    },[])
    console.log(nurses)

  return (
    <div>
      <Formik
        initialValues={{ email: "", password: "" }}
        s
        onSubmit={async(values,actions) => {
          console.log(values);
          actions.setSubmitting(true)
          let found = false;
        
          for(let i = 0 ; i < nurses.length;i++){
              if(nurses[i].email === values.email && nurses[i].password === values.password){
                const userLogin = nurses[i]
                found = true;
                setSession({
                    ...session,
                    user:userLogin,
                    isLoggedIn:true,
                })
                history.push("/home")
                break;
              }
          }
          if(!found){
            setLoginErrorMessage('Login fail: wrong email or password')
          }
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            Email
            <br />
            <Field type="email" name="email" />
            <ErrorMessage name="email" component="div"/>
            <br />
            Password
            <br />
            <Field type="password" name="password" />
            <ErrorMessage name="password" component="div"/>
            <br />
            {loginErrorMessage}
            <Button type="submit" disabled={isSubmitting}>
              Login
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default LoginNurse;
