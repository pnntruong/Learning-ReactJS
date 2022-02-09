import React, { useState } from "react";

const AuthForm = ({type, authMethod}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="border-2 rounded-lg flex flex-col border-blue-300 p-3">
      <h1 className="text-3xl font-bold self-center mb-4 text-blue-500">{type === "signIn" ? "Login" : "Sign Up"}</h1>
      <label className="text-sm px-2 -mb-px">Email</label>
      <input
        type="email"
        value={email}
        className="p-2 my-2 border-2 rounded-lg border-blue-400"
        onChange={(e) => setEmail(e.target.value)}
      />
      <label className="text-sm px-2 -mb-px">Password</label>
      <input
        type="password"
        value={password}
        className="p-2 my-2 border-2 rounded-lg border-blue-400"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        className="w-fit self-center px-4 py-2 my-2 border-2 rounded-lg border-blue-400 font-semibold hover:bg-blue-400 hover:text-white"
        onClick={() => authMethod(email, password)}
      >
        {type === "signIn" ? "Login" : "Sign Up"}
      </button>
    </div>
  );
};

export default AuthForm;
