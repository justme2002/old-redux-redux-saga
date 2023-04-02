import React from 'react'
import { connect } from 'react-redux'
import { GET_TODO_ID, LIMIT_TODO } from './constants/actionType'
import { AppDispatch, RootState } from './store'
import { limitTodoAction } from './store/actions/fetchTodosAction'
import { fetchTodos } from './store/sagas/todoSaga'
import { useDispatch } from 'react-redux'

const App = ({ todos, limit, todo }: ReturnType<typeof mapStateToProps>) => {
  console.log(todos)
  const dispatch = useDispatch<AppDispatch>()
  const changeLimit = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: GET_TODO_ID,
      payload: {
        id: Number(event.target.value)
      }
    })
    console.log(event.target.value)
  }

  return (
    <div>
      <div>
        <input type="text" name="" id="" onChange={changeLimit} />
      </div>
      {todo.title}
    </div>
  )
}

const mapStateToProps = (state: RootState) => {
  return {
    todos: state.todoReducer.todos,
    limit: state.todoReducer.limit,
    todo: state.todoReducer.todo
  }
}

export default connect(mapStateToProps, {})(App)