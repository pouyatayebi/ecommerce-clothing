/* eslint-disable react/button-has-type */
import React from 'react';
import styles from './Button.module.scss';

interface ButtonProps extends React.HTMLProps<HTMLButtonElement> {
    type: 'submit' | 'button' | 'reset';
    children: React.ReactNode;
}

const Button = ({ type, children, ...props }: ButtonProps) => {
    return (
        <button type={type} className={styles.customButton} {...props}>
            {children}
        </button>
    );
};

export default Button;
