import React, { useEffect, useRef, useState } from "react";
import { db, auth } from "../../firebase.config";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import Loading from "../TaskManager/Loading";

const SendMessage = ({ scroll }) => {
  const [message, setMessage] = useState("");
  const [textareaHeight, setTextareaHeight] = useState("10px");
  const [isSending, setIsSending] = useState(false);
  const textareaRef = useRef();

  const messageForm = {
    uid: auth.currentUser.uid,
    email: auth.currentUser.email,
    avatar: auth.currentUser.photoURL,
    createAt: serverTimestamp(),
    displayName: auth.currentUser.displayName,
  };

  const send = (e) => {
    e?.preventDefault();
    if (!message) return;
    setIsSending(true);
    addDoc(collection(db, "chat"), { ...messageForm, text: message.split(/\r?\n/).join("<br/>") });
    setTextareaHeight("10px");
    setMessage("");
    scroll.current.scrollIntoView();
    setIsSending(false);
  };

  const handleChangeTextarea = (e) => {
    setTextareaHeight("10px");
    setMessage(e.target.value);
  };

  const handleEnter = (e) => {
    if (e.keyCode === 13 && !e.shiftKey) {
      send(e);
    }
  }

  useEffect(() => {
    setTextareaHeight(`${textareaRef?.current?.scrollHeight}px`);
    return () => {
      setTextareaHeight("10px");
    };
  }, [message]);

  return (
    <div className="w-full">
      <form
        onSubmit={send}
        className="flex rounded-full gap-2 bg-blue-50 relative"
      >
        <textarea
          ref={textareaRef}
          style={{ height: textareaHeight }}
          value={message}
          onChange={handleChangeTextarea}
          onKeyDown={handleEnter}
          type="text"
          className="py-3 px-4 rounded-3xl bg-blue-100 flex-1 focus:outline-none resize-none max-h-28"
        />
        {isSending ? (
          <Loading color="blue" className="w-6 h-6 self-center mr-4"/>
        ) : (
          <button type="submit" className="hover:opacity-80 mr-4">
            <img
              alt="send"
              width={25}
              src="https://img.icons8.com/fluency/48/000000/filled-sent.png"
            />
          </button>
        )}
      </form>
    </div>
  );
};

export default SendMessage;
