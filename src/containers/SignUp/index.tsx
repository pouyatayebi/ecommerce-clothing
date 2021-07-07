import React from 'react';
import { useHistory } from 'react-router-dom';
import { useForm, SubmitHandler } from 'react-hook-form';
import styles from './SignUp.module.scss';

import FormInput from '../../components/FormInput';
import Button from '../../components/Button';

import { auth, db } from '../../firebase/firebase';

interface SignUpFormData {
    email: string;
    password: string;
    confirm: string;
}

const SignUp = () => {
    const { register, handleSubmit } = useForm<SignUpFormData>();

    const history = useHistory();
    const onSubmit: SubmitHandler<SignUpFormData> = (data) => {
        const { email, password, confirm } = data;
        if (password === confirm) {
            auth.createUserWithEmailAndPassword(email, password).then(() => {
                db.collection('users').add({
                    email,
                    password,
                });
                history.push('/');
            });
        }
    };

    // const signUpWithEmaillAndPassword = () => {
    //     if (password !== confirm)
    //         SetError('Plaese make sure your passwors math.');
    //     if (error !== '') SetError('');
    //     setRegistering(true);
    //     auth.createUserWithEmailAndPassword(email, password)
    //         .then(() => {
    //             history.push('/');
    //         })
    //         .catch(() => {
    //             SetError('please enter strong password');
    //             setRegistering(false);
    //         });
    // };

    return (
        <div className={styles.signUp}>
            <h2 className={styles.title}>I do not have a account</h2>
            <span>Sign up with your email and password</span>
            <form
                className={styles.signUpForm}
                onSubmit={handleSubmit(onSubmit)}
            >
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
                <FormInput
                    type="password"
                    label="Confirm Password"
                    {...register('confirm', { required: true })}
                />

                <Button type="submit">submit</Button>
            </form>
        </div>
    );
};

export default SignUp;
