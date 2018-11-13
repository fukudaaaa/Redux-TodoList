import React from "react";

class AddTodo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      item: ""
    };
  }

  render() {
    return (
      <div>
        <h4>AddTodo</h4>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.item}
            onChange={this.handleChange}
          />
          <input type="submit" value="ADD TODO" />
        </form>
      </div>
    );
  }

  handleChange = event => {
    this.setState({ item: event.target.value });
  };

  handleSubmit = event => {
    const { addTodo } = this.props;
    event.preventDefault();
    addTodo(this.state.item);
    this.setState({ item: "" });
  };
}

export default AddTodo;
