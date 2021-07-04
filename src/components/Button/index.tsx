import React from 'react';
import styles from './Button.module.scss';
import { auth } from '../../firebase/firebase.utils';

interface ButtonProps {
  condition?: boolean;
  children: React.ReactNode;
  isGoogleSignIn?: boolean;
  onClick?:
    | ((event?: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void)
    | undefined;
}

const Button = ({
  condition,
  children,
  isGoogleSignIn,
  ...props
}: ButtonProps) => {
  return (
    <button
      type={condition ? 'button' : 'submit'}
      className={`${isGoogleSignIn ? styles.googleSignIn : ''} ${
        styles.customButton
      }`}
      {...props}
    >
      {children}
    </button>
  );
};

Button.defaultProps = {
  condition: false,
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  },
  isGoogleSignIn: false,
};

export default Button;
