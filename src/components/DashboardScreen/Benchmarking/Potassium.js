import React from 'react';

const Potassium = ({index,setChoosen}) =>{

    const handleClick = () =>{
        setChoosen(parseInt(index))
    }
    return (
        <div onClick={handleClick}>
            Potassium
        </div>
    )
}

export default Potassium;