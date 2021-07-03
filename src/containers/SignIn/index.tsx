import React, { MouseEvent } from 'react';
import { useForm } from 'react-hook-form';
import styles from './SignIn.module.scss';
import FormInput from '../../components/FormInput';
import Button from '../../components/Button';

interface InputFormData {
  email: string;
  password: string;
}

const SignIn = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<InputFormData>();
  const onSubmit = (data: InputFormData) => {
    console.log(data);
  };
  return (
    <div className={styles.signIn}>
      <h2 className={styles.title}>I already have an account</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormInput
          type="email"
          label="Email"
          {...register('email', { required: true })}
        />
        {errors.email && <span>This field is required</span>}
        <FormInput
          type="password"
          label="Password"
          {...register('password', { required: true })}
        />
        {errors.password && <span>This field is required</span>}

        <Button onClick={() => reset()}>sign in</Button>
      </form>
    </div>
  );
};

export default SignIn;
