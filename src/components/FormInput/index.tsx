import React from 'react';
import styles from './FormInput.module.scss';

interface FormInputProps {
    type: 'email' | 'password' | 'text';
    label?: string | null;
}

const FormInput = React.forwardRef(
    (
        { type, label, ...props }: FormInputProps,
        ref: React.LegacyRef<HTMLInputElement>,
    ) => {
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
                    ref={ref}
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
