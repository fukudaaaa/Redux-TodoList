import { connect } from "react-redux";
import List from "../components/List";

const mapStateToProps = state => {
  return { todos: state };
};

const mapDispatchToProps = dispatch => {
  return {
    deleteTodo: id => {
      dispatch({ type: "DELETE_TODO", payload: { id: id } });
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(List);
