import React from "react";

export default function Todo(props) {
  console.log("props", props);
  return (
    <div
      style={{
        border: "2px solid black",
        padding: "15px",
        display: "inline-block",
        margin: "20px",
      }}
    >
      <h1>{props.todoItem}</h1>
    </div>
  );
}
