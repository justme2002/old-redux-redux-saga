import { takeLatest, put, call, take, takeEvery } from 'redux-saga/effects'
import { FETCH_TODOS, GET_TODO, GET_TODO_ID, LIMIT_TODO } from '../../constants/actionType'
import { ITodo } from '../../interfaces/ITodo'
import { fetchLimitTodoAsync, fetchTodosAsync, getTodoAsync } from '../../services/todo'
import { ACTION_TYPE } from '../reducers/todoReducer'

export function* fetchTodos()
{
  const response: ITodo[] = yield fetchTodosAsync()
  return response
}

function delay(time: number) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, time)
  })
}

export function* getTodo(id: number)
{
  const response: ITodo = yield getTodoAsync(id)
  return response
}

export function* fetchLimitTodo(limit: number)
{ 
  const response: ITodo[] = yield fetchLimitTodoAsync(limit)
  return response
}

export function* watchGetTodoSaga(action: any)
{
  const response: ITodo = yield getTodo(action.payload.id)
  yield delay(2000)
  yield put({
    type: GET_TODO,
    payload: {
      todo: response
    }
  })
}

export function* watchFetchTodoSaga(action: { payload: { limit: number } })
{
  const response: ITodo[] = yield fetchLimitTodo(action.payload.limit)
  yield put({
    type: FETCH_TODOS,
    payload: {
      todos: response
    }
  })
}

export const todoSaga = [
  takeLatest(LIMIT_TODO as any, watchFetchTodoSaga),
  takeLatest(GET_TODO_ID, watchGetTodoSaga)
]