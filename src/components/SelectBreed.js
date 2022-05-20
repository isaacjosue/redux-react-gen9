import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { useFetchBreeds } from "../hooks/useFetchBreeds";
import Error from "./Error";
import Loading from "./Loading";
import BreedSelector from "../assets/styles/BreedSelector";
import InputLabel from "../assets/styles/InputLabel";
import SelectorInput from "../assets/styles/SelectorInput";

const SelectBreed = ({ currentBreed, onChange }) => {
  const { breeds, loading, error, fetchBreeds } = useFetchBreeds();

  useEffect(() => {
    fetchBreeds();
    // eslint-disable-next-line
  }, []);

  return (
    <BreedSelector id="select-breed">
      {loading ? (
        <Loading message={"Getting available breeds..."} />
      ) : error ? (
        <Error error={error} />
      ) : (
        <>
          <InputLabel htmlFor="breed-input">Breed</InputLabel>
          <SelectorInput
            id="breed-input"
            value={currentBreed}
            onChange={onChange}
          >
            <option value="">Random</option>
            {breeds.map((obj) => {
              const { id, name } = obj;
              return (
                <option key={id} value={id}>
                  {name}
                </option>
              );
            })}
          </SelectorInput>
        </>
      )}
    </BreedSelector>
  );
};

SelectBreed.propTypes = {
  currentBreed: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default SelectBreed;
