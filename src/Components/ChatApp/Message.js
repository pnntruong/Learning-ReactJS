import React from "react";
import { auth } from "../../firebase.config";

const Message = ({ message }) => {
  const { uid, text, email, avatar, displayName } = message;
  const isThisUser = uid === auth.currentUser.uid;
  return (
    <>
      {isThisUser ? (
        <div className="my-1 flex gap-3 items-center justify-end">
          <div className=" border-2 border-blue-300 p-2 rounded-3xl rounded-tr-none">
            <div className="mx-2">{text.split("<br/>").map((line, index) => <p key={index}>{line}</p>)}</div>
          </div>
          <div className="flex-shrink-0 flex-grow-0 basis-10 self-start">
            <img
              className="rounded-full"
              src={avatar}
              alt={email}
              title={displayName}
            />
          </div>
        </div>
      ) : (
        <div className="my-1 flex gap-3 items-center justify-start">
          <div className="flex-shrink-0 flex-grow-0 basis-10 self-start">
            <img
              className="rounded-full"
              src={avatar}
              alt={email}
              title={displayName}
            />
          </div>
          <div className=" border-2 border-blue-300 p-2 rounded-3xl rounded-tl-none">
            <div className="mx-2">{text.split("<br/>").map((line, index) => <p key={index}>{line}</p>)}</div>
          </div>
        </div>
      )}
    </>
  );
};

export default Message;
