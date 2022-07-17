import axios from "axios";

const { GET_TODOS_REQUEST } = require("../Constants/Constants")

const initialTodos = {
    todos: [],
    loading: false,
    error: null
}

export const getAllTodos = () => async (dispatch) => {
    dispatch({ type: GET_TODOS_REQUEST});
    const res = await axios.get('https://jsonplaceholder.typicode.com/todos')
}