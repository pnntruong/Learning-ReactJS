import React from "react";

const Task = ({
  done,
  title,
  description,
  icon,
  time,
  id,
  updateTaskList,
  deleteTask,
}) => {
  return (
    <div className="flex items-center my-2 flex-1">
      <button
        className={` mx-2 w-4 h-4 border-black border-2 ${
          done && "bg-green-100 flex flex-center items-center text-sm"
        }`}
        onClick={() => updateTaskList(id, { done: !done })}
      >
        {done ? "✔️" : ""}
      </button>
      <div
        className={`${
          done ? "bg-orange-200" : "bg-gray-50"
        } w-full shadow-lg rounded-2xl p-3 flex gap-2 ${
          description ? "items-start" : "items-center"
        }`}
      >
        <div className="border bg-white w-8 p-1 rounded-lg border-none">
          <img
            width={30}
            src={
              icon ||
              "https://img.icons8.com/external-icongeek26-linear-colour-icongeek26/64/000000/external-alarm-fitness-icongeek26-linear-colour-icongeek26.png"
            }
            alt="task-icon"
          />
        </div>
        <div>
          <h1 className="text-base">{title}</h1>
          {description && <p className="mt-2">{description}</p>}
        </div>
        <div className="ml-auto">{time}</div>
      </div>
      <button
        onClick={() => deleteTask(id)}
        className="text-white rounded-lg hover:opacity-90 ml-1"
      >
        <img width={50} src="https://img.icons8.com/plasticine/100/000000/filled-trash.png" />
      </button>
    </div>
  );
};

export default Task;
