import React, { Component } from "react";
import SimpleBar from "simplebar-react";
import "simplebar/dist/simplebar.min.css";
import FlipMove from "react-flip-move";

class TodoItems extends Component {
  constructor(props) {
    super(props);

    this.creatTodoItems = this.creatTodoItems.bind(this);
    this.deleteTodoItem = this.deleteTodoItem.bind(this);
    this.storeCheckedTodoItem = this.storeCheckedTodoItem.bind(this);
  }

  creatTodoItems(item, i) {
    return (
      <li className="c-todolist__item c-checkbox" key={item.key}>
        <input
          type="checkbox"
          id={"item-" + i}
          onChange={() => this.storeCheckedTodoItem(item)}
          ref={(el) => (this._checkboxInput = el)}
          checked={item.isChecked ? true : false}
        />
        <label htmlFor={"item-" + i}>{item.text}</label>
        <button
          className="c-todolist__delete"
          onClick={() => this.deleteTodoItem(item.key)}
        >
          <span className="c-todolist__delete__icon"></span>
          <span className="u-sr-only">Delete this todo item</span>
        </button>
      </li>
    );
  }

  deleteTodoItem(key) {
    this.props.deleteItem(key);
  }

  storeCheckedTodoItem(item) {
    this.props.storeCheckedItem(item);
  }

  render() {
    const todoEntries = this.props.entries;
    const listItems = todoEntries.map(this.creatTodoItems);

    return (
      <ul className="o-list-bare">
        <SimpleBar style={{ maxHeight: 239 }} forceVisible="y" autoHide={false}>
          {listItems}
        </SimpleBar>
      </ul>
    );
  }
}

export default TodoItems;
