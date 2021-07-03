import React from 'react';
import styles from './FormInput.module.scss';

interface FormInputProps {
  type: 'email' | 'password';
  label?: string | null;
}

const FormInput = React.forwardRef(
  ({ type, label, ...props }: FormInputProps, ref) => {
    const randId = `_${Math.random()}`;

    return (
      <div className={styles.group}>
        {label ? (
          <label className={styles.formInputLabel} htmlFor={randId}>
            {label}
          </label>
        ) : null}
        <input
          className={styles.formInput}
          id={randId}
          type={type}
          {...props}
        />
      </div>
    );
  },
);

FormInput.defaultProps = {
  label: null,
};

export default FormInput;
