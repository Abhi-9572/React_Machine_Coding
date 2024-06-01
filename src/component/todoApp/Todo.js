import React, { useState } from "react";
import "./Todo.css";

function Todo() {
  const initialItem = JSON.parse(localStorage.getItem("todoItem")) || [];
  const [items, setItems] = useState(initialItem);
  const [item, setItem] = useState("");

  const handleAdd = () => {
    const newItem = [...items, item];
    setItems(newItem);
    setItem("");
    localStorage.setItem("todoItem", JSON.stringify(newItem));
  };

  const handleDelete = (index) => {
    const filteredItem = items?.filter((item, i) => index != i);
    setItems(filteredItem);
    localStorage.setItem("todoItem", JSON.stringify(filteredItem));
  };

  console.log({ items });

  return (
    <>
      <h2>TODO APP</h2>
      <h3>Enter Your Item</h3>
      <div>
        <input value={item} onChange={(e) => setItem(e?.target?.value)} />
        <button onClick={handleAdd}>Add</button>
      </div>
      {items?.map((singleItem, index) => {
        return (
          <div key={index} className="__todo_list">
            <div>{singleItem}</div>
            <button onClick={() => handleDelete(index)}>delete</button>
          </div>
        );
      })}
    </>
  );
}

export default Todo;
