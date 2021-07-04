import React from 'react';
import styles from './Button.module.scss';

interface ButtonProps {
  condition?: boolean;
  children: React.ReactNode;
  onClick?:
    | ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void)
    | undefined;
}

const Button = ({ condition, children, ...props }: ButtonProps) => {
  return (
    <button
      type={condition ? 'button' : 'submit'}
      className={styles.customButton}
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
};

export default Button;
