import React from "react";
import { auth } from "../../firebase.config";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import Loading from "../TaskManager/Loading";
import AuthForm from "./AuthForm";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const SignIn = () => {
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const googleSignIn = async () => {
    await signInWithPopup(auth, new GoogleAuthProvider());
  };
  if (error) {
    return (
      <div className="flex flex-col w-3/4 xl:w-1/4 md:w-2/4 self-center">
        <AuthForm type="signIn" authMethod={signInWithEmailAndPassword} />
        <p className="text-red-400">Error: {error.message}</p>
        <button
          onClick={googleSignIn}
          className="w-fit self-center p-3 rounded-lg my-4 border-2 border-blue-200 flex items-center gap-3 justify-center hover:bg-blue-300 hover:text-white"
        >
          <img
            alt="google"
            width={35}
            src="https://img.icons8.com/color/48/000000/google-logo.png"
          />
          <span className="font-semibold">Sign In With Google</span>
        </button>
      </div>
    );
  }
  if (loading) {
    return (
      <div className="self-center">
        <Loading color="blue" />
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
    <div className="flex flex-col w-3/4 xl:w-1/4 md:w-2/4 self-center">
      <AuthForm type="signIn" authMethod={signInWithEmailAndPassword} />
      <button
        onClick={googleSignIn}
        className="w-fit self-center p-3 rounded-lg my-4 border-2 border-blue-200 flex items-center gap-3 justify-center hover:bg-blue-300 hover:text-white"
      >
        <img
          alt="google"
          width={35}
          src="https://img.icons8.com/color/48/000000/google-logo.png"
        />
        <span className="font-semibold">Sign In With Google</span>
      </button>
    </div>
  );
};

export default SignIn;
