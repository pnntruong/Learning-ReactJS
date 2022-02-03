import React, { useRef, useState } from "react";

const AddTaskModel = ({ isShow, setIsShow, addTask }) => {
  const [task, setTask] = useState({});
  const [showMessage, setShowMessage] = useState(false);
  const titleRef = useRef();

  const handleAddTask = (e)=> {
    e.preventDefault();
    if (task.title) addTask(task)
    else {
      console.log('Task title is required');
      setShowMessage(true);
      titleRef.current.focus()
      return
    }
    setIsShow(false);
  }

  const inputClasses = "border-2 p-2 border-orange-200 rounded-lg my-1";
  return (
    <div 
      className="fixed inset-0 bg-white flex flex-col justify-center bg-opacity-80">
      <div className="flex flex-col p-1 justify-center border-orange-300 border-4 rounded-lg left-0 bg-white bg-opacity-90 sm:w-2/4 sm:self-center">
        <div className="flex items-center justify-between px-3 text-xl text-orange-500">
          <h1>New Task</h1>
          <button
            onClick={() => setIsShow(!isShow)}
            className="self-end my-3 border-2 border-red-300 rounded-full w-10 h-10 text-xl flex justify-center items-center text-red-500 hover:bg-red-500 hover:text-white"
          >
            x
          </button>
        </div>
        <form className="flex flex-col">
          <div className="flex flex-col justify-center p-1">
            <input
              type="text"
              className={inputClasses}
              placeholder="Job title"
              onChange={(e) => setTask({ ...task, title: e.target.value })}
              ref={titleRef}
            />
            {showMessage && <p className="text-red-500">Task title is required!</p>}
            <input
              type="text"
              className={inputClasses}
              placeholder="Description"
              onChange={(e) =>
                setTask({ ...task, description: e.target.value })
              }
            />
            <input
              type="text"
              className={inputClasses}
              placeholder="Time"
              onChange={(e) => setTask({ ...task, time: e.target.value })}
            />
          </div>
          <button
            onClick={handleAddTask}
            className="self-center my-3 border-2 font-lg w-14 h-14 rounded-full bg-orange-300 text-white hover:opacity-90">
            <span className="text-2xl">+</span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddTaskModel;
