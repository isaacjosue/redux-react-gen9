import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setSection } from "../actions";
import Dog from "./Dog";
import ItemList from "../assets/styles/ItemList"

const FavoritesList = () => {
  const favorites = useSelector((state) => state.favorites);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setSection("Favorites"));
    // eslint-disable-next-line
  }, []);

  return (
    <ItemList id="favorites-list">
      {favorites.length ? (
        favorites.map((dog) => <Dog key={dog.id} data={dog} />)
      ) : (
        <h2>Hmm, there doesn't appear to be anything here.</h2>
      )}
    </ItemList>
  );
};

export default FavoritesList;
