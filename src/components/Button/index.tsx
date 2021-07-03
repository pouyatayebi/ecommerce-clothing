import React from 'react';
import styles from './Button.module.scss';

interface ButtonProps {
  condition?: boolean;
  children: React.ReactNode;
  onClick: () => void;
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
};

export default Button;
