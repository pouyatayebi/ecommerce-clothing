import React, { useEffect, useState } from 'react';
import firebase from 'firebase/app';
import { AuthContext } from '../context/AuthContext';
import { auth, db } from '../firebase/firebase';

interface AuthProviderProps {
    children: React.ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({
    children,
}: AuthProviderProps) => {
    const [user, setUser] = useState<firebase.User | null>(null);
    if (user) {
        const { email } = user;
        db.collection('users').add({
            email,
        });
    }

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((firebaseUser) => {
            setUser(firebaseUser);
        });

        return unsubscribe;
    }, []);

    return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
};
