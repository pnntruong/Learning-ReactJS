import React from "react";
import { auth } from "../../firebase.config";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import Loading from "../TaskManager/Loading";
import AuthForm from "./AuthForm";
import { GoogleAuthProvider, signInWithPopup, signInAnonymously } from "firebase/auth";

const SignIn = () => {
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const anonymousSignIn = async () =>{
    try {
      await signInAnonymously(auth);
    } catch (err) {
      console.log(err);
    }
  };
  

  const googleSignIn = async () => {
    await signInWithPopup(auth, new GoogleAuthProvider());
  };

  if (loading) {
    return (
      <div className="self-center">
        <Loading color="blue" />
        <p>Login...</p>
      </div>
    );
  }

  if (user) {
    return (
      <div>
        <p>Signed In User: {user.email}</p>
      </div>
    );
  }
  return (
    <div className="flex flex-col justify-evenly w-3/4 xl:w-1/4 md:w-2/4 self-center">
      <AuthForm type="signIn" authMethod={signInWithEmailAndPassword} />
      {
        (error && <p className="text-red-400">Error: {error.message}</p>)
      }

      <div className="self-center w-3/4">
        <button
          onClick={googleSignIn}
          className="w-full  p-3 rounded-lg my-4 border-2 border-blue-200 flex items-center gap-3 justify-center hover:bg-blue-300 hover:text-white"
        >
          <img
            alt="google"
            width={35}
            src="https://img.icons8.com/color/48/000000/google-logo.png"
          />
          <span className="font-semibold">Sign In With Google</span>
        </button>
        <button
          onClick={anonymousSignIn}
          className="w-full p-3 rounded-lg my-4 border-2 border-gray-200 flex items-center gap-3 justify-center hover:bg-gray-300 hover:text-white"
        >
          <img
            alt="anonymous"
            width={35}
            src="https://img.icons8.com/external-vitaliy-gorbachev-lineal-vitaly-gorbachev/50/000000/external-anonymous-cryptocurrency-vitaliy-gorbachev-lineal-vitaly-gorbachev.png"
          />
          <span className="font-semibold">Sign In Anonymously</span>
        </button>
      </div>
    </div>
  );
};

export default SignIn;
