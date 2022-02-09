import React, { useState } from "react";
import { db, auth } from "../../firebase.config";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";

const SendMessage = ({scroll}) => {
  const [message, setMessage] = useState("");

  const messageForm = {
    uid: auth.currentUser.uid,
    email: auth.currentUser.email,
    avatar: auth.currentUser.photoURL,
    createAt: serverTimestamp(),
    displayName: auth.currentUser.displayName,
  };

  const send = async (e) => {
    e.preventDefault();
    if (!message) return;
    console.log({ messageForm });
    await addDoc(collection(db, "chat"), { ...messageForm, text: message });
    setMessage("");
    scroll.current.scrollIntoView();
  };

  return (
    <div className="w-full">
      <form onSubmit={send} className="flex rounded-full gap-2 bg-blue-50 relative">
        <input
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          type="text"
          className="py-3 px-4 rounded-full bg-blue-100 flex-1 focus:outline-none"
        />
        <button
          type="submit"
          className="hover:opacity-80 mr-4"
        >
          <img
            alt="send"
            width={25}
            src="https://img.icons8.com/fluency/48/000000/filled-sent.png"
          />
        </button>
      </form>
    </div>
  );
};

export default SendMessage;
