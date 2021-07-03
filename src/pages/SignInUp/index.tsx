import React from 'react';
import styles from './SignInUp.module.scss';
import SignIn from '../../containers/SignIn';
import SignUp from '../../containers/SignUp';

const SignInUp = () => {
  return (
    <div className={styles.signInUp}>
      <p>sign in /up</p>
      <SignIn />
      <SignUp />
    </div>
  );
};

export default SignInUp;
