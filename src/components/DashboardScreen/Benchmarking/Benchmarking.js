import Button from "react-bootstrap/Button";
import React, { useState } from "react";
import AverageAge from "./AverageAge";
import InfectionRisk from "./InfectionRisk";
import Potassium from "./Potassium";

const Benchmarking = () => {
  const [choosen, setChoosen] = useState(0);
  const [listVisible, setListVisible] = useState(false);
  const handleShowCategory = () => {
    setListVisible(!listVisible);
  };

  const category = [
    {
      name: "AVERAGE AGE",
      component: <AverageAge index="0" setChoosen={setChoosen} />,
    },
    {
      name: "INFECTION RISK",
      component: <InfectionRisk index="1" setChoosen={setChoosen} />,
    },
    {
      name: "POTASSIUM",
      component: <Potassium index="2" setChoosen={setChoosen} />,
    },
  ];
  const categoryNameList = (
    <ul>
      {category.map(({ component }) => (
        <li>{component}</li>
      ))}
    </ul>
  );
  return (
    <div>
      <h1>Benchmarking page</h1>
      <Button onClick={handleShowCategory}>Change Category</Button>
      {listVisible && categoryNameList}
      {category[choosen].component}
    </div>
  );
};

export default Benchmarking;
