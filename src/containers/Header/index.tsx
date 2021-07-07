import React from 'react';
import { Link } from 'react-router-dom';
import firebase from 'firebase/app';
import styles from './Header.module.scss';
import { ReactComponent as Logo } from '../../assets/4.1 crown.svg';
import { auth } from '../../firebase/firebase';
import Button from '../../components/Button';

interface HeaderProps {
    user: firebase.User | null;
}

const Header = ({ user }: HeaderProps) => {
    return (
        <div className={styles.header}>
            <Link className={styles.logoContainer} to="/">
                <Logo className={styles.logo} />
            </Link>
            <div className={styles.options}>
                <Link className={styles.option} to="/shop">
                    SHOP
                </Link>
                <Link className={styles.option} to="/contact">
                    CONTACT
                </Link>
                {!user ? (
                    <Link className={styles.option} to="/sign-in-up">
                        Sign In/Up
                    </Link>
                ) : (
                    <Button type="submit" onClick={() => auth.signOut()}>
                        Sign Out
                    </Button>
                )}
            </div>
        </div>
    );
};

export default Header;
