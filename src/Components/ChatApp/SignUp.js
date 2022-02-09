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

  if (error) {
    return (
      <div className='w-3/4 xl:w-1/4 md:w-2/4 self-center'>
        <AuthForm type="signUp" authMethod={createUserWithEmailAndPassword}/>
        <p className='text-red-400'>Error: {error.message}</p>
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
        <p>Registered User: {user.email}</p>
      </div>
    );
  }
  return (
    <div className='w-3/4 xl:w-1/4 md:w-2/4 self-center'>
      <AuthForm type="signUp" authMethod={createUserWithEmailAndPassword}/>
    </div>

  );
};

export default SignIn;