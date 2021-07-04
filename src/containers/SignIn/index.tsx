import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import styles from './SignIn.module.scss';
import { AuthContext } from '../../context/AuthContext';
import { auth, signInWithGoogle } from '../../firebase/firebase.utils';

import FormInput from '../../components/FormInput';
import Button from '../../components/Button';

interface InputFormData {
  email: string;
  password: string;
}

const SignIn = () => {
  // const { register, handleSubmit } = useForm<InputFormData>();
  const { register } = useForm<InputFormData>();
  const user = useContext(AuthContext);

  // const onSubmit = (data: InputFormData) => {
  //   console.log(data);
  // };
  return (
    <div className={styles.signIn}>
      <h2 className={styles.title}>I already have an account</h2>
      <span>Sign in with your email and password</span>
      {/* <form onSubmit={handleSubmit(onSubmit)}> */}
      <form>
        <FormInput
          type="email"
          label="Email"
          {...register('email', { required: true })}
        />

        <FormInput
          type="password"
          label="Password"
          {...register('password', { required: true })}
        />

        <Button>sign in</Button>
        <Button condition onClick={signInWithGoogle}>
          sign in with google
        </Button>
      </form>
      {
        user ? (
          <p>welcome {user.email}</p>
        ) : (
          <p>no ueser login</p>
        ) /* just for debigging,will remove later' */
      }
    </div>
  );
};

export default SignIn;
