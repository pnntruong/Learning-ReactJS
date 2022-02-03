import React from "react";
import Task from "./Task";


const TaskList = ({taskList, updateTaskList, deleteTask}) => {


  return (
    <div className="overflow-y-scroll">
      {taskList
        .map((task) => (
          <Task
            key={task.id}
            id={task.id}
            done={task.done}
            title={task.title}
            time={task.time}
            description={task.description}
            updateTaskList = {updateTaskList}
            deleteTask={deleteTask}
          />
        ))}
    </div>
  );
};

export default TaskList;
