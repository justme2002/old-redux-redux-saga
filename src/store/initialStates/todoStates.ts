import { ITodo } from "../../interfaces/ITodo";

export interface ITodoState {
  todos: ITodo[],
  todo: ITodo,
  limit: number,
  id: number
}

export const todoState: ITodoState = {
  todos: [] as ITodo[],
  todo: {} as ITodo,
  limit: 0,
  id: 0
}