import React, { Component } from 'react';


class TodoList extends Component {
  componentDidUpdate() {
    this.props.inputElement.current.focus();
  }


render() {
    const { addItem, inputElement, currentItem, handleInput } = this.props;


return (
  <div className="todo-list-main">
    <h1>Todo List</h1>
    <form className="todo-form" onSubmit={addItem}>
      <input
        type="text"
        className="todo-input"
        placeholder="Enter task"
        ref={inputElement}
        value={currentItem.text}
        onChange={handleInput}
      />
      <button type="submit" className="todo-button">
        Add Task
      </button>
    </form>
  </div>
);

}
}


export default TodoList;