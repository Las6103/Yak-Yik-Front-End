import React from "react";
import Reply from "./Reply";
import Row from "react-bootstrap/Row";

function Replies(props) {
  return (
    <>
      <Row>
        {props.data.map((data) => {
          return <Reply data={data} key={data._id} />;
        })}
      </Row>
    </>
  );
}

export default Replies;
