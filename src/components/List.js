import React from "react";

class List extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { todos } = this.props;
    const list = todos.map(todo => {
      return (
        <li key={todo.id}>
          #{todo.id}
          &nbsp;
          {todo.item}
          <button onClick={() => this.deleteTodo(todo.id)}>delete</button>
        </li>
      );
    });
    return <ul>{list}</ul>;
  }

  deleteTodo = id => {
    const { deleteTodo } = this.props;
    deleteTodo(id);
  };
}

export default List;
