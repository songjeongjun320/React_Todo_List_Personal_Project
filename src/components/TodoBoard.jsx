import React from "react";
import TodoItem from "./TodoItem";

// get the list from the props, so We send todoList to TodoBoard through props
function TodoBoard(props) {
  console.log(props)
  return (
    <div>
      <h1>Todo List</h1>
      {/* So this function show the props items, It is javascript {} */}
      {props.todoList.map((item) => (
        <TodoItem item={item} />
      ))}
      
    </div>
  );
}

export default TodoBoard;
