import React from "react";

const FlatIO = ({ scaleSrc, title, embedId }) => {
  const baseURL = "https://flat.io/embed/";
  const queryString = "?layout=page&appId=" + process.env.REACT_APP_FLATIO;
  const src = baseURL + embedId + queryString;
  return (
    <>
      {scaleSrc !== "" ? (
        <iframe
          src={src}
          title={title}
          height="500"
          width="95%"
          frameBorder="0"
          allowFullScreen
          allow="midi"
        ></iframe>
      ) : (
        <div id="placeholder"></div>
      )}
    </>
  );
};

export default FlatIO;
