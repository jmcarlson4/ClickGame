import React from "react";

function CounterBody(props) {
    return (
      <div className="card-body">
        <p className="card-text">Click Count: {props.count}</p>
  </div>
    )
};

  export default CounterBody;