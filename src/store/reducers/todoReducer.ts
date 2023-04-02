import { AnyAction, Reducer } from "@reduxjs/toolkit";
import { FETCH_TODOS, GET_TODO, GET_TODO_ID, LIMIT_TODO } from "../../constants/actionType";
import { ITodo } from "../../interfaces/ITodo";
import { todoState } from "../initialStates/todoStates";

export type ACTION_TYPE = | {
  type: "FETCH_TODOS",
  payload: {
    todos: ITodo[]
  }
} | {
    type: "LIMIT_TODO",
    payload: {
      limit: number
    }
  } | {
    type: "GET_TODO",
    payload: {
      todo: ITodo
    }
  } | {
    type: "GET_TODO_ID",
    payload: {
      id: number
    }
  }


const todoReducer = (state: typeof todoState = todoState, action: ACTION_TYPE) => {
  switch(action.type)
  {
    case FETCH_TODOS:
      return {
        ...state,
        todos: action.payload.todos,
      }
    case LIMIT_TODO:
      return {
        ...state,
        limit: action.payload.limit
      }

    // case GET_TODO_ID:
    //   return {
    //     ...state,
    //     id: action.payload.id
    //   }

    case GET_TODO:
      return {
        ...state,
        todo: action.payload.todo
      }
    default:
      return state  
  }
}

export { todoReducer }