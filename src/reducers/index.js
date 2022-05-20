export const reducer = (state, action) => {
  switch (action.type) {
    case "SET_FAVORITE":
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      };
    case "DELETE_FAVORITE":
      return {
        ...state,
        favorites: state.favorites.filter((item) => item.id !== action.payload),
      };
    case "SET_SECTION":
      return {
        ...state,
        currentSection: action.payload,
      };
    default:
      return state;
  }
};
