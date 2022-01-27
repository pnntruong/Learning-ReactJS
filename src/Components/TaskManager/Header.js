import React from "react";

const Header = () => {
  return (
    <div className="flex justify-between items-center mb-10">
      <div className="">
        <h1 className="text-4xl">Today's schedule</h1>
        <h2 className="text-3xl text-orange-300">Thursday 11</h2>
      </div>
      <div className="flex justify-center">
        <button className="border-2 font-lg w-14 h-14 rounded-full bg-orange-300 text-white hover:opacity-90">
          <span className="text-2xl">+</span>
        </button>
      </div>
    </div>
  );
};

export default Header;
