const { GET_TODOS_REQUEST, GET_TODOS_SUCCESS, GET_TODOS_FAILURE } = require("../Constants/Constants")

const initialTodos = {
    todos: [],
    loading: false,
    error: null
}

const todosReducer = (state = initialTodos, action) => {
    switch (action.type) {
        case GET_TODOS_REQUEST:
            return {
                ...state,
                loading: true
            }
        case GET_TODOS_SUCCESS:
            return {
                ...state,
                todos: action.payload,
                loading: false
            }
        case GET_TODOS_FAILURE:
            return {
                ...state,
                error: action.payload,
                loading: false
            }
        default:
            return state;
    }
}

export default todosReducer;