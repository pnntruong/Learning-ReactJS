import React, { useEffect, useState } from "react";
import Task from "./Task";

const TaskList = () => {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((todosData) => {
        setTodos(todosData);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="overflow-y-scroll">
      {todos
        .filter((todo) => todo.userId === 1)
        .map((todo) => (
          <Task
            key={todo.id}
            done={todo.completed}
            title={todo.title}
            time="7:00 AM"
          />
        ))}
    </div>
  );
};

export default TaskList;
