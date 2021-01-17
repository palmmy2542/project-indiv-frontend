import React from 'react';

const InfectionRisk = ({index,setChoosen}) =>{

    const handleClick = () =>{
        setChoosen(parseInt(index))
    }
    return (
        <div onClick={handleClick}>
            InfectionRisk
        </div>
    )
}

export default InfectionRisk;