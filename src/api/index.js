import axios from "axios";

export const getDogs = async (breed = "") => {
  const url = `${process.env.REACT_APP_API_URL}?limit=10${
    breed && `&breed_id=${breed}`
  }`;
  const response = await axios.get(url, {
    headers: {
      "x-api-key": process.env.REACT_APP_API_KEY,
    },
  });
  const result = response.data;
  return result;
};

export const getBreeds = async () => {
  const url = process.env.REACT_APP_API_BREEDS;
  const response = await axios.get(url, {
    headers: {
      "x-api-key": process.env.REACT_APP_API_KEY,
    },
  });
  const result = response.data;
  return result;
};