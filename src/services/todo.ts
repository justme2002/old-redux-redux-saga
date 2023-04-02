import axios from "axios"
import { ITodo } from "../interfaces/ITodo"

const url = "https://jsonplaceholder.typicode.com/todos"

const fetchTodosAsync = async () : Promise<ITodo[]> => {
  try {
    const response = await axios.get(url)
    return response.data as ITodo[]
  } catch (error) {
    console.log(error)
    return [] as ITodo[]
  }
}

const fetchLimitTodoAsync = async (limit: number) : Promise<ITodo[]> => {
  try {
    const response = await axios.get(`${url}?_limit=${limit}`)
    return response.data as ITodo[]
  } catch (error) {
    console.log(error)
    return [] as ITodo[]
  }
}

const getTodoAsync = async (id: number) : Promise<ITodo> => {
  try {
    const response = await axios.get(`${url}/${id}`)
    return response.data as ITodo
  } catch (error) {
    console.log(error)
    return {} as ITodo
  }
}

export {
  fetchTodosAsync,
  fetchLimitTodoAsync,
  getTodoAsync
}