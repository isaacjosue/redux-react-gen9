import React from "react";

const Loading = ({ message }) => (
  <>{message ? <div>{message}</div> : <div>Loading...</div>}</>
);

export default Loading;
