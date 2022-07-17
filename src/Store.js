const { createStore, applyMiddleware } = require("redux");
const { createThunk } = require("redux-thunks");
const { default: todosReducer } = require("./Services/Reducers/Reducer");

const store = createStore(todosReducer, applyMiddleware(createThunk));

export default store;