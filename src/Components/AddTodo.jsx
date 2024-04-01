import React from "react";

const AddTodo = ({ setOptimistic, addTodo }) => {
  const formAction = async formData => {
    const task = {
      task: formData.get("todo"),
      completed: false,
    };
    setOptimistic(prev => [...prev, { ...task, sending: true }]);
    await addTodo({
      ...task,
      id: Math.random().toString(36).substr(2, 9) + Date.now(),
    });
  };
  return (
    <form action={formAction} className="flex gap-2">
      <input
        type="text"
        className="h-12 w-80 text-black text-lg rounded-2xl px-4  focus:border-blue-500 focus:outline-none"
        name="todo"
      />
      <button
        type="submit"
        className="h-12 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-1 px-4 focus:outline-none focus:shadow-outline rounded-2xl"
      >
        Post
      </button>
    </form>
  );
};

export default AddTodo;
