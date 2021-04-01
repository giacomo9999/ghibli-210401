import { useState } from "react";

const Character = (props) => {
  const [detailsVisible, setDetailsVisible] = useState(false);
  return (
    <div className="container-inner">
      <h3>{props.name}</h3>
      {detailsVisible ? (
        <div>
          <h4>{props.gender}</h4>
          <h4>{props.age}</h4>
          <h4>{props.eyeColor}</h4>
          <h4>{props.hairColor}</h4>
        </div>
      ) : null}
      <button
        onClick={() => {
          setDetailsVisible(!detailsVisible);
          console.log(detailsVisible);
        }}
      >
        {detailsVisible ? "Hide Details" : "Show Details"}
      </button>
    </div>
  );
};

export default Character;
