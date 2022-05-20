import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSection } from "../actions";
import StyledHeader from "../assets/styles/StyledHeader";
import StyledLink from "../assets/styles/StyledLink";
import HeaderLinks from "../assets/styles/HeaderLinks";

const Header = () => {
  const currentSection = useSelector((state) => state.currentSection);
  const dispatch = useDispatch();

  const handleSetSection = (section) => {
    dispatch(setSection(section));
  };

  return (
    <StyledHeader>
      <StyledLink onClick={() => handleSetSection("Home")} to="/">
        <img alt="placeholder" src="" />
      </StyledLink>
      <HeaderLinks>
        <li>
          <StyledLink
            onClick={() => handleSetSection("Home")}
            active={currentSection === "Home"}
            to="/"
          >
            Homepage
          </StyledLink>
        </li>
        <li>
          <StyledLink
            onClick={() => handleSetSection("Favorites")}
            active={currentSection === "Favorites"}
            to="/favorites"
          >
            Favorites
          </StyledLink>
        </li>
      </HeaderLinks>
    </StyledHeader>
  );
};

export default Header;
