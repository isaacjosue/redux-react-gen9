import React, { useState } from "react";
import DogList from "./DogList";
import SelectBreed from "./SelectBreed";

const Dogs = () => {
  const [breed, setBreed] = useState("");

  const handleChange = (e) => {
    const currentBreed = e.target.value;
    setBreed(currentBreed);
  };

  return (
    <div id="dogs">
      <SelectBreed currentBreed={breed} onChange={handleChange}/>
      <DogList breed={breed} />
    </div>
  );
};

export default Dogs;
