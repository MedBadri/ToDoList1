import React, { useState } from "react";

function TodoItems(props) {
  const [newText, setNewText] = useState("");

  const {
    entries,
    deleteItem,
    modifyItem
  } = props;

  const handleTextChange = (event) => {
    setNewText(event.target.value);
  };

  const handleModifyItem = (key) => {
    modifyItem(key, newText);
    setNewText("");
  };

  const createTasks = (item) => {
    return (
      <li key={item.key}>
        <input
          type="text"
          value={newText}
          onChange={handleTextChange}
          placeholder={item.text}
        />
        <button onClick={() => handleModifyItem(item.key)}>Modify</button>
        <button onClick={() => deleteItem(item.key)}>Delete</button>
      </li>
    );
  };

  const listItems = entries.map(createTasks);

  return <ul className="theList">{listItems}</ul>;
}

export default TodoItems;