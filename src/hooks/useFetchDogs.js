import { useState, useEffect } from "react";
import { getDogs } from "../api";

export const useFetchDogs = () => {
  const [dogs, setDogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (dogs.length > 0) {
      setError(null);
      setLoading(false);
    }
  }, [dogs])

  async function fetchDogs(breed = "") {
    try {
      const result = await getDogs(breed);
      setDogs(result);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  }

  return { dogs, loading, error, fetchDogs };
};
