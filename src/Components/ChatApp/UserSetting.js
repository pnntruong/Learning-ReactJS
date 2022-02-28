import React, { useEffect, useState } from "react";
import { auth } from "../../firebase.config";
import { updateProfile } from "firebase/auth";
import Loading from "../TaskManager/Loading";

const UserSetting = ({ isShow, setIsShow }) => {
  const [user, setUser] = useState(auth.currentUser);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    setUser(auth.currentUser);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    await updateProfile(auth.currentUser, {
      displayName: user.displayName,
      photoURL: user.photoURL || auth.currentUser.photoURL,
    });
    setSubmitting(false);
    setIsShow((prev) => !prev);
  };

  const inputClasses = "p-2 mb-2 border-2 border-blue-300 rounded-lg";

  return (
    <div className="absolute z-10 top-0 bg-white border-blue-300 w-full self-center rounded-lg border-2 flex flex-col">
      <div className="flex justify-between p-2 items-center border-b-2">
        <h1 className="font-lg font-semibold">Profile Setting</h1>
        <button
          className="text-bold rounded-full w-8 h-8 border-red-400 border-2 text-red-400 hover:bg-red-400 hover:text-white"
          onClick={() => {
            setIsShow(!isShow);
          }}
        >
          x
        </button>
      </div>
      <div className="flex items-center flex-col">
        <img
          className="rounded-full my-4 w-24 h-24 shadow-lg"
          src={user.photoURL}
          alt={user.email}
        />
        <p className="font-semibold text-lg">
          {user.displayName || user.email}
        </p>
      </div>
      <form onSubmit={handleSubmit} className="flex flex-col p-2">
        <label htmlFor="user-name">User Name</label>
        <input
          type="text"
          placeholder={user.displayName || user.email}
          className={inputClasses}
          onChange={(e) => {
            setUser({ ...user, displayName: e.target.value });
          }}
        />
        <label htmlFor="user-name">Avatar</label>
        <input
          type="text"
          placeholder="Avatar URL"
          className={inputClasses}
          onChange={(e) => {
            setUser({ ...user, photoURL: e.target.value });
          }}
        />

        {submitting ? (
          <Loading className="self-center" color="blue"/>
        ) : (
          <button
            type="submit"
            className="w-fit self-center py-2 px-4 rounded-lg border-2 border-blue-400 hover:bg-blue-400 hover:text-white"
          >
            Submit
          </button>
        )}
      </form>
    </div>
  );
};

export default UserSetting;
