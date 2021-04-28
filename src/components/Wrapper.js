import React from "react";


function Wrapper(props) {
  return (
    <div className="container mx-auto px-10 max-w-6xl">
        {props.children}
    </div>
  );
}

export default Wrapper;