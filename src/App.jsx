import React, { useState } from "react";
import "./App.css";
import TodoBoard from "./components/TodoBoard";
import TodoItem from "./components/TodoItem";

//1. There is input field and a button.
//2. When the button is clicked, the input field value is displayed in the console.
//3. If you click item delete button, you can delete
export default function App() {
  const [inputValue, setInputValue] = useState("");
  const [todoList, setTodoList] = useState([]);
  const addItem = () => {
    console.log("im here!", inputValue);
    setTodoList([...todoList, inputValue]);
  };
  return (
    <main>
      <input
        value={inputValue}
        type="text"
        onChange={(event) => setInputValue(event.target.value)}
      />
      <button onClick={addItem}>추가</button>
      {/* From here send todoList to TodoBoard through props */}
      <TodoBoard todoList={todoList} />
    </main>
  );
}
