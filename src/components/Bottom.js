import React,{useState} from 'react';

const Bottom = () =>{
    const [id,setId] = useState();
    const handleOnChange =(e)=>{
        setId(e.target.value)
    }
    const handleOnClick = () =>{

    }
    return (
        <div>
            <h1>Bottom page</h1>
            <p>PATIENT DETAIL</p>
            ENTER ID <input onChange={handleOnChange} placeholder="Please enter patients id"/>
            <button type="submit" onClick={handleOnClick}>Search</button>
            
        </div>
    )
}

export default Bottom;