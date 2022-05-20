import styled from "styled-components";

const Item = styled.div`
  display: block;
  min-width: 200px;
  width: 28%;
  margin: 3px 0px;
  & img {
    width: 100%;
  }
  & span {
    display: flex;
    align-items: center;
  }
`;

export default Item;
