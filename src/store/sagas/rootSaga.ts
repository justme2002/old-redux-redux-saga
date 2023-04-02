import { all } from 'redux-saga/effects'
import { todoSaga, watchFetchTodoSaga } from './todoSaga'

export function* rootSaga() {
  yield all([
    // watchFetchTodoSaga()
    ...todoSaga
  ])
}