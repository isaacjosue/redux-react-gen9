import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { useFetchDogs } from "../hooks/useFetchDogs";
import Dog from "./Dog";
import Loading from "./Loading";
import Error from "./Error";
import ItemList from "../assets/styles/ItemList";

const DogList = ({ breed }) => {
  const { dogs, loading, error, fetchDogs } = useFetchDogs();

  useEffect(() => {
    fetchDogs(breed);
    // eslint-disable-next-line
  }, [breed]);

  return (
    <ItemList id="dog-list">
      {loading ? (
        <Loading message={"Loading dogs..."} />
      ) : error ? (
        <Error error={error} />
      ) : (
        dogs.map((dog) => <Dog key={dog.id} data={dog} />)
      )}
    </ItemList>
  );
};

DogList.propTypes = {
  breed: PropTypes.string,
};

export default DogList;
