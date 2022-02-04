import React from "react";
import Task from "./Task";


const TaskList = ({taskList, updateTaskList, deleteTask}) => {

  return (
    <div className="overflow-y-scroll">
      {taskList
        .map((task) => (
          <Task
            key={task.id}
            task={task}
            updateTaskList = {updateTaskList}
            deleteTask={deleteTask}
          />
        ))}
    </div>
  );
};

export default TaskList;
