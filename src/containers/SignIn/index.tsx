import React, { useContext } from 'react';
// import { useHistory } from 'react-router-dom';
import { useForm, SubmitHandler } from 'react-hook-form';
import styles from './SignIn.module.scss';

import FormInput from '../../components/FormInput';
import Button from '../../components/Button';

import { AuthContext } from '../../context/AuthContext';

import { auth, signInWithGoogle } from '../../firebase/firebase';

interface InputFormData {
    email: string;
    password: string;
}

const SignIn = () => {
    const { register, handleSubmit } = useForm<InputFormData>();
    const user = useContext(AuthContext);

    // const history = useHistory();
    const onSubmit: SubmitHandler<InputFormData> = (data) => {
        const { email, password } = data;
        auth.signInWithEmailAndPassword(email, password).then(() => {
            // history.push('/');
        });
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

                <FormInput
                    type="password"
                    label="Password"
                    {...register('password', { required: true })}
                />
                <div className={styles.buttons}>
                    <Button type="submit">sign in</Button>
                    <Button
                        type="button"
                        onClick={() => {
                            signInWithGoogle();
                            // console.log('google sign in');
                        }}
                    >
                        sign in with Google
                    </Button>
                </div>
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
