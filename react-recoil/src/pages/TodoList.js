import { filteredTodoListState } from "../store/todo";
import { useRecoilValue } from "recoil";

import TodoListStats from "../components/TodoListStats";
import TodoListFilters from "../components/TodolistFilters";
import TodoItemCreator from "../components/TodoItemCreator";
import TodoItem from "../components/TodoItem";

function TodoList() {
  // changed from todoListState to filteredTodoListState
  const todoList = useRecoilValue(filteredTodoListState);

  return (
    <>
      <TodoListStats />
      <TodoListFilters />
      <TodoItemCreator />

      {todoList.map((todoItem) => (
        <TodoItem item={todoItem} key={todoItem.id} />
      ))}
    </>
  );
}

export default TodoList;
