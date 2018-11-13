import { connect } from "react-redux";
import AddTodo from "../components/AddTodo";

let nextId = 0;

const mapDispatchToProps = dispatch => {
  return {
    addTodo: item => {
      dispatch({
        type: "ADD_TODO",
        payload: { item: item, id: nextId + 1 }
      });
      nextId += 1;
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(AddTodo);
