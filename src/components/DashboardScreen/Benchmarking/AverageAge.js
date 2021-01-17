import React from 'react';

const AverageAge = ({index,setChoosen}) =>{

    const handleClick = () =>{
        setChoosen(parseInt(index))
    }

    return (
        <div onClick={handleClick}>
            AverageAge
        </div>
    )
}

export default AverageAge;