import axios from "axios";

const { GET_TODOS_REQUEST, GET_TODOS_SUCCESS, GET_TODOS_FAILURE } = require("../Constants/Constants")

// const initialTodos = {
//     todos: [],
//     loading: false,
//     error: null
// }


export const getAllTodos = () => async (dispatch) => {
    dispatch({ type: GET_TODOS_REQUEST});
    try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/todos");
        dispatch({ type: GET_TODOS_SUCCESS, payload: response.data });
    }
    catch (error) {
        dispatch({ type: GET_TODOS_FAILURE, payload: error.message });
    }
};