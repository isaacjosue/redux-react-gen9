import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";
import { setFavorite, deleteFavorite } from "../actions";
import { StarIcon, StarBorderIcon } from "../assets/StarIcon";
import { setLocalStorage } from "../utils/localStorageUtil";
import Item from "../assets/styles/Item";

const Dog = ({ data }) => {
  const [inFavorites, setInFavorites] = useState(false);
  const favorites = useSelector((state) => state.favorites);
  const dispatch = useDispatch();

  useEffect(() => {
    setInFavorites(favorites.find((dog) => dog.id === data.id));
    setLocalStorage("favorites", favorites);
    // eslint-disable-next-line
  }, [favorites]);

  const handleSetFavorite = () => dispatch(setFavorite(data));
  const handleDeleteFavorite = () => dispatch(deleteFavorite(data.id));

  return (
    <Item>
      <img alt={`dog-${data.id}`} src={data.url} />
        {inFavorites ? (
          <span onClick={handleDeleteFavorite}>
            <StarIcon className="icon" />
            Unfavorite
          </span>
        ) : (
          <span onClick={handleSetFavorite}>
            <StarBorderIcon className="icon" />
            Favorite
          </span>
        )}
    </Item>
  );
};

Dog.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  }).isRequired,
};

export default Dog;
