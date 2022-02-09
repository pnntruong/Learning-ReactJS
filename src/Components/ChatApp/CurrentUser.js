import React, { useState } from "react";
import { auth } from "../../firebase.config";
import UserSetting from "./UserSetting";

const CurrentUser = () => {
  const [showUserSetting, setShowUserSetting] = useState(false);

  const user = auth.currentUser;
  const buttonClasses = "hover:opacity-80";

  return (
    <div className="relative flex justify-end border-b-2 w-full border-blue-300 pb-2 mb-1">
      <div className="flex items-center gap-3">
        <p className="text-lg">{user.displayName || user.email}</p>
        <img className="rounded-full" alt={user.displayName} width={50} src={user.photoURL} />
        <button
          className={buttonClasses}
          onClick={() => {
            setShowUserSetting(!showUserSetting);
          }}
        >
          <img
            alt="Setting"
            width={25}
            src="https://img.icons8.com/external-xnimrodx-lineal-gradient-xnimrodx/64/000000/external-setting-organization-xnimrodx-lineal-gradient-xnimrodx.png"
          />
        </button>
        <button className={buttonClasses} onClick={() => auth.signOut()}>
        <img 
          alt="logout"
          width={25}
          src="https://img.icons8.com/external-kmg-design-flat-kmg-design/32/000000/external-log-out-user-interface-kmg-design-flat-kmg-design.png"/>
        </button>
      </div>
      {showUserSetting && (
        <UserSetting isShow={showUserSetting} setIsShow={setShowUserSetting} />
      )}
    </div>
  );
};

export default CurrentUser;
