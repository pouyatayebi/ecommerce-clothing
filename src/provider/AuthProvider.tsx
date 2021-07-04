import React, { useEffect, useState } from 'react';
import firebase from 'firebase/app';
import { AuthContext } from '../context/AuthContext';
import { auth } from '../firebase/firebase.utils';

interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({
  children,
}: AuthProviderProps) => {
  const [user, setUser] = useState<firebase.User | null>(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((firebaseUser) => {
      setUser(firebaseUser);
    });

    return unsubscribe;
  }, []);
  // console.log('user is: ', user);
  // const email = user?.email;
  // console.log('user', email);

  return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
};
