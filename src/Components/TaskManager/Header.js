import React, { useState } from "react";
import AddTaskModel from "./AddTaskModel";

const Header = ({ addTask }) => {
  const [showAddTaskModal, setShowAddTaskModal] = useState(false);

  const dateFormat = () => {
    const date = new Date();
    const weekDays = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    return `${weekDays[date.getDay()]} ${date.getDate()}`;
  };

  return (
    <div className="flex justify-between items-center mb-10">
      <div className="">
        <h1 className="text-3xl">Today's schedule</h1>
        <h2 className="text-3xl text-orange-300">{dateFormat()}</h2>
      </div>
      <div className="flex justify-center">
        <button
          onClick={() => setShowAddTaskModal(!showAddTaskModal)}
          className="border-2 font-lg w-14 h-14 rounded-full bg-orange-300 text-white hover:opacity-90"
        >
          <span className="text-2xl">+</span>
        </button>
      </div>
      {showAddTaskModal && <AddTaskModel addTask={addTask} isShow={showAddTaskModal} setIsShow={setShowAddTaskModal} />}
    </div>
  );
};

export default Header;
