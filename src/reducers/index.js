const initialState = [];

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [...state, { item: action.payload.item, id: action.payload.id }];
    case "DELETE_TODO":
      return state.filter(item => {
        return item.id !== action.payload.id;
      });
    default:
      return state;
  }
};

export default reducer;
