import { FETCH_TODOS, LIMIT_TODO } from "../../constants/actionType"
import { ITodo } from "../../interfaces/ITodo"

const fetchTodosAction = (payload: { todos: ITodo[] }) => {
  return {
    type: FETCH_TODOS,
    payload
  }
}

const limitTodoAction = (payload: { limit: number }) => {
  return {
    type: LIMIT_TODO,
    payload
  }
}

export {
  fetchTodosAction,
  limitTodoAction
}