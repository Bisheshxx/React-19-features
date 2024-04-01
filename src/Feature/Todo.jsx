import React from "react";
import AddTodo from "../Components/AddTodo";
import { useState, useOptimistic, useEffect, use } from "react";
const TodoList = React.lazy(() => import("../Components/TodoList"));
import { config } from "../../config";
import { Suspense } from "react";

const Todo = () => {
  let data = [];
  const [todo, setTodo] = useState(data);
  const [optimisticTodos, setOptimisticTodos] = useOptimistic(todo);
  const fetchTodo = async () => {
    fetch(`${config.url}/todo`)
      .then(res => res.json())
      .then(data => setTodo(data))
      .catch(error => {
        throw error;
      });
  };
  const addTodoService = async task => {
    return await fetch(`${config.url}/todo`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(task),
    })
      .then(res => res.json())
      .catch(error => {
        throw error;
      });
  };
  const postTodo = async task => {
    const data = await addTodoService(task);
    console.log(data, "response");
    setTodo(prev => [...prev, data]);
  };
  useEffect(() => {
    fetchTodo();
  }, []);
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-4xl my-2">Todo List</h1>
      <AddTodo setOptimistic={setOptimisticTodos} addTodo={postTodo} />
      <Suspense fallback={<>Loading..</>}>
        <TodoList todo={optimisticTodos} />
      </Suspense>
    </div>
  );
};

export default Todo;
