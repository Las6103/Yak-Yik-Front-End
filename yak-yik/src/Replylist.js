import React from "react";
import Reply from "./Reply";

function Replies(props) {
  return (
    <>
      <h2>Replies</h2>
      {props.data.map((data) => {
        return <Reply data={data} key={data._id} />;
      })}
    </>
  );
}

export default Replies;
