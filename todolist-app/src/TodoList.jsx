import React from "react";

const TodoList = (props) => {
  return (
    <>
      <div className="todo_style">
        <li>{props.task}</li>
      </div>
    </>
  );
};

export default TodoList;
