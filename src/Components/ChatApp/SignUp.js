import React from 'react';
import { auth } from '../../firebase.config';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import Loading from '../TaskManager/Loading';
import AuthForm from './AuthForm';

const SignIn = () => {
  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth);

  if (loading) {
    return (
      <div className="self-center flex flex-col items-center">
        <Loading color="blue" />
        <p>Creating account...</p>
      </div>
    );
  }
  if (user) {
    return (
      <div>
        <p>Registered User: {user.email}</p>
      </div>
    );
  }
  return (
    <div className='w-3/4 xl:w-1/4 md:w-2/4 self-center'>
      <AuthForm type="signUp" authMethod={createUserWithEmailAndPassword}/>
      {
        (error && <p className="text-red-400">Error: {error.message}</p>)
      }
    </div>

  );
};

export default SignIn;