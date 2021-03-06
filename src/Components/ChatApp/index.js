import React, { useState } from "react";
import { auth } from "../../firebase.config";
import { useAuthState } from "react-firebase-hooks/auth";
import Loading from "../TaskManager/Loading";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import ChatRoom from "./ChatRoom";
import { updateProfile } from "firebase/auth";

const ChatApp = () => {
  const [user, loading, error] = useAuthState(auth);
  const [isSignIn, setIsSignIn] = useState(true);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen w-screen">
        <Loading color="blue" />
      </div>
    );
  }
  if (error) {
    return (
      <div>
        <p>Error: {error}</p>
      </div>
    );
  }
  if (user) {
    if (user.isAnonymous) {
      updateProfile(auth.currentUser, {
        photoURL:
          "https://img.icons8.com/external-vitaliy-gorbachev-lineal-vitaly-gorbachev/50/000000/external-anonymous-cryptocurrency-vitaliy-gorbachev-lineal-vitaly-gorbachev.png",
        displayName: 'Anonymous',
      });
    } else {
      !user.photoURL &&
      updateProfile(auth.currentUser, {
        photoURL:
          "https://cdn0.iconfinder.com/data/icons/communication-line-10/24/account_profile_user_contact_person_avatar_placeholder-512.png",
        displayName: user.displayName,
      });
    }
    return <ChatRoom />;
  }
  return (
    <div className="flex flex-col h-screen w-full justify-center">
      <h1 className="text-5xl text-center text-blue-500 font-serif font-bold -mt-16 mb-6">REALTIME<br/>CHAT APP</h1>
      {isSignIn ? <SignIn /> : <SignUp />}
      <button className="absolute bottom-0 p-2 border-2 border-blue-400 rounded-lg self-center my-4 hover:bg-blue-400 hover:text-white" onClick={() => setIsSignIn(!isSignIn)}>
        {!isSignIn ? "Login here" : "Sign up here"}
      </button>
    </div>
  );
};

export default ChatApp;
