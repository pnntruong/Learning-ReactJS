import React, { useState, useEffect, useRef } from "react";
import { db } from "../../firebase.config";
import {
  onSnapshot,
  collection,
  limit,
  query,
  orderBy,
} from "firebase/firestore";

import Message from "./Message";
import CurrentUser from "./CurrentUser";
import Loading from "../TaskManager/Loading";
import SendMessage from "./SendMessage";

const ChatRoom = () => {
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const scroll = useRef();

  const MessagesRef = collection(db, "chat");

  useEffect(() => {
    setIsLoading(true);
    const unsub = onSnapshot(
      query(MessagesRef, orderBy("createAt","desc"),limit(20)),
      (snapshot) => {
        setMessages(
          snapshot.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id,
          })).reverse()
        );
        setIsLoading(false);
        scroll.current.scrollIntoView();
      }
    );
  }, []);

  return (
    <div className="container h-screen flex flex-wrap">
      {isLoading ? (
      <div className="m-auto">
        <Loading color="blue" />
      </div>
    ) : (
        <div className="max-h-screen container flex flex-col items-center p-4 border-2 rounded-lg border-blue-400">
          <div className="flex justify-between items-center border-b-2 w-full border-blue-300 pb-2 mb-1">
            <h1 className="text-blue-400 text-3xl font-bold">
              {/* Logo */}
              REALTIME CHAT
            </h1>
            <CurrentUser />
          </div>
          <div className="mt-auto w-full h-full overflow-y-scroll scroll-smooth">
            {messages.map((message) => (
              <Message key={message.id} message={message} />
            ))}
            <div ref={scroll}></div>
          </div>
          <SendMessage scroll={scroll}/>
        </div>
      )}
    </div>
  );
};

export default ChatRoom;
