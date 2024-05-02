import React from "react";

const LoadMoreButton = ({ onClick }) => {
  return (
    <div className="load-more-button">
      <button onClick={onClick}>Load More</button>
    </div>
  );
};

export default LoadMoreButton;
